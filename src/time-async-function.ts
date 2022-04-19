import { now, elapsed } from '@utils/high-resolution-timestamp'

export function timeAsyncFunction<Result, Args extends any[]>(
  message: string
, fn: (...args: Args) => PromiseLike<Result>
): (...args: Args) => Promise<Result> {
  return async function (...args: Args): Promise<Result> {
    const startTime = now()
    const result = await fn(...args)
    const endTime = now()
    console.log(message, elapsed(startTime, endTime))
    return result
  }
}
