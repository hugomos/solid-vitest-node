import { Appointment } from "../../entities/appointment";
import { AppointmentsRepository } from "../appointment-repository";
import { areIntervalsOverlapping } from 'date-fns'

export class InMemoryAppointmentsRepository implements AppointmentsRepository {
  public appointments: Appointment[] = [];

  async create(data: Appointment): Promise<void> {
    this.appointments.push(data);
  }

  async findOverlappingAppointments(startsAt: Date, endsAt: Date): Promise<Appointment | null> {
    const overlappingAppointment = this.appointments.find(appointment => areIntervalsOverlapping(
      { start: startsAt, end: endsAt },
      { start: appointment.startsAt, end: appointment.endsAt },
      { inclusive: true }
    ));
    return overlappingAppointment ? overlappingAppointment : null;
  }
}