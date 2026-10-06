import Slide from '../components/Slide.jsx'
import { Chip, FlowArrow, Label, Reveal, RevealCard } from '../components/ui.jsx'

/* ------------------------------------------------------------------
   19 · Output Design + Tune Source Case Study (Merged Synthesis)
------------------------------------------------------------------- */
const outputPrinciples = [
  { title: 'Relevance', desc: 'Targeted data needed for immediate decisions' },
  { title: 'Accuracy', desc: 'Verifiable, correct and unbiased figures' },
  { title: 'Timeliness', desc: 'Delivered in time to take meaningful action' },
  { title: 'Accessibility', desc: 'Clear across devices, screen sizes & abilities' },
]

const outputTypes = [
  { title: 'Reports', desc: 'Structured detail, summary & exception documents' },
  { title: 'Dashboards', desc: 'Real-time operational KPIs & status monitoring' },
  { title: 'Notifications', desc: 'Actionable alerts via push, SMS, email & in-app' },
]

const outputFormats = [
  { format: 'Print', use: 'Archival records' },
  { format: 'Web', use: 'Interactive views' },
  { format: 'Mobile', use: 'On-the-go alerts' },
  { format: 'PDF', use: 'Fixed invoices' },
  { format: 'Excel', use: 'Data analysis' },
]

const journeyStages = [
  {
    step: 'Browse Music',
    action: 'Filter by genre or search artist',
    discipline: 'UI & Navigation',
    implementation: 'Catalog grid, search & breadcrumbs',
  },
  {
    step: 'View Album',
    action: 'Audition clip & pick format',
    discipline: 'UI & Input Controls',
    implementation: 'Audio player & format dropdown',
  },
  {
    step: 'Add To Cart',
    action: 'Confirm quantity & options',
    discipline: 'Navigation & Feedback',
    implementation: 'Cart badge & toast confirmation',
  },
  {
    step: 'Checkout',
    action: 'Enter shipping & payment',
    discipline: 'Input & Validation',
    implementation: 'Autofill & Luhn card validation',
  },
  {
    step: 'Confirmation',
    action: 'Review invoice & track order',
    discipline: 'Output Design',
    implementation: 'Dashboard receipt & PDF invoice',
  },
]

export function OutputCaseStudy() {
  const base = 0.15
  const step = 0.1

  return (
    <Slide
      title="Output Design & Tune Source Case Study"
      subtitle="Foundational output principles synthesized with an end-to-end customer journey demonstrating how all lecture domains unite."
      className="flex flex-col justify-between"
    >
      {/* Top Section: Output Design Foundations (Principles, Types, Formats) */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <Label>Output Design Foundations</Label>
          <span className="text-caption text-muted">Principles · Types · Formats</span>
        </div>
        <div className="grid grid-cols-[1.1fr_1fr_1.1fr] gap-4">
          {/* Principles */}
          <RevealCard delay={0.12} className="p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <h4 className="text-small font-semibold text-ink">Output Principles</h4>
                <Chip accent className="text-[10px] py-0.5 px-2">Core Quality</Chip>
              </div>
              <div className="mt-2.5 grid grid-cols-2 gap-2 text-[12px]">
                {outputPrinciples.map((p) => (
                  <div key={p.title} className="rounded-md border border-line bg-surface p-2">
                    <p className="font-semibold text-ink">{p.title}</p>
                    <p className="mt-0.5 text-[11px] text-muted leading-tight">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </RevealCard>

          {/* Types */}
          <RevealCard delay={0.18} className="p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <h4 className="text-small font-semibold text-ink">Output Types</h4>
                <Chip className="text-[10px] py-0.5 px-2">Presentation</Chip>
              </div>
              <div className="mt-2.5 space-y-1.5 text-[12px]">
                {outputTypes.map((t) => (
                  <div key={t.title} className="rounded-md border border-line bg-surface px-2.5 py-1.5">
                    <span className="font-semibold text-ink">{t.title}: </span>
                    <span className="text-[11px] text-muted">{t.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </RevealCard>

          {/* Formats */}
          <RevealCard delay={0.24} className="p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <h4 className="text-small font-semibold text-ink">Output Formats</h4>
                <Chip className="text-[10px] py-0.5 px-2">Delivery Media</Chip>
              </div>
              <div className="mt-2.5 grid grid-cols-5 gap-1.5 text-center">
                {outputFormats.map((f) => (
                  <div key={f.format} className="rounded-md border border-line bg-surface p-1.5 flex flex-col justify-between">
                    <span className="text-[12px] font-semibold text-accent">{f.format}</span>
                    <span className="mt-1 text-[10px] text-muted leading-tight">{f.use}</span>
                  </div>
                ))}
              </div>
            </div>
          </RevealCard>
        </div>
      </div>

      <div className="h-px bg-line my-1" />

      {/* Bottom Section: Tune Source User Journey */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <Label>Tune Source Case Study · End-to-End User Journey</Label>
          <span className="text-caption text-accent font-medium">How All 5 Disciplines Work Together</span>
        </div>

        <div className="grid grid-cols-5 gap-2">
          {journeyStages.map((s, i) => (
            <div key={s.step} className="flex flex-col">
              <div className="flex items-center">
                <Reveal delay={base + i * step} y={6}>
                  <span className="grid size-8 place-items-center rounded-full border-[1.5px] border-accent bg-white text-[12px] font-semibold text-accent">
                    {i + 1}
                  </span>
                </Reveal>
                {i < journeyStages.length - 1 && (
                  <FlowArrow delay={base + i * step + 0.05} className="mx-1 flex-1" />
                )}
              </div>

              <RevealCard delay={base + i * step + 0.04} className="mt-2.5 p-3.5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="rounded bg-accent/[0.06] px-1.5 py-0.5 text-[10px] font-semibold text-accent uppercase">
                    {s.discipline}
                  </span>
                  <h4 className="mt-1.5 text-[14px] font-semibold text-ink leading-tight">{s.step}</h4>
                  <p className="mt-1 text-[11px] text-muted leading-tight">{s.action}</p>
                </div>

                <div className="mt-2.5 border-t border-line/60 pt-2 text-[11px] text-ink">
                  <span className="font-semibold text-accent">System: </span>
                  {s.implementation}
                </div>
              </RevealCard>
            </div>
          ))}
        </div>
      </div>

      <Reveal delay={0.7} className="mt-1 flex items-center justify-between rounded-lg bg-surface px-5 py-2 text-caption text-muted">
        <span>
          <strong className="text-ink">Architectural Synergy:</strong> UI Design attracts & orientates → Navigation guides → Input &amp; Validation capture error-free data → Output confirms &amp; delivers value.
        </span>
        <span className="font-semibold text-accent">Tune Source Music Store System</span>
      </Reveal>
    </Slide>
  )
}
