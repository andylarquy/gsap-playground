type BurgerParams = {
  topRef: React.RefObject<HTMLElement>,
  centerRef: React.RefObject<HTMLElement>,
  bottomRef: React.RefObject<HTMLElement>,
  duration: number,
  reverse: boolean,
  timeline: gsap.core.Timeline
}

export const hoverInAnim = ({ timeline, topRef, centerRef, bottomRef, duration, reverse }: BurgerParams) => {
  timeline
    .fromTo(topRef.current, { left: 0, duration }, { left: '50%', duration }, 0)
    .fromTo(bottomRef.current, { left: '50%', duration }, { left: 0, duration }, 0)
    .fromTo(centerRef.current, { scaleX: 1 }, { scaleX: 0, duration: duration / 2 }, 0)
    .fromTo(centerRef.current, { scaleX: 0 }, { scaleX: 1, duration: duration / 2 }, '>50%')

  if (reverse) {
    timeline.reverse()
  } else {
    timeline.play()
  }
}
