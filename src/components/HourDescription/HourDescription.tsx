import React from 'react';
import {
  ContainerHourDescription,
  HourDescriptionStyled,
} from './HourDescription.styles';

let hourBlock = [
  {mainHour: '08:00', halfHour: '08:30', period: 'am'},
  {mainHour: '09:00', halfHour: '09:30', period: 'am'},
  {mainHour: '10:00', halfHour: '10:30', period: 'am'},
  {mainHour: '11:00', halfHour: '11:30', period: 'am'},
  {mainHour: '12:00', halfHour: '12:30', period: 'pm'},
  {mainHour: '01:00', halfHour: '01:30', period: 'pm'},
  {mainHour: '02:00', halfHour: '02:30', period: 'pm'},
  {mainHour: '03:00', halfHour: '03:30', period: 'pm'},
  {mainHour: '04:00', halfHour: '04:30', period: 'pm'},
  {mainHour: '05:00', halfHour: '05:30', period: 'pm'},
  {mainHour: '06:00', halfHour: '06:30', period: 'pm'},
  {mainHour: '07:00', halfHour: '07:30', period: 'pm'},
];

const HourDescription = () => {
  return (
    <ContainerHourDescription>
      {hourBlock.map((item, index) => (
        <HourDescriptionStyled key={`hourDescription-${index}`}>
          <div>
            {item.mainHour}
            <small>{item.period}</small>
          </div>
          <small className="second-time">{item.halfHour}</small>
        </HourDescriptionStyled>
      ))}
    </ContainerHourDescription>
  );
};

export default HourDescription;
