import { getChildrenOf, fromToTween } from "../../../utils/gsapHelpers"

type BurgerParams = {
  burgerRef: React.RefObject<HTMLElement>,
  duration: number,
  timeline: gsap.core.Timeline
}

export const hoverInAnim = ({ timeline, duration, burgerRef }: BurgerParams) => {
  const { current: burgerElem } = burgerRef
  if (!burgerElem) return

  const [topRef, centerRef, bottomRef] = getChildrenOf(burgerElem, 'span')

  timeline
    .add(fromToTween(topRef, { x: 0, duration }, { x: '100%', duration }), 'begin')
    .add(fromToTween(bottomRef, { x: '100%', duration }, { x: 0, duration }), 'begin')
    .add(fromToTween(centerRef, { scaleX: 0 }, { scaleX: 1, duration: duration / 2, delay: duration / 2 }), 'begin')
    .add(fromToTween(centerRef, { scaleX: 1 }, { scaleX: 0, duration: duration / 2 }), 'begin')
}
