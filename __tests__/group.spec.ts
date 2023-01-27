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
  test('without label', () => {
    const fn = jest.fn()

    group(fn)

    expect(groupSpy).toBeCalledTimes(1)
    expect(fn).toBeCalledTimes(1)
    expect(groupEndSpy).toBeCalledTimes(1)
    expect(groupSpy).toBeCalledWith()
  })

  test('with label', () => {
    const fn = jest.fn()

    group('label', fn)

    expect(groupSpy).toBeCalledTimes(1)
    expect(fn).toBeCalledTimes(1)
    expect(groupEndSpy).toBeCalledTimes(1)
    expect(groupSpy).toBeCalledWith('label')
  })

  test('result', () => {
    const result = group(() => true)

    expect(result).toBe(true)
  })
})
