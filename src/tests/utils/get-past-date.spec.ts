import { test, expect } from 'vitest'
import { getPastDate } from './get-past-date'

test('Decrease date with one year', () => {
  expect(getPastDate('2022-08-10', 1).getFullYear()).toEqual(2021)
})