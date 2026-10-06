import Slide, { SlideFooter, SlideShell } from '../components/Slide.jsx'
import { Index, Label, Points, Reveal, RevealCard } from '../components/ui.jsx'

/* ------------------------------------------------------------------
   29 · Activity Discussion
------------------------------------------------------------------- */
const discussionPrompt1 = [
  {
    title: 'Cognitive load & familiarity',
    text: 'Users transfer mental models from prior systems without relearning.',
  },
  {
    title: 'Error prevention',
    text: 'Standardized layouts and button placement avoid accidental destructive actions.',
  },
  {
    title: 'Speed & muscle memory',
    text: 'Predictable navigation allows power users to complete frequent tasks rapidly.',
  },
]

const discussionPrompt2 = [
  {
    title: 'Design systems & UI token libraries',
    text: 'Centralize color tokens, typography scales, spacing units, and components.',
  },
  {
    title: 'Interface standards documentation',
    text: 'Formalize metaphors, terminology, screen templates, and icon meanings.',
  },
  {
    title: 'Heuristic evaluation & peer audits',
    text: 'Systematically inspect new screens against standards before deployment.',
  },
]

export function ActivityDiscussion() {
  return (
    <Slide
      title="Activity & Discussion"
      subtitle="Seminar debate: Evaluating the impact of interface consistency on large-scale software systems."
      className="grid grid-cols-2 gap-8"
    >
      <RevealCard delay={0.12} className="flex flex-col p-6">
        <div className="flex items-center gap-2.5">
          <span className="grid size-7 place-items-center rounded-lg bg-accent text-xs font-semibold text-white">
            Q1
          </span>
          <Label>Discussion Prompt 1</Label>
        </div>
        <h3 className="mt-3 text-heading font-semibold text-ink leading-snug">
          How does consistency improve user experience?
        </h3>
        <p className="mt-1.5 text-caption text-muted">
          Consider cognitive workload, learning curves, and user confidence when interacting with unfamiliar modules.
        </p>

        <div className="mt-5 border-t border-line pt-4">
          <Label className="mb-3">Guiding Angles</Label>
          <Points items={discussionPrompt1} delay={0.2} size="small" className="space-y-3" />
        </div>
      </RevealCard>

      <RevealCard delay={0.2} className="flex flex-col p-6">
        <div className="flex items-center gap-2.5">
          <span className="grid size-7 place-items-center rounded-lg border border-accent/40 bg-accent/[0.05] text-xs font-semibold text-accent">
            Q2
          </span>
          <Label>Discussion Prompt 2</Label>
        </div>
        <h3 className="mt-3 text-heading font-semibold text-ink leading-snug">
          What strategies help maintain consistency across a system?
        </h3>
        <p className="mt-1.5 text-caption text-muted">
          How can multi-disciplinary engineering and design teams ensure coherence as a system scales over time?
        </p>

        <div className="mt-5 border-t border-line pt-4">
          <Label className="mb-3">Practical Strategies</Label>
          <Points items={discussionPrompt2} delay={0.28} size="small" className="space-y-3" />
        </div>
      </RevealCard>
    </Slide>
  )
}

/* ------------------------------------------------------------------
   30 · Summary & Thank You
------------------------------------------------------------------- */
const takeaways = [
  {
    title: 'UI Principles',
    desc: 'Balance layout, aesthetics, consistency, and effort minimization for high usability.',
  },
  {
    title: 'UI Process',
    desc: 'Iterate systematically from use scenarios through structure to prototyping and evaluation.',
  },
  {
    title: 'Navigation Design',
    desc: 'Structure hierarchies, provide breadcrumbs, and ensure actions are easily reversible.',
  },
  {
    title: 'Input Design',
    desc: 'Capture data at source; choose the right control; minimize manual user typing.',
  },
  {
    title: 'Validation',
    desc: 'Enforce multi-tier validation (format, range, consistency, database) before accepting data.',
  },
  {
    title: 'Output Design',
    desc: 'Deliver relevant, accurate, timely information across appropriate media and formats.',
  },
]

export function SummaryThankYou() {
  return (
    <SlideShell>
      {/* Top Half: Key Takeaways */}
      <div>
        <Reveal y={6}>
          <p className="text-eyebrow font-semibold uppercase text-accent">Lecture Conclusion</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-3 text-title font-semibold text-ink">Key Takeaways</h2>
        </Reveal>
        
        <div className="mt-8 grid grid-cols-6 gap-4">
          {takeaways.map((t, i) => (
            <RevealCard key={t.title} delay={0.12 + i * 0.05} className="p-5 flex flex-col justify-between">
              <div>
                <Index n={i + 1} className="text-caption" />
                <h3 className="mt-3 text-body font-semibold text-ink leading-tight">{t.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">{t.desc}</p>
              </div>
            </RevealCard>
          ))}
        </div>
      </div>

      <div className="my-8 h-px bg-line" />

      {/* Bottom Half: Thank You & Discussion */}
      <div className="flex flex-1 items-center justify-between">
        <div>
          <Reveal delay={0.45}>
            <h3 className="text-[44px] font-bold tracking-tight text-ink">
              Thank You.
            </h3>
          </Reveal>
          <Reveal delay={0.5}>
            <p className="mt-2 text-lead text-muted">
              Questions &amp; Academic Discussion
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.55} className="text-right">
          <p className="text-body font-semibold text-ink">System Analysis &amp; Design</p>
          <p className="mt-1 text-small text-muted">Department of Computer Science &amp; Engineering</p>
          <div className="mt-4 flex items-center justify-end gap-2 text-caption text-accent">
            <span className="size-2 rounded-full bg-accent" />
            <span>Course Lecture Presentation · Final Slide</span>
          </div>
        </Reveal>
      </div>

      <SlideFooter />
    </SlideShell>
  )
}
