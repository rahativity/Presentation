import { useState } from 'react'
import Slide from '../components/Slide.jsx'
import {
  Bar,
  Chip,
  FlowArrow,
  Index,
  Kbd,
  Label,
  Points,
  Reveal,
  RevealCard,
  Window,
} from '../components/ui.jsx'

/* ------------------------------------------------------------------
   03 · Introduction to UI Design (Merged: Purpose, Interaction,
        Satisfaction, Efficiency)
------------------------------------------------------------------- */
const uiMergedTopics = [
  {
    title: 'Purpose of UI Design',
    text: 'Bridges user intent and software capability; translates goals into intuitive action.',
  },
  {
    title: 'User Interaction',
    text: 'Two-way dialogue: users issue commands, the system responds with immediate feedback.',
  },
  {
    title: 'User Satisfaction',
    text: 'Fosters trust, ease, and comfort while minimizing cognitive strain and friction.',
  },
  {
    title: 'System Efficiency',
    text: 'Maximizes task speed, throughput, and accuracy with minimal human error.',
  },
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
      <span className="w-44 self-center text-right text-caption text-muted">{down}</span>
      <FlowArrow vertical delay={delay} />
      <FlowArrow vertical delay={delay + 0.1} className="rotate-180" />
      <span className="w-44 self-center text-caption text-muted">{up}</span>
    </div>
  )
}

export function WhatIsUI() {
  return (
    <Slide
      title="Introduction to UI Design"
      subtitle="The user interface connects human users to underlying software capabilities, shaping interaction, satisfaction, and operational efficiency."
      className="grid grid-cols-[1.1fr_1fr] gap-16"
    >
      <div className="flex flex-col justify-center">
        <Points items={uiMergedTopics} delay={0.15} size="small" className="space-y-5" />
      </div>

      <div className="-mt-4 flex flex-col items-center justify-center">
        <Reveal delay={0.2} className="flex flex-col items-center">
          <PersonGlyph />
          <span className="mt-1 text-small font-medium text-ink">User</span>
        </Reveal>
        <ArrowPair delay={0.3} down="Actions & input" up="Feedback & output" />
        <Reveal delay={0.35} className="flex flex-col items-center">
          <Window highlight className="h-[200px] w-[390px]" bodyClassName="p-5">
            <div className="flex items-center gap-3">
              <span className="size-5 rounded bg-accent" />
              <Bar className="w-12" />
              <Bar className="w-12" />
              <Bar className="w-12" />
            </div>
            <Bar className="mt-5 h-3 w-40 bg-ink/20" />
            <div className="mt-4 grid grid-cols-2 gap-3">
              <span className="h-8 rounded-md border border-line" />
              <span className="h-8 rounded-md border border-line" />
            </div>
            <div className="mt-3 flex justify-end">
              <span className="h-7 w-20 rounded-md bg-accent" />
            </div>
          </Window>
          <span className="mt-2 text-small font-semibold text-accent">Interface</span>
        </Reveal>
        <ArrowPair delay={0.45} down="Requests & queries" up="Data & results" />
        <Reveal delay={0.5} className="flex flex-col items-center">
          <DatabaseGlyph />
          <span className="mt-1 text-small font-medium text-ink">System</span>
        </Reveal>
      </div>
    </Slide>
  )
}

/* ------------------------------------------------------------------
   04 · UI Design Principles (8 Card Grid)
------------------------------------------------------------------- */
const corePrinciples = [
  ['Layout', 'Organise every screen into predictable, consistent areas (nav, work, status).'],
  ['Content Awareness', 'Ensure users always know where they are, what they see, and what happened.'],
  ['Aesthetics', 'Pleasing, functional visual design with balanced whitespace and clear hierarchy.'],
  ['User Experience', 'Intuitive, satisfying, and easy to learn for novices while efficient for experts.'],
  ['Consistency', 'Identical behaviors, terms, icons, and visual elements across the system.'],
  ['Minimize User Effort', 'Reduce cognitive load, keystrokes, and clicks (the Three-Clicks Rule).'],
  ['Accessibility', 'Ensure equal access across abilities, assistive technologies, and devices.'],
  ['Scalability', 'Accommodate feature expansion, large datasets, and evolving user requirements.'],
]

