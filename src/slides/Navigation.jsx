import Slide from '../components/Slide.jsx'
import { Index, Label, Reveal, RevealCard } from '../components/ui.jsx'

/* ------------------------------------------------------------------
   13 · Navigation design principles
------------------------------------------------------------------- */
function MiniDialog() {
  return (
    <div className="rounded-lg border border-line bg-white p-4">
      <p className="text-caption font-semibold text-ink">Delete 3 files?</p>
      <p className="mt-1 text-[13px] text-muted">This cannot be undone.</p>
      <div className="mt-3 flex justify-end gap-2">
        <span className="rounded-md border border-line px-3 py-1 text-[13px] text-ink">Cancel</span>
        <span className="rounded-md bg-ink px-3 py-1 text-[13px] text-white">Delete</span>
      </div>
    </div>
  )
}

function MiniToast() {
  return (
    <div className="flex items-center gap-4 rounded-lg bg-ink px-4 py-3 text-caption text-white">
      Message archived
      <span className="ml-auto font-semibold text-[#9DBCE0]">Undo</span>
    </div>
  )
}

function MiniGrammar() {
  return (
    <div className="flex items-center gap-3 text-caption">
      <span className="rounded-md border border-line bg-white px-3 py-1.5 text-ink">Select file</span>
      <span className="text-muted">→</span>
      <span className="rounded-md border border-accent/40 bg-white px-3 py-1.5 text-accent">Delete</span>
      <span className="ml-2 text-muted">object → action</span>
    </div>
  )
}

const navPrinciples = [
  ['Prevent mistakes', 'Label commands clearly, limit choices, and ask before destructive actions.', MiniDialog],
  ['Simplify recovery', 'Make actions reversible — undo, back and cancel should always be close.', MiniToast],
  ['Consistent grammar order', 'Use one command order everywhere: object then action, or action then object.', MiniGrammar],
]

export function NavigationPrinciples() {
  return (
    <Slide
      title="Navigation Design Principles"
      subtitle="Navigation should be so simple that users don’t have to think about it."
      className="grid grid-cols-3 gap-12"
    >
      {navPrinciples.map(([title, text, Example], i) => (
        <Reveal key={title} delay={0.18 + i * 0.1} className="flex flex-col">
          <Index n={i + 1} className="text-[44px] font-light leading-none" />
          <h3 className="mt-6 text-heading font-semibold text-ink">{title}</h3>
          <p className="mt-3 text-small text-muted">{text}</p>
          <div className="mt-auto flex min-h-[150px] items-center rounded-xl bg-surface p-5">
            <div className="w-full">
              <Example />
            </div>
          </div>
        </Reveal>
      ))}
    </Slide>
  )
}

/* ------------------------------------------------------------------
   14 · Navigation controls
------------------------------------------------------------------- */
function TerminalVisual() {
  return (
    <div className="h-full rounded-lg bg-ink p-4 font-mono text-[13px] leading-6 text-white/90">
      <p>
        <span className="text-white/40">$</span> find album "Abbey Road"
      </p>
      <p className="text-white/50">1 result · The Beatles (1969)</p>
      <p>
        <span className="text-white/40">$</span> add-to-cart 1
      </p>
      <p className="text-white/50">Added to cart</p>
    </div>
  )
}

