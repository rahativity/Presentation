import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { EASE } from '../components/motion.js'
import { sections } from '../slides/sections.js'

/** Grid of every slide for quick jumps during Q&A. Opened with G / O. */
export default function Overview({ slides, index, onSelect, onClose }) {
  const currentRef = useRef(null)

  useEffect(() => {
    currentRef.current?.focus()
    currentRef.current?.scrollIntoView({ block: 'center' })
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (['Escape', 'g', 'G', 'o', 'O'].includes(e.key)) {
        e.preventDefault()
        onClose()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Slide overview"
      className="fixed inset-0 z-40 overflow-y-auto bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: EASE }}
    >
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 sm:py-14">
        <div className="flex items-end justify-between gap-6 border-b border-line pb-6">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-accent">
              Overview
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              System Analysis &amp; Design
            </h2>
          </div>
          <button
            id="overview-close"
            type="button"
            onClick={onClose}
            className="rounded-full border border-line px-4 py-2 text-sm text-muted transition-colors hover:border-ink hover:text-ink"
          >
            Close <span className="ml-1 text-muted/70">Esc</span>
          </button>
        </div>

        <ol className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {slides.map((s, i) => {
            const section = sections[s.section]
            const active = i === index
            return (
              <li key={s.id}>
                <button
                  id={`overview-slide-${i + 1}`}
                  ref={active ? currentRef : null}
                  type="button"
                  onClick={() => onSelect(i)}
                  className={`flex h-full w-full flex-col items-start rounded-xl border p-4 text-left transition-colors duration-200 ${
                    active ? 'border-accent bg-accent/[0.04]' : 'border-line hover:border-ink/30'
                  }`}
                >
                  <span className="text-xs tabular-nums text-muted">
                    {String(i + 1).padStart(2, '0')}
                    {section ? ` · ${section.label}` : ''}
                  </span>
                  <span className="mt-2 text-[15px] font-medium leading-snug text-ink">
                    {s.title}
                  </span>
                </button>
              </li>
            )
          })}
        </ol>

        <p className="mt-10 text-sm text-muted">
          <Kbd>←</Kbd> <Kbd>→</Kbd> navigate · <Kbd>Space</Kbd> next · <Kbd>Home</Kbd>{' '}
          <Kbd>End</Kbd> first / last · <Kbd>F</Kbd> fullscreen · <Kbd>G</Kbd> overview
        </p>
      </div>
    </motion.div>
  )
}

function Kbd({ children }) {
  return (
    <kbd className="rounded border border-line px-1.5 py-0.5 font-sans text-xs text-ink">
      {children}
    </kbd>
  )
}
