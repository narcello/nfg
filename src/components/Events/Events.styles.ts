import styled from 'styled-components';

export const HourGapStyled = styled.div`
  display: grid;
  grid-template-areas: 'a b';
  grid-template-rows: repeat(24, 30px);
  row-gap: 2px;
  padding: 0 30px;
`;
