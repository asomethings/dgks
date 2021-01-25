/**
 * 건축물소유 정보
 *
 * @see https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15021136
 */
export interface ArchitecturePossession {
  /**
   * 면적
   * @example 106.98
   */
  area?: number

  /**
   * 법정동코드
   * @example 10100
   */
  bjdong_cd: number

  /**
   * 법정동명
   * @example 역삼동
   */
  bjdong_nm: string

  /**
   * 건물명
   * @example 연우빌딩
   */
  bld_nm?: string

  /**
   * 블록
   */
  block?: string

  /**
   * 번
   * @example 0601
   */
  bun: string

  /**
   * 변동원인일
   * @example 20040823
   */
  chang_caus_day?: number

  /**
   * 동명칭
   * @example 연우빌딩
   */
  dong_nm?: string

  /**
   * 호명칭
   * @example 101호
   */
  ho_nm?: string

  /**
   * 지
   * @example 0001
   */
  ji: string

  /**
   * 주민구분코드
   * @example 1
   */
  jm_gb_cd?: number

  /**
   * 주민구분명
   * @example 내국인
   */
  jm_gb_nm?: string

  /**
   * 주민번호
   * @deprecated
   */
  jmno?: string

  /**
   * 소재지법정동코드
   */
  loc_bjdong_cd?: string

  /**
   * 소재지법정동명
   */
  loc_bjdong_nm?: string

  /**
   * 소재지상세주소
   * @example 서울특별시 강남구 역삼동 664-44 501호
   */
  loc_detl_addr?: string

  /**
   * 소재지시군구코드
   */
  loc_sigungu_cd?: string

  /**
   * 소재지시군구명
   */
  loc_sigungu_nm?: string

  /**
   * 로트
   */
  lot?: string

  /**
   * 관리건축물대장PK
   * @example 11680-145318
   */
  mgm_bldrgst_pk: string

  /**
   * 새주소법정동코드
   * @example 10101
   */
  na_bjdong_cd?: number

  /**
   * 새주소소재지법정동코드
   */
  na_loc_bjdong_cd?: number

  /**
   * 새주소소재지상세주소
   */
  na_loc_detl_addr?: string

  /**
   * 새주소소재지본번
   */
  na_loc_main_bun?: number

  /**
   * 새주소소재지대지위치
   */
  na_loc_plat_plc?: string

  /**
   * 새주소소재지도로코드
   */
  na_loc_road_cd?: number

  /**
   * 새주소소재지부번
   */
  na_loc_sub_bun?: number

  /**
   * 새주소소재지지상지하코드
   */
  na_loc_ugrnd_cd?: string

  /**
   * 새주소소재지지상지하명
   */
  na_loc_ugrnd_nm?: string

  /**
   * 새주소본번
   * @example 110
   */
  na_main_bun?: number

  /**
   * 새주소대지위치
   * @example 서울특별시 강남구 봉은사로 110
   */
  na_plat_plc?: string

  /**
   * 새주소도로코드
   * @example 116803122004
   */
  na_road_cd?: number

  /**
   * 새주소부번
   * @example 0
   */
  na_sub_bun?: string

  /**
   * 새주소지상지하코드
   * @example 0
   */
  na_ugrnd_cd?: number

  /**
   * 새주소지상지하명
   * @example 지상
   */
  na_ugrnd_nm?: string

  /**
   * 성명
   * @example 유**
   */
  nm?: string

  /**
   * 소유구분코드
   * @example 01
   */
  own_gb_cd?: string

  /**
   * 소유구분명
   * @example 개인
   */
  own_gb_nm?: string

  /**
   * 소유권지분
   * @example 100/100
   */
  ownsh_quota?: string

  /**
   * 대지구분코드
   * @example 0
   */
  plat_gb_cd: number

  /**
   * 대지구분명
   * @example 대지
   */
  plat_gb_nm: string

  /**
   * 지분1
   * @example 100
   */
  quota1?: string

  /**
   * 지분2
   * @example 100
   */
  quota2?: string

  /**
   * 대장구분코드
   * @example 2
   */
  regstr_gb_cd?: number

  /**
   * 대장구분명
   * @example 집합
   */
  regstr_gb_nm?: string

  /**
   * 대장종류코드
   * @example 4
   */
  regstr_kind_cd?: number

  /**
   * 대장종류명
   * @example 전유부
   */
  regstr_kind_nm?: string

  /**
   * 시군구코드
   * @example 11680
   */
  sigungu_cd: number

  /**
   * 시군구명
   * @example 강남구
   */
  sigungu_nm: string

  /**
   * 특수지명
   */
  splot_nm?: string
}
