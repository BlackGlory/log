import { timeAsyncFunction } from '@src/time-async-function.js'
import { delay } from 'extra-promise'
import { jest } from '@jest/globals'
import { pass } from '@blackglory/pass'

const TIME_ERROR = 1
const logSpy = jest.spyOn(console, 'log').mockImplementation(pass)

afterEach(() => logSpy.mockClear())

test('timeAsyncFunction', async () => {
  const startTime = Date.now()
  const fn = timeAsyncFunction('foo', async (text: string) => {
    await delay(1000)
    return text 
  })
  const result = await fn('bar') 
  const endTime = Date.now()

  expect(logSpy).toBeCalledWith('foo', expect.stringMatching(/^\d+(?:\.\d+)?ms$/))
  expect(result).toBe('bar')
  expect(endTime - startTime).toBeGreaterThanOrEqual(1000 - TIME_ERROR)
})
