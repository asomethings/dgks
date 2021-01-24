import { ExtendOptions } from 'got'

export interface BaseServiceOptions {
  id: string | number

  name: string

  gotOptions?: ExtendOptions
}
