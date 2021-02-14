import axios, { AxiosInstance } from 'axios'
import * as xml from 'fast-xml-parser'
import { DGKS_KEY_NAME, DGKS_PREFIX_URL } from '../constants'
import { EngineOptions } from '../interfaces'
import { Response } from '../response'
import { BaseEngine } from './base.engine'

export class AxiosEngine extends BaseEngine {
  protected readonly axios: AxiosInstance

  constructor(options: EngineOptions) {
    super(options)
    this.axios = this.engine.create({
      baseURL: `${DGKS_PREFIX_URL}${options.id}/${options.name}/`,
      params: {
        [DGKS_KEY_NAME]: options.key,
      },
      transformResponse: [
        (body) => {
          try {
            return JSON.parse(body)
          } catch {}

          try {
            return xml.parse(body, { parseTrueNumberOnly: true })
          } catch {}

          return body
        },
      ],
    })
  }

  public async get<T>(
    path: string,
    params?: Record<string, string | number | boolean | null | undefined>,
  ): Promise<Response<T>> {
    const request = await this.axios.get(path, {
      params,
    })

    const body = request.data
    return new Response<T>(body)
  }

  public get engine(): typeof axios {
    return require('axios').default
  }
}
