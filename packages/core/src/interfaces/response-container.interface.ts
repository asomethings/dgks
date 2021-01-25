export interface ResponseContainer<T> {
  header: {
    resultCode: string
    resultMsg: string
  }
  body: {
    items: {
      item: T[]
    }
    numOfRows: number
    pageNo: number
    totalCount: number
  }
}
