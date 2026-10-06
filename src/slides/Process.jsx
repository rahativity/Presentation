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
   08 · UI design process overview — animated flow
------------------------------------------------------------------- */
const processSteps = [
  ['Use Scenario Development', 'Describe how users will work with the system'],
  ['Interface Structure Design', 'Define the screens and how they connect'],
  ['Interface Standards Design', 'Agree on metaphors, objects, actions and templates'],
  ['Interface Prototyping', 'Build mock-ups of screens, forms and reports'],
  ['Interface Evaluation', 'Test with users and refine the design'],
]

export function ProcessOverview() {
  const base = 0.2
  const step = 0.16
  return (
    <Slide
      title="UI Design Process Overview"
      subtitle="Five steps, with prototyping and evaluation repeated until the design works for users."
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
              <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-caption font-medium text-accent">
              Iterate
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
            <Reveal delay={base + i * step + 0.05} className="mt-7 pr-10">
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
   09 · Use scenario development
------------------------------------------------------------------- */
export function UseScenario() {
  return (
    <Slide title="Use Scenario Development" className="grid grid-cols-[1fr_1.1fr] gap-20">
      <div>
        <Reveal delay={0.12}>
          <p className="text-lead text-ink">
            A use scenario outlines the steps a user performs to complete one piece of their work.
          </p>
        </Reveal>
        <Points
          delay={0.22}
          className="mt-10 space-y-5"
          size="small"
          items={[
            { title: 'User goals', text: 'What the user is trying to achieve' },
            { title: 'Workflows', text: 'The sequence of steps they follow' },
            { title: 'Edge cases', text: 'Unusual but valid situations' },
            { title: 'Error handling', text: 'What happens when something goes wrong' },
          ]}
        />
      </div>

      <RevealCard delay={0.2} className="flex flex-col p-9">
        <div className="flex items-baseline justify-between">
          <Label>Example scenario</Label>
          <span className="text-caption text-muted">E-commerce</span>
        </div>
        <h3 className="mt-3 text-heading font-semibold text-ink">Buying headphones online</h3>
        <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-caption">
          <dt className="text-muted">User</dt>
          <dd className="text-ink">Returning customer, signed in</dd>
          <dt className="text-muted">Goal</dt>
          <dd className="text-ink">Buy a pair of wireless headphones under $80</dd>
        </dl>

        <ol className="mt-6 space-y-2.5 border-t border-line pt-6">
          {[
            'Searches for “wireless headphones”',
            'Filters by price and compares two products',
            'Adds one item to the cart',
            'Confirms saved address and pays by card',
            'Receives an order confirmation by email',
          ].map((s, i) => (
            <Reveal
              as="li"
              key={s}
              delay={0.32 + i * 0.06}
              className="flex gap-4 text-small text-ink"
            >
              <span className="w-5 shrink-0 tabular-nums text-accent">{i + 1}.</span>
              {s}
            </Reveal>
          ))}
        </ol>

        <div className="mt-auto grid grid-cols-2 gap-4 pt-6">
          <Reveal delay={0.7} className="rounded-xl bg-surface p-4">
            <Label>Edge case</Label>
            <p className="mt-1.5 text-caption text-ink">Item goes out of stock → suggest similar products</p>
          </Reveal>
          <Reveal delay={0.78} className="rounded-xl bg-surface p-4">
            <Label>Error</Label>
            <p className="mt-1.5 text-caption text-ink">Card declined → keep the cart, ask for another card</p>
          </Reveal>
        </div>
      </RevealCard>
    </Slide>
  )
}

/* ------------------------------------------------------------------
   10 · Interface structure design — navigation hierarchy
------------------------------------------------------------------- */
const tree = [
  ['Profile', ['Edit details', 'Change password']],
  ['Orders', ['Order history', 'Track order']],
  ['Library', ['Purchases', 'Downloads']],
  ['Settings', ['Notifications', 'Privacy']],
]

export function InterfaceStructure() {
  return (
    <Slide
      title="Interface Structure Design"
      subtitle="An interface structure diagram shows every screen and how users move between them."
      className="flex flex-col"
    >
      <div className="flex flex-1 flex-col items-center justify-center">
        <Reveal delay={0.15}>
          <div className="rounded-xl bg-accent px-9 py-3.5 text-body font-semibold text-white">
            Dashboard
          </div>
        </Reveal>
        <GrowLine vertical delay={0.3} className="h-8 bg-ink/25" />
        <div className="relative grid w-[1040px] grid-cols-4">
          <GrowLine delay={0.4} className="absolute inset-x-[12.5%] top-0 bg-ink/25" />
          {tree.map(([name, children], i) => (
            <div key={name} className="flex flex-col items-center px-4">
              <GrowLine vertical delay={0.5} className="h-8 bg-ink/25" />
              <Reveal
                delay={0.55 + i * 0.07}
                className="rounded-xl border border-ink/20 bg-white px-7 py-3 text-body font-semibold text-ink"
              >
                {name}
              </Reveal>
              <Reveal delay={0.8 + i * 0.05} className="mt-4 space-y-1 text-center text-caption text-muted">
                {children.map((c) => (
                  <p key={c}>{c}</p>
                ))}
              </Reveal>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-12 border-t border-line pt-7">
        {[
          ['Screen relationships', 'Which screens exist and how they connect'],
          ['User journey', 'The path a user takes to finish a task'],
          ['Navigation flow', 'How users move forward, back and across'],
        ].map(([t, d], i) => (
          <Reveal key={t} delay={0.45 + i * 0.06}>
            <p className="text-body font-semibold text-ink">{t}</p>
            <p className="mt-1 text-small text-muted">{d}</p>
          </Reveal>
        ))}
      </div>
    </Slide>
  )
}

/* ------------------------------------------------------------------
   11 · Interface standards & prototyping
------------------------------------------------------------------- */
function StoryboardVisual() {
  return (
    <div className="flex h-full items-center justify-center gap-2">
      {[0, 1, 2].map((i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="flex h-[92px] w-[70px] flex-col gap-1.5 rounded-md border-[1.5px] border-dashed border-ink/30 p-2">
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
    <Window className="h-full" bodyClassName="p-3.5">
      <div className="flex gap-3">
        <span className="text-[11px] text-accent underline">Home</span>
        <span className="text-[11px] text-accent underline">Albums</span>
        <span className="text-[11px] text-accent underline">Cart</span>
      </div>
      <Bar className="mt-3 w-24 bg-ink/20" />
      <div className="mt-3 grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <span key={i} className="h-9 rounded bg-ink/[0.07]" />
        ))}
      </div>
      <Bar className="mt-3 w-16" />
    </Window>
  )
}

function LanguagePrototypeVisual() {
  return (
    <Window className="h-full" bodyClassName="p-3.5">
      <p className="text-[12px] font-semibold text-ink">New Releases</p>
      <div className="mt-2 space-y-1.5">
        {[
          ['Midnight Drive', '$9.99'],
          ['Ocean Lights', '$11.99'],
        ].map(([a, p]) => (
          <div key={a} className="flex items-center gap-2 rounded border border-line px-2 py-1">
            <span className="size-4 rounded-sm bg-accent/80" />
            <span className="text-[11px] text-ink">{a}</span>
            <span className="ml-auto text-[11px] text-muted">{p}</span>
          </div>
        ))}
      </div>
      <div className="mt-2 flex justify-end">
        <span className="rounded bg-accent px-2.5 py-1 text-[10px] text-white">Add to cart</span>
      </div>
    </Window>
  )
}

const prototypes = [
  ['Storyboard', 'Paper sketches of screens and how they link', StoryboardVisual],
  ['HTML Prototype', 'Web pages with working links but no real data', HtmlPrototypeVisual],
  ['Language Prototype', 'Built in the final language — looks real, partly functional', LanguagePrototypeVisual],
]

export function StandardsPrototyping() {
  return (
    <Slide title="Interface Standards & Prototyping" className="grid grid-cols-[0.75fr_2fr] gap-16">
      <div className="border-r border-line pr-12">
        <Reveal delay={0.12}>
          <Label>Interface standards</Label>
          <p className="mt-3 text-small text-muted">
            The basic design elements shared by every screen in the system.
          </p>
        </Reveal>
        <Points
          delay={0.22}
          size="small"
          className="mt-8 space-y-6"
          items={[
            {
              title: 'Interface metaphor',
              text: 'A real-world concept that guides the design — a shopping cart, a desktop, a folder.',
            },
            {
              title: 'Objects, actions & icons',
              text: 'The same names, verbs and symbols used everywhere.',
            },
            {
              title: 'Templates',
              text: 'A standard layout reused across screens.',
            },
          ]}
        />
      </div>

      <div className="flex flex-col">
        <Reveal delay={0.18}>
          <Label>Interface prototyping</Label>
          <p className="mt-3 text-small text-muted">
            A mock-up of screens, forms or reports — moving from rough sketch to near-final design.
          </p>
        </Reveal>
        <div className="mt-8 grid flex-1 grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-4">
          {prototypes.map(([title, text, Visual], i) => (
            <PrototypeStep key={title} i={i} title={title} text={text} Visual={Visual} last={i === 2} />
          ))}
        </div>
        <Reveal delay={0.8} className="mt-7 flex items-center gap-4 text-caption text-muted">
          <span>Low fidelity · fast and cheap to change</span>
          <GrowLine delay={0.85} className="flex-1 bg-ink/20" />
          <span>High fidelity · realistic, slower to change</span>
        </Reveal>
      </div>
    </Slide>
  )
}

function PrototypeStep({ i, title, text, Visual, last }) {
  return (
    <>
      <Reveal delay={0.3 + i * 0.15} className="flex flex-col">
        <div className="h-[180px] rounded-xl bg-surface p-4">
          <Visual />
        </div>
        <p className="mt-5 text-body font-semibold text-ink">{title}</p>
        <p className="mt-1 text-caption text-muted">{text}</p>
      </Reveal>
      {!last && <FlowArrow delay={0.4 + i * 0.15} className="mb-24 w-8" />}
    </>
  )
}

/* ------------------------------------------------------------------
   12 · Interface evaluation
------------------------------------------------------------------- */
const evaluations = [
  ['Heuristic Evaluation', 'Experts check the prototype against a checklist of design principles.', 0, 'None — experts only'],
  ['Walk-through Evaluation', 'The team walks users through the prototype and gathers their reactions.', 1, 'Users watch'],
  ['Interactive Evaluation', 'Users work with the prototype themselves while an analyst observes.', 2, 'Users try it'],
  ['Formal Usability Testing', 'Users perform real tasks in a controlled setting; actions are recorded.', 3, 'Users are measured'],
]

export function InterfaceEvaluation() {
  return (
    <Slide title="Interface Evaluation" className="flex flex-col">
      <div className="grid flex-1 grid-cols-4 gap-5">
        {evaluations.map(([title, text, level, who], i) => (
          <RevealCard key={title} delay={0.15 + i * 0.08} className="flex flex-col p-7">
            <Index n={i + 1} className="text-small" />
            <h3 className="mt-6 text-heading font-semibold text-ink">{title}</h3>
            <p className="mt-3 text-small text-muted">{text}</p>
            <div className="mt-auto border-t border-line pt-5">
              <Label>User involvement</Label>
              <div className="mt-3 flex items-center gap-1.5">
                {[0, 1, 2].map((d) => (
                  <span
                    key={d}
                    className={`h-1.5 w-8 rounded-full ${d < level ? 'bg-accent' : 'bg-line'}`}
                  />
                ))}
                <span className="ml-3 text-caption text-ink">{who}</span>
              </div>
            </div>
          </RevealCard>
        ))}
      </div>
      <Reveal delay={0.6} className="mt-7 flex items-center gap-4 text-caption text-muted">
        <span>Quicker · cheaper</span>
        <FlowArrow delay={0.65} className="flex-1" />
        <span>More realistic · more costly</span>
      </Reveal>
    </Slide>
  )
}
