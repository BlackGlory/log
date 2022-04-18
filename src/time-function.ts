export function timeFunction<Result, Args extends any[]>(
  message: string
, fn: (...args: Args) => Result
): (...args: Args) => Result {
  return function (...args: Args): Result {
    const startTime = Date.now()
    const result = fn(...args)
    const endTime = Date.now()
    console.log(message, `${startTime - endTime}ms`)
    return result
  }
}
