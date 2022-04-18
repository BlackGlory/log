import { timeAsyncFunction } from '@src/time-async-function'
import { delay } from 'extra-promise'

const TIME_ERROR = 1
const logSpy = jest.spyOn(console, 'log').mockImplementation()

afterEach(() => logSpy.mockClear())

test('timeAsyncFunction', async () => {
  const startTime = Date.now()
  const fn = timeAsyncFunction('foo', async (text: string) => {
    await delay(1000)
    return text 
  })
  const result = await fn('bar') 
  const endTime = Date.now()

  expect(logSpy).toBeCalledWith('foo', expect.stringMatching(/\d+ms/))
  expect(result).toBe('bar')
  expect(endTime - startTime).toBeGreaterThanOrEqual(1000 - TIME_ERROR)
})
