import { performance } from 'perf_hooks'

export function now(): number {
  return performance.now()
}
