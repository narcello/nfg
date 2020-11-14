import {CommitmentType} from '../components/Commitment/mock';

export function InitCommitmentGridColumnWidth(commitment: CommitmentType) {
  this.start = commitment.start;
  this.end = commitment.end;
  this.title = commitment.title;
  this.gridColumnStart = 1;
  this.gridColumnEnd = 3;
}
