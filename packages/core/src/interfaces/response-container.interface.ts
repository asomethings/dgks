export interface ResponseContainer<T> {
  header: {
    resultCode: string
    resultMsg: string
  }
  body: {
    items: {
      item: T[]
    }
  }
}
