import Slide from '../components/Slide.jsx'
import { Bar, FlowArrow, Index, Label, Points, Reveal, RevealCard, Window } from '../components/ui.jsx'

/* ------------------------------------------------------------------
   03 · What is User Interface Design?
------------------------------------------------------------------- */
const uiFocus = [
  { title: 'User interaction', text: 'How people communicate with the system' },
  { title: 'User satisfaction', text: 'How people feel while using it' },
  { title: 'System efficiency', text: 'How quickly and reliably tasks get done' },
  { title: 'Usability', text: 'How easy the system is to learn and use' },
  { title: 'Accessibility', text: 'Whether everyone is able to use it' },
]

function PersonGlyph() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="15" r="8" stroke="#171717" strokeOpacity=".55" strokeWidth="1.75" />
      <path
        d="M9 42c0-8.3 6.7-14 15-14s15 5.7 15 14"
        stroke="#171717"
        strokeOpacity=".55"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  )
}

function DatabaseGlyph() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <g stroke="#171717" strokeOpacity=".55" strokeWidth="1.75">
        <ellipse cx="24" cy="11" rx="14" ry="5" />
        <path d="M10 11v26c0 2.8 6.3 5 14 5s14-2.2 14-5V11" />
        <path d="M10 24c0 2.8 6.3 5 14 5s14-2.2 14-5" />
      </g>
    </svg>
  )
}

function ArrowPair({ delay, down, up }) {
  return (
    <div className="flex h-16 items-stretch gap-4">
      <span className="w-40 self-center text-right text-caption text-muted">{down}</span>
      <FlowArrow vertical delay={delay} />
      <FlowArrow vertical delay={delay + 0.1} className="rotate-180" />
      <span className="w-40 self-center text-caption text-muted">{up}</span>
    </div>
  )
}

export function WhatIsUI() {
  return (
    <Slide title="What is User Interface Design?" className="grid grid-cols-[1fr_1fr] gap-20">
      <div>
        <Reveal delay={0.12}>
          <p className="text-lead text-ink">
            The interface is the part of the system users actually see — the screens, forms and
            reports through which they get their work done.
          </p>
        </Reveal>
        <Points items={uiFocus} delay={0.22} size="small" className="mt-10 space-y-4" />
      </div>

      <div className="-mt-6 flex flex-col items-center justify-center">
        <Reveal delay={0.2} className="flex flex-col items-center">
          <PersonGlyph />
          <span className="mt-1 text-small font-medium text-ink">User</span>
        </Reveal>
        <ArrowPair delay={0.3} down="Actions & input" up="Feedback & output" />
        <Reveal delay={0.35} className="flex flex-col items-center">
          <Window highlight className="h-[210px] w-[400px]" bodyClassName="p-5">
            <div className="flex items-center gap-3">
              <span className="size-5 rounded bg-accent" />
              <Bar className="w-12" />
              <Bar className="w-12" />
              <Bar className="w-12" />
            </div>
            <Bar className="mt-6 h-3 w-40 bg-ink/20" />
            <div className="mt-4 grid grid-cols-2 gap-3">
              <span className="h-8 rounded-md border border-line" />
              <span className="h-8 rounded-md border border-line" />
            </div>
            <div className="mt-4 flex justify-end">
              <span className="h-7 w-20 rounded-md bg-accent" />
            </div>
          </Window>
          <span className="mt-2 text-small font-semibold text-accent">Interface</span>
        </Reveal>
        <ArrowPair delay={0.45} down="Requests" up="Data & results" />
        <Reveal delay={0.5} className="flex flex-col items-center">
          <DatabaseGlyph />
          <span className="mt-1 text-small font-medium text-ink">System</span>
        </Reveal>
      </div>
    </Slide>
  )
}

/* ------------------------------------------------------------------
   04 · Core UI principles
------------------------------------------------------------------- */
const corePrinciples = [
  ['Layout', 'Organise every screen into predictable, consistent areas.'],
  ['Content Awareness', 'Users always know where they are and what they see.'],
  ['Aesthetics', 'Pleasing, functional visuals with minimal clutter.'],
  ['User Experience', 'Easy to learn, easy to use, satisfying to work with.'],
  ['Consistency', 'The same things look and behave the same way.'],
  ['Minimize User Effort', 'Fewer clicks, less typing, less to remember.'],
  ['Accessibility', 'Usable by people of all abilities and devices.'],
  ['Scalability', 'Designs that grow with new features and users.'],
]

export function CorePrinciples() {
  return (
    <Slide title="Core UI Principles" className="grid grid-cols-4 grid-rows-2 gap-5">
      {corePrinciples.map(([title, text], i) => (
        <RevealCard key={title} delay={0.12 + i * 0.05} className="flex flex-col p-7">
          <Index n={i + 1} className="text-small" />
          <div className="mt-auto">
            <h3 className="text-heading font-semibold text-ink">{title}</h3>
            <p className="mt-2 text-small text-muted">{text}</p>
          </div>
        </RevealCard>
      ))}
    </Slide>
  )
}

