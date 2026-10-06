import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import { SlideContext } from './SlideContext.js'
import Controls from './Controls.jsx'
import Overview from './Overview.jsx'
import { EASE } from '../components/motion.js'

/** Slides are authored on a fixed 16:9 canvas and scaled to fit any screen. */
export const CANVAS_W = 1600
export const CANVAS_H = 900

const NEXT_KEYS = new Set(['ArrowRight', 'ArrowDown', 'PageDown', ' ', 'Enter'])
const PREV_KEYS = new Set(['ArrowLeft', 'ArrowUp', 'PageUp', 'Backspace'])

function readHashIndex(total) {
  const n = parseInt(window.location.hash.replace('#', ''), 10)
  return Number.isFinite(n) && n >= 1 && n <= total ? n - 1 : 0
}

/** Don't hijack keys that a focused form control needs for itself. */
function isOwnedByControl(event) {
  const t = event.target
  if (!(t instanceof HTMLElement)) return false
  if (t.isContentEditable || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT') return true
  if (t.tagName === 'INPUT') {
    // Checkboxes only use Space; arrow keys can still change slides.
    if (t.type === 'checkbox') return event.key === ' ' || event.key === 'Enter'
    return true
  }
  if (t.tagName === 'BUTTON' || t.tagName === 'A') return event.key === ' ' || event.key === 'Enter'
  return false
}

export default function Deck({ slides }) {
  const total = slides.length
  const [index, setIndex] = useState(() => readHashIndex(total))
  const [scale, setScale] = useState(1)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [overviewOpen, setOverviewOpen] = useState(false)
  const touchStart = useRef(null)

  const goTo = useCallback((i) => setIndex(Math.max(0, Math.min(total - 1, i))), [total])
  const next = useCallback(() => setIndex((i) => Math.min(total - 1, i + 1)), [total])
  const prev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), [])

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {})
    } else {
      document.exitFullscreen?.()
    }
  }, [])

  // Fit the canvas to the viewport.
  useLayoutEffect(() => {
    const update = () =>
      setScale(Math.min(window.innerWidth / CANVAS_W, window.innerHeight / CANVAS_H))
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  // Keep the URL hash in sync so a refresh stays on the same slide.
  useEffect(() => {
    window.history.replaceState(null, '', `#${index + 1}`)
    document.title = `${index + 1}. ${slides[index].title} — System Analysis & Design`
  }, [index, slides])

  useEffect(() => {
    const onHash = () => setIndex(readHashIndex(total))
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [total])

  useEffect(() => {
    const onChange = () => setIsFullscreen(Boolean(document.fullscreenElement))
    document.addEventListener('fullscreenchange', onChange)
    return () => document.removeEventListener('fullscreenchange', onChange)
  }, [])

  // Keyboard navigation.
  useEffect(() => {
    const onKey = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      if (isOwnedByControl(e)) {
        if (e.key === 'Escape') e.target.blur()
        return
      }
      if (overviewOpen) return // the overview handles its own keys

      if (NEXT_KEYS.has(e.key)) {
        e.preventDefault()
        next()
      } else if (PREV_KEYS.has(e.key)) {
        e.preventDefault()
        prev()
      } else if (e.key === 'Home') {
        e.preventDefault()
        goTo(0)
      } else if (e.key === 'End') {
        e.preventDefault()
        goTo(total - 1)
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen()
      } else if (['g', 'G', 'o', 'O'].includes(e.key)) {
        setOverviewOpen(true)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev, goTo, total, toggleFullscreen, overviewOpen])

  // Swipe navigation on touch devices.
  const onTouchStart = (e) => {
    if (e.target.closest('input, select, textarea, button')) return
    const t = e.touches[0]
    touchStart.current = { x: t.clientX, y: t.clientY }
  }
  const onTouchEnd = (e) => {
    if (!touchStart.current) return
    const t = e.changedTouches[0]
    const dx = t.clientX - touchStart.current.x
    const dy = t.clientY - touchStart.current.y
    touchStart.current = null
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) next()
      else prev()
    }
  }

  const current = slides[index]
  const SlideComponent = current.Component

  return (
    <MotionConfig reducedMotion="user">
      <main
        className="fixed inset-0 overflow-hidden bg-white"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <h1 className="sr-only">
          System Analysis &amp; Design: System Interface, Navigation, Input and Output Design
        </h1>

        {/* Progress indicator */}
        <div
          className="fixed inset-x-0 top-0 z-20 h-[3px] bg-line/60"
          role="progressbar"
          aria-label="Presentation progress"
          aria-valuemin={1}
          aria-valuemax={total}
          aria-valuenow={index + 1}
        >
          <motion.div
            className="h-full bg-accent"
            initial={false}
            animate={{ width: `${((index + 1) / total) * 100}%` }}
            transition={{ duration: 0.45, ease: EASE }}
          />
        </div>

        {/* Scaled 16:9 canvas */}
        <div
          className="absolute left-1/2 top-1/2"
          style={{
            width: CANVAS_W,
            height: CANVAS_H,
            transform: `translate(-50%, -50%) scale(${scale})`,
          }}
        >
          <AnimatePresence mode="wait">
            <motion.section
              key={current.id}
              className="absolute inset-0"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1} of ${total}: ${current.title}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } }}
              exit={{ opacity: 0, y: -8, transition: { duration: 0.3, ease: EASE } }}
            >
              <SlideContext.Provider value={{ index, total, slide: current }}>
                <SlideComponent />
              </SlideContext.Provider>
            </motion.section>
          </AnimatePresence>
        </div>

        <Controls
          index={index}
          total={total}
          onPrev={prev}
          onNext={next}
          onOverview={() => setOverviewOpen(true)}
          onFullscreen={toggleFullscreen}
          isFullscreen={isFullscreen}
        />

        {/* Hint for phones held upright */}
        <p className="pointer-events-none fixed inset-x-0 bottom-20 hidden justify-center text-caption text-muted max-sm:portrait:flex">
          Rotate your device for a larger view
        </p>

        <AnimatePresence>
          {overviewOpen && (
            <Overview
              slides={slides}
              index={index}
              onSelect={(i) => {
                goTo(i)
                setOverviewOpen(false)
              }}
              onClose={() => setOverviewOpen(false)}
            />
          )}
        </AnimatePresence>
      </main>
    </MotionConfig>
  )
}
