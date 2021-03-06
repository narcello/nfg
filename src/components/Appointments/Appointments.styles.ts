import styled from 'styled-components';

export const AppointmentsContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(24, 30px);
  row-gap: 2px;
  column-gap: 26px;
  grid-column: 1/3;
  padding: 0 30px;
`;
