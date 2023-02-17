import { expect, describe, it } from 'vitest'
import { CreateAppointment } from './create-appointment'
import { Appointment } from './../entities/appointment';

import { getFutureDate } from '../tests/utils/get-future-date';
import { InMemoryAppointmentsRepository } from '../repositories/in-memory/in-memory-appointments-repository';


describe('Create Appointment', () => {
  it('should be able to create an appointment', async () => {

    const inMemoryAppointmentsRepository = new InMemoryAppointmentsRepository()
    const sut = new CreateAppointment(inMemoryAppointmentsRepository)

    const date = '2022-08-10'

    const startsAt = getFutureDate(date, 1)
    const endsAt = getFutureDate(date, 2)

    startsAt.setDate(startsAt.getDate() - 1)
    endsAt.setDate(endsAt.getDate() + 2)

    expect(sut.execute({
      customer: 'John Doe',
      startsAt,
      endsAt
    })).resolves.toBeInstanceOf(Appointment)
  })

  it('should not be able to create an appointment with overlapping dates', async () => {

    const inMemoryAppointmentsRepository = new InMemoryAppointmentsRepository()
    const sut = new CreateAppointment(inMemoryAppointmentsRepository)

    const date = '2022-08-10'

    const startsAt = getFutureDate(date, 2)
    const endsAt = getFutureDate(date, 4)

    await sut.execute({
      customer: 'John Doe',
      startsAt,
      endsAt
    })

    expect(sut.execute({
      customer: 'John Doe',
      startsAt: getFutureDate(date, 3),
      endsAt: getFutureDate(date, 5)
    })).rejects.toBeInstanceOf(Error)

    expect(sut.execute({
      customer: 'John Doe',
      startsAt: getFutureDate(date, 1),
      endsAt: getFutureDate(date, 3)
    })).rejects.toBeInstanceOf(Error)

    expect(sut.execute({
      customer: 'John Doe',
      startsAt: getFutureDate(date, 1),
      endsAt: getFutureDate(date, 5)
    })).rejects.toBeInstanceOf(Error)
  })
})