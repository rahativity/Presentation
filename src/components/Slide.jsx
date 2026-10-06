import { useSlide } from '../deck/SlideContext.js'
import { sections } from '../slides/sections.js'
import { Reveal } from './ui.jsx'

const pad = (n) => String(n).padStart(2, '0')

function useEyebrow(override) {
  const { slide } = useSlide()
  if (override !== undefined) return override
  const section = slide && sections[slide.section]
  if (!section) return null
  return section.number ? `${pad(section.number)} — ${section.label}` : section.label
}

/** Page frame: consistent margins plus the running footer. */
export function SlideShell({ className = '', footer = true, children }) {
  return (
    <div className={`relative flex h-full flex-col px-[112px] pt-[76px] pb-[100px] ${className}`}>
      {children}
      {footer && <SlideFooter />}
    </div>
  )
}

export function SlideFooter() {
  const { index, total } = useSlide()
  return (
    <div className="absolute inset-x-[112px] bottom-[18px] flex items-center justify-end text-caption text-muted">
      <span className="tabular-nums">
        {pad(index + 1)} <span className="text-muted/50">/ {pad(total)}</span>
      </span>
    </div>
  )
}

/** Eyebrow (section) + title + optional one-line subtitle. */
export function SlideHeader({ eyebrow, title, subtitle, className = '' }) {
  const label = useEyebrow(eyebrow)
  return (
    <header className={className}>
      {label && (
        <Reveal y={6}>
          <p className="text-eyebrow font-semibold uppercase text-accent">{label}</p>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="mt-4 text-title font-semibold text-ink">{title}</h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className="mt-4 max-w-[1100px] text-lead text-muted">{subtitle}</p>
        </Reveal>
      )}
    </header>
  )
}

/** Standard slide: header on top, content fills the remaining space. */
export default function Slide({ eyebrow, title, subtitle, className = '', children }) {
  return (
    <SlideShell>
      <SlideHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div className={`mt-9 min-h-0 flex-1 ${className}`}>{children}</div>
    </SlideShell>
  )
}
