export function now(): number {
  return performance.now()
}

export function elapsed(startTime: number, endTime: number): string {
  return `${endTime - startTime}ms`
}
