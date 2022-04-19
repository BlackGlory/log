import { time } from '@src/time'
import { delay } from 'extra-promise'

const TIME_ERROR = 1
const logSpy = jest.spyOn(console, 'log').mockImplementation()

afterEach(() => logSpy.mockClear())

describe('time', () => {
  test('sync ', () => {
    const result = time('foo', () => 'bar')

    expect(logSpy).toBeCalledWith('foo', expect.stringMatching(/^\d+(?:\.\d+)?ms$/))
    expect(result).toBe('bar')
  })

  test('async', async () => {
    const startTime = Date.now()
    const result = await time('foo', async () => {
      await delay(1000)
      return 'bar'
    })
    const endTime = Date.now()

    expect(logSpy).toBeCalledWith('foo', expect.stringMatching(/^\d+(?:\.\d+)?ms$/))
    expect(result).toBe('bar')
    expect(endTime - startTime).toBeGreaterThanOrEqual(1000 - TIME_ERROR)
  })
})
