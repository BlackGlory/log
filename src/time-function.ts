import { now, elapsed } from '@utils/high-resolution-timestamp'

export function timeFunction<Result, Args extends any[]>(
  message: string
, fn: (...args: Args) => Result
): (...args: Args) => Result {
  return function (...args: Args): Result {
    const startTime = now()
    const result = fn(...args)
    const endTime = now()
    console.log(message, elapsed(startTime, endTime))
    return result
  }
}
