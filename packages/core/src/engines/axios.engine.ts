import axios, { AxiosInstance } from 'axios'
import { EngineOptions } from '../interfaces'
import { Response } from '../response'
import { BaseEngine } from './base.engine'
import * as xml from 'fast-xml-parser'

export class AxiosEngine extends BaseEngine {
  protected readonly axios: AxiosInstance

  constructor(options: EngineOptions) {
    super(options)
    this.axios = this.engine.create({
      baseURL: `http://apis.data.go.kr/${options.id}/${options.name}/`,
      params: {
        ServiceKey: options.key,
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
        }
      ]
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
