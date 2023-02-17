interface AppointmentProps {
  customer: string;
  startsAt: Date;
  endsAt: Date;
}

export class Appointment {

  private props: AppointmentProps;

  get customer() {
    return this.props.customer;
  }

  get startsAt() {
    return this.props.startsAt;
  }

  get endsAt() {
    return this.props.endsAt;
  }

  constructor(props: AppointmentProps) {
    const { startsAt, endsAt } = props

    if (startsAt <= new Date()) {
      throw new Error('Start date cannot be in the past')
    }

    if (endsAt <= startsAt) {
      throw new Error('startsAt must be before endsAt')
    }

    this.props = props;
  }

}