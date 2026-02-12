export function getElapsedTimeString(startTime: number, endTime: number): string {
  return `${endTime - startTime}ms`
}
