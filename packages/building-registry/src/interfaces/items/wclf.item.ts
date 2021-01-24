/**
 * 국토교통부_건축물대장 오수정화시설 정보
 */
export interface Wclf {
  /**
   * 행정표준코드
   * @example 10300
   */
  bjdongCd: string

  /**
   * 건물명
   * @example 대치,대청 아파트
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
   * 용량(루베)
   * @example 0
   */
  capaLube: number

  /**
   * 용량(인용)
   * @example 300
   */
  capaPsper: number

  /**
   * 생성일자
   * @example 20120822
   */
  crtnDay: string

  /**
   * 기타형식
   */
  etcMode: string

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
   * @example 11680-10302
   */
  mgmBldrgstPk: string

  /**
   * 형식코드
   * @example 299
   */
  modeCd: string

  /**
   * 형식코드명
   * @example 기타단독정화조
   */
  modeCdNm: string

  /**
   * 새주소법정동코드
   * @example 10301
   */
  naBjdongCd: string

  /**
   * 새주소본번
   * @example 5
   */
  naMainBun: number

  /**
   * 새주소도로코드
   * @example 116804166040
   */
  naRoadCd: string

  /**
   * 새주소부번
   * @example 0
   */
  naSubBun: number

  /**
   * 새주소지상지하코드
   * @example 0
   */
  naUgrndCd: string

  /**
   * 도로명대지위치
   * @example 서울특별시강남구개포로109길5
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
   * @example 1
   */
  regstrKindCd: string

  /**
   * 대장종류코드명
   * @example 집합
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
   * 단위구분코드
   */
  unitGbCd: string

  /**
   * 단위구분코드명
   */
  unitGbCdNm: string
}
