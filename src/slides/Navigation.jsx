import Slide from '../components/Slide.jsx'
import { Chip, Index, Label, Reveal, RevealCard } from '../components/ui.jsx'

/* ------------------------------------------------------------------
   12 · Navigation Design (Merged: Principles + Controls)
------------------------------------------------------------------- */
function MiniDialog() {
  return (
    <div className="rounded-lg border border-line bg-white p-3 shadow-2xs">
      <p className="text-[12px] font-semibold text-ink">Delete selected track?</p>
      <p className="mt-0.5 text-[11px] text-muted">This cannot be undone.</p>
      <div className="mt-2.5 flex justify-end gap-1.5">
        <span className="rounded border border-line px-2 py-0.5 text-[11px] text-ink">Cancel</span>
        <span className="rounded bg-ink px-2 py-0.5 text-[11px] text-white">Delete</span>
      </div>
    </div>
  )
}

function MiniToast() {
  return (
    <div className="flex items-center gap-3 rounded-lg bg-ink px-3 py-2 text-[12px] text-white shadow-2xs">
      <span>Track archived</span>
      <span className="ml-auto font-semibold text-[#9DBCE0] cursor-pointer">Undo</span>
    </div>
  )
}

function MiniGrammar() {
  return (
    <div className="flex items-center gap-2 text-[11px]">
      <span className="rounded border border-line bg-white px-2 py-1 text-ink font-medium">Select item</span>
      <span className="text-muted">→</span>
      <span className="rounded border border-accent/40 bg-accent/[0.04] px-2 py-1 text-accent font-semibold">Delete</span>
      <span className="ml-1 text-[11px] text-muted">(object → action)</span>
    </div>
  )
}

function TerminalVisual() {
  return (
    <div className="h-full rounded-lg bg-ink p-3 font-mono text-[11px] leading-5 text-white/90">
      <p>
        <span className="text-white/40">$</span> play "Kind of Blue"
      </p>
      <p className="text-white/50">Streaming lossless audio…</p>
    </div>
  )
}

function MenuVisual() {
  return (
    <div className="h-full">
      <div className="flex gap-3 rounded-t-lg border border-line bg-white px-2.5 py-1 text-[11px] text-ink">
        <span className="font-semibold text-accent">File</span>
        <span>Edit</span>
        <span>View</span>
      </div>
      <div className="ml-0.5 w-32 rounded-b-lg border border-t-0 border-line bg-white py-0.5 text-[11px] shadow-xs">
        {['New', 'Open…', 'Save'].map((m) => (
          <p
            key={m}
            className={`px-2 py-0.5 ${m === 'Save' ? 'bg-accent/[0.08] text-accent font-medium' : 'text-ink'}`}
          >
            {m}
          </p>
        ))}
      </div>
    </div>
  )
}

function DragVisual() {
  return (
    <div className="relative flex h-full items-center justify-between px-3">
      <div className="flex h-12 w-10 flex-col justify-end rounded border border-line bg-white p-1">
        <span className="h-1 w-6 rounded bg-ink/15" />
        <span className="mt-1 h-1 w-4 rounded bg-ink/15" />
      </div>
      <svg
        className="absolute left-[60px] right-[76px] top-1/2 -translate-y-1/2"
        height="18"
        viewBox="0 0 100 18"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 9 C30 -2, 70 -2, 100 9"
          fill="none"
          stroke="#1F4E79"
          strokeOpacity=".5"
          strokeWidth="1.5"
          strokeDasharray="3 3"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <div className="flex flex-col items-center">
        <svg width="44" height="36" viewBox="0 0 64 52" fill="none" aria-hidden="true">
          <path
            d="M2 8a4 4 0 014-4h16l6 6h30a4 4 0 014 4v32a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"
            fill="#fff"
            stroke="#1F4E79"
            strokeOpacity=".6"
            strokeWidth="1.5"
          />
        </svg>
        <span className="text-[10px] text-muted">Playlist</span>
      </div>
    </div>
  )
}

