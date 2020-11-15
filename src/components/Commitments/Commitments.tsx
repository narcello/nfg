import React from 'react';
import {CommitmentBaseType} from '../../types/commitment.type';
import {getGridRowPosition, prepareCommitments} from '../../utils';
import {Commitment} from '../Commitment';
import {CommitmentsContainer} from './Commitments.styles';

type Props = {
  commitments: Array<CommitmentBaseType>;
};

function Commitments({commitments}: Props) {
  const preparedCommitments = prepareCommitments(commitments);
  return (
    <CommitmentsContainer>
      {preparedCommitments.map((commiment) => {
        return (
          <Commitment
            gridRowStart={getGridRowPosition(commiment.start || 0)}
            gridRowEnd={getGridRowPosition(commiment.end || 0)}
            gridColumnStart={commiment.gridColumnStart}
            gridColumnEnd={commiment.gridColumnEnd}
            title={commiment.title}
          />
        );
      })}
    </CommitmentsContainer>
  );
}

export default Commitments;
