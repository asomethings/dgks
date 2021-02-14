import { ResponseError, ResponseParseError, ServiceError, ServiceKeyNotRegistered } from './errors'
import { OpenApiServiceResponse, ResponseContainer } from './interfaces'

/**
 * Response wrapping data.go.kr common formats
 *
 * @template T
 */
export class Response<T> {
  protected readonly parsedResponse: ResponseContainer<T>

  constructor(protected readonly rawResponse: Record<string, any>) {
    this.parsedResponse = this.parseRawResponse(rawResponse)
  }

  // ====================================
  // Public Getters
  // ====================================

  /**
   * Items of requested service
   * @type {T[]}
   */
  public get items(): T[] {
    return this.parsedResponse.body.items.item
  }

  /**
   * Requested number of rows
   * @type {number}
   */
  public get numOfRows(): number {
    return this.parsedResponse.body.numOfRows
  }

  /**
   * Current page
   * @type {number}
   */
  public get page(): number {
    return this.parsedResponse.body.pageNo
  }

  /**
   * Total count
   * @type {number}
   */
  public get totalCount(): number {
    return this.parsedResponse.body.totalCount
  }

  // ====================================
  // Protected Functions
  // ====================================

  /**
   * Parses raw json response to match response container interface
   *
   * @throws {ServiceKeyNotRegistered} Service key is not registed in 3rd party service
   * @throws {ResponseParseError} Failed to parse response to what we want
   * @param {Record<string, any>} obj - response to parse
   * @returns {ResponseContainer<T>}
   */
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
    if (!response) throw new ResponseParseError('response')

    const header = this.parseHeader(response)
    const body = this.parseBody(response)
    return {
      header,
      body,
    }
  }

  /**
   * Parses header object and checks result code
   *
   * @throws {ResponseParseError} Failed to parse given header
   * @throws {ResponseError} Given header's response code is not what we expected
   * @param {Record<string, any>} obj - header object to parse
   * @returns {ResponseContainer<T>['header']}
   */
  protected parseHeader(obj: Record<string, any>): ResponseContainer<T>['header'] {
    const header = { ...(obj.header ?? {}) }
    if (Object.keys(header).length === 0) {
      throw new ResponseParseError('header')
    }

    if (header.resultCode !== '00') {
      throw new ResponseError(header?.resultMsg, header?.resultCode)
    }

    return header
  }

  /**
   * Parses body object and transforms it
   *
   * @throws {ResponseParseError} Failed to parse given body
   * @param {Record<string, any>} obj - header object to parse
   * @returns {ResponseContainer<T>['body']}
   */
  protected parseBody(obj: Record<string, any>): ResponseContainer<T>['body'] {
    const body = { ...(obj.body ?? {}) }
    if (Object.keys(body).length === 0) {
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

  /**
   * Replaces empty string to undefined
   *
   * @param {ResponseContainer<T>['body']} body - Body to transform
   * @returns {ResponseContainer<T>['body']}
   */
  protected transformItems(body: ResponseContainer<T>['body']): ResponseContainer<T>['body'] {
    const items = body.items.item ?? []
    return {
      items: {
        item: items.map((obj) =>
          Object.entries(obj).reduce((acc, [key, val]) => {
            if (typeof val !== 'string') {
              return { ...acc, [key]: val }
            }

            return { ...acc, [key]: val.trim() === '' ? undefined : val }
          }, {}),
        ) as T[],
      },
      numOfRows: body.numOfRows,
      pageNo: body.pageNo,
      totalCount: body.totalCount,
    }
  }

  /**
   * Checks if object is typeof OpenApiServiceResponse
   *
   * @param {Record<string, any>} obj - Object to check
   * @returns {boolean}
   */
  protected isOpenApiServiceResponse(obj: Record<string, any>): obj is OpenApiServiceResponse {
    return obj?.cmmMsgHeader?.errMsg && obj?.cmmMsgHeader?.returnAuthMsg && obj?.cmmMsgHeader?.returnReasonCode
  }
}
