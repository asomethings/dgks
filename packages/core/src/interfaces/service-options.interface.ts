import { ExtendOptions } from 'got'

/**
 * Options when used for extending abstract service
 */
export interface BaseServiceOptions {
  /**
   * ID of openapi url
   * @example 1611000
   */
  id: string | number

  /**
   * Service name of openapi
   * @example BldRgstService_v2
   */
  name: string

  /**
   * Extend got options
   */
  gotOptions?: ExtendOptions
}
