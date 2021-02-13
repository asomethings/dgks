import { BaseEngine } from './engines'
import { GotEngine } from './engines/got.engine'
import { BaseServiceOptions, KeyOption } from './interfaces'
import { Response } from './response'

/**
 * Abstract service for dgks
 *
 * @template S
 */
export abstract class Service<S> {
  protected readonly engine: BaseEngine

  constructor(options: KeyOption & BaseServiceOptions) {
    this.engine = new GotEngine(options)
  }

  // ====================================
  // Abstract Function
  // ====================================

  /**
   * Parse search params (query params) to specific format
   *
   * @param {S} searchParams
   */
  protected abstract parseSearchParams(
    searchParams: S,
  ): Record<string, string | number | boolean | null | undefined> | undefined

  // ====================================
  // Protected Function
  // ====================================

  /**
   * Sends GET request to url with options
   *
   * @param {url} url - suffix of url
   * @param {S} searchParams - search params for requesting
   */
  protected async get<T>(url: string, searchParams: S): Promise<Response<T>> {
    return this.engine.get(url, this.parseSearchParams(searchParams))
  }

  /**
   * Zeropad number or string with length
   *
   * @param {string | number} i - Value to zeropad
   * @param {number} [width=4] - Length of zeropad
   */
  protected zeropad(i: string | number, width = 4): string {
    if (typeof i === 'number') i = String(i)
    return i.length >= width ? i : new Array(width - i.length + 1).join('0') + i
  }

  /**
   * Formats date to YYYYMMDD format.
   * If date is passed as string it will not format
   *
   * @param {string | Date} date - date to format
   */
  protected formatDate(date: string | Date): string {
    if (typeof date === 'string') return date

    return date.toISOString().slice(0, 10).replace(/-/g, '')
  }
}
