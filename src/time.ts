import { performanceNow } from 'extra-compatible'
import { getElapsedTimeString } from '@utils/get-elapsed-time-string.js'
import { isPromiseLike } from 'extra-promise'
import { go } from '@blackglory/go'
import { Awaitable } from 'justypes'

export function time<T>(message: string, fn: () => PromiseLike<T>): Promise<T>
export function time<T>(message: string, fn: () => T): T
export function time<T>(message: string, fn: () => Awaitable<T>) {
  const startTime = performanceNow()
  const result = fn()
  if (isPromiseLike(result)) {
    return go(async () => {
      await result
      const endTime = performanceNow()

      console.log(message, getElapsedTimeString(startTime, endTime))

      return result
    })
  } else {
    const endTime = performanceNow()

    console.log(message, getElapsedTimeString(startTime, endTime))

    return result
  }
}
