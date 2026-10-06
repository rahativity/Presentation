import { motion } from 'framer-motion'
import Slide from '../components/Slide.jsx'
import { EASE } from '../components/motion.js'
import {
  Bar,
  FlowArrow,
  GrowLine,
  Index,
  Label,
  Points,
  Reveal,
  RevealCard,
  Window,
} from '../components/ui.jsx'

/* ------------------------------------------------------------------
   08 · UI Design Process Overview — Visual Process Lifecycle
------------------------------------------------------------------- */
const processSteps = [
  ['Scenario Development', 'Capture real-world user goals, workflows, and task sequences'],
  ['Structure Design', 'Define screens and navigational relationships with an ISD'],
  ['Standards Design', 'Establish interface metaphors, terminology, icons, and templates'],
  ['Prototyping', 'Build iterative mockups ranging from paper sketches to code'],
  ['Evaluation', 'Conduct heuristic reviews and user tests to validate the experience'],
]

export function ProcessOverview() {
  const base = 0.2
  const step = 0.16
  return (
    <Slide
      title="UI Design Process Overview"
      subtitle="A cyclical five-stage engineering process, with prototyping and evaluation repeated until usability criteria are met."
      className="flex flex-col justify-center"
    >
      <div className="grid grid-cols-5">
        {/* Iteration loop from step 5 back to step 4 */}
        <div className="relative col-span-2 col-start-4 h-16">
          <motion.div
            className="absolute bottom-0 left-[28px] h-8 w-1/2 rounded-t-2xl border-x-[1.5px] border-t-[1.5px] border-dashed border-accent/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: base + step * 5, ease: EASE }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              className="absolute -bottom-1.5 -left-[6.75px] text-accent/70"
              aria-hidden="true"
            >
              <path
                d="M2 4l4 4 4-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-caption font-medium text-accent">
              Iterate &amp; Refine
            </span>
          </motion.div>
        </div>
        <div className="col-span-5" />

        {processSteps.map(([title, text], i) => (
          <div key={title}>
            <div className="flex items-center">
              <Reveal delay={base + i * step} y={8}>
                <span className="grid size-14 place-items-center rounded-full border-[1.5px] border-accent bg-white text-body font-semibold text-accent">
                  {i + 1}
                </span>
              </Reveal>
              {i < processSteps.length - 1 && (
                <FlowArrow delay={base + i * step + 0.1} className="mx-4 flex-1" />
              )}
            </div>
            <Reveal delay={base + i * step + 0.05} className="mt-7 pr-8">
              <h3 className="text-[22px] font-semibold leading-snug tracking-[-0.01em] text-ink">
                {title}
              </h3>
              <p className="mt-2 text-small text-muted">{text}</p>
            </Reveal>
          </div>
        ))}
      </div>
    </Slide>
  )
}

/* ------------------------------------------------------------------
   09 · Scenario Development + Structure Design (Merged)
------------------------------------------------------------------- */
const tree = [
  ['Profile', ['Edit details', 'Change password']],
  ['Orders', ['Order history', 'Track package']],
  ['Catalog', ['Browse genre', 'Sample audio']],
  ['Settings', ['Notifications', 'Privacy']],
]

