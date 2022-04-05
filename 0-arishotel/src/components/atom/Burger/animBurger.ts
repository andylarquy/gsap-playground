type BurgerParams = {
  topRef: React.RefObject<HTMLElement>,
  centerRef: React.RefObject<HTMLElement>,
  bottomRef: React.RefObject<HTMLElement>,
  duration: number,
  reverse: boolean,
  timeline: any
}

export const hoverInAnim = ({ timeline, topRef, centerRef, bottomRef, duration, reverse }: BurgerParams) => {
  const positionRight = { left: '50%', duration }
  const positionLeft = { left: 0, duration }
  const halfTime = duration / 2
  timeline
    .fromTo(topRef.current, positionLeft, positionRight, 0)
    .fromTo(bottomRef.current, positionRight, positionLeft, 0)
    .fromTo(centerRef.current, { scaleX: 1 }, { scaleX: 0, duration: halfTime }, 0)
    .fromTo(centerRef.current, { scaleX: 0 }, { scaleX: 1, duration: halfTime }, halfTime)


  if (reverse) {
    timeline.reverse()
  } else {
    timeline.play()
  }
}
