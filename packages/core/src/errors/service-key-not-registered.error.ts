import { ServiceError } from './service.error'

export class ServiceKeyNotRegistered extends ServiceError {
  public readonly message: string =
    'Service key is not registered. Please check https://data.go.kr for more information.'
}
