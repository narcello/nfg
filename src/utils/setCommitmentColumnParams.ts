export function setCommitmentColumnParams(commitments) {
  for (let i = 0; i < commitments.length - 1; i++) {
    if (
      nextCommitmentStartsBeforeTheEndOfCurrentCommitment(
        commitments[i + 1],
        commitments[i],
      )
    ) {
      commitments[i + 1].gridColumnStart = commitments[i].gridColumnStart + 1;
      commitments[i + 1].gridColumnEnd = 3;
      commitments[i].gridColumnEnd = 2;
    } else {
      commitments[i].gridColumnEnd = 3;
    }
  }
  return commitments;
}

function nextCommitmentStartsBeforeTheEndOfCurrentCommitment(
  nextCommitment,
  currentCommitment,
) {
  return nextCommitment.start < currentCommitment.end;
}
