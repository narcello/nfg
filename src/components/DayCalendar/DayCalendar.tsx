import React from 'react';
import {AppointmentBaseType} from '../../types/appointment.types';
import {Appointments} from '../Appointments';
import {HourDescription} from '../HourDescription';
import {DayCalendarStyled} from './DayCalendar.styles';

type Props = {
  appointments: Array<AppointmentBaseType>;
};

function DayCalendar({appointments}: Props) {
  return (
    <DayCalendarStyled>
      <HourDescription />
      <Appointments appointments={appointments} />
    </DayCalendarStyled>
  );
}

export default DayCalendar;
