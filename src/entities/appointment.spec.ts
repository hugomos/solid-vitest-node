import { test, expect } from 'vitest'
import { Appointment } from './appointment'
import { getFutureDate } from '../tests/utils/get-future-date'
import { getParseDate } from '../tests/utils/get-parsed-date'
import { getPastDate } from '../tests/utils/get-past-date'

test('create an appointment', () => {
  const date = '2022-08-10'

  const startsAt = getFutureDate(date, 1)
  const endsAt = getFutureDate(date, 2)

  const appointment = new Appointment({
    customer: 'John Doe',
    startsAt,
    endsAt,
  })

  expect(appointment).toBeInstanceOf(Appointment)
  expect(appointment.customer).toEqual('John Doe')
})

test('cannot create an appointment with endDate before startDate ', () => {

  const date = '2022-08-10'

  const startsAt = getFutureDate(date, 1)
  const endsAt = getParseDate(date)

  expect(() => {
    return new Appointment({
      customer: 'John Doe',
      startsAt,
      endsAt,
    })
  }).toThrow()
})

test('cannot create an appointment with endDate before startDate ', () => {

  const date = '2022-08-10'

  const startsAt = getPastDate(date, 2)
  const endsAt = getFutureDate(date, 1)

  expect(() => {
    return new Appointment({
      customer: 'John Doe',
      startsAt,
      endsAt,
    })
  }).toThrow()
})