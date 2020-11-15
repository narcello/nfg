import React from 'react';
import {AppointmentAddonsType} from '../../types/appointment.types';
import {AppointmentStyled} from './Appointment.styles';

type Props = AppointmentAddonsType & {title: string};

function Appointment({title, ...props}: Props) {
  return <AppointmentStyled {...props}>{title}</AppointmentStyled>;
}

export default Appointment;
