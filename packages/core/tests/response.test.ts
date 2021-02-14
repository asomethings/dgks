import test from 'ava'
import { Response, ResponseError, ResponseParseError, ServiceError, ServiceKeyNotRegistered } from '../src'

test('Throws ServiceKeyNotRegistered when SERVICE_KEY_IS_NOT_REGISTERED_ERROR is passed to Response', (t) => {
  const body = {
    OpenAPI_ServiceResponse: {
      cmmMsgHeader: {
        errMsg: 'SERVICE ERROR',
        returnAuthMsg: 'SERVICE_KEY_IS_NOT_REGISTERED_ERROR',
        returnReasonCode: '30',
      },
    },
  }
  t.throws(() => new Response(body), {
    instanceOf: ServiceKeyNotRegistered,
  })
})

test('Throws ServiceError when unregistered error was passed to Response', (t) => {
  const body = {
    OpenAPI_ServiceResponse: {
      cmmMsgHeader: {
        errMsg: 'SERVICE ERROR',
        returnAuthMsg: 'HTTP_ERROR',
        returnReasonCode: '04',
      },
    },
  }

  t.throws(() => new Response(body), {
    instanceOf: ServiceError,
    name: 'ServiceError',
    message: body.OpenAPI_ServiceResponse.cmmMsgHeader.returnAuthMsg,
  })
})

test('Throws ResponseParseError when empty object was passed to Response', (t) => {
  t.throws(() => new Response({}), {
    instanceOf: ResponseParseError,
    name: 'ResponseParseError',
    message: 'Key "response" not found in response',
  })
})

test('Throws ResponseParseError when empty header is passed to Response', (t) => {
  t.throws(
    () =>
      new Response({
        response: {
          header: {},
        },
      }),
    {
      instanceOf: ResponseParseError,
      name: 'ResponseParseError',
      message: 'Key "header" not found in response',
    },
  )
})

test('Throws ResponseError when wrong result code was passed to Response', (t) => {
  const body = {
    response: {
      header: {
        resultCode: '11',
        resultMsg: 'NO_MANDATORY_REQUEST_PARAMETERS_ERROR',
      },
    },
  }
  t.throws(() => new Response(body), {
    instanceOf: ResponseError,
    name: 'ResponseError',
    message: body.response.header.resultMsg,
    code: body.response.header.resultCode,
  })
})

test('Throws ResponseParseError when empty body was passed to Response', (t) => {
  const body = {
    response: {
      header: {
        resultCode: '00',
        resultMsg: 'NORMAL SERVICE',
      },
      body: {},
    },
  }
  t.throws(() => new Response(body), {
    instanceOf: ResponseParseError,
    name: 'ResponseParseError',
    message: 'Key "body" not found in response',
  })
})

test('Throws ResponseParseError when object which items is null or undefined passed to Response', (t) => {
  const body = {
    response: {
      header: {
        resultCode: '00',
        resultMsg: 'NORMAL SERVICE',
      },
      body: {
        items: null,
      },
    },
  }
  t.throws(() => new Response(body), {
    instanceOf: ResponseParseError,
    name: 'ResponseParseError',
    message: 'Key "body.items" not found in response',
  })

  const body2 = {
    response: {
      header: {
        resultCode: '00',
        resultMsg: 'NORMAL SERVICE',
      },
      body: {
        items: undefined,
      },
    },
  }
  t.throws(() => new Response(body2), {
    instanceOf: ResponseParseError,
    name: 'ResponseParseError',
    message: 'Key "body.items" not found in response',
  })
})

test('Transforms empty string to undefined', (t) => {
  const body = {
    response: {
      header: {
        resultCode: '00',
        resultMsg: 'NORMAL SERVICE',
      },
      body: {
        items: {
          item: [
            {
              empty: '',
              notEmpty: true,
            },
          ],
        },
        numOfRows: 1,
        pageNo: 1,
        totalCount: 1,
      },
    },
  }
  const response = new Response<{ empty?: string; notEmpty: boolean }>(body)
  t.deepEqual(response.items[0], { empty: undefined, notEmpty: true })
  t.is(response.numOfRows, body.response.body.numOfRows)
  t.is(response.page, body.response.body.pageNo)
  t.is(response.totalCount, body.response.body.totalCount)
})

test('Transforms string of spaces to undefined', (t) => {
  const body = {
    response: {
      header: {
        resultCode: '00',
        resultMsg: 'NORMAL SERVICE',
      },
      body: {
        items: {
          item: [
            {
              empty: '    ',
              notEmpty: true,
            },
          ],
        },
        numOfRows: 1,
        pageNo: 1,
        totalCount: 1,
      },
    },
  }
  const response = new Response<{ empty?: string; notEmpty: boolean }>(body)
  t.deepEqual(response.items[0], { empty: undefined, notEmpty: true })
  t.is(response.numOfRows, body.response.body.numOfRows)
  t.is(response.page, body.response.body.pageNo)
  t.is(response.totalCount, body.response.body.totalCount)
})

test('Transforms string items to empty array', (t) => {
  const body = {
    response: {
      header: {
        resultCode: '00',
        resultMsg: 'NORMAL SERVICE',
      },
      body: {
        items: '',
        numOfRows: 1,
        pageNo: 1,
        totalCount: 1,
      },
    },
  }
  const response = new Response(body)
  t.is(response.items.length, 0)
  t.is(response.numOfRows, body.response.body.numOfRows)
  t.is(response.page, body.response.body.pageNo)
  t.is(response.totalCount, body.response.body.totalCount)
})

test('Transforms items property object to array including the object', (t) => {
  const body = {
    response: {
      header: {
        resultCode: '00',
        resultMsg: 'NORMAL SERVICE',
      },
      body: {
        items: {
          item: {
            isObject: true,
          },
        },
        numOfRows: 1,
        pageNo: 1,
        totalCount: 1,
      },
    },
  }
  const response = new Response<{ isObject: boolean }>(body)
  t.is(response.items.length, 1)
  t.deepEqual(response.items, [body.response.body.items.item])
  t.is(response.numOfRows, body.response.body.numOfRows)
  t.is(response.page, body.response.body.pageNo)
  t.is(response.totalCount, body.response.body.totalCount)
})
