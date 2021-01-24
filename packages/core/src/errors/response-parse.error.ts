export class ResponseParseError extends Error {
  public readonly name: string = 'ResponseParseError'

  constructor(key: string) {
    super(`Key "${key}" not found in response`)
  }
}
