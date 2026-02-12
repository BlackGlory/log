import { last } from 'extra-utils'

export function log<T>(...params: [...unknown[], T]): T {
  console.log(...params)

  return last(params) as T
}
