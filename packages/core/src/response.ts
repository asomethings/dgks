import { ResponseError, ResponseParseError, ServiceError, ServiceKeyNotRegistered } from './errors'
import { OpenApiServiceResponse, ResponseContainer } from './interfaces'

export class Response<T> {
  protected readonly parsedResponse: ResponseContainer<T>

  constructor(protected readonly rawResponse: Record<string, any>) {
    this.parsedResponse = this.parseRawResponse(rawResponse)
  }

  public get items(): T[] {
    return this.parsedResponse.body.items.item
  }

  // ====================================
  // Protected Function
  // ====================================
  protected parseRawResponse(obj: Record<string, any>): ResponseContainer<T> {
    const openApiResonse = obj?.OpenAPI_ServiceResponse
    if (this.isOpenApiServiceResponse(openApiResonse)) {
      const header = openApiResonse.cmmMsgHeader
      if (header.returnAuthMsg === 'SERVICE_KEY_IS_NOT_REGISTERED_ERROR') {
        throw new ServiceKeyNotRegistered()
      }

      throw new ServiceError(header.returnAuthMsg)
    }

    const response = obj.response
    if (!response) {
      throw new ResponseParseError('response')
    }

    const header = this.parseHeader(response)
    const body = this.parseBody(response)
    return {
      header,
      body,
    }
  }

  protected parseHeader(obj: Record<string, any>): ResponseContainer<T>['header'] {
    const header = { ...obj.header }
    if (!header) {
      throw new ResponseParseError('header')
    }

    if (header.resultCode !== '00') {
      throw new ResponseError(header?.resultMsg, header?.resultCode)
    }

    return header
  }

  protected parseBody(obj: Record<string, any>): ResponseContainer<T>['body'] {
    const body = obj.body
    if (!body) {
      throw new ResponseParseError('body')
    }

    if (typeof body.items === 'undefined' || body.items === null) {
      throw new ResponseParseError('body.items')
    }

    if (Array.isArray(body.items.item)) {
      return this.transformItems(body)
    }

    if (typeof body.items === 'string') {
      body.items = { item: [] }
      return this.transformItems(body)
    }

    if (typeof body.items?.item === 'object') {
      body.items = { item: [{ ...body.items.item }] }
      return this.transformItems(body)
    }

    return this.transformItems(body)
  }

  protected transformItems(body: ResponseContainer<T>['body']): ResponseContainer<T>['body'] {
    const items = body.items.item
    return {
      items: {
        item: items.map((obj) =>
          Object.entries(obj).reduce((acc, [key, val]) => {
            if (typeof val !== 'string') {
              return { ...acc, [key]: val }
            }

            return { ...acc, [key]: val === '' ? null : val }
          }, {}),
        ) as T[],
      },
    }
  }

  protected isOpenApiServiceResponse(obj: Record<string, any>): obj is OpenApiServiceResponse {
    return obj?.cmmMsgHeader?.errMsg && obj?.cmmMsgHeader?.returnAuthMsg && obj?.cmmMsgHeader?.returnAuthMsg
  }
}
