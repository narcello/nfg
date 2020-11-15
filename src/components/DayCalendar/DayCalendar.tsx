import React from 'react';
import {CommitmentBaseType} from '../../types/commitment.type';
import {Commitments} from '../Commitments';
import {HourDescription} from '../HourDescription';
import {DayCalendarStyled} from './DayCalendar.styles';

type Props = {
  commitments: Array<CommitmentBaseType>;
};

function DayCalendar({commitments}: Props) {
  return (
    <DayCalendarStyled>
      <HourDescription />
      <Commitments commitments={commitments} />
    </DayCalendarStyled>
  );
}

export default DayCalendar;
