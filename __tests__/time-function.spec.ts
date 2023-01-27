import { timeFunction } from '@src/time-function.js'
import { jest } from '@jest/globals'
import { pass } from '@blackglory/pass'

const logSpy = jest.spyOn(console, 'log').mockImplementation(pass)

afterEach(() => logSpy.mockClear())

test('timeFunction', () => {
  const fn = timeFunction('foo', (text: string) => text)
  const result = fn('bar')

  expect(logSpy).toBeCalledWith('foo', expect.stringMatching(/^\d+(?:\.\d+)?ms$/))
  expect(result).toBe('bar')
})