export function CorePrinciples() {
  return (
    <Slide
      title="UI Design Principles"
      subtitle="Eight foundational principles that govern the usability, learnability, and longevity of system interfaces."
      className="grid grid-cols-4 grid-rows-2 gap-5"
    >
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
   05 · Layout + Content Awareness (Combined Visual)
------------------------------------------------------------------- */
function Callout({ n }) {
  return (
    <span className="grid size-[22px] shrink-0 place-items-center rounded-full bg-accent text-[12px] font-semibold text-white">
      {n}
    </span>
  )
}

const awareness = [
  ['Page titles', 'Explicitly name the current screen and its purpose'],
  ['Breadcrumbs', 'Show the hierarchical path — and provide a one-click way back'],
  ['Labels', 'Unambiguously describe every input field and content section'],
  ['Feedback', 'Immediately confirm system actions and status changes'],
]

export function LayoutAwareness() {
  return (
    <Slide
      title="Layout & Content Awareness"
      subtitle="Standardized screen zones paired with explicit contextual signposts keep users oriented."
      className="grid grid-cols-[1.2fr_1fr] gap-20"
    >
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
            Divide each screen into three functional zones — navigation, work, and status — and keep
            their positions uniform across every screen in the system.
          </p>
        </Reveal>
        <div className="my-9 h-px bg-line" />
        <Reveal delay={0.28}>
          <h3 className="text-heading font-semibold text-ink">Content awareness</h3>
          <p className="mt-2 text-small text-muted">
            Users should never feel lost or uncertain about system state.
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
   06 · Aesthetics + UX + Consistency (Clean 3-Column Comparison)
------------------------------------------------------------------- */
export function AestheticsUXConsistency() {
  return (
    <Slide
      title="Aesthetics, UX & Consistency"
      subtitle="Visual elegance, operational experience, and system-wide predictability work together to eliminate friction."
      className="grid grid-cols-3 gap-8"
    >
      {/* Column 1: Aesthetics */}
      <RevealCard delay={0.12} className="flex flex-col p-8">
        <div className="flex items-center justify-between">
          <Label>Visual Design</Label>
          <span className="text-[12px] font-semibold uppercase tracking-wider text-accent">Looks</span>
        </div>
        <h3 className="mt-3 text-heading font-semibold text-ink">Aesthetics</h3>
        <p className="mt-1 text-small text-muted">How the interface appears visually.</p>

        {/* Micro Visual */}
        <div className="mt-6 rounded-xl border border-line bg-surface p-4">
          <div className="flex items-center gap-2">
            {['#171717', '#666666', '#1F4E79', '#E5E5E5'].map((c) => (
              <span
                key={c}
                className="size-7 rounded-md border border-line"
                style={{ backgroundColor: c }}
                title={c}
              />
            ))}
            <div className="ml-auto flex items-baseline gap-1.5">
              <span className="text-[26px] font-semibold leading-none text-ink">Aa</span>
              <span className="text-[18px] leading-none text-muted">Aa</span>
              <span className="text-[13px] leading-none text-muted/60">Aa</span>
            </div>
          </div>
        </div>

        <Points
          items={[
            {
              title: 'Purposeful Colors',
              text: 'High-contrast palette; supports meaning without being the sole cue.',
            },
            {
              title: 'Typography Scale',
              text: 'Clear hierarchy across headings, body, and labels with readable fonts.',
            },
            {
              title: 'Whitespace & Balance',
              text: 'Chunks related content; provides breathing room to prevent clutter.',
            },
          ]}
          delay={0.25}
          size="small"
          className="mt-6 space-y-4"
        />
      </RevealCard>

      {/* Column 2: User Experience */}
      <RevealCard delay={0.2} className="flex flex-col p-8">
        <div className="flex items-center justify-between">
          <Label>Interaction Design</Label>
          <span className="text-[12px] font-semibold uppercase tracking-wider text-accent">Feels</span>
        </div>
        <h3 className="mt-3 text-heading font-semibold text-ink">User Experience</h3>
        <p className="mt-1 text-small text-muted">How the interface feels during operation.</p>

        {/* Micro Visual */}
        <div className="mt-6 flex h-[62px] items-center justify-between rounded-xl border border-line bg-surface px-4 text-caption text-muted">
          <span className="flex items-center gap-2 rounded-lg border border-line bg-white px-3 py-1.5 text-[13px] text-ink">
            <span className="size-2 rounded-full bg-accent animate-pulse" /> Saving state…
          </span>
          <span className="flex items-center gap-1.5 text-[12px]">
            <Kbd>Tab</Kbd>
            <span>to focus</span>
          </span>
        </div>

        <Points
          items={[
            {
              title: 'Responsiveness',
              text: 'Instant feedback on every action; layouts adapt across screen sizes.',
            },
            {
              title: 'Learnability & Ease',
              text: 'Intuitive mental models for quick learning and low cognitive fatigue.',
            },
            {
              title: 'Accessibility & Safety',
              text: 'Full keyboard support, clear contrast, and tolerant error recovery.',
            },
          ]}
          delay={0.33}
          size="small"
          className="mt-6 space-y-4"
        />
      </RevealCard>

      {/* Column 3: Consistency */}
      <RevealCard delay={0.28} className="flex flex-col p-8">
        <div className="flex items-center justify-between">
          <Label>System Standards</Label>
          <span className="text-[12px] font-semibold uppercase tracking-wider text-accent">Behaves</span>
        </div>
        <h3 className="mt-3 text-heading font-semibold text-ink">Consistency</h3>
        <p className="mt-1 text-small text-muted">How the interface behaves predictably.</p>

        {/* Micro Visual */}
        <div className="mt-6 flex h-[62px] items-center justify-between rounded-xl border border-line bg-surface px-4 text-caption text-muted">
          <span className="text-[12px] text-ink">
            <span className="font-semibold text-accent">Internal:</span> “Save” bottom-right
          </span>
          <span className="text-[12px] text-muted">
            <span className="font-semibold text-ink">External:</span> <Kbd>Ctrl+S</Kbd>
          </span>
        </div>

        <Points
          items={[
            {
              title: 'Internal Consistency',
              text: 'Same terms, layout zones, and button placements across every screen.',
            },
            {
              title: 'External Conventions',
              text: 'Adheres to common platform norms (e.g. Ctrl+S, logo links home).',
            },
            {
              title: 'Muscle Memory',
              text: 'Predictable interactions prevent user hesitation and relearning.',
            },
          ]}
          delay={0.41}
          size="small"
          className="mt-6 space-y-4"
        />
      </RevealCard>
    </Slide>
  )
}

/* ------------------------------------------------------------------
   07 · Minimize User Effort (With UI Examples & 3-Clicks Rule)
------------------------------------------------------------------- */
export function MinimizeUserEffort() {
  const [typedQuery, setTypedQuery] = useState('Wire')
  const [rememberChecked, setRememberChecked] = useState(true)

  const sampleSuggestions = ['Wireless Headphones', 'Wireless Charger', 'Wired Earbuds'].filter((s) =>
    s.toLowerCase().includes(typedQuery.toLowerCase()),
  )

  return (
    <Slide
      title="Minimize User Effort"
      subtitle="Anticipate user intent, eliminate unnecessary keystrokes, and enforce the Three-Clicks Rule."
      className="flex flex-col justify-between"
    >
      <div className="grid grid-cols-4 gap-6">
        {/* UI Example 1: Autofill */}
        <RevealCard delay={0.12} className="flex flex-col p-6">
          <div className="flex items-center justify-between">
            <Label>Effort Reduction</Label>
            <Chip accent>01</Chip>
          </div>
          <h3 className="mt-3 text-heading font-semibold text-ink">Autofill</h3>
          <p className="mt-1 text-caption text-muted">
            Pre-fills saved profile or browser data.
          </p>

          <div className="mt-5 rounded-xl border border-line bg-surface p-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                Shipping Address
              </span>
              <span className="rounded bg-accent/10 px-1.5 py-0.5 text-[10px] font-semibold text-accent">
                Auto-filled
              </span>
            </div>
            <div className="mt-2.5 space-y-2">
              <div className="h-8 rounded-md border border-accent/40 bg-white px-2.5 flex items-center text-[13px] text-ink font-medium">
                Ayesha Rahman
              </div>
              <div className="h-8 rounded-md border border-accent/40 bg-white px-2.5 flex items-center text-[13px] text-ink font-medium">
                42 Park Road, Block B
              </div>
            </div>
          </div>
          <p className="mt-4 text-[13px] text-muted">
            <span className="font-semibold text-ink">Benefit:</span> Eliminates repetitive manual typing.
          </p>
        </RevealCard>

        {/* UI Example 2: Predictive Text */}
        <RevealCard delay={0.18} className="flex flex-col p-6">
          <div className="flex items-center justify-between">
            <Label>Effort Reduction</Label>
            <Chip accent>02</Chip>
          </div>
          <h3 className="mt-3 text-heading font-semibold text-ink">Predictive Text</h3>
          <p className="mt-1 text-caption text-muted">
            Suggests matching queries in real time.
          </p>

          <div className="mt-5 rounded-xl border border-line bg-surface p-4">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-muted">
              Live Search Field
            </span>
            <div className="relative mt-2">
              <input
                id="effort-predictive-input"
                value={typedQuery}
                onChange={(e) => setTypedQuery(e.target.value)}
                placeholder="Search catalog..."
                className="h-8 w-full rounded-md border border-accent bg-white px-2.5 text-[13px] text-ink outline-none"
              />
              {sampleSuggestions.length > 0 && (
                <div className="mt-1 rounded-md border border-line bg-white shadow-xs">
                  {sampleSuggestions.map((item, idx) => (
                    <div
                      key={item}
                      onClick={() => setTypedQuery(item)}
                      className={`cursor-pointer px-2.5 py-1 text-[12px] hover:bg-surface ${
                        idx === 0 ? 'font-medium text-accent' : 'text-muted'
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <p className="mt-4 text-[13px] text-muted">
            <span className="font-semibold text-ink">Benefit:</span> Prevents typos and speeds search.
          </p>
        </RevealCard>

        {/* UI Example 3: Shortcuts */}
        <RevealCard delay={0.24} className="flex flex-col p-6">
          <div className="flex items-center justify-between">
            <Label>Effort Reduction</Label>
            <Chip accent>03</Chip>
          </div>
          <h3 className="mt-3 text-heading font-semibold text-ink">Shortcuts</h3>
          <p className="mt-1 text-caption text-muted">
            Keyboard accelerators for power users.
          </p>

          <div className="mt-5 rounded-xl border border-line bg-surface p-4">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-muted">
              Quick Action Bar
            </span>
            <div className="mt-2.5 space-y-2 text-[12px]">
              <div className="flex items-center justify-between rounded-md border border-line bg-white px-2.5 py-1.5">
                <span className="text-ink">Quick Save</span>
                <span className="flex items-center gap-1">
                  <Kbd>Ctrl</Kbd>+<Kbd>S</Kbd>
                </span>
              </div>
              <div className="flex items-center justify-between rounded-md border border-line bg-white px-2.5 py-1.5">
                <span className="text-ink">Global Search</span>
                <Kbd>/</Kbd>
              </div>
              <div className="flex items-center justify-between rounded-md border border-line bg-white px-2.5 py-1.5">
                <span className="text-ink">Undo Action</span>
                <span className="flex items-center gap-1">
                  <Kbd>Ctrl</Kbd>+<Kbd>Z</Kbd>
                </span>
              </div>
            </div>
          </div>
          <p className="mt-4 text-[13px] text-muted">
            <span className="font-semibold text-ink">Benefit:</span> Bypasses mouse navigation for speed.
          </p>
        </RevealCard>

        {/* UI Example 4: Remember Me */}
        <RevealCard delay={0.3} className="flex flex-col p-6">
          <div className="flex items-center justify-between">
            <Label>Effort Reduction</Label>
            <Chip accent>04</Chip>
          </div>
          <h3 className="mt-3 text-heading font-semibold text-ink">Remember Me</h3>
          <p className="mt-1 text-caption text-muted">
            Persists session tokens across return visits.
          </p>

          <div className="mt-5 rounded-xl border border-line bg-surface p-4">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-muted">
              Authentication State
            </span>
            <div className="mt-2.5 rounded-md border border-line bg-white p-2.5">
              <label className="flex cursor-pointer items-center gap-2 text-[13px] font-medium text-ink">
                <input
                  id="effort-remember-checkbox"
                  type="checkbox"
                  checked={rememberChecked}
                  onChange={(e) => setRememberChecked(e.target.checked)}
                  className="size-4 accent-accent"
                />
                Keep me signed in
              </label>
              <div className="mt-2 flex items-center justify-between text-[11px] text-muted border-t border-line/60 pt-2">
                <span>Secure token</span>
                <span className="font-semibold text-accent">Active · 30 Days</span>
              </div>
            </div>
          </div>
          <p className="mt-4 text-[13px] text-muted">
            <span className="font-semibold text-ink">Benefit:</span> Eliminates repeated login friction.
          </p>
        </RevealCard>
      </div>

      {/* The Three-Clicks Rule Banner */}
      <Reveal delay={0.45} className="mt-4 flex items-center justify-between rounded-xl border border-accent/30 bg-accent/[0.03] px-8 py-4">
        <div className="flex items-center gap-4">
          <span className="grid size-9 place-items-center rounded-lg bg-accent text-[14px] font-bold text-white">
            3×
          </span>
          <div>
            <h4 className="text-body font-semibold text-ink">The Three-Clicks Rule</h4>
            <p className="text-small text-muted">
              Users should be able to navigate to any function, document, or piece of information in no more than three mouse clicks or taps from the start screen.
            </p>
          </div>
        </div>
        <Chip accent>Standard HCI Benchmark</Chip>
      </Reveal>
    </Slide>
  )
}
