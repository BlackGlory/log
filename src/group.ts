import { go } from '@blackglory/go'
import { isPromiseLike } from 'extra-promise'
import { isUndefined } from 'extra-utils'
import { Awaitable } from 'justypes'

export function group<T>(label: string, fn: () => PromiseLike<T>): Promise<T>
export function group<T>(label: string, fn: () => T): T
export function group<T>(fn: () => PromiseLike<T>): Promise<T>
export function group<T>(fn: () => T): T
export function group<T>(...args:
| [label: string, fn: () => Awaitable<T>]
| [fn: () => Awaitable<T>]
): Awaitable<T> {
  const [label, fn]: [string | undefined, () => Awaitable<T>] = go(() => {
    if (args.length === 1) {
      const [fn] = args

      return [undefined, fn]
    } else {
      const [label, fn] = args

      return [label, fn]
    }
  })

  // 由于一些控制台会将undefined参数显示为'undefined', 在此确保在undefined时不传入参数.
  if (isUndefined(label)) {
    console.group()
  } else {
    console.group(label)
  }

  try {
    const result = fn()
    if (isPromiseLike(result)) {
      return go(async () => {
        try {
          return await result
        } finally {
          console.groupEnd()
        }
      })
    } else {
      console.groupEnd()

      return result
    }
  } catch (e) {
    console.groupEnd()

    throw e
  }
}
