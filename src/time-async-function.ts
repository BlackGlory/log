export function timeAsyncFunction<Result, Args extends any[]>(
  message: string
, fn: (...args: Args) => PromiseLike<Result>
): (...args: Args) => Promise<Result> {
  return async function (...args: Args): Promise<Result> {
    const startTime = Date.now()
    const result = await fn(...args)
    const endTime = Date.now()
    console.log(message, `${endTime - startTime}ms`)
    return result
  }
}
