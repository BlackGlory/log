import { log } from '@src/log.js'
import { jest } from '@jest/globals'
import { pass } from '@blackglory/pass'

const logSpy = jest.spyOn(console, 'log').mockImplementation(pass)

afterEach(() => logSpy.mockClear())

test('log', () => {
  const result = log('foo', 'bar')

  expect(logSpy).toBeCalledWith('foo', 'bar')
  expect(result).toBe('bar')
})