function MenuVisual() {
  return (
    <div className="h-full">
      <div className="flex gap-4 rounded-t-lg border border-line bg-white px-3 py-1.5 text-[13px] text-ink">
        <span className="font-semibold">File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Help</span>
      </div>
      <div className="ml-1 w-40 rounded-b-lg border border-t-0 border-line bg-white py-1 text-[13px]">
        {['New', 'Open…', 'Save', 'Print…'].map((m) => (
          <p
            key={m}
            className={`px-3 py-1 ${m === 'Save' ? 'bg-accent/[0.08] text-accent' : 'text-ink'}`}
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
      <div className="flex h-16 w-14 flex-col justify-end rounded-md border border-line bg-white p-1.5">
        <span className="h-1 w-8 rounded bg-ink/15" />
        <span className="mt-1 h-1 w-6 rounded bg-ink/15" />
      </div>
      <svg className="absolute left-[80px] right-[96px] top-1/2 -translate-y-1/2" height="24" viewBox="0 0 100 24" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 12 C30 -4, 70 -4, 100 12" fill="none" stroke="#1F4E79" strokeOpacity=".5" strokeWidth="1.5" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="flex flex-col items-center">
        <svg width="64" height="52" viewBox="0 0 64 52" fill="none" aria-hidden="true">
          <path d="M2 8a4 4 0 014-4h16l6 6h30a4 4 0 014 4v32a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" fill="#fff" stroke="#1F4E79" strokeOpacity=".6" strokeWidth="1.5" />
        </svg>
        <span className="mt-1 text-[12px] text-muted">Playlist</span>
      </div>
    </div>
  )
}

const controls = [
  ['Language Commands', 'Users type commands or natural-language requests.', TerminalVisual, 'Fast and powerful for experts', 'Users must remember the syntax'],
  ['Menus', 'Users choose from a list of available options.', MenuVisual, 'Easy to learn — nothing to memorise', 'Slower for frequent, repeated tasks'],
  ['Direct Manipulation', 'Users act on objects directly — drag, drop, resize.', DragVisual, 'Intuitive, with immediate feedback', 'Awkward for complex or bulk actions'],
]

export function NavigationControls() {
  return (
    <Slide title="Navigation Controls" className="grid grid-cols-3">
      {controls.map(([title, text, Visual, pro, con], i) => (
        <Reveal
          key={title}
          delay={0.15 + i * 0.1}
          className={`flex flex-col ${i > 0 ? 'border-l border-line pl-12' : ''} ${i < 2 ? 'pr-12' : ''}`}
        >
          <h3 className="text-heading font-semibold text-ink">{title}</h3>
          <p className="mt-2 text-small text-muted">{text}</p>
          <div className="mt-7 h-[150px] rounded-xl bg-surface p-4">
            <Visual />
          </div>
          <dl className="mt-auto space-y-3 text-small">
            <div>
              <dt className="text-[12px] font-semibold uppercase tracking-[0.14em] text-accent">Strength</dt>
              <dd className="mt-1 text-ink">{pro}</dd>
            </div>
            <div>
              <dt className="text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">Limitation</dt>
              <dd className="mt-1 text-ink">{con}</dd>
            </div>
          </dl>
        </Reveal>
      ))}
    </Slide>
  )
}

/* ------------------------------------------------------------------
   15 · Common navigation components
------------------------------------------------------------------- */
function MenuBarExample() {
  return (
    <div className="flex w-full items-center gap-8 rounded-lg border border-line bg-white px-5 py-3 text-small">
      <span className="size-5 rounded bg-accent" />
      <span className="relative font-medium text-ink">
        Home
        <span className="absolute -bottom-[13px] left-0 right-0 h-0.5 bg-accent" />
      </span>
      <span className="text-muted">Browse</span>
      <span className="text-muted">Library</span>
      <span className="ml-auto text-muted">Account</span>
    </div>
  )
}

function BreadcrumbExample() {
  return (
    <nav className="flex items-center gap-2.5 text-small" aria-label="Example breadcrumb">
      {['Home', 'Music', 'Rock'].map((c) => (
        <span key={c} className="flex items-center gap-2.5">
          <span className="text-accent underline decoration-accent/30 underline-offset-4">{c}</span>
          <span className="text-muted/60">›</span>
        </span>
      ))}
      <span className="font-medium text-ink">Abbey Road</span>
    </nav>
  )
}

function SearchExample() {
  return (
    <div className="flex w-full items-center gap-3 rounded-full border border-line bg-white px-5 py-3 text-small">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
        <circle cx="11" cy="11" r="7" />
        <path d="M20 20l-3.5-3.5" />
      </svg>
      <span className="text-muted/80">Search albums, artists, songs…</span>
      <span className="ml-auto rounded border border-line px-1.5 text-[12px] text-muted">/</span>
    </div>
  )
}

function TabsExample() {
  return (
    <div className="w-full border-b border-line">
      <div className="flex gap-8 text-small">
        {['Overview', 'Tracks', 'Reviews'].map((t, i) => (
          <span
            key={t}
            className={`-mb-px pb-3 ${i === 1 ? 'border-b-2 border-accent font-medium text-ink' : 'text-muted'}`}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

const components = [
  ['Menu Bar', 'Primary, always-visible navigation across the top of every screen.', MenuBarExample],
  ['Breadcrumbs', 'Show where the user is in a hierarchy and offer a one-click way back.', BreadcrumbExample],
  ['Search Bar', 'Jump straight to content in large systems instead of browsing.', SearchExample],
  ['Tabs', 'Switch between related views of the same item without leaving the screen.', TabsExample],
]

export function NavigationComponents() {
  return (
    <Slide title="Common Navigation Components" className="grid grid-cols-2 grid-rows-2 gap-5">
      {components.map(([title, text, Example], i) => (
        <RevealCard key={title} delay={0.15 + i * 0.08} className="flex flex-col overflow-hidden">
          <div className="flex flex-1 items-center justify-center bg-surface px-10">
            <Example />
          </div>
          <div className="flex items-baseline gap-5 px-7 py-5">
            <h3 className="w-36 shrink-0 text-body font-semibold text-ink">{title}</h3>
            <p className="text-caption text-muted">{text}</p>
          </div>
        </RevealCard>
      ))}
    </Slide>
  )
}

/* ------------------------------------------------------------------
   16 · Menu types — when to use each
------------------------------------------------------------------- */
const menuTypes = [
  ['Menu Bar', 'List of commands across the top of the screen', 'Main menu of the system — always visible'],
  ['Drop-down Menu', 'Menu that drops down below a menu-bar item', 'Second-level options grouped under the menu bar'],
  ['Hyperlink Menu', 'List of links to other pages', 'Main menu of a web-based system'],
  ['Embedded Hyperlinks', 'Links placed within body text', 'Pointing to related content in context'],
  ['Pop-up Menu', 'Appears at the cursor on right-click or long-press', 'Shortcuts for experienced users'],
  ['Tab Menu', 'Multi-page view with a tab for each page', 'Switching between related forms or settings'],
  ['Image Map', 'Clickable regions within an image', 'Only when the image itself adds meaning — maps, seat plans'],
]

export function MenuTypes() {
  return (
    <Slide title="Menu Types" className="flex flex-col">
      <table className="w-full border-collapse text-left">
        <thead>
          <Reveal as="tr" delay={0.12} className="border-b border-ink/80">
            <th className="w-[24%] pb-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">
              Menu type
            </th>
            <th className="w-[36%] pb-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">
              What it is
            </th>
            <th className="pb-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-accent">
              When to use
            </th>
          </Reveal>
        </thead>
        <tbody>
          {menuTypes.map(([type, what, when], i) => (
            <Reveal as="tr" key={type} delay={0.18 + i * 0.05} className="border-b border-line">
              <td className="py-[17px] pr-6 text-small font-semibold text-ink">{type}</td>
              <td className="py-[17px] pr-6 text-small text-muted">{what}</td>
              <td className="py-[17px] text-small text-ink">{when}</td>
            </Reveal>
          ))}
        </tbody>
      </table>
    </Slide>
  )
}

/* ------------------------------------------------------------------
   17 · Message design
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
            Your card was declined. Check the card number or use a different card.
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
            “Road Trip” and its 24 songs will be removed. This cannot be undone.
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
          <p className="mt-0.5 text-caption text-muted">Order #1042 arrives Thursday.</p>
          <p className="mt-2 text-caption font-medium text-accent">Track order</p>
        </div>
        <span className="text-muted/60">×</span>
      </div>
      <div className="flex items-center gap-3 rounded-xl border border-line bg-white px-4 py-3 opacity-60">
        <span className="size-2 rounded-full bg-accent" />
        <p className="text-caption text-muted">3 new releases from artists you follow</p>
      </div>
    </div>
  )
}

const messages = [
  ['Error messages', 'Say what went wrong and how to fix it — never blame the user.', ErrorExample],
  ['Confirmation messages', 'Ask before irreversible actions; name the action on the button.', ConfirmExample],
  ['Notification messages', 'Inform without interrupting the user’s current task.', NotificationExample],
]

export function MessageDesign() {
  return (
    <Slide title="Message Design" className="flex flex-col">
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
      <Reveal delay={0.55} className="mt-8 flex items-center gap-4 border-t border-line pt-6">
        <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-accent">
          Every message
        </p>
        <p className="text-small text-ink">
          Clear, concise and consistent — in the user’s language, free of technical jargon.
        </p>
      </Reveal>
    </Slide>
  )
}
