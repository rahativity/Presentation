/** Shared easing: a soft ease-out with no overshoot (no bounce). */
export const EASE = [0.22, 1, 0.36, 1]

/** Base durations kept inside the 300–500 ms range. */
export const DURATION = 0.45

/** Delay helper for progressive reveals. */
export const stagger = (i, base = 0.15, step = 0.08) => base + i * step
