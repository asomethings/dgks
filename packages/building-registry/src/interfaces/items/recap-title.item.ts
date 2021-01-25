/**
 * 국토교통부_건축물대장 총괄표제부 정보
 */
export interface RecapTitle {
  /**
   * 건축면적(㎡)
   * @example 15324.37
   */
  archArea?: number

  /**
   * 부속건축물면적(㎡)
   * @example 64.26
   */
  atchBldArea?: number

  /**
   * 부속건축물수
   * @example 3
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
  bjdongCd: string

  /**
   * 건물명
   * @example 대치,대청 아파트
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
   * @example 20120822
   */
  crtnDay: string

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
   * @example 주거시설 근린생활시설
   */
  etcPurps?: string

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
   * 세대수(세대)
   * @example 4199
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
   * 주건축물수
   * @example 27
   */
  mainBldCnt?: number

  /**
   * 주용도코드
   * @example 02000
   */
  mainPurpsCd?: number

  /**
   * 주용도코드명
   * @example 공동주택
   */
  mainPurpsCdNm?: string

  /**
   * 관리건축물대장PK
   * @example 11680-10302
   */
  mgmBldrgstPk: string

  /**
   * 새주소법정동코드
   * @example 10301
   */
  naBjdongCd?: number

  /**
   * 새주소본번
   * @example 5
   */
  naMainBun?: number

  /**
   * 새주소도로코드
   * @example 116804166040
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
   * 신구대장구분코드
   * @example 0
   */
  newOldRegstrGbCd?: number

  /**
   * 신구대장구분코드명
   * @example 구대장
   */
  newOldRegstrGbCdNm?: string

  /**
   * 도로명대지위치
   * @example 서울특별시강남구개포로109길5
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
   * @example 2
   */
  regstrGbCd?: number

  /**
   * 대장구분코드명
   * @example 집합
   */
  regstrGbCdNm?: string

  /**
   * 대장종류코드
   * @example 1
   */
  regstrKindCd?: number

  /**
   * 대장종류코드명
   * @example 총괄표제부
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

  /**
   * 착공일
   */
  stcnsDay?: string

  /**
   * 연면적(㎡)
   * @example 223939
   */
  totArea?: number

  /**
   * 총주차수
   * @example 0
   */
  totPkngCnt?: number

  /**
   * 사용승인일
   */
  useAprDay?: string

  /**
   * 용적률(%)
   * @example 0
   */
  vlRat?: number

  /**
   * 용적률산정연면적(㎡)
   * @example 211555.54
   */
  vlRatEstmTotArea?: number
}
