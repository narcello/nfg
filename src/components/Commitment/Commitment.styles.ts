import styled from 'styled-components';

export type CommitmentStyledType = {
  gridRowStart: number;
  gridRowEnd: number;
  gridColumnStart: number;
  gridColumnEnd: number;
};

export const CommitmentStyled = styled.div<CommitmentStyledType>`
  background-color: #eaeaea;
  border-radius: 10px;
  padding: 10px 0 0 18px;
  grid-row-start: ${(props) => props.gridRowStart};
  grid-row-end: ${(props) => props.gridRowEnd};
  grid-column-start: ${(props) => props.gridColumnStart};
  grid-column-end: ${(props) => props.gridColumnEnd};
`;

CommitmentStyled.defaultProps = {
  gridRowStart: 1,
  gridRowEnd: 2,
  gridColumnStart: 1,
  gridColumnEnd: 3,
};