/* ------------------------------------------------------------------
   05 · Layout & content awareness
------------------------------------------------------------------- */
function Callout({ n }) {
  return (
    <span className="grid size-[22px] shrink-0 place-items-center rounded-full bg-accent text-[12px] font-semibold text-white">
      {n}
    </span>
  )
}

const awareness = [
  ['Page titles', 'Name the current screen'],
  ['Breadcrumbs', 'Show the path — and a way back'],
  ['Labels', 'Describe every field and area'],
  ['System feedback', 'Confirm what just happened'],
]

export function LayoutAwareness() {
  return (
    <Slide title="Layout & Content Awareness" className="grid grid-cols-[1.2fr_1fr] gap-20">
      {/* Wireframe with the three standard areas */}
      <Reveal delay={0.15} className="flex h-full flex-col overflow-hidden rounded-xl border border-line">
        <div className="flex h-[60px] shrink-0 items-center gap-6 border-b border-line bg-surface px-6">
          <span className="size-6 rounded-md bg-accent" />
          <Bar className="w-14" />
          <Bar className="w-14" />
          <Bar className="w-14" />
          <Label className="ml-auto">Navigation area</Label>
        </div>

        <div className="relative flex-1 px-8 py-6">
          <Label className="absolute right-6 top-6">Work area</Label>
          <div className="flex items-center gap-2 text-caption text-muted">
            <Callout n={2} />
            <span>Home</span>
            <span className="text-muted/50">›</span>
            <span>Orders</span>
            <span className="text-muted/50">›</span>
            <span className="text-ink">#1042</span>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <h3 className="text-[28px] font-semibold tracking-tight text-ink">Order #1042</h3>
            <Callout n={1} />
          </div>

          <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4">
            {[
              ['Customer', 'Ayesha Rahman'],
              ['Status', 'Shipped'],
              ['Order date', '06 Oct 2026'],
              ['Total', '$48.00'],
            ].map(([label, value], i) => (
              <div key={label}>
                <div className="flex items-center gap-2">
                  <span className="text-caption text-muted">{label}</span>
                  {i === 0 && <Callout n={3} />}
                </div>
                <div className="mt-1.5 flex h-10 items-center rounded-md border border-line px-3 text-[15px] text-ink">
                  {value}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-end gap-3">
            <span className="rounded-md border border-line px-4 py-2 text-caption text-muted">
              Cancel
            </span>
            <span className="rounded-md bg-accent px-4 py-2 text-caption text-white">Save</span>
          </div>
        </div>

        <div className="flex h-[52px] shrink-0 items-center gap-2 border-t border-line bg-surface px-6 text-caption text-muted">
          <Callout n={4} />
          <span className="ml-1 text-ink">✓ Changes saved</span>
          <span>· just now</span>
          <Label className="ml-auto">Status area</Label>
        </div>
      </Reveal>

      <div className="flex flex-col justify-center">
        <Reveal delay={0.2}>
          <h3 className="text-heading font-semibold text-ink">Layout</h3>
          <p className="mt-2 text-small text-muted">
            Divide each screen into navigation, work and status areas — and keep them in the same
            place on every screen.
          </p>
        </Reveal>
        <div className="my-9 h-px bg-line" />
        <Reveal delay={0.28}>
          <h3 className="text-heading font-semibold text-ink">Content awareness</h3>
          <p className="mt-2 text-small text-muted">
            Users should always know where they are and what the system is doing.
          </p>
        </Reveal>
        <ul className="mt-6 space-y-4">
          {awareness.map(([title, text], i) => (
            <Reveal as="li" key={title} delay={0.36 + i * 0.07} className="flex items-start gap-4">
              <span className="mt-0.5">
                <Callout n={i + 1} />
              </span>
              <p className="text-small text-muted">
                <span className="font-semibold text-ink">{title}</span> — {text}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </Slide>
  )
}

/* ------------------------------------------------------------------
   06 · Aesthetics & user experience
------------------------------------------------------------------- */
function SplitColumn({ title, intro, items, delay, children }) {
  return (
    <div>
      <Reveal delay={delay}>
        <h3 className="text-[34px] font-semibold tracking-tight text-ink">{title}</h3>
        <p className="mt-2 text-body text-muted">{intro}</p>
      </Reveal>
      {children}
      <Points items={items} delay={delay + 0.12} className="mt-10 space-y-7" />
    </div>
  )
}

export function AestheticsUX() {
  return (
    <Slide title="Aesthetics & User Experience" className="grid grid-cols-2">
      <div className="pr-20">
        <SplitColumn
          title="Aesthetics"
          intro="How the interface looks."
          delay={0.12}
          items={[
            {
              title: 'Colors',
              text: 'A limited palette with strong contrast; colour supports meaning but never carries it alone.',
            },
            {
              title: 'Fonts',
              text: 'One or two readable typefaces with a clear, consistent size hierarchy.',
            },
            {
              title: 'Whitespace',
              text: 'Group related items and give content room to breathe — avoid dense screens.',
            },
          ]}
        >
          <Reveal delay={0.2} className="mt-7 flex items-center gap-3">
            {['#171717', '#666666', '#1F4E79', '#E5E5E5'].map((c) => (
              <span
                key={c}
                className="size-9 rounded-lg border border-line"
                style={{ backgroundColor: c }}
                title={c}
              />
            ))}
            <span className="ml-4 text-[34px] font-semibold leading-none tracking-tight text-ink">
              Aa
            </span>
            <span className="text-[22px] leading-none text-ink">Aa</span>
            <span className="text-[15px] leading-none text-muted">Aa</span>
          </Reveal>
        </SplitColumn>
      </div>

      <div className="border-l border-line pl-20">
        <SplitColumn
          title="User Experience"
          intro="How the interface feels to use."
          delay={0.2}
          items={[
            {
              title: 'Responsiveness',
              text: 'Immediate feedback on every action, and layouts that adapt to any screen size.',
            },
            {
              title: 'Error handling',
              text: 'Prevent errors first; when they happen, explain clearly how to recover.',
            },
            {
              title: 'Accessibility',
              text: 'Keyboard support, screen-reader labels and sufficient colour contrast.',
            },
          ]}
        >
          <Reveal delay={0.28} className="mt-7 flex h-9 items-center gap-3 text-caption text-muted">
            <span className="flex h-9 items-center gap-2 rounded-lg border border-line px-3">
              <span className="size-2 rounded-full bg-accent" /> Saving…
            </span>
            <span className="flex h-9 items-center rounded-lg border border-line px-3">
              <Kbd>Tab</Kbd>
              <span className="ml-2">to move</span>
            </span>
          </Reveal>
        </SplitColumn>
      </div>
    </Slide>
  )
}

function Kbd({ children }) {
  return (
    <kbd className="rounded border border-line px-1.5 text-[12px] font-sans text-ink">{children}</kbd>
  )
}

/* ------------------------------------------------------------------
   07 · Consistency & minimize user effort
------------------------------------------------------------------- */
export function ConsistencyEffort() {
  return (
    <Slide title="Consistency & Minimize User Effort" className="flex flex-col">
      <div className="grid flex-1 grid-cols-2 gap-8">
        <RevealCard delay={0.12} className="flex flex-col p-10">
          <Label>Consistency</Label>
          <p className="mt-3 text-heading font-semibold text-ink">
            The same things look and behave the same way.
          </p>
          <div className="mt-auto grid grid-cols-2 gap-8">
            {[
              ['Internal', 'Within the system — same layout, terms, colours and button positions on every screen.', '“Save” is always bottom-right'],
              ['External', 'With other systems and platform conventions users already know.', 'Ctrl + S saves · logo returns home'],
            ].map(([title, text, example], i) => (
              <Reveal key={title} delay={0.25 + i * 0.08}>
                <p className="text-body font-semibold text-accent">{title}</p>
                <p className="mt-2 text-small text-muted">{text}</p>
                <p className="mt-4 border-l-2 border-accent/30 pl-3 text-caption text-ink">
                  {example}
                </p>
              </Reveal>
            ))}
          </div>
        </RevealCard>

        <RevealCard delay={0.2} className="flex flex-col p-10">
          <Label>Minimize user effort</Label>
          <p className="mt-3 text-heading font-semibold text-ink">
            Fewer clicks, less typing, less to remember.
          </p>
          <div className="mt-auto grid grid-cols-2 gap-x-8 gap-y-7">
            {[
              ['Autofill', 'Pre-fill data the system already knows'],
              ['Predictive text', 'Suggest values as the user types'],
              ['Shortcuts', 'Keyboard accelerators for frequent actions'],
              ['Remember me', 'Keep returning users signed in'],
            ].map(([title, text], i) => (
              <Reveal key={title} delay={0.33 + i * 0.06}>
                <p className="text-body font-semibold text-accent">{title}</p>
                <p className="mt-1 text-small text-muted">{text}</p>
              </Reveal>
            ))}
          </div>
        </RevealCard>
      </div>
      <Reveal delay={0.6} className="mt-6 text-small text-muted">
        <span className="font-semibold text-ink">Three-clicks rule:</span> users should be able to
        reach any function or information in no more than three clicks.
      </Reveal>
    </Slide>
  )
}
