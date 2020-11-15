import {
  AppointmentBaseType,
  AppointmentCompleteType,
} from '../types/appointment.types';

export function prepareAppointments(
  Appointments: Array<AppointmentBaseType>,
): Array<AppointmentCompleteType> {
  const appointmentsOrdered = sortByAscendingOrder(Appointments);
  const appointmentsInitialized = appointmentsWithGridParams(
    appointmentsOrdered,
  );
  const appointmentsWithColumnParams = setAppointmentColumnParams(
    appointmentsInitialized,
  );
  return appointmentsWithColumnParams;
}

export function appointmentsWithGridParams(
  appointments: Array<AppointmentBaseType>,
): Array<AppointmentCompleteType> {
  return appointments.map((appointment) => ({
    ...appointment,
    gridColumnStart: 1,
    gridColumnEnd: 3,
    gridRowStart: 1,
    gridRowEnd: 2,
  }));
}

export function sortByAscendingOrder(
  appointments: Array<AppointmentBaseType>,
): Array<AppointmentBaseType> {
  return appointments.sort((next, current) =>
    next.start < current.start ? -1 : 1,
  );
}

export function setAppointmentColumnParams(
  appointments: Array<AppointmentCompleteType>,
): Array<AppointmentCompleteType> {
  for (let i = 0; i < appointments.length; i++) {
    const PREVIUS_APPOINTMENT = appointments[i - 1];
    const CURRENT_APPOINTMENT = appointments[i];
    const NEXT_APPOINTMENT = appointments[i + 1];
    handleWithCurrentAndNextAppointments(CURRENT_APPOINTMENT, NEXT_APPOINTMENT);
    handleWithCurrentAndPreviusAppointments(
      CURRENT_APPOINTMENT,
      PREVIUS_APPOINTMENT,
    );
  }
  return appointments;
}

export function handleWithCurrentAndNextAppointments(
  currentAppointment: AppointmentCompleteType,
  nextAppointment: AppointmentCompleteType,
) {
  if (
    !!nextAppointment &&
    nextAppointmentStartsBeforeCurrentEnds(nextAppointment, currentAppointment)
  ) {
    nextAppointment.gridColumnStart = 2;
    nextAppointment.gridColumnEnd = 3;
    currentAppointment.gridColumnEnd = 2;
  } else {
    currentAppointment.gridColumnEnd = 3;
  }
}
export function handleWithCurrentAndPreviusAppointments(
  currentAppointment: AppointmentCompleteType,
  previusAppointment: AppointmentCompleteType,
) {
  if (
    !!previusAppointment &&
    previousAppointmentEndsWhenCurrentStarts(
      previusAppointment,
      currentAppointment,
    )
  ) {
    previusAppointment.gridColumnStart = 2;
    previusAppointment.gridColumnEnd = 3;
    currentAppointment.gridColumnEnd = 2;
  }
}

export function nextAppointmentStartsBeforeCurrentEnds(
  nextAppointment: AppointmentCompleteType,
  currentAppointment: AppointmentCompleteType,
): boolean {
  return nextAppointment.start < currentAppointment.end;
}

export function previousAppointmentEndsWhenCurrentStarts(
  previousAppointment: AppointmentCompleteType,
  currentAppointment: AppointmentCompleteType,
): boolean {
  return previousAppointment.end === currentAppointment.start;
}