export function ScenarioStructure() {
  return (
    <Slide
      title="Scenario Development & Structure Design"
      subtitle="How task-based use scenarios directly translate into the system’s structural screen hierarchy and navigation flow."
      className="grid grid-cols-[1fr_1.15fr] gap-12"
    >
      {/* Left: Use Scenario Development */}
      <RevealCard delay={0.15} className="flex flex-col p-8">
        <div className="flex items-center justify-between">
          <Label>Step 01 · Task Analysis</Label>
          <span className="text-[12px] font-semibold uppercase tracking-wider text-accent">
            Scenarios
          </span>
        </div>
        <h3 className="mt-2 text-heading font-semibold text-ink">Use Scenario Development</h3>
        <p className="mt-1 text-small text-muted">
          Outlines the exact steps a user follows to complete a specific goal.
        </p>

        <div className="mt-4 rounded-xl border border-line bg-surface p-3.5">
          <div className="flex items-baseline justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-muted">
              Sample Task Flow
            </span>
            <span className="text-[12px] font-medium text-accent">Album Purchase</span>
          </div>
          <ol className="mt-2.5 space-y-1 text-[12.5px] text-ink">
            <li className="flex gap-2">
              <span className="text-accent font-semibold">1.</span> Search catalog &amp; audition track
            </li>
            <li className="flex gap-2">
              <span className="text-accent font-semibold">2.</span> Select media format &amp; add to cart
            </li>
            <li className="flex gap-2">
              <span className="text-accent font-semibold">3.</span> Confirm shipping &amp; submit payment
            </li>
          </ol>
        </div>

        <Points
          items={[
            { title: 'User Goals', text: 'Target outcome driving the session.' },
            { title: 'Workflows', text: 'Step-by-step path from start to completion.' },
            { title: 'Edge Cases & Errors', text: 'Graceful handling of exceptions (e.g. stockout).' },
          ]}
          delay={0.25}
          size="small"
          className="mt-4 space-y-2.5"
        />
      </RevealCard>

      {/* Right: Interface Structure Design */}
      <RevealCard delay={0.22} className="flex flex-col p-8">
        <div className="flex items-center justify-between">
          <Label>Step 02 · Architectural Map</Label>
          <span className="text-[12px] font-semibold uppercase tracking-wider text-accent">
            Structure (ISD)
          </span>
        </div>
        <h3 className="mt-2 text-heading font-semibold text-ink">Interface Structure Design</h3>
        <p className="mt-1 text-small text-muted">
          An Interface Structure Diagram (ISD) maps every screen and navigational route.
        </p>

        {/* Tree Visual */}
        <div className="mt-5 flex flex-1 flex-col items-center justify-center rounded-xl border border-line bg-surface p-5">
          <div className="rounded-lg bg-accent px-6 py-2 text-small font-semibold text-white">
            Dashboard
          </div>
          <GrowLine vertical delay={0.35} className="h-5 bg-ink/25" />
          <div className="relative grid w-full grid-cols-4 gap-2">
            <GrowLine delay={0.4} className="absolute inset-x-[12.5%] top-0 bg-ink/25" />
            {tree.map(([name, children]) => (
              <div key={name} className="flex flex-col items-center">
                <GrowLine vertical delay={0.45} className="h-4 bg-ink/25" />
                <div className="w-full rounded-md border border-ink/20 bg-white px-2 py-1.5 text-center text-[12px] font-semibold text-ink">
                  {name}
                </div>
                <div className="mt-2 space-y-0.5 text-center text-[10px] text-muted">
                  {children.map((c) => (
                    <p key={c}>{c}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 border-t border-line pt-4">
          <p className="text-[13px] text-muted">
            <span className="font-semibold text-ink">Key Integration:</span> Scenarios identify what screens are needed; the ISD defines how users transition between them without getting trapped.
          </p>
        </div>
      </RevealCard>
    </Slide>
  )
}

/* ------------------------------------------------------------------
   10 · Standards Design + Prototyping (Merged)
------------------------------------------------------------------- */
function StoryboardVisual() {
  return (
    <div className="flex h-full items-center justify-center gap-2">
      {[0, 1, 2].map((i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="flex h-[88px] w-[66px] flex-col gap-1.5 rounded-md border-[1.5px] border-dashed border-ink/30 p-2">
            <span className="h-3 w-full rounded-sm border border-dashed border-ink/30" />
            <span className="h-[2px] w-10 bg-ink/25" />
            <span className="h-[2px] w-8 bg-ink/25" />
            <span className="mt-auto h-3 w-6 self-end rounded-sm border border-dashed border-ink/30" />
          </div>
          {i < 2 && <span className="text-caption text-ink/30">→</span>}
        </div>
      ))}
    </div>
  )
}

function HtmlPrototypeVisual() {
  return (
    <Window className="h-full" bodyClassName="p-3">
      <div className="flex gap-2.5">
        <span className="text-[10px] text-accent underline">Home</span>
        <span className="text-[10px] text-accent underline">Albums</span>
        <span className="text-[10px] text-accent underline">Cart</span>
      </div>
      <Bar className="mt-2.5 w-20 bg-ink/20" />
      <div className="mt-2.5 grid grid-cols-3 gap-1.5">
        {[0, 1, 2].map((i) => (
          <span key={i} className="h-8 rounded bg-ink/[0.07]" />
        ))}
      </div>
    </Window>
  )
}

function LanguagePrototypeVisual() {
  return (
    <Window className="h-full" bodyClassName="p-3">
      <p className="text-[11px] font-semibold text-ink">New Releases</p>
      <div className="mt-1.5 space-y-1">
        {[
          ['Midnight Drive', '$9.99'],
          ['Ocean Lights', '$11.99'],
        ].map(([a, p]) => (
          <div key={a} className="flex items-center gap-1.5 rounded border border-line px-1.5 py-0.5">
            <span className="size-3.5 rounded-sm bg-accent/80" />
            <span className="text-[10px] text-ink">{a}</span>
            <span className="ml-auto text-[10px] text-muted">{p}</span>
          </div>
        ))}
      </div>
      <div className="mt-1.5 flex justify-end">
        <span className="rounded bg-accent px-2 py-0.5 text-[9px] text-white">Add to cart</span>
      </div>
    </Window>
  )
}

const prototypes = [
  ['Storyboards', 'Paper sketches of screens and transitions — rapid and cheap', StoryboardVisual],
  ['HTML Prototypes', 'Clickable web wireframes with active links but static data', HtmlPrototypeVisual],
  ['Language Prototypes', 'Built in target programming language — near-final realism', LanguagePrototypeVisual],
]

export function StandardsPrototyping() {
  return (
    <Slide
      title="Standards Design & Prototyping"
      subtitle="Interface standards establish design conventions, while iterative prototyping moves concepts from sketch to functional code."
      className="grid grid-cols-[0.8fr_1.8fr] gap-14"
    >
      {/* Left: Standards */}
      <div className="border-r border-line pr-10 flex flex-col justify-between">
        <div>
          <Reveal delay={0.12}>
            <Label>Interface Standards</Label>
            <p className="mt-2 text-small text-muted">
              Agreed-upon design rules and conventions shared by every screen in the system.
            </p>
          </Reveal>
          <Points
            delay={0.2}
            size="small"
            className="mt-6 space-y-5"
            items={[
              {
                title: 'Interface Metaphors',
                text: 'Real-world concepts guiding user intuition — shopping cart, desktop, folder, media player.',
              },
              {
                title: 'Objects, Actions & Icons',
                text: 'Standardized terminology and iconography across every module (e.g., “Archive” vs “Delete”).',
              },
              {
                title: 'Screen Templates',
                text: 'Common grid layouts and navigational zones reused to enforce structural consistency.',
              },
            ]}
          />
        </div>
      </div>

      {/* Right: Prototyping */}
      <div className="flex flex-col">
        <Reveal delay={0.18}>
          <Label>Interface Prototyping</Label>
          <p className="mt-2 text-small text-muted">
            Progressive mockups that validate visual layout, interaction flows, and user requirements.
          </p>
        </Reveal>

        <div className="mt-6 grid flex-1 grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-3">
          {prototypes.map(([title, text, Visual], i) => (
            <PrototypeStep key={title} i={i} title={title} text={text} Visual={Visual} last={i === 2} />
          ))}
        </div>

        <Reveal delay={0.7} className="mt-6 flex items-center gap-4 text-caption text-muted">
          <span>Low fidelity · quick, low cost, disposable</span>
          <GrowLine delay={0.75} className="flex-1 bg-ink/20" />
          <span>High fidelity · realistic, measurable, near-production</span>
        </Reveal>
      </div>
    </Slide>
  )
}

function PrototypeStep({ i, title, text, Visual, last }) {
  return (
    <>
      <Reveal delay={0.25 + i * 0.15} className="flex flex-col">
        <div className="h-[170px] rounded-xl bg-surface p-3.5">
          <Visual />
        </div>
        <p className="mt-4 text-body font-semibold text-ink">{title}</p>
        <p className="mt-1 text-caption text-muted">{text}</p>
      </Reveal>
      {!last && <FlowArrow delay={0.35 + i * 0.15} className="mb-20 w-6" />}
    </>
  )
}

/* ------------------------------------------------------------------
   11 · Interface Evaluation (4 Evaluation Types)
------------------------------------------------------------------- */
const evaluations = [
  [
    'Heuristic Evaluation',
    'Usability experts inspect the interface against established design heuristics (e.g. Nielsen’s principles).',
    0,
    'None — experts only',
    'Catches 70%+ of major design flaws early and cheaply',
  ],
  [
    'Walk-through Evaluation',
    'The project team walks users through the prototype, explaining workflows and gathering feedback.',
    1,
    'Users watch & discuss',
    'Validates conceptual understanding without working code',
  ],
  [
    'Interactive Evaluation',
    'Users work directly with the prototype on assigned tasks while an analyst observes hesitations and errors.',
    2,
    'Users try hands-on',
    'Reveals unexpected usability bottlenecks in real time',
  ],
  [
    'Formal Usability Testing',
    'Controlled laboratory experiment recording time-on-task, completion rates, and user interactions.',
    3,
    'Users measured rigorously',
    'Generates objective, quantitative usability benchmark data',
  ],
]

export function InterfaceEvaluation() {
  return (
    <Slide
      title="Interface Evaluation"
      subtitle="Four evaluation methodologies with progressively deeper user involvement, realism, and analytical rigor."
      className="flex flex-col"
    >
      <div className="grid flex-1 grid-cols-4 gap-5">
        {evaluations.map(([title, text, level, who, strength], i) => (
          <RevealCard key={title} delay={0.15 + i * 0.08} className="flex flex-col p-7">
            <Index n={i + 1} className="text-small" />
            <h3 className="mt-5 text-heading font-semibold text-ink leading-snug">{title}</h3>
            <p className="mt-2.5 text-small text-muted">{text}</p>

            <div className="mt-auto border-t border-line pt-4">
              <Label>User involvement</Label>
              <div className="mt-2.5 flex items-center gap-1.5">
                {[0, 1, 2].map((d) => (
                  <span
                    key={d}
                    className={`h-1.5 w-7 rounded-full ${d < level ? 'bg-accent' : 'bg-line'}`}
                  />
                ))}
                <span className="ml-2 text-caption text-ink font-medium">{who}</span>
              </div>

              <div className="mt-3 border-t border-line/60 pt-2.5 text-[12px] text-muted">
                <span className="font-semibold text-ink">Strength:</span> {strength}
              </div>
            </div>
          </RevealCard>
        ))}
      </div>

      <Reveal delay={0.6} className="mt-6 flex items-center gap-4 text-caption text-muted">
        <span>Quicker · lower cost · early cycle</span>
        <FlowArrow delay={0.65} className="flex-1" />
        <span>More realistic · empirical metrics · high investment</span>
      </Reveal>
    </Slide>
  )
}
