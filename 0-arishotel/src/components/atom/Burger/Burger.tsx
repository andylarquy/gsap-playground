import {
  StyledBottomSpan,
  StyledBurgerButton,
  StyledCenterSpan,
  StyledTopSpan,
} from "./StyledBurger";

import { useRef, MouseEvent } from "react";
import { hoverInAnim } from "./animBurger";
import gsap from "gsap";

type BurgerProps = { height: number; width: number };

export const Burger = ({ height, width, ...props }: BurgerProps) => {
  const burgerRef = {
    topRef: useRef({} as HTMLElement),
    centerRef: useRef({} as HTMLElement),
    bottomRef: useRef({} as HTMLElement),
  };

  const timeline = gsap.timeline({ paused: true });

  const handleHover = (event: MouseEvent) => {
    const reverse = event.type === "mouseleave";
    const duration = 0.5; //segs
    hoverInAnim({ timeline, duration, ...burgerRef, reverse });
  };

  return (
    <StyledBurgerButton
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      width={width}
      height={height}
      {...props}
    >
      <StyledTopSpan ref={burgerRef.topRef} width={width} height={height} />
      <StyledCenterSpan
        ref={burgerRef.centerRef}
        width={width}
        height={height}
      />
      <StyledBottomSpan
        ref={burgerRef.bottomRef}
        width={width}
        height={height}
      />
    </StyledBurgerButton>
  );
};
