import { isPromiseLike } from '@blackglory/types'

export function time<T>(message: string, fn: () => T): T
export function time<T>(message: string, fn: () => PromiseLike<T>): Promise<T>
export function time<T>(message: string, fn: () => T | PromiseLike<T>) {
  const startTime = Date.now()
  const result = fn()
  if (isPromiseLike(result)) {
    return result.then(() => {
      const endTime = Date.now()
      console.log(message, `${endTime - startTime}ms`)
      return result
    })
  } else {
    const endTime = Date.now()
    console.log(message, `${endTime - startTime}ms`)
    return result
  }
}
