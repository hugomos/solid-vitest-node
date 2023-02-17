import { test, expect } from 'vitest'
import { getFutureDate } from './get-future-date';

test('Increase date with one year', () => {
  expect(getFutureDate('2022-08-10').getFullYear()).toEqual(2023)
})