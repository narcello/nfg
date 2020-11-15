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
    gridColumnEnd: 3,
    gridRowStart: 1,
    gridRowEnd: 2,
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
  for (let i = 0; i < appointments.length; i++) {
    const BEFORE_APPOINTMENT = appointments[i - 1];
    const CURRENT_APPOINTMENT = appointments[i];
    const NEXT_APPOINTMENT = appointments[i + 1];
    if (
      !!NEXT_APPOINTMENT &&
      nextAppointmentStartsBeforeTheEndOfCurrentAppointment(
        NEXT_APPOINTMENT,
        CURRENT_APPOINTMENT,
      )
    ) {
      NEXT_APPOINTMENT.gridColumnStart = 2;
      NEXT_APPOINTMENT.gridColumnEnd = 3;
      CURRENT_APPOINTMENT.gridColumnEnd = 2;
    } else {
      CURRENT_APPOINTMENT.gridColumnEnd = 3;
    }
    if (
      !!BEFORE_APPOINTMENT &&
      beforeAppointmentEndWhenCurrentStart(
        BEFORE_APPOINTMENT,
        CURRENT_APPOINTMENT,
      )
    ) {
      BEFORE_APPOINTMENT.gridColumnStart = 2;
      BEFORE_APPOINTMENT.gridColumnEnd = 3;
      CURRENT_APPOINTMENT.gridColumnEnd = 2;
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

function beforeAppointmentEndWhenCurrentStart(
  beforeAppointment: AppointmentCompleteType,
  currentAppointment: AppointmentCompleteType,
): boolean {
  return beforeAppointment.end === currentAppointment.start;
}
