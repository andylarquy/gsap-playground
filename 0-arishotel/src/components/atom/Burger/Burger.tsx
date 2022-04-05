import {
  StyledBottomSpan,
  StyledBurgerButton,
  StyledCenterSpan,
  StyledTopSpan,
} from "./StyledBurger";

import { useRef, MouseEvent } from "react";
import { hoverInAnim } from "./animBurger";
import gsap from "gsap";

export const Burger = ({ ...props }) => {
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
      {...props}
    >
      <StyledTopSpan ref={burgerRef.topRef} />
      <StyledCenterSpan ref={burgerRef.centerRef} />
      <StyledBottomSpan ref={burgerRef.bottomRef} />
    </StyledBurgerButton>
  );
};
