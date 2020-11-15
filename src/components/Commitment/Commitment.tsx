import React from 'react';
import {CommitmentAddonsType} from '../../types/commitment.type';
import {CommitmentStyled} from './Commitment.styles';

type Props = CommitmentAddonsType & {title: string};

function Commitment({title, ...props}: Props) {
  return <CommitmentStyled {...props}>{title}</CommitmentStyled>;
}

export default Commitment;
