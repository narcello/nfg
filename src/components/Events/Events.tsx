import React from 'react';
import {Commitment} from '../Commitment';
import {mockCommitments} from '../Commitment/mock';
import {HourGapStyled} from './Events.styles';

function Events() {
  return (
    <HourGapStyled>
      {mockCommitments.map((commiment) => {
        return (
          <Commitment
            gridRowStart={1}
            gridRowEnd={3}
            gridColumnStart={1}
            gridColumnEnd={3}
            title={commiment.title}
          />
        );
      })}
    </HourGapStyled>
  );
}

export default Events;