export function NavigationDesign() {
  return (
    <Slide
      title="Navigation Design"
      subtitle="Guiding principles and primary control mechanisms that ensure seamless, reversible user movement."
      className="flex flex-col justify-between"
    >
      {/* Section 1: Navigation Principles */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <Label>Core Navigation Principles</Label>
          <span className="text-caption text-muted">Safety &amp; Predictability</span>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {/* Principle 1 */}
          <RevealCard delay={0.12} className="p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <Index n={1} className="text-caption" />
                <span className="text-[11px] font-semibold uppercase text-accent">Error Defense</span>
              </div>
              <h3 className="mt-2 text-body font-semibold text-ink">Prevent Mistakes</h3>
              <p className="mt-1 text-caption text-muted">
                Label commands clearly, disable invalid choices, and confirm destructive actions.
              </p>
            </div>
            <div className="mt-3 rounded-lg bg-surface p-2.5">
              <MiniDialog />
            </div>
          </RevealCard>

          {/* Principle 2 */}
          <RevealCard delay={0.18} className="p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <Index n={2} className="text-caption" />
                <span className="text-[11px] font-semibold uppercase text-accent">Resilience</span>
              </div>
              <h3 className="mt-2 text-body font-semibold text-ink">Simplify Recovery</h3>
              <p className="mt-1 text-caption text-muted">
                Make actions reversible; keep Undo, Cancel, and Back visible and immediate.
              </p>
            </div>
            <div className="mt-3 rounded-lg bg-surface p-2.5">
              <MiniToast />
            </div>
          </RevealCard>

          {/* Principle 3 */}
          <RevealCard delay={0.24} className="p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <Index n={3} className="text-caption" />
                <span className="text-[11px] font-semibold uppercase text-accent">Consistency</span>
              </div>
              <h3 className="mt-2 text-body font-semibold text-ink">Consistent Grammar</h3>
              <p className="mt-1 text-caption text-muted">
                Standardize command syntax uniformly: either object-then-action or action-then-object.
              </p>
            </div>
            <div className="mt-3 rounded-lg bg-surface p-2.5">
              <MiniGrammar />
            </div>
          </RevealCard>
        </div>
      </div>

      <div className="h-px bg-line my-1" />

      {/* Section 2: Navigation Controls */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <Label>Navigation Controls</Label>
          <span className="text-caption text-muted">Interaction Paradigms</span>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {/* Control 1 */}
          <RevealCard delay={0.3} className="p-5 flex flex-col justify-between">
            <div>
              <h3 className="text-body font-semibold text-ink">Language Commands</h3>
              <p className="mt-0.5 text-caption text-muted">
                Users enter textual commands or natural-language syntax.
              </p>
            </div>
            <div className="mt-3 h-18 rounded-lg bg-surface p-2">
              <TerminalVisual />
            </div>
            <div className="mt-3 flex items-center justify-between text-[11px] text-muted border-t border-line/60 pt-2">
              <span><strong className="text-ink">Pro:</strong> Fast for experts</span>
              <span><strong className="text-muted">Con:</strong> Requires recall</span>
            </div>
          </RevealCard>

          {/* Control 2 */}
          <RevealCard delay={0.36} className="p-5 flex flex-col justify-between">
            <div>
              <h3 className="text-body font-semibold text-ink">Menus</h3>
              <p className="mt-0.5 text-caption text-muted">
                Users choose from a categorized visual list of options.
              </p>
            </div>
            <div className="mt-3 h-18 rounded-lg bg-surface p-2">
              <MenuVisual />
            </div>
            <div className="mt-3 flex items-center justify-between text-[11px] text-muted border-t border-line/60 pt-2">
              <span><strong className="text-ink">Pro:</strong> Zero memorization</span>
              <span><strong className="text-muted">Con:</strong> Slower for power users</span>
            </div>
          </RevealCard>

          {/* Control 3 */}
          <RevealCard delay={0.42} className="p-5 flex flex-col justify-between">
            <div>
              <h3 className="text-body font-semibold text-ink">Direct Manipulation</h3>
              <p className="mt-0.5 text-caption text-muted">
                Users interact with visual objects directly (drag, drop, resize).
              </p>
            </div>
            <div className="mt-3 h-18 rounded-lg bg-surface p-2">
              <DragVisual />
            </div>
            <div className="mt-3 flex items-center justify-between text-[11px] text-muted border-t border-line/60 pt-2">
              <span><strong className="text-ink">Pro:</strong> Natural tactile feedback</span>
              <span><strong className="text-muted">Con:</strong> Hard for bulk tasks</span>
            </div>
          </RevealCard>
        </div>
      </div>
    </Slide>
  )
}

/* ------------------------------------------------------------------
   13 · Navigation Components + Menu Types (Merged Comparison Table)
------------------------------------------------------------------- */
const navComparisonTable = [
  {
    name: 'Menu Bar',
    scope: 'Global',
    what: 'Horizontal command strip pinned across the screen top',
    when: 'Primary entryway for major top-level system modules',
  },
  {
    name: 'Drop-down Menu',
    scope: 'Hierarchical',
    what: 'Cascading list revealing options beneath a parent item',
    when: 'Grouping second-level commands without cluttering the screen',
  },
  {
    name: 'Hyperlink Menu',
    scope: 'Page Index',
    what: 'Structured list of text links to destination pages',
    when: 'Main navigational directory for web portals and sidebars',
  },
  {
    name: 'Embedded Hyperlink',
    scope: 'In-Content',
    what: 'Clickable inline text links woven into paragraph copy',
    when: 'Contextual references to related records or definitions',
  },
  {
    name: 'Pop-up / Context Menu',
    scope: 'Contextual',
    what: 'Floats at cursor coordinates on right-click or long-press',
    when: 'Power-user shortcuts tailored to the selected object',
  },
  {
    name: 'Tab Menu / Tabs',
    scope: 'In-Page Views',
    what: 'Notebook-style tab headers switching between parallel views',
    when: 'Switching related forms or views without leaving the screen',
  },
  {
    name: 'Breadcrumbs',
    scope: 'Hierarchy',
    what: 'Linear parent-child trail (Home › Category › Item)',
    when: 'Deep taxonomies to show exact path and easy return route',
  },
  {
    name: 'Search Bar',
    scope: 'Direct Access',
    what: 'Query text input with live filtering and auto-suggestions',
    when: 'Fast keyword navigation that bypasses deep browsing',
  },
  {
    name: 'Image Map',
    scope: 'Spatial',
    what: 'Clickable hotspot coordinates defined over a visual graphic',
    when: 'Spatial contexts where the image carries meaning (maps, seating)',
  },
]

export function NavComponentsMenuTypes() {
  return (
    <Slide
      title="Navigation Components & Menu Types"
      subtitle="Comparative taxonomy of all major navigation controls, component structures, and ideal deployment scenarios."
      className="flex flex-col justify-between"
    >
      <div className="overflow-hidden rounded-xl border border-line bg-white shadow-2xs">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-ink/80 bg-surface">
              <th className="w-[18%] py-3 px-5 text-[12px] font-semibold uppercase tracking-[0.12em] text-ink">
                Component / Control
              </th>
              <th className="w-[14%] py-3 px-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">
                Category
              </th>
              <th className="w-[33%] py-3 px-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">
                Structural Mechanism
              </th>
              <th className="py-3 px-5 text-[12px] font-semibold uppercase tracking-[0.12em] text-accent">
                Best Use Case / Recommendation
              </th>
            </tr>
          </thead>
          <tbody>
            {navComparisonTable.map((item, i) => (
              <Reveal
                as="tr"
                key={item.name}
                delay={0.12 + i * 0.04}
                className="border-b border-line last:border-0 hover:bg-surface/50 transition-colors"
              >
                <td className="py-2 px-5 text-[13px] font-semibold text-ink">{item.name}</td>
                <td className="py-2 px-3">
                  <Chip accent={i % 2 === 0} className="text-[11px] py-0.5 px-2">
                    {item.scope}
                  </Chip>
                </td>
                <td className="py-2 px-3 text-[12.5px] text-muted leading-snug">{item.what}</td>
                <td className="py-2 px-5 text-[12.5px] text-ink font-medium leading-snug">
                  {item.when}
                </td>
              </Reveal>
            ))}
          </tbody>
        </table>
      </div>

      <Reveal delay={0.55} className="mt-3 flex items-center justify-between rounded-xl bg-surface px-6 py-2.5 text-caption text-muted">
        <span>
          <strong className="text-ink">Selection Rule:</strong> Match component visibility to usage frequency — global structures stay pinned, contextual controls appear on demand.
        </span>
        <span className="text-accent font-semibold">10 Navigation Controls Compared</span>
      </Reveal>
    </Slide>
  )
}

/* ------------------------------------------------------------------
   14 · Message Design (Error, Confirmation, Notification)
------------------------------------------------------------------- */
function MessageIcon({ children, filled }) {
  return (
    <span
      className={`grid size-8 shrink-0 place-items-center rounded-full text-[15px] font-semibold ${
        filled ? 'bg-ink text-white' : 'border border-accent/40 text-accent'
      }`}
    >
      {children}
    </span>
  )
}

function ErrorExample() {
  return (
    <div className="rounded-xl border border-line bg-white p-5">
      <div className="flex gap-3">
        <MessageIcon filled>!</MessageIcon>
        <div>
          <p className="text-small font-semibold text-ink">Payment declined</p>
          <p className="mt-1 text-caption text-muted">
            The transaction could not be processed. Please verify your card details or select an alternative payment method.
          </p>
        </div>
      </div>
      <div className="mt-5 flex justify-end gap-2">
        <span className="rounded-md border border-line px-3.5 py-1.5 text-caption text-ink">Change card</span>
        <span className="rounded-md bg-accent px-3.5 py-1.5 text-caption text-white">Try again</span>
      </div>
    </div>
  )
}

function ConfirmExample() {
  return (
    <div className="rounded-xl border border-line bg-white p-5">
      <div className="flex gap-3">
        <MessageIcon>?</MessageIcon>
        <div>
          <p className="text-small font-semibold text-ink">Delete playlist?</p>
          <p className="mt-1 text-caption text-muted">
            “Road Trip” and its 24 songs will be permanently removed. This action cannot be undone.
          </p>
        </div>
      </div>
      <div className="mt-5 flex justify-end gap-2">
        <span className="rounded-md border border-line px-3.5 py-1.5 text-caption text-ink">Cancel</span>
        <span className="rounded-md bg-ink px-3.5 py-1.5 text-caption text-white">Delete playlist</span>
      </div>
    </div>
  )
}

function NotificationExample() {
  return (
    <div className="space-y-3">
      <div className="flex items-start gap-3 rounded-xl border border-line bg-white p-4">
        <MessageIcon>✓</MessageIcon>
        <div className="flex-1">
          <p className="text-small font-semibold text-ink">Order shipped</p>
          <p className="mt-0.5 text-caption text-muted">Order #1042 has been dispatched and arrives Thursday.</p>
          <p className="mt-2 text-caption font-medium text-accent">Track order status →</p>
        </div>
        <span className="text-muted/60">×</span>
      </div>
      <div className="flex items-center gap-3 rounded-xl border border-line bg-white px-4 py-3 opacity-60">
        <span className="size-2 rounded-full bg-accent" />
        <p className="text-caption text-muted">3 new vinyl releases added in Jazz</p>
      </div>
    </div>
  )
}

const messages = [
  [
    'Error Messages',
    'State clearly what happened and how to fix it in constructive terms — never blame the user or display cryptic machine codes.',
    ErrorExample,
  ],
  [
    'Confirmation Messages',
    'Prompt only before irreversible or destructive actions; explicitly name the action on the confirmation button.',
    ConfirmExample,
  ],
  [
    'Notification Messages',
    'Acknowledge system state changes or background completions non-intrusively without blocking active work.',
    NotificationExample,
  ],
]

export function MessageDesign() {
  return (
    <Slide
      title="Message Design"
      subtitle="Effective system feedback guides user action, prevents data loss, and preserves user confidence."
      className="flex flex-col"
    >
      <div className="grid flex-1 grid-cols-3 gap-6">
        {messages.map(([title, text, Example], i) => (
          <Reveal key={title} delay={0.15 + i * 0.1} className="flex flex-col">
            <div className="flex flex-1 items-center rounded-2xl bg-surface p-7">
              <div className="w-full">
                <Example />
              </div>
            </div>
            <h3 className="mt-6 text-body font-semibold text-ink">{title}</h3>
            <p className="mt-1 text-small text-muted">{text}</p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.55} className="mt-8 flex items-center justify-between border-t border-line pt-6">
        <div className="flex items-center gap-4">
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-accent">
            Golden Rules
          </p>
          <p className="text-small text-ink">
            Be clear, concise, polite, and actionable — speak in user-oriented vocabulary, never raw system errors.
          </p>
        </div>
        <Chip accent>HCI Feedback Standard</Chip>
      </Reveal>
    </Slide>
  )
}
