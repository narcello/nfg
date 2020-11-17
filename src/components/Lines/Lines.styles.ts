import styled from 'styled-components';

type LineProps = {
  gridRow: number;
};

export const Line = styled.div<LineProps>`
  width: 100%;
  height: 1px;
  background-color: black;
  grid-column: 1 / 3;
  grid-row: ${(props) => props.gridRow};
`;
