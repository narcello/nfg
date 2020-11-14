import React from 'react';
import {
  InitCommitmentGridColumnWidth,
  setCommitmentColumnParams,
} from '../../utils';
import {orderByAscendingOrder} from '../../utils/orderByAscendingOrder';
import {Commitment} from '../Commitment';
import {mockCommitments} from '../Commitment/mock';
import {HourGapStyled} from './Events.styles';

const getGridRowPosition = (param: number): number => {
  return param / 30 + 1;
};

function Events() {
  const commitmentsInitialized = mockCommitments.map(
    (item) => new InitCommitmentGridColumnWidth(item),
  );
  const commitmentsOrdered = orderByAscendingOrder(commitmentsInitialized);
  const commitmentsWithColumnParams = setCommitmentColumnParams(
    commitmentsOrdered,
  );
  return (
    <HourGapStyled>
      {commitmentsWithColumnParams.map((commiment) => {
        return (
          <Commitment
            gridRowStart={getGridRowPosition(commiment.start)}
            gridRowEnd={getGridRowPosition(commiment.end)}
            gridColumnStart={commiment.gridColumnStart}
            gridColumnEnd={commiment.gridColumnEnd}
            title={commiment.title}
          />
        );
      })}
    </HourGapStyled>
  );
}

export default Events;
