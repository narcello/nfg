import {
  CommitmentBaseType,
  CommitmentCompleteType,
} from '../types/commitment.type';

export function prepareCommitments(
  commitments: Array<CommitmentBaseType>,
): Array<CommitmentCompleteType> {
  const commitmentsOrdered = orderByAscendingOrder(commitments);
  const commitmentsInitialized = commitmentsOrdered.map((commitment) =>
    commitmentWithGridParams(commitment),
  );
  const commitmentsWithColumnParams = setCommitmentColumnParams(
    commitmentsInitialized,
  );
  return commitmentsWithColumnParams;
}

function commitmentWithGridParams(
  commitment: CommitmentBaseType,
): CommitmentCompleteType {
  return {
    ...commitment,
    gridColumnStart: 1,
    gridColumnEnd: 1,
    gridRowStart: 1,
    gridRowEnd: 1,
  };
}

function orderByAscendingOrder(
  commitments: Array<CommitmentBaseType>,
): Array<CommitmentBaseType> {
  return commitments.sort((next, current) =>
    next.start < current.start ? -1 : 1,
  );
}

function setCommitmentColumnParams(
  commitments: Array<CommitmentCompleteType>,
): Array<CommitmentCompleteType> {
  for (let i = 0; i < commitments.length - 1; i++) {
    const CURRENT_COMMITMENT = commitments[i];
    const NEXT_COMMITMENT = commitments[i + 1];
    if (
      nextCommitmentStartsBeforeTheEndOfCurrentCommitment(
        NEXT_COMMITMENT,
        CURRENT_COMMITMENT,
      )
    ) {
      NEXT_COMMITMENT.gridColumnStart = CURRENT_COMMITMENT.gridColumnStart + 1;
      NEXT_COMMITMENT.gridColumnEnd = 3;
      CURRENT_COMMITMENT.gridColumnEnd = 2;
    } else {
      CURRENT_COMMITMENT.gridColumnEnd = 3;
    }
  }
  return commitments;
}

function nextCommitmentStartsBeforeTheEndOfCurrentCommitment(
  nextCommitment: CommitmentCompleteType,
  currentCommitment: CommitmentCompleteType,
): boolean {
  return nextCommitment.start < currentCommitment.end;
}
