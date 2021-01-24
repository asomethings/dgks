/**
 * 국토교통부_건축물대장 전유/공용면적 정보
 */
export interface ExposPubuseArea {
  /**
   * 면적(㎡)
   * @example 49.86
   */
  area: number

  /**
   * 행정표준코드
   * @example 10300
   */
  bjdongCd: string

  /**
   * 건물명
   * @example 대치아파트 제219동
   */
  bldNm: string

  /**
   * 블록
   */
  block: string

  /**
   * 번
   * @example 0012
   */
  bun: string

  /**
   * 생성일자
   * @example 20090320
   */
  crtnDay: string

  /**
   * 동명칭
   * @example 219
   */
  dongNm: string

  /**
   * 기타용도
   * @example 아파트(일부공유면적포함)
   */
  etcPurps: string

  /**
   * 기타구조
   * @example 철근콘크리트구조
   */
  etcStrct: string

  /**
   * 전유공용구분코드
   * @example 1
   */
  exposPubuseGbCd: string

  /**
   * 전유공용구분코드명
   * @example 전유
   */
  exposPubuseGbCdNm: string

  /**
   * 층구분코드
   * @example 20
   */
  flrGbCd: string

  /**
   * 층구분코드명
   * @example 지상
   */
  flrGbCdNm: string

  /**
   * 층번호
   * @example 15
   */
  flrNo: number

  /**
   * 층번호명
   * @example 15층
   */
  flrNoNm: string

  /**
   * 호명칭
   * @example 1502호
   */
  hoNm: string

  /**
   * 지
   * @example 0000
   */
  ji: string

  /**
   * 로트
   */
  lot: string

  /**
   * 주부속구분코드
   * @example 0
   */
  mainAtchGbCd: string

  /**
   * 주부속구분코드명
   * @example 주건축물
   */
  mainAtchGbCdNm: string

  /**
   * 주용도코드
   * @example 2001
   */
  mainPurpsCd: string

  /**
   * 주용도코드명
   * @example 아파트
   */
  mainPurpsCdNm: string

  /**
   * 관리건축물대장PK
   * @example 11680-3609902
   */
  mgmBldrgstPk: string

  /**
   * 새주소법정동코드
   */
  naBjdongCd: string

  /**
   * 새주소본번
   */
  naMainBun: number

  /**
   * 새주소도로코드
   */
  naRoadCd: string

  /**
   * 새주소부번
   */
  naSubBun: number

  /**
   * 새주소지상지하코드
   * @example 0
   */
  naUgrndCd: string

  /**
   * 도로명대지위치
   */
  newPlatPlc: string

  /**
   * 0:대지 1:산 2:블록
   * @example 0
   */
  platGbCd: string

  /**
   * 대지위치
   * @example 서울특별시 강남구 개포동 12번지
   */
  platPlc: string

  /**
   * 대장구분코드
   * @example 2
   */
  regstrGbCd: string

  /**
   * 대장구분코드명
   * @example 집합
   */
  regstrGbCdNm: string

  /**
   * 대장종류코드
   * @example 4
   */
  regstrKindCd: string

  /**
   * 대장종류코드명
   * @example 전유부
   */
  regstrKindCdNm: string

  /**
   * 순번
   * @example 1
   */
  rnum: number

  /**
   * 행정표준코드
   * @example 11680
   */
  sigunguCd: string

  /**
   * 특수지명
   */
  splotNm: string

  /**
   * 구조코드
   * @example 21
   */
  strctCd: string

  /**
   * 구조코드명
   * @example 철근콘크리트구조
   */
  strctCdNm: string
}
