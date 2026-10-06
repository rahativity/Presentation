import { useEffect, useRef, useState } from 'react'

const IDLE_MS = 2500

function Icon({ d, className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`size-[18px] ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {d}
    </svg>
  )
}

const icons = {
  prev: <path d="M15 6l-6 6 6 6" />,
  next: <path d="M9 6l6 6-6 6" />,
  grid: (
    <>
      <rect x="4" y="4" width="6.5" height="6.5" rx="1.5" />
      <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.5" />
      <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.5" />
      <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.5" />
    </>
  ),
  expand: <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />,
  collapse: <path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5" />,
}

function ControlButton({ label, onClick, disabled, children, id }) {
  return (
    <button
      id={id}
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      title={label}
      className="grid size-9 place-items-center rounded-full text-muted transition-colors duration-200 hover:bg-surface hover:text-ink disabled:pointer-events-none disabled:opacity-30"
    >
      {children}
    </button>
  )
}

/** Floating presenter controls. Fade out while the mouse is idle. */
export default function Controls({
  index,
  total,
  onPrev,
  onNext,
  onOverview,
  onFullscreen,
  isFullscreen,
}) {
  const [visible, setVisible] = useState(true)
  const timer = useRef(null)

  useEffect(() => {
    const wake = () => {
      setVisible(true)
      clearTimeout(timer.current)
      timer.current = setTimeout(() => setVisible(false), IDLE_MS)
    }
    wake()
    window.addEventListener('mousemove', wake)
    window.addEventListener('touchstart', wake)
    return () => {
      clearTimeout(timer.current)
      window.removeEventListener('mousemove', wake)
      window.removeEventListener('touchstart', wake)
    }
  }, [])

  return (
    <nav
      aria-label="Slide controls"
      className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-0.5 rounded-full border border-line bg-white px-2 py-1 transition-opacity duration-300 focus-within:opacity-100 hover:opacity-100 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <ControlButton id="control-prev" label="Previous slide (←)" onClick={onPrev} disabled={index === 0}>
        <Icon d={icons.prev} />
      </ControlButton>
      <span className="min-w-[64px] text-center text-caption tabular-nums text-muted">
        {index + 1} / {total}
      </span>
      <ControlButton
        id="control-next"
        label="Next slide (→)"
        onClick={onNext}
        disabled={index === total - 1}
      >
        <Icon d={icons.next} />
      </ControlButton>
      <span className="mx-1 h-5 w-px bg-line" aria-hidden="true" />
      <ControlButton id="control-overview" label="Slide overview (G)" onClick={onOverview}>
        <Icon d={icons.grid} />
      </ControlButton>
      <ControlButton
        id="control-fullscreen"
        label={isFullscreen ? 'Exit fullscreen (F)' : 'Fullscreen (F)'}
        onClick={onFullscreen}
      >
        <Icon d={isFullscreen ? icons.collapse : icons.expand} />
      </ControlButton>
    </nav>
  )
}
