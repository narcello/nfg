import React from 'react';
import {AppointmentBaseType} from '../../types/appointment.types';
import {Appointment} from '../Appointment';
import {AppointmentsContainer} from './Appointments.styles';
import {getGridRowPosition, prepareAppointments} from './utils';

type Props = {
  appointments: Array<AppointmentBaseType>;
};

function Appointments({appointments}: Props) {
  const preparedAppointments = prepareAppointments(appointments);
  return (
    <AppointmentsContainer>
      {preparedAppointments.map((appointment, index) => {
        return (
          <Appointment
            key={`appointment-${index}`}
            gridRowStart={getGridRowPosition(appointment.start)}
            gridRowEnd={getGridRowPosition(appointment.end)}
            gridColumnStart={appointment.gridColumnStart}
            gridColumnEnd={appointment.gridColumnEnd}
            title={appointment.title}
          />
        );
      })}
    </AppointmentsContainer>
  );
}

export default Appointments;
