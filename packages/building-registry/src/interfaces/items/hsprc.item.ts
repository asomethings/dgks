/**
 * 국토교통부_건축물대장 주택가격 정보
 */
export interface Hsprc {
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
   * 외필지수
   * @example 0
   */
  bylotCnt: number

  /**
   * 생성일자
   * @example 20090320
   */
  crtnDay: string

  /**
   * 주택가격
   * @example 381000000
   */
  hsprc: number

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
   * 관리건축물대장PK
   * @example 11680-36099
   */
  mgmBldrgstPk: string

  /**
   * 새주소법정동코드
   */
  naBjdongCd: string

  /**
   * 새주소본번
   * @example 0.0
   */
  naMainBun: number

  /**
   * 새주소도로코드
   */
  naRoadCd: string

  /**
   * 새주소부번
   * @example 0.0
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
}
