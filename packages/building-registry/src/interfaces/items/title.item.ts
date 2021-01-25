/**
 * 국토교통부_건축물대장 표제부 정보
 */
export interface Title {
  /**
   * 건축면적(㎡)
   * @example 271.63
   */
  archArea?: number

  /**
   * 부속건축물면적(㎡)
   * @example 0
   */
  atchBldArea?: number

  /**
   * 부속건축물수
   * @example 0
   */
  atchBldCnt?: number

  /**
   * 건폐율(%)
   * @example 0
   */
  bcRat?: number

  /**
   * 법정동코드
   * @example 10300
   */
  bjdongCd: number

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
   * 외필지수
   * @example 0
   */
  bylotCnt?: number

  /**
   * 생성일자
   * @example 20131207
   */
  crtnDay: string

  /**
   * 동명칭
   */
  dongNm?: string

  /**
   * 비상용승강기수
   * @example 0
   */
  emgenUseElvtCnt?: number

  /**
   * EPI점수
   * @example 0
   */
  engrEpi?: number

  /**
   * 에너지효율등급
   */
  engrGrade?: string

  /**
   * 에너지절감율
   * @example 0
   */
  engrRat?: number

  /**
   * 기타용도
   * @example 교육연구시설
   */
  etcPurps?: string

  /**
   * 기타지붕
   * @example 아스팔트슁글
   */
  etcRoof?: string

  /**
   * 기타구조
   * @example 연와조
   */
  etcStrct?: string

  /**
   * 가구수(가구)
   * @example 0
   */
  fmlyCnt?: number

  /**
   * 친환경건축물인증점수
   * @example 0
   */
  gnBldCert?: number

  /**
   * 친환경건축물등급
   */
  gnBldGrade?: string

  /**
   * 지상층수
   * @example 2
   */
  grndFlrCnt?: number

  /**
   * 높이(m)
   * @example 0
   */
  heit?: number

  /**
   * 세대수(세대)
   * @example 0
   */
  hhldCnt?: number

  /**
   * 호수(호)
   * @example 0
   */
  hoCnt?: number

  /**
   * 옥내자주식면적(㎡)
   * @example 0
   */
  indrAutoArea?: number

  /**
   * 옥내자주식대수(대)
   * @example 0
   */
  indrAutoUtcnt?: number

  /**
   * 옥내기계식면적(㎡)
   * @example 0
   */
  indrMechArea?: number

  /**
   * 옥내기계식대수(대)
   * @example 0
   */
  indrMechUtcnt?: number

  /**
   * 지능형건축물인증점수
   * @example 0
   */
  itgBldCert?: number

  /**
   * 지능형건축물등급
   */
  itgBldGrade?: string

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
   * @example 10000
   */
  mainPurpsCd?: number

  /**
   * 주용도코드명
   * @example 교육연구시설
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
   * 옥외자주식면적(㎡)
   * @example 0
   */
  oudrAutoArea?: number

  /**
   * 옥외자주식대수(대)
   * @example 0
   */
  oudrAutoUtcnt?: number

  /**
   * 옥외기계식면적(㎡)
   * @example 0
   */
  oudrMechArea?: number

  /**
   * 옥외기계식대수(대)
   * @example 0
   */
  oudrMechUtcnt?: number

  /**
   * 대지면적(㎡)
   * @example 0
   */
  platArea?: number

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
   * 허가일
   * @example 19891226
   */
  pmsDay?: string

  /**
   * 허가번호구분코드
   */
  pmsnoGbCd?: number

  /**
   * 허가번호구분코드명
   */
  pmsnoGbCdNm?: string

  /**
   * 허가번호기관코드
   */
  pmsnoKikCd?: number

  /**
   * 허가번호기관코드명
   */
  pmsnoKikCdNm?: string

  /**
   * 허가번호년
   */
  pmsnoYear?: string

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
   * 승용승강기수
   * @example 0
   */
  rideUseElvtCnt?: number

  /**
   * 순번
   * @example 1
   */
  rnum?: number

  /**
   * 지붕코드
   * @example 90
   */
  roofCd?: number

  /**
   * 지붕코드명
   * @example 기타지붕
   */
  roofCdNm?: string

  /**
   * 내진능력
   * @example VII-0.169g
   */
  rserthqkAblty?: string

  /**
   * 내진설계적용여부
   * @example 1
   */
  rserthqkDsgnApplyYn?: string

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
   * 착공일
   */
  stcnsDay?: string

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

  /**
   * 연면적(㎡)
   * @example 536.06
   */
  totArea?: number

  /**
   * 총동연면적(㎡)
   * @example 536.06
   */
  totDongTotArea?: number

  /**
   * 지하층수
   * @example 0
   */
  ugrndFlrCnt?: number

  /**
   * 사용승인일
   * @example 19911120
   */
  useAprDay?: string

  /**
   * 용적률(%)
   * @example 0
   */
  vlRat?: number

  /**
   * 용적률산정연면적(㎡)
   * @example 536.06
   */
  vlRatEstmTotArea?: number
}
