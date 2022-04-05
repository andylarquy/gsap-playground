import styled from "styled-components";

const StyledBurgerSpan = styled.span`
  display: block;
  height: 3px;
  position: absolute;
  background-color: white;
  width: 20px
`;

export const StyledBurgerButton = styled.button`
  cursor: pointer;

  background: none;
  border: none;
  padding: 0;
  
  position: relative;
  width: 40px;
  height: 24px;
`;

export const StyledTopSpan = styled(StyledBurgerSpan)`
  width: 20px;
  top: 0;
  left: 0;
`;

export const StyledCenterSpan = styled(StyledBurgerSpan)`
  width: 40px;
  top: 10px;
  left: 0;
`;

export const StyledBottomSpan = styled(StyledBurgerSpan)`
  width: 20px;
  top: 20px;
  left: 50%;
`;
