import { KeyOption, Response, Service } from '@dgks/core'
import { ArchitecturePossession, RequestOptions } from './interfaces'

export class OwnerInfoService extends Service<RequestOptions> {
  constructor(option: KeyOption) {
    super({ ...option, id: 1611000, name: 'OwnerInfoService' })
  }

  /**
   * 건축물소유 정보를 조회합니다
   * @param {RequestOptions} requestOptions
   */
  public getArchitecturePossession(options: RequestOptions): Promise<Response<ArchitecturePossession>> {
    return this.get('getArchitecturePossessionInfo', options)
  }

  protected parseSearchParams(
    searchParams: RequestOptions,
  ): Record<string, string | number | boolean | null | undefined> | undefined {
    const opts = { ...searchParams }

    if (opts.bun) {
      opts.bun = this.zeropad(opts.bun)
    }

    if (opts.ji) {
      opts.ji = this.zeropad(opts.ji)
    }

    return opts as any
  }
}
