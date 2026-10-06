import { SlideFooter, SlideShell } from '../components/Slide.jsx'
import { Chip, Index, Label, Reveal, RevealCard } from '../components/ui.jsx'

/* ------------------------------------------------------------------
   20 · Activity + Summary + Thank You (Merged Master Conclusion)
------------------------------------------------------------------- */
const discussionAngles = [
  {
    title: 'Cognitive Load Reduction',
    text: 'Users transfer mental models effortlessly without pausing or relearning.',
  },
  {
    title: 'Error Prevention & Safety',
    text: 'Standardized buttons and confirmations prevent accidental misclicks.',
  },
  {
    title: 'Speed & Muscle Memory',
    text: 'Predictable workflows and shortcuts maximize user throughput.',
  },
  {
    title: 'Design System Governance',
    text: 'Shared tokens, templates, and audits maintain coherence at scale.',
  },
]

const summaryPillars = [
  {
    title: 'UI Principles',
    badge: 'Pillar 1',
    desc: 'Layout, aesthetics, UX, consistency & the 3-clicks rule.',
  },
  {
    title: 'UI Process',
    badge: 'Pillar 2',
    desc: 'Iterative cycle from use scenarios to evaluation.',
  },
  {
    title: 'Navigation Design',
    badge: 'Pillar 3',
    desc: 'Clear hierarchies, mistake prevention & reversible routes.',
  },
  {
    title: 'Input Design',
    badge: 'Pillar 4',
    desc: 'Source data capture, optimal controls & typing reduction.',
  },
  {
    title: 'Validation',
    badge: 'Pillar 5',
    desc: 'Multi-tier verification pipeline before data commit.',
  },
  {
    title: 'Output Design',
    badge: 'Pillar 6',
    desc: 'Relevant, timely reports & dashboards across media.',
  },
]

export function ActivitySummaryThankYou() {
  return (
    <SlideShell className="justify-between">
      {/* Top Part: Activity & Discussion Question */}
      <div>
        <div className="flex items-center justify-between">
          <Reveal y={4}>
            <p className="text-eyebrow font-semibold uppercase text-accent">
              06 — Summary &amp; Discussion
            </p>
          </Reveal>
          <Chip accent>Interactive Seminar Activity</Chip>
        </div>

        <div className="mt-3 grid grid-cols-[1.1fr_1.9fr] gap-6 rounded-2xl border border-line bg-surface p-5">
          <div className="flex flex-col justify-between border-r border-line pr-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="grid size-6 place-items-center rounded bg-accent text-[11px] font-bold text-white">
                  Q
                </span>
                <Label>Seminar Discussion Prompt</Label>
              </div>
              <h3 className="mt-2 text-[20px] font-bold text-ink leading-snug">
                How does consistency improve user experience?
              </h3>
              <p className="mt-1 text-caption text-muted">
                Analyze the compounding impact of internal and external consistency on user confidence, learning curves, and system errors.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-[12px]">
            {discussionAngles.map((a) => (
              <div key={a.title} className="rounded-lg border border-line bg-white p-2.5">
                <p className="font-semibold text-accent">{a.title}</p>
                <p className="mt-0.5 text-muted leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Middle Part: Summary of 6 Major Topics */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <Label>Lecture Summary · Core Curriculum Pillars</Label>
          <span className="text-caption text-muted">Complete Topic Synthesis</span>
        </div>
        <div className="grid grid-cols-6 gap-3">
          {summaryPillars.map((p, i) => (
            <RevealCard key={p.title} delay={0.15 + i * 0.04} className="p-3.5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <Index n={i + 1} className="text-[11px]" />
                  <span className="text-[10px] font-semibold uppercase text-accent">{p.badge}</span>
                </div>
                <h4 className="mt-1.5 text-[14px] font-semibold text-ink leading-tight">{p.title}</h4>
                <p className="mt-1 text-[11px] text-muted leading-snug">{p.desc}</p>
              </div>
            </RevealCard>
          ))}
        </div>
      </div>

      {/* Bottom Part: Thank You & Open Q&A */}
      <div className="rounded-2xl border border-accent/30 bg-accent/[0.03] px-8 py-5 flex items-center justify-between">
        <div>
          <Reveal delay={0.4}>
            <h3 className="text-[34px] font-bold tracking-tight text-ink leading-none">
              Thank You.
            </h3>
          </Reveal>
          <Reveal delay={0.45}>
            <p className="mt-1.5 text-[17px] text-muted font-medium">
              Questions &amp; Academic Discussion
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.5} className="text-right">
          <p className="text-small font-semibold text-ink">System Analysis &amp; Design</p>
          <p className="text-caption text-muted">Department of Computer Science &amp; Engineering</p>
          <div className="mt-1.5 flex items-center justify-end gap-2 text-[12px] font-medium text-accent">
            <span className="size-2 rounded-full bg-accent animate-pulse" />
            <span>Course Lecture Presentation Complete · 20 Slides</span>
          </div>
        </Reveal>
      </div>
    </SlideShell>
  )
}
