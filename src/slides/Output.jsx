import Slide from '../components/Slide.jsx'
import { Bar, Index, Label, Reveal, RevealCard } from '../components/ui.jsx'

/* ------------------------------------------------------------------
   24 · Output design principles
------------------------------------------------------------------- */
const outputPrinciples = [
  ['Relevance', 'Include only the information users need for their task.', 'Who reads this, and for what decision?'],
  ['Accuracy', 'Correct, complete and verifiable data.', 'Can users trust every number?'],
  ['Timeliness', 'Delivered when it is needed — early enough to act on.', 'When is this needed?'],
  ['Accessibility', 'Readable and usable by everyone, on every medium.', 'Can every user read and use it?'],
]

export function OutputPrinciples() {
  return (
    <Slide
      title="Output Design Principles"
      subtitle="Outputs are what most users see of a system — reports, screens and messages."
      className="flex flex-col"
    >
      <div className="grid flex-1 grid-cols-4 gap-12">
        {outputPrinciples.map(([title, text, ask], i) => (
          <Reveal key={title} delay={0.18 + i * 0.08} className="flex flex-col border-t-2 border-accent pt-7">
            <Index n={i + 1} className="text-small" />
            <h3 className="mt-4 text-heading font-semibold text-ink">{title}</h3>
            <p className="mt-3 text-small text-muted">{text}</p>
            <p className="mt-auto rounded-xl bg-surface px-5 py-4 text-caption text-ink">
              <span className="mb-1 block text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">
                Ask
              </span>
              {ask}
            </p>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.6} className="mt-8 text-small text-muted">
        <span className="font-semibold text-ink">Also:</span> understand how the output will be used,
        manage information load, and minimise bias in how data is presented.
      </Reveal>
    </Slide>
  )
}

/* ------------------------------------------------------------------
   25 · Types of outputs
------------------------------------------------------------------- */
function ReportVisual() {
  return (
    <div className="rounded-lg border border-line bg-white p-4">
      <div className="flex justify-between">
        <Bar className="w-24 bg-ink/25" />
        <Bar className="w-10" />
      </div>
      <div className="mt-4 space-y-2">
        {[0, 1, 2, 3].map((r) => (
          <div key={r} className="grid grid-cols-[2fr_1fr_1fr] gap-3 border-b border-line pb-2 last:border-0">
            <Bar className="w-full" />
            <Bar className="w-3/4" />
            <Bar className="ml-auto w-1/2" />
          </div>
        ))}
      </div>
    </div>
  )
}

function DashboardVisual() {
  const bars = [38, 52, 44, 66, 58, 80, 72]
  return (
    <div className="rounded-lg border border-line bg-white p-4">
      <div className="grid grid-cols-3 gap-2">
        {['1.2k', '86%', '$9.4k'].map((k) => (
          <div key={k} className="rounded-md border border-line px-2 py-1.5">
            <p className="text-[13px] font-semibold text-ink">{k}</p>
            <Bar className="mt-1 h-1 w-8" />
          </div>
        ))}
      </div>
      <div className="mt-3 flex h-[58px] items-end gap-1.5">
        {bars.map((h, i) => (
          <span
            key={i}
            className={`flex-1 rounded-sm ${i === bars.length - 2 ? 'bg-accent' : 'bg-accent/25'}`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  )
}

function NotificationVisual() {
  return (
    <div className="space-y-2">
      {[
        ['Low stock', '“Midnight Drive” — 3 copies left'],
        ['Payment received', 'Order #1042 · $48.00'],
        ['Weekly report ready', 'Sales summary · 6 Oct'],
      ].map(([t, d], i) => (
        <div
          key={t}
          className={`flex items-center gap-3 rounded-lg border border-line bg-white px-3 py-2 ${i === 2 ? 'opacity-50' : ''}`}
        >
          <span className="size-2 shrink-0 rounded-full bg-accent" />
          <div className="min-w-0">
            <p className="text-[13px] font-semibold text-ink">{t}</p>
            <p className="truncate text-[12px] text-muted">{d}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

const outputTypes = [
  ['Reports', 'Structured documents — detail, summary, exception and turnaround reports.', ReportVisual],
  ['Dashboards', 'An at-a-glance view of key measures, often updated in real time.', DashboardVisual],
  ['Notifications', 'Short messages that prompt action — email, SMS, push, in-app.', NotificationVisual],
]

const media = [
  ['Print', 'Formal records'],
  ['Web', 'Interactive, current'],
  ['Mobile', 'On the go'],
  ['PDF', 'Fixed layout to share'],
  ['Excel', 'Further analysis'],
]

export function OutputTypes() {
  return (
    <Slide title="Types of Outputs" className="flex flex-col">
      <div className="grid flex-1 grid-cols-3 gap-5">
        {outputTypes.map(([title, text, Visual], i) => (
          <RevealCard key={title} delay={0.15 + i * 0.1} className="flex flex-col overflow-hidden">
            <div className="flex flex-1 items-center bg-surface px-8 py-6">
              <div className="w-full">
                <Visual />
              </div>
            </div>
            <div className="px-7 py-5">
              <h3 className="text-body font-semibold text-ink">{title}</h3>
              <p className="mt-1 text-caption text-muted">{text}</p>
            </div>
          </RevealCard>
        ))}
      </div>

      <Reveal delay={0.5} className="mt-8 flex items-center gap-10">
        <Label className="shrink-0">Output media</Label>
        <div className="grid flex-1 grid-cols-5 divide-x divide-line">
          {media.map(([m, d]) => (
            <div key={m} className="px-6 first:pl-0">
              <p className="text-small font-semibold text-ink">{m}</p>
              <p className="text-caption text-muted">{d}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </Slide>
  )
}
