
import gsap from "gsap"

export const fromToTween = (
  targets: gsap.TweenTarget,
  fromVars: gsap.TweenVars,
  toVars: gsap.TweenVars
) => gsap.fromTo(targets, fromVars, toVars)

export const getChildrenOf = (elem: HTMLElement, selector: string) => gsap.utils.selector(elem)(selector)