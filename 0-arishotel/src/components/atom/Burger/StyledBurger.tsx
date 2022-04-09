import styled from "styled-components";

const StyledBurgerSpan = styled.span`
  display: block;
  height: 3px;
  background-color: white;
  width: 20px
`;

export const StyledBurgerButton = styled.button`
  cursor: pointer;

  background: none;
  border: none;
  padding: 4px;
  
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  height: fit-content;
`;

export const StyledTopSpan = styled(StyledBurgerSpan)`
  width: 20px;
`;

export const StyledCenterSpan = styled(StyledBurgerSpan)`
  width: 40px;
`;

export const StyledBottomSpan = styled(StyledBurgerSpan)`
  width: 20px;
  transform: translateX(100%)
`;
