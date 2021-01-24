import * as xmlParser from 'fast-xml-parser'
import got, { Got } from 'got'
import { BaseServiceOptions, KeyOption } from './interfaces'
import { Response } from './response'

export abstract class Service<S> {
  protected readonly got: Got

  constructor(options: KeyOption & BaseServiceOptions) {
    this.got = got.extend({
      prefixUrl: `http://apis.data.go.kr/${options.id}/${options.name}/`,
      searchParams: {
        ServiceKey: options.key,
      },
      parseJson: (body) => {
        try {
          return JSON.parse(body)
        } catch {}

        try {
          return xmlParser.parse(body, { parseTrueNumberOnly: true })
        } catch {}

        return body
      },
    })
  }

  // ====================================
  // Abstract Function
  // ====================================
  protected abstract parseSearchParams(
    searchParams: S,
  ): Record<string, string | number | boolean | null | undefined> | undefined

  // ====================================
  // Protected Function
  // ====================================
  protected async get<T>(url: string, requestOptions: S): Promise<Response<T>> {
    const request = this.got(url, {
      searchParams: this.parseSearchParams(requestOptions),
    })

    const body = await request.json<Record<string, any>>()
    return new Response(body)
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
