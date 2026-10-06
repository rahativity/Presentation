import { motion } from 'framer-motion'
import { DURATION, EASE } from './motion.js'

/* ------------------------------------------------------------------
   Small, reusable building blocks shared by every slide.
------------------------------------------------------------------- */

/** Fade in with a slight upward motion. */
export function Reveal({ as = 'div', delay = 0, y = 12, className = '', children, ...rest }) {
  const Component = motion[as] ?? motion.div
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: DURATION, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Component>
  )
}

/** A line that draws itself — used for connectors in process diagrams. */
export function GrowLine({ vertical = false, delay = 0, className = '' }) {
  return (
    <motion.span
      aria-hidden="true"
      className={`block ${vertical ? 'w-px origin-top' : 'h-px origin-left'} ${className}`}
      initial={vertical ? { scaleY: 0 } : { scaleX: 0 }}
      animate={vertical ? { scaleY: 1 } : { scaleX: 1 }}
      transition={{ duration: DURATION, delay, ease: EASE }}
    />
  )
}

/** Connector with an arrowhead. Stretches to fill its flex container. */
export function FlowArrow({ vertical = false, delay = 0, className = '' }) {
  return (
    <motion.div
      aria-hidden="true"
      className={`flex items-center ${vertical ? 'flex-col' : ''} ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay, ease: EASE }}
    >
      <GrowLine vertical={vertical} delay={delay} className={`flex-1 bg-ink/25`} />
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        className={`shrink-0 text-ink/40 ${vertical ? '-mt-1.5 rotate-90' : '-ml-1.5'}`}
      >
        <path
          d="M4 2l4 4-4 4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  )
}

/** Two-digit index label, e.g. "03". */
export function Index({ n, className = '' }) {
  return (
    <span className={`font-semibold tabular-nums text-accent ${className}`}>
      {String(n).padStart(2, '0')}
    </span>
  )
}

/** Hairline-bordered card. No shadows. */
export function Card({ className = '', children, ...rest }) {
  return (
    <div className={`rounded-2xl border border-line bg-white ${className}`} {...rest}>
      {children}
    </div>
  )
}

/** Animated card with progressive reveal. */
export function RevealCard({ delay = 0, className = '', children }) {
  return (
    <Reveal
      delay={delay}
      className={`rounded-2xl border border-line bg-white transition-colors duration-300 hover:border-accent/40 ${className}`}
    >
      {children}
    </Reveal>
  )
}

/** Term + short description list with a minimal accent marker. */
export function Points({ items, delay = 0.2, step = 0.08, className = '', size = 'body' }) {
  return (
    <ul className={`space-y-6 ${className}`}>
      {items.map((item, i) => (
        <Reveal as="li" key={item.title} delay={delay + i * step} className="flex gap-5">
          <span className="mt-[0.7em] h-px w-5 shrink-0 bg-accent" aria-hidden="true" />
          <div>
            <p className={`font-semibold text-ink ${size === 'body' ? 'text-body' : 'text-small'}`}>
              {item.title}
            </p>
            {item.text && (
              <p className={`mt-1 text-muted ${size === 'body' ? 'text-small' : 'text-caption'}`}>
                {item.text}
              </p>
            )}
          </div>
        </Reveal>
      ))}
    </ul>
  )
}

/** Small uppercase label used inside diagrams and cards. */
export function Label({ className = '', children }) {
  return (
    <p
      className={`text-[12px] font-semibold uppercase tracking-[0.14em] text-muted ${className}`}
    >
      {children}
    </p>
  )
}

/** Outline chip for tags such as media types or check types. */
export function Chip({ accent = false, className = '', children }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-caption ${
        accent ? 'border-accent/30 bg-accent/[0.05] text-accent' : 'border-line text-muted'
      } ${className}`}
    >
      {children}
    </span>
  )
}

/** Keyboard key glyph. */
export function Kbd({ children }) {
  return (
    <kbd className="inline-flex min-w-7 items-center justify-center rounded-md border border-line px-1.5 py-0.5 font-sans text-caption text-ink">
      {children}
    </kbd>
  )
}

/** Mock browser/app window used for wireframes. */
export function Window({ className = '', bodyClassName = '', title, highlight = false, children }) {
  return (
    <div
      className={`flex flex-col overflow-hidden rounded-xl border bg-white ${
        highlight ? 'border-accent/60' : 'border-line'
      } ${className}`}
    >
      <div className="flex h-8 shrink-0 items-center gap-1.5 border-b border-line bg-surface px-3">
        <span className="size-2 rounded-full bg-ink/15" />
        <span className="size-2 rounded-full bg-ink/15" />
        <span className="size-2 rounded-full bg-ink/15" />
        {title && <span className="ml-3 truncate text-[11px] text-muted">{title}</span>}
      </div>
      <div className={`min-h-0 flex-1 ${bodyClassName}`}>{children}</div>
    </div>
  )
}

/** Grey placeholder bar for wireframe text. */
export function Bar({ className = '' }) {
  return <span className={`block h-2 rounded-full bg-ink/10 ${className}`} />
}
