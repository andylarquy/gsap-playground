import {
  StyledBottomSpan,
  StyledBurgerButton,
  StyledCenterSpan,
  StyledTopSpan,
} from "./StyledBurger";
import { useRef, MouseEvent, useEffect } from "react";
import { hoverInAnim } from "./animBurger";
import gsap from "gsap";

export const Burger = ({ ...props }) => {
  const burgerRef = useRef({} as HTMLButtonElement);

  useEffect(() => {
    const duration = 0.5; //segs
    hoverInAnim({ timeline, duration, burgerRef });

    return () => {
      timeline.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const timeline = gsap.timeline({ paused: true });

  const handleHover = (event: MouseEvent) => {
    const reverse = event.type === "mouseleave";
    reverse ? timeline.reverse() : timeline.play();
  };

  return (
    <StyledBurgerButton
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      ref={burgerRef}
      {...props}
    >
      <StyledTopSpan />
      <StyledCenterSpan />
      <StyledBottomSpan />
    </StyledBurgerButton>
  );
};
