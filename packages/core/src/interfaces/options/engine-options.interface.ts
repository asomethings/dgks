import { KeyOption } from './key-option.interface';

/**
 * Engine options
 */
export interface EngineOptions extends KeyOption {
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
}
