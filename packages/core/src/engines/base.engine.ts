import { Response } from '../response'

export abstract class BaseEngine {
  public abstract get<T>(
    path: string,
    params?: Record<string, string | number | boolean | null | undefined>,
  ): Promise<Response<T>>

  public abstract get engine(): any
}
