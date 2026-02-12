import { performanceNow } from 'extra-compatible'
import { getElapsedTimeString } from '@utils/get-elapsed-time-string.js'

export function timeFunction<Result, Args extends any[]>(
  message: string
, fn: (...args: Args) => Result
): (...args: Args) => Result {
  return function (...args: Args): Result {
    const startTime = performanceNow()
    const result = fn(...args)
    const endTime = performanceNow()
    console.log(message, getElapsedTimeString(startTime, endTime))
    return result
  }
}
