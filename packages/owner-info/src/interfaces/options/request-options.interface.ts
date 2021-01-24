export interface RequestOptions {
  /**
   * 시군구코드 (행정표준코드)
   * @example 10300
   */
  bjdong_cd: string | number

  /**
   * 번
   * @example 0012
   */
  bun?: string | number

  /**
   * 동명칭
   */
  dong_nm?: string

  /**
   * 지
   * @example 0000
   */
  ji?: string | number

  /**
   * 리스트수
   * @example 10
   */
  numOfRows?: number

  /**
   * 페이지번호
   * @example 1
   */
  pageNo?: number

  /**
   * 대지구분코드
   * @example 0
   */
  plat_gb_cd?: 0 | 1 | 2

  /**
   * 행정표준코드
   * @example 11680
   */
  sigungu_cd: string | number

  /**
   * 호명칭
   */
  ho_nm?: string
}
