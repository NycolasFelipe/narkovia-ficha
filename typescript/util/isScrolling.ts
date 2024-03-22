function isScrolling(ms: number = 200) {
  //@ts-ignore
  if (typeof window.lastScrollTime !== "undefined") {
    //@ts-ignore
    return window.lastScrollTime && new Date().getTime() < window.lastScrollTime + ms;
  }
}

export default isScrolling;