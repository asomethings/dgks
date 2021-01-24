export interface RequestOptions {
  /**
   * 시군구코드 (행정표준코드)
   * @example 10300
   */
  bjdongCd: string | number

  /**
   * 번
   * @example 0012
   */
  bun?: string | number

  /**
   * 검색종료일
   */
  endDate?: string | Date

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
  platGbCd?: 0 | 1 | 2

  /**
   * 행정표준코드
   * @example 11680
   */
  sigunguCd: string | number

  /**
   * 검색시작일
   */
  startDate?: string | Date
}
