import styled from 'styled-components';
import {CommitmentAddonsType} from '../../types/commitment.type';

export const CommitmentStyled = styled.div<CommitmentAddonsType>`
  background-color: #eaeaea;
  border-radius: 10px;
  padding: 10px 0 0 18px;
  grid-row-start: ${(props) => props.gridRowStart};
  grid-row-end: ${(props) => props.gridRowEnd};
  grid-column-start: ${(props) => props.gridColumnStart};
  grid-column-end: ${(props) => props.gridColumnEnd};
`;
