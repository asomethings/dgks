export class ResponseError extends Error {
  public readonly name: string = 'ResponseError'

  constructor(message?: string, public readonly code?: string) {
    super(message)
  }
}
