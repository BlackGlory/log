import { hrtime } from 'process'

export function now(): bigint {
  return hrtime.bigint()
}

export function elapsed(startTime: bigint, endTime: bigint): string {
  const quotient = (endTime - startTime) / BigInt(1e6)
  const remainder = (endTime - startTime) % BigInt(1e6)
  if (remainder) {
    return `${quotient}.${remainder}ms`
  } else {
    return `${quotient}ms`
  }
}
