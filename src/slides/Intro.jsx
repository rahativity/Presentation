import { motion } from 'framer-motion'
import { SlideFooter, SlideHeader, SlideShell } from '../components/Slide.jsx'
import { GrowLine, Kbd, Reveal } from '../components/ui.jsx'
import { EASE } from '../components/motion.js'

/* ------------------------------------------------------------------
   01 · Welcome
------------------------------------------------------------------- */
const teamMembers = [
  { no: '01', name: 'Sabbir Hossain Rahat', id: '17' },
  { no: '02', name: 'Abid Hasan Hujaifa', id: '18' },
  { no: '03', name: 'Sabiha Rumman Medha', id: '19' },
]

export function Welcome() {
  return (
    <div className="relative flex h-full flex-col justify-between px-[112px] pt-[80px] pb-[60px]">
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
          className="mt-8 h-[3px] w-24 origin-left bg-accent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
        />
        <Reveal delay={0.32}>
          <p className="mt-6 max-w-[980px] text-[28px] leading-[1.4] text-muted">
            System Interface Design, Navigation Design, Input Design and Output Design
          </p>
        </Reveal>

        <div className="mt-8">
          <Reveal delay={0.38}>
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/[0.05] px-4 py-1.5 text-[15px] font-semibold text-accent">
                <span className="size-2 rounded-full bg-accent" />
                <span>Presented by Team 4</span>
              </div>
              <span className="text-[14px] font-medium text-muted">· Group Members</span>
            </div>
          </Reveal>

          <div className="mt-4 grid w-full grid-cols-3 gap-6">
            {teamMembers.map((member, i) => (
              <Reveal key={member.id} delay={0.42 + i * 0.06}>
                <div className="flex items-center gap-4.5 rounded-xl border border-line bg-surface/70 px-5 py-4 transition-all duration-200 hover:border-accent/40 hover:bg-white">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-accent/20 bg-accent/[0.08] text-[15px] font-bold tabular-nums text-accent">
                    {member.no}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-[18px] font-semibold tracking-[-0.01em] text-ink">
                      {member.name}
                    </p>
                    <p className="mt-0.5 text-[14px] font-medium text-muted">
                      ID: <span className="font-semibold text-accent">{member.id}</span>
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <Reveal
        delay={0.55}
        className="flex items-center justify-between border-t border-line pt-5 text-caption text-muted"
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
