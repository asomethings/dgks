/**
 * 국토교통부_건축물대장 지역지구구역(Ji, Ji, Gu) 정보
 */
export interface Jijigu {
  /**
   * 법정동코드
   * @example 10300
   */
  bjdongCd: string

  /**
   * 블록
   */
  block?: string

  /**
   * 번
   * @example 0012
   */
  bun?: string

  /**
   * 생성일자
   * @example 20120822
   */
  crtnDay: number

  /**
   * 기타지역지구구역
   * @example 지구단위계획구역
   */
  etcJijigu?: string

  /**
   * 지
   * @example 0000
   */
  ji?: string

  /**
   * 지역지구구역코드
   * @example 300
   */
  jijiguCd?: number

  /**
   * 지역지구구역코드명
   * @example 지구단위계획구역
   */
  jijiguCdNm?: string

  /**
   * 지역지구구역구분코드
   * @example 3
   */
  jijiguGbCd?: number

  /**
   * 지역지구구역구분코드명
   * @example 용도구역코드
   */
  jijiguGbCdNm?: string

  /**
   * 로트
   */
  lot?: string

  /**
   * 관리건축물대장PK
   * @example 11680-10302
   */
  mgmBldrgstPk: string

  /**
   * 도로명대지위치
   * @example 서울특별시강남구개포로109길5
   */
  newPlatPlc?: string

  /**
   * 대지구분코드
   * @example 0
   */
  platGbCd?: number

  /**
   * 대지위치
   * @example 서울특별시 강남구 개포동 12번지
   */
  platPlc: string

  /**
   * 대표여부
   * @example 1
   */
  reprYn?: string

  /**
   * 순번
   * @example 1
   */
  rnum?: number

  /**
   * 시군구코드
   * @example 11680
   */
  sigunguCd: number

  /**
   * 특수지명
   */
  splotNm?: string
}
