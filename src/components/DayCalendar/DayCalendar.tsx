import React from 'react';
import {Events} from '../Events';
import {HourDescription} from '../HourDescription';
import {DayCalendarStyled} from './DayCalendar.styles';

function DayCalendar() {
  return (
    <DayCalendarStyled>
      <HourDescription />
      <Events />
    </DayCalendarStyled>
  );
}

export default DayCalendar;
