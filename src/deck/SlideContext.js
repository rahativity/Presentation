import { createContext, useContext } from 'react'

/**
 * Provides the current slide's position and metadata to slide components,
 * so layouts can render section labels and page numbers automatically.
 */
export const SlideContext = createContext({
  index: 0,
  total: 1,
  slide: null,
})

export function useSlide() {
  return useContext(SlideContext)
}
