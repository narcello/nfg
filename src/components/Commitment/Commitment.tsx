import React from 'react';
import {CommitmentStyled, CommitmentStyledType} from './Commitment.styles';

interface CommitmentProps extends CommitmentStyledType {
  title: String;
}

function Commitment({title, ...props}: CommitmentProps) {
  return <CommitmentStyled {...props}>{title}</CommitmentStyled>;
}

export default Commitment;
