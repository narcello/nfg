import styled from 'styled-components';

export const ContainerHourDescription = styled.div`
  display: grid;
  grid-gap: 2px;
`;

const HourDescriptionStyled = styled.div`
  display: grid;
  height: 60px;
  float: right;
  justify-items: right;
  font-size: 16px;
  line-height: 18.75px;
  margin-bottom: 1px;
  margin-top: -5px;
  will-change: transform;
  cursor: pointer;
  transition: 0.3s ease transform;
  & small {
    color: #a4a4a4;
    margin-left: 10px;
  }
  &:hover {
    transform: translate3d(3px, -3px, 0px);
  }
`;

export {HourDescriptionStyled};
