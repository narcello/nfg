import styled from 'styled-components';
import {AppointmentAddonsType} from '../../types/appointment.types';

export const AppointmentStyled = styled.div<AppointmentAddonsType>`
  background-color: #eaeaea;
  border-radius: 10px;
  padding: 10px 0 0 18px;
  box-shadow: 2px 5px;
  -webkit-box-shadow: -2px 3px 16px -9px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -2px 3px 16px -9px rgba(0, 0, 0, 0.75);
  box-shadow: -2px 3px 16px -9px rgba(0, 0, 0, 0.75);
  will-change: transform;
  cursor: pointer;
  transition: 0.3s ease transform;
  grid-row-start: ${(props) => props.gridRowStart};
  grid-row-end: ${(props) => props.gridRowEnd};
  grid-column-start: ${(props) => props.gridColumnStart};
  grid-column-end: ${(props) => props.gridColumnEnd};
  &:hover {
    transform: translate3d(5px, -5px, 0px);
  }
`;
