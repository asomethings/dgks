import { KeyOption, Response, Service } from '@dgks/core'
import {
  AtchJibun,
  BasisOurln,
  Expos,
  ExposPubuseArea,
  FlrOuln,
  Hsprc,
  Jijigu,
  RecapTitle,
  RequestOptions,
  Title,
  Wclf,
} from './interfaces'

export class BuildingRegistryService extends Service<RequestOptions> {
  constructor(options: KeyOption) {
    super({ ...options, id: 1613000, name: 'BldRgstService_v2' })
  }

  /**
   * 건축물대장 표제부의 정보를 조회합니다
   * @param {RequestOptions} requestOptions
   */
  public async getTitle(requestOptions: RequestOptions): Promise<Response<Title>> {
    return this.get('getBrTitleInfo', requestOptions)
  }

  /**
   * 건축물대장 기본개요의 정보를 조회합니다
   * @param {RequestOptions} requestOptions
   */
  public async getBasisOuln(requestOptions: RequestOptions): Promise<Response<BasisOurln>> {
    return this.get('getBrBasisOulnInfo', requestOptions)
  }

  /**
   * 건축물대장 총괄표제부의 정보를 조회합니다
   * @param {RequestOptions} requestOptions
   */
  public async getRecapTitle(requestOptions: RequestOptions): Promise<Response<RecapTitle>> {
    return this.get('getBrRecapTitleInfo', requestOptions)
  }

  /**
   * 건축물대장 층별개요의 정보를 조회합니다
   * @param {RequestOptions} requestOptions
   */
  public async getFlrOuln(requestOptions: RequestOptions): Promise<Response<FlrOuln>> {
    return this.get('getBrFlrOulnInfo', requestOptions)
  }

  /**
   * 건축물대장 층별개요의 정보를 조회합니다
   * @param {RequestOptions} requestOptions
   */
  public async getAtchJibun(requestOptions: RequestOptions): Promise<Response<AtchJibun>> {
    return this.get('getBrAtchJibunInfo', requestOptions)
  }

  /**
   * 건축물대장 층별개요의 정보를 조회합니다
   * @param {RequestOptions} requestOptions
   */
  public async getExposPubuseArea(requestOptions: RequestOptions): Promise<Response<ExposPubuseArea>> {
    return this.get('getBrExposPubuseAreaInfo', requestOptions)
  }

  /**
   * 건축물대장 오수정화시설의 정보를 조회합니다
   * @param {RequestOptions} requestOptions
   */
  public async getWclf(requestOptions: RequestOptions): Promise<Response<Wclf>> {
    return this.get('getBrWclfInfo', requestOptions)
  }

  /**
   * 건축물대장 주택가격의 정보를 조회합니다
   * @param {RequestOptions} requestOptions
   */
  public async getHsprc(requestOptions: RequestOptions): Promise<Response<Hsprc>> {
    return this.get('getBrHsprcInfo', requestOptions)
  }

  /**
   * 건축물대장 전유부의 정보를 조회합니다
   * @param {RequestOptions} requestOptions
   */
  public async getExpos(requestOptions: RequestOptions): Promise<Response<Expos>> {
    return this.get('getBrExposInfo', requestOptions)
  }

  /**
   * 건축물대장 지역지구구역의 정보를 조회합니다
   * @param {RequestOptions} requestOptions
   */
  public async getJijigu(requestOptions: RequestOptions): Promise<Response<Jijigu>> {
    return this.get('getBrJijiguInfo', requestOptions)
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

    if (opts.startDate) {
      opts.startDate = this.formatDate(opts.startDate)
    }

    if (opts.endDate) {
      opts.endDate = this.formatDate(opts.endDate)
    }

    return opts as any
  }
}
