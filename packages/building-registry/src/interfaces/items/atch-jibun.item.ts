/**
 * 국토교통부_건축물대장 부속지번 정보
 */
export interface AtchJibun {
  /**
   * 부속법정동코드
   * @example 10300
   */
  atchBjdongCd?: number

  /**
   * 부속블록
   */
  atchBlock?: string

  /**
   * 부속번
   * @example 0012
   */
  atchBun?: string

  /**
   * 부속기타지번명
   */
  atchEtcJibunNm?: string

  /**
   * 부속지
   * @example 0048
   */
  atchJi?: string

  /**
   * 부속로트
   */
  atchLot?: string

  /**
   * 부속대지구분코드
   * @example 0
   */
  atchPlatGbCd?: number

  /**
   * 부속대장구분코드
   * @example 1
   */
  atchRegstrGbCd?: number

  /**
   * 부속대장구분코드명
   * @example 일반
   */
  atchRegstrGbCdNm?: string

  /**
   * 부속시군구코드
   * @example 11680
   */
  atchSigunguCd?: number

  /**
   * 부속특수지명
   */
  atchSplotNm?: string

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
   * @example 20140325
   */
  crtnDay: number

  /**
   * 지
   * @example 0005
   */
  ji?: string

  /**
   * 로트
   */
  lot?: string

  /**
   * 관리건축물대장PK
   * @example 11680-1920002
   */
  mgmBldrgstPk: string

  /**
   * 새주소법정동코드
   * @example 10301
   */
  naBjdongCd?: number

  /**
   * 새주소본번
   * @example 613
   */
  naMainBun?: number

  /**
   * 새주소도로코드
   * @example 116803122001
   */
  naRoadCd?: number

  /**
   * 새주소부번
   * @example 0
   */
  naSubBun?: number

  /**
   * 새주소지상지하코드
   * @example 0
   */
  naUgrndCd?: number

  /**
   * 도로명대지위치
   * @example 서울특별시강남구개포로613
   */
  newPlatPlc?: string

  /**
   * 대지구분코드
   * @example 0
   */
  platGbCd?: number

  /**
   * 대지위치
   * @example 서울특별시 강남구 개포동 12-5번지
   */
  platPlc: string

  /**
   * 대장구분코드
   * @example 1
   */
  regstrGbCd?: number

  /**
   * 대장구분코드명
   * @example 일반
   */
  regstrGbCdNm?: string

  /**
   * 대장종류코드
   * @example 2
   */
  regstrKindCd?: number

  /**
   * 대장종류코드명
   * @example 일반건축물
   */
  regstrKindCdNm?: string

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
