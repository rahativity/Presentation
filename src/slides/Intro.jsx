import { motion } from 'framer-motion'
import { SlideFooter, SlideHeader, SlideShell } from '../components/Slide.jsx'
import { GrowLine, Kbd, Reveal } from '../components/ui.jsx'
import { EASE } from '../components/motion.js'

/* ------------------------------------------------------------------
   01 · Welcome
------------------------------------------------------------------- */
export function Welcome() {
  return (
    <div className="relative flex h-full flex-col justify-between px-[112px] pt-[96px] pb-[72px]">
      <Reveal y={6}>
        <p className="text-eyebrow font-semibold uppercase text-accent">Lecture Presentation</p>
      </Reveal>

      <div>
        <Reveal delay={0.08}>
          <h2 className="text-display font-semibold text-ink">
            System Analysis
            <br />
            &amp; Design
          </h2>
        </Reveal>
        <motion.div
          className="mt-12 h-[3px] w-24 origin-left bg-accent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
        />
        <Reveal delay={0.35}>
          <p className="mt-10 max-w-[980px] text-[30px] leading-[1.4] text-muted">
            System Interface Design, Navigation Design, Input Design and Output Design
          </p>
        </Reveal>
        <Reveal delay={0.42}>
          <div className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-accent/[0.05] px-5 py-2 text-[20px] font-semibold text-accent">
            <span className="size-2.5 rounded-full bg-accent" />
            <span>Presented by Team 4</span>
          </div>
        </Reveal>
      </div>

      <Reveal
        delay={0.5}
        className="flex items-center justify-between border-t border-line pt-6 text-caption text-muted"
      >
        <span>Presented by Team 4</span>
        <span className="flex items-center gap-2">
          Press <Kbd>→</Kbd> to begin · <Kbd>F</Kbd> for fullscreen
        </span>
      </Reveal>
    </div>
  )
}

/* ------------------------------------------------------------------
   02 · Learning overview — vertical timeline
------------------------------------------------------------------- */
const roadmap = [
  ['UI Design Principles', 'Foundations of usable, aesthetic, and low-effort interfaces'],
  ['UI Design Process', 'From use scenarios to iterative prototyping and evaluation'],
  ['Navigation Design', 'Principles, controls, components, menus, and messaging'],
  ['Input Design & Validation', 'Source data capture, controls, and multi-tier validation'],
  ['Output Design & Case Study', 'Reports, dashboards, and the end-to-end Tune Source journey'],
  ['Summary & Discussion', 'Key takeaways, seminar activity, and academic discussion'],
]

export function LearningOverview() {
  return (
    <SlideShell footer={false}>
      <div className="grid h-full grid-cols-[1fr_1.25fr] gap-24">
        <div className="flex flex-col">
          <SlideHeader title="Learning Overview" />
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-[480px] text-lead text-muted">
              Six parts — from the principles behind good interfaces to applying them in a complete real-world system.
            </p>
          </Reveal>
        </div>

        <ol className="relative -mt-2 flex flex-col justify-between py-1">
          <GrowLine
            vertical
            delay={0.15}
            className="absolute bottom-[44px] left-[71.5px] top-[16px] bg-line"
          />
          {roadmap.map(([title, text], i) => (
            <Reveal
              as="li"
              key={title}
              delay={0.2 + i * 0.07}
              className="relative grid grid-cols-[52px_40px_1fr] items-start"
            >
              <span className="pt-[3px] text-small font-semibold tabular-nums text-accent">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="relative mt-[9px] flex justify-center">
                <span className="size-[11px] rounded-full border-2 border-accent bg-white" />
              </span>
              <div>
                <p className="text-[24px] font-semibold leading-tight tracking-[-0.01em] text-ink">
                  {title}
                </p>
                <p className="mt-1 text-small text-muted">{text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
      <SlideFooter />
    </SlideShell>
  )
}
