import { log } from '@src/log'

const logSpy = jest.spyOn(console, 'log').mockImplementation()

test('log', () => {
  const result = log('foo', 'bar')

  expect(logSpy).toBeCalledWith('foo', 'bar')
  expect(result).toBe('bar')
})
