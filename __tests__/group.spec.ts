import { group } from '@src/group.js'
import { jest } from '@jest/globals'
import { pass } from '@blackglory/pass'

const groupSpy = jest.spyOn(console, 'group').mockImplementation(pass)
const groupEndSpy = jest.spyOn(console, 'groupEnd').mockImplementation(pass)

afterEach(() => {
  groupSpy.mockClear()
  groupEndSpy.mockClear()
})

describe('group', () => {
  describe('fn', () => {
    test('sync', () => {
      const fn = jest.fn(() => 'foo')

      const result = group(fn)

      expect(result).toBe('foo')
      expect(groupSpy).toBeCalledTimes(1)
      expect(fn).toBeCalledTimes(1)
      expect(groupEndSpy).toBeCalledTimes(1)
    })

    test('async', async () => {
      const fn = jest.fn(async () => 'foo')

      const promise = group(fn)
      const groupEndSpyCalls1 = groupEndSpy.mock.calls.length
      const result = await promise
      const groupEndSpyCalls2 = groupEndSpy.mock.calls.length

      expect(result).toBe('foo')
      expect(groupSpy).toBeCalledTimes(1)
      expect(fn).toBeCalledTimes(1)
      expect(groupEndSpyCalls1).toBe(0)
      expect(groupEndSpyCalls2).toBe(1)
    })
  })

  describe('label', () => {
    test('without label', () => {
      const fn = jest.fn(() => 'foo')

      const result = group(fn)

      expect(result).toBe('foo')
      expect(groupSpy).toBeCalledWith()
    })

    test('with label', () => {
      const fn = jest.fn(() => 'foo')

      const result = group('label', fn)

      expect(result).toBe('foo')
      expect(groupSpy).toBeCalledWith('label')
    })
  })
})
