export type CommitmentBaseType = {
  start: number;
  end: number;
  title: string;
};

export type CommitmentAddonsType = {
  gridRowStart: number;
  gridRowEnd: number;
  gridColumnStart: number;
  gridColumnEnd: number;
};

export type CommitmentCompleteType = CommitmentBaseType & CommitmentAddonsType;
