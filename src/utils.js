let mock = [
  { start: 300, end: 360},
  { start: 330, end: 390},
  { start: 180, end: 240},
  { start: 390, end: 420},
  { start: 180, end: 240},
  { start: 30, end: 150},
]

function InitCoordinateX(commitment) {
  this.start = commitment.start;
  this.end = commitment.end;
  this.coordinateX = 0;
}

function ascendingOrder(commitments) {
  return commitments.sort((current, next) => current.start > next.start);
}

function setStartPointCommitment(commitments) {
  for(let i = 0; i < commitments.length - 1; i++) {
    if(nextCommitmentStartsBeforeTheEndOfCurrentCommitment(commitments[i + 1], commitments[i]))
      commitments[i + 1].coordinateX = + commitments[i].coordinateX + 1
  }
  return commitments;
}

function nextCommitmentStartsBeforeTheEndOfCurrentCommitment(nextCommitment, currentCommitment){
  return nextCommitment.start < currentCommitment.end;
}

let commitmentsInitialized = mock.map(item => new InitCoordinateX(item))
let commitmentsOrdered = ascendingOrder(commitmentsInitialized);
let commitmentsWithCoordinateX = setStartPointCommitment(commitmentsOrdered);
console.log(commitmentsWithCoordinateX);