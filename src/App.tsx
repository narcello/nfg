import React from 'react';
import {DayCalendar} from './components';
import {AppointmentBaseType} from './types/appointment.types';

type Props = {
  appointments: Array<AppointmentBaseType>;
};

function App({appointments}: Props) {
  return <DayCalendar appointments={appointments} />;
}

export default App;
