import React from 'react';
import {AppointmentBaseType} from '../../types/appointment.types';
import {getGridRowPosition, prepareAppointments} from '../../utils';
import {Appointment} from '../Appointment';
import {AppointmentsContainer} from './Appointments.styles';

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
            key={index}
            gridRowStart={getGridRowPosition(appointment.start || 0)}
            gridRowEnd={getGridRowPosition(appointment.end || 0)}
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
