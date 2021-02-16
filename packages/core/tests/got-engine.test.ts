import test from 'ava'
import nock from 'nock'
import { EngineOptions, Response, ServiceKeyNotRegistered } from '../src'
import { DGKS_KEY_NAME, DGKS_PREFIX_URL } from '../src/constants'
import { GotEngine } from '../src/engines'
import { MockedServiceKeyNotRegisterResponse, MockedSuccessfulResponse } from './mock.response'

const options: EngineOptions = {
  id: 1,
  name: 'test',
  key: '',
}

test('Throws ServiceKeyNotRegistered after parsing XML successfully', async (t) => {
  const scope = nock(`${DGKS_PREFIX_URL}`)
    .get(`/${options.id}/${options.name}/`)
    .query({ [DGKS_KEY_NAME]: options.key })
    .reply(200, MockedServiceKeyNotRegisterResponse)

  const engine = new GotEngine(options)
  await t.throwsAsync(() => engine.get(''), { instanceOf: ServiceKeyNotRegistered })
  scope.done()
})

test('Successfully parses XML to JSON and then parses JSON to Response', async (t) => {
  const scope = nock(`${DGKS_PREFIX_URL}`)
    .get(`/${options.id}/${options.name}/`)
    .query({ [DGKS_KEY_NAME]: options.key })
    .reply(200, MockedSuccessfulResponse)

  const engine = new GotEngine(options)
  const response = await engine.get('')
  t.true(response instanceof Response)
  t.deepEqual(response.items[0], { successful: true })
  scope.done()
})

test('Successfully sends additional query parameters', async (t) => {
  const query = {
    query: true,
  }
  const scope = nock(`${DGKS_PREFIX_URL}`)
    .get(`/${options.id}/${options.name}/`)
    .query({ ...query, [DGKS_KEY_NAME]: options.key })
    .reply(200, MockedSuccessfulResponse)

  const engine = new GotEngine(options)
  const response = await engine.get('', query)
  t.true(response instanceof Response)
  t.deepEqual(response.items[0], { successful: true })
  t.true(scope.isDone())
})
