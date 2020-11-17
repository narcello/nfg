import styled from 'styled-components';

export const DayCalendarStyled = styled.div`
  display: grid;
  grid-template-columns: 100px auto;
  gap: 5px;
  margin-top: 20px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(24, 30px);
  row-gap: 2px;
  border: 1px solid black;
`;
