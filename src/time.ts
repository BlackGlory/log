import { now, elapsed } from '@utils/high-resolution-timestamp'
import { isPromiseLike } from '@blackglory/types'

export function time<T>(message: string, fn: () => T): T
export function time<T>(message: string, fn: () => PromiseLike<T>): Promise<T>
export function time<T>(message: string, fn: () => T | PromiseLike<T>) {
  const startTime = now()
  const result = fn()
  if (isPromiseLike(result)) {
    return result.then(() => {
      const endTime = now()
      console.log(message, elapsed(startTime, endTime))
      return result
    })
  } else {
    const endTime = now()
    console.log(message, elapsed(startTime, endTime))
    return result
  }
}
