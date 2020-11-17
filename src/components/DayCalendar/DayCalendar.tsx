import React from 'react';
import {AppointmentBaseType} from '../../types/appointment.types';
import {Appointments} from '../Appointments';
import {HourDescription} from '../HourDescription';
import {Lines} from '../Lines';
import {GridContainer, DayCalendarStyled} from './DayCalendar.styles';

type Props = {
  appointments: Array<AppointmentBaseType>;
};

function DayCalendar({appointments}: Props) {
  return (
    <DayCalendarStyled>
      <HourDescription />
      <GridContainer>
        <Lines />
        <Appointments appointments={appointments} />
      </GridContainer>
    </DayCalendarStyled>
  );
}

export default DayCalendar;
