import { performanceNow } from 'extra-compatible'
import { getElapsedTimeString } from '@utils/get-elapsed-time-string.js'

export function timeAsyncFunction<Result, Args extends any[]>(
  message: string
, fn: (...args: Args) => PromiseLike<Result>
): (...args: Args) => Promise<Result> {
  return async function (...args: Args): Promise<Result> {
    const startTime = performanceNow()
    const result = await fn(...args)
    const endTime = performanceNow()

    console.log(message, getElapsedTimeString(startTime, endTime))

    return result
  }
}
