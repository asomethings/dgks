import * as xml from 'fast-xml-parser'
import { Got } from 'got'
import { EngineOptions } from '../interfaces'
import { Response } from '../response'
import { BaseEngine } from './base.engine'

export class GotEngine extends BaseEngine {
  protected readonly got: Got

  constructor(options: EngineOptions) {
    super()
    this.got = this.engine.extend({
      prefixUrl: `http://apis.data.go.kr/${options.id}/${options.name}/`,
      searchParams: {
        ServiceKey: options.key,
      },
      parseJson: (body) => {
        try {
          return JSON.parse(body)
        } catch {}

        try {
          return xml.parse(body, { parseTrueNumberOnly: true })
        } catch {}

        return body
      },
    })
  }

  public async get<T>(
    path: string,
    params?: Record<string, string | number | boolean | null | undefined>,
  ): Promise<Response<T>> {
    const request = this.got(path, {
      searchParams: params,
    })

    const body = await request.json<T>()
    return new Response<T>(body)
  }

  public get engine(): Got {
    return require('got')
  }
}
