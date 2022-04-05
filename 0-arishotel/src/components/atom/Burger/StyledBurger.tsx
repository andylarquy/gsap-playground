import styled from "styled-components";

interface StyledSpanProps {
  width: number;
  height: number;
}

interface StyledButtonProps {
  width: number;
  height: number;
}

export const StyledBurgerButton = styled.button<StyledButtonProps>`
  display: flex;
  flex-direction: column;
  justify-content: start;
  row-gap: 8px;
  cursor: pointer;

  position: relative;
  background: none;
  border: none;

  width: ${(props) => `${props.width * 2}px`};
  height: ${(props) => `${props.height}px`};
`;

export const StyledTopSpan = styled.span<StyledSpanProps>`
  display: block;
  height: 3px;
  width: ${(props) => `${props.width}px`};
  background-color: white;

  position: absolute;
  top: 0;
  left: 0;
`;

export const StyledCenterSpan = styled.span<StyledSpanProps>`
  display: block;
  height: 3px;
  width: ${(props) => `${props.width * 2}px`};
  background-color: white;

  position: absolute;
  top: ${(props) => `${props.height / 4}px`};
  left: 0;
`;

export const StyledBottomSpan = styled.span<StyledSpanProps>`
  display: block;
  height: 3px;
  width: ${(props) => `${props.width}px`};
  background-color: white;

  position: absolute;
  top: ${(props) => `${props.height / 2}px`};
  left: 50%;
`;


