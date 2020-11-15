import styled from 'styled-components';
import {AppointmentAddonsType} from '../../types/appointment.types';

export const AppointmentStyled = styled.div<AppointmentAddonsType>`
  background-color: #eaeaea;
  border-radius: 10px;
  padding: 10px 0 0 18px;
  grid-row-start: ${(props) => props.gridRowStart};
  grid-row-end: ${(props) => props.gridRowEnd};
  grid-column-start: ${(props) => props.gridColumnStart};
  grid-column-end: ${(props) => props.gridColumnEnd};
`;