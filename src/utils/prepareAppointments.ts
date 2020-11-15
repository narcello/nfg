import {
  AppointmentBaseType,
  AppointmentCompleteType,
} from '../types/appointment.types';

export function prepareAppointments(
  Appointments: Array<AppointmentBaseType>,
): Array<AppointmentCompleteType> {
  const appointmentsOrdered = orderByAscendingOrder(Appointments);
  const appointmentsInitialized = appointmentsOrdered.map((appointment) =>
    appointmentsWithGridParams(appointment),
  );
  const appointmentsWithColumnParams = setAppointmentColumnParams(
    appointmentsInitialized,
  );
  return appointmentsWithColumnParams;
}

function appointmentsWithGridParams(
  appointment: AppointmentBaseType,
): AppointmentCompleteType {
  return {
    ...appointment,
    gridColumnStart: 1,
    gridColumnEnd: 1,
    gridRowStart: 1,
    gridRowEnd: 1,
  };
}

function orderByAscendingOrder(
  appointments: Array<AppointmentBaseType>,
): Array<AppointmentBaseType> {
  return appointments.sort((next, current) =>
    next.start < current.start ? -1 : 1,
  );
}

function setAppointmentColumnParams(
  appointments: Array<AppointmentCompleteType>,
): Array<AppointmentCompleteType> {
  for (let i = 0; i < appointments.length - 1; i++) {
    const CURRENT_APPOINTMENT = appointments[i];
    const NEXT_APPOINTMENT = appointments[i + 1];
    if (
      nextAppointmentStartsBeforeTheEndOfCurrentAppointment(
        NEXT_APPOINTMENT,
        CURRENT_APPOINTMENT,
      )
    ) {
      NEXT_APPOINTMENT.gridColumnStart =
        CURRENT_APPOINTMENT.gridColumnStart + 1;
      NEXT_APPOINTMENT.gridColumnEnd = 3;
      CURRENT_APPOINTMENT.gridColumnEnd = 2;
    } else {
      CURRENT_APPOINTMENT.gridColumnEnd = 3;
    }
  }
  return appointments;
}

function nextAppointmentStartsBeforeTheEndOfCurrentAppointment(
  nextAppointment: AppointmentCompleteType,
  currentAppointment: AppointmentCompleteType,
): boolean {
  return nextAppointment.start < currentAppointment.end;
}
