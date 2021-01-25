/**
 * 국토교통부_건축물대장 층별개요 정보
 */
export interface FlrOuln {
  /**
   * 면적(㎡)
   * @example 271.63
   */
  area?: number

  /**
   * 면적제외여부
   */
  areaExctYn?: string

  /**
   * 법정동코드
   * @example 10300
   */
  bjdongCd: string

  /**
   * 건물명
   */
  bldNm?: string

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
   * @example 20131207
   */
  crtnDay: number

  /**
   * 동명칭
   */
  dongNm?: string

  /**
   * 기타용도
   * @example 교육연구및복지시설
   */
  etcPurps?: string

  /**
   * 기타구조
   * @example 연와조
   */
  etcStrct?: string

  /**
   * 층구분코드
   * @example 20
   */
  flrGbCd?: number

  /**
   * 층구분코드명
   * @example 지상
   */
  flrGbCdNm?: string

  /**
   * 층번호
   * @example 1
   */
  flrNo?: number

  /**
   * 층번호명
   * @example 1층
   */
  flrNoNm?: string

  /**
   * 지
   * @example 0000
   */
  ji?: string

  /**
   * 로트
   */
  lot?: string

  /**
   * 주부속구분코드
   * @example 0
   */
  mainAtchGbCd?: number

  /**
   * 주부속구분코드명
   * @example 주건축물
   */
  mainAtchGbCdNm?: string

  /**
   * 주용도코드
   * @example 10999
   */
  mainPurpsCd?: number

  /**
   * 주용도코드명
   * @example 기타교육연구시설
   */
  mainPurpsCdNm?: string

  /**
   * 관리건축물대장PK
   * @example 11680-700402
   */
  mgmBldrgstPk: string

  /**
   * 새주소법정동코드
   */
  naBjdongCd?: number

  /**
   * 새주소본번
   */
  naMainBun?: number

  /**
   * 새주소도로코드
   */
  naRoadCd?: number

  /**
   * 새주소부번
   */
  naSubBun?: number

  /**
   * 새주소지상지하코드
   * @example 0
   */
  naUgrndCd?: number

  /**
   * 도로명대지위치
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

  /**
   * 구조코드
   * @example 11
   */
  strctCd?: number

  /**
   * 구조코드명
   * @example 벽돌구조
   */
  strctCdNm?: string
}
