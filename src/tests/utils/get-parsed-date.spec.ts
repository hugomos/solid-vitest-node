import { test, expect } from 'vitest'
import { getParseDate } from './get-parsed-date'

test('Parse string to date', () => {
  expect(getParseDate('2022-08-10')).toBeInstanceOf(Date)
})