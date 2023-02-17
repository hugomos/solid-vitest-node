
import { Appointment } from './../entities/appointment';

export interface AppointmentsRepository {
  create(data: Appointment): Promise<void>;
  findOverlappingAppointments(startsAt: Date, endsAt: Date): Promise<Appointment | null>;
}