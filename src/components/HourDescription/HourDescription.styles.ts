import styled from 'styled-components';

const HourDescriptionStyled = styled.div`
  display: grid;
  height: 60px;
  float: right;
  justify-items: right;
  font-size: 16px;
  line-height: 18.75px;
  margin-bottom: 1px;
  border: 1px solid transparent;
  margin-top: -2px;
  & small {
    color: #a4a4a4;
    margin-left: 10px;
  }
`;

export {HourDescriptionStyled};
