import Slide from '../components/Slide.jsx'
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
   26 · Tune Source Music Store — System Overview
------------------------------------------------------------------- */
const systemModules = [
  {
    title: 'Digital & Physical Catalog',
    desc: 'Unified browsing for vinyl, CDs, high-res FLAC downloads, and streaming previews.',
    metric: '40,000+ Albums',
  },
  {
    title: 'Customer Experience Center',
    desc: 'Customer profiles, saved payment tokens, wishlist, and instant download vault.',
    metric: 'Personalized Portals',
  },
  {
    title: 'Omnichannel Checkout',
    desc: 'Seamless transaction pipeline for both web users and in-store interactive listening kiosks.',
    metric: 'Web & Kiosk Terminals',
  },
]

export function TuneSourceOverview() {
  return (
    <Slide
      title="Tune Source Music Store"
      subtitle="Case scenario: Modernising an independent music retailer with web and in-store digital systems."
      className="grid grid-cols-[1.05fr_1fr] gap-12"
    >
      <div className="flex flex-col justify-between">
        <div>
          <Reveal delay={0.1}>
            <p className="text-body text-ink">
              Tune Source needs an intuitive omnichannel interface allowing music enthusiasts to discover artists, listen to sample tracks, order physical vinyl/CDs, or download lossless digital albums.
            </p>
          </Reveal>
          <div className="mt-5 space-y-3">
            {systemModules.map((m, i) => (
              <RevealCard key={m.title} delay={0.16 + i * 0.06} className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-body font-semibold text-ink">{m.title}</h3>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-accent">
                    {m.metric}
                  </span>
                </div>
                <p className="mt-1 text-caption text-muted">{m.desc}</p>
              </RevealCard>
            ))}
          </div>
        </div>
        <Reveal delay={0.38} className="rounded-lg border border-line bg-surface p-3 text-caption text-muted">
          <span className="font-semibold text-ink">Analytical focus:</span> Seamless transition between discovery, media sampling, and verified transactional checkout.
        </Reveal>
      </div>

      <Reveal delay={0.2} className="flex flex-col">
        <Window highlight title="Tune Source Storefront Mockup" className="flex-1" bodyClassName="p-4 flex flex-col justify-between">
          <div>
            {/* Top Navigation */}
            <div className="flex items-center justify-between border-b border-line pb-3">
              <div className="flex items-center gap-2">
                <span className="grid size-6 place-items-center rounded bg-accent text-[11px] font-bold text-white">
                  TS
                </span>
                <span className="text-small font-bold tracking-tight text-ink">Tune Source</span>
              </div>
              <div className="flex items-center gap-3 text-caption text-muted">
                <span className="text-ink font-medium">New Releases</span>
                <span>Genres</span>
                <span>Listening Room</span>
              </div>
              <span className="rounded-full border border-line px-2.5 py-0.5 text-caption text-ink">
                Cart (2)
              </span>
            </div>

            {/* Sub-hero track preview */}
            <div className="mt-3.5 rounded-lg border border-line bg-surface p-3">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Currently Previewing</Label>
                  <p className="mt-0.5 text-small font-semibold text-ink">Miles Davis — Kind of Blue</p>
                  <p className="text-[12px] text-muted">Track 01: So What · 24-bit Lossless</p>
                </div>
                <span className="rounded bg-accent px-3 py-1.5 text-caption font-semibold text-white">
                  $14.99
                </span>
              </div>
              <div className="mt-2.5 flex items-center gap-2 text-caption">
                <span className="text-[12px] tabular-nums text-accent">03:45</span>
                <div className="relative h-1 flex-1 rounded-full bg-line">
                  <span className="absolute inset-y-0 left-0 w-2/5 rounded-full bg-accent" />
                </div>
                <span className="text-[12px] tabular-nums text-muted">09:22</span>
              </div>
            </div>

            {/* Catalog Grid */}
            <div className="mt-3.5 grid grid-cols-3 gap-2.5">
              {[
                { title: 'Blue Train', artist: 'John Coltrane', price: '$12.99' },
                { title: 'A Love Supreme', artist: 'John Coltrane', price: '$13.50' },
                { title: 'Time Out', artist: 'Dave Brubeck', price: '$11.99' },
              ].map((album) => (
                <div key={album.title} className="rounded-lg border border-line p-2 text-center">
                  <div className="aspect-square mx-auto w-12 rounded bg-surface border border-line/60 flex items-center justify-center">
                    <span className="size-4 rounded-full border border-ink/20" />
                  </div>
                  <p className="mt-1 text-[12px] font-semibold text-ink truncate">{album.title}</p>
                  <p className="text-[11px] text-muted truncate">{album.artist}</p>
                  <p className="mt-0.5 text-[12px] font-semibold text-accent">{album.price}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-2 border-t border-line pt-2 flex items-center justify-between text-[11px] text-muted">
            <span>Terminal: Kiosk #04 · Berkeley Branch</span>
            <span className="text-ink font-medium">Session Active</span>
          </div>
        </Window>
      </Reveal>
    </Slide>
  )
}

/* ------------------------------------------------------------------
   27 · Applying Concepts at Tune Source — Concept Mapping
------------------------------------------------------------------- */
const conceptMappings = [
  {
    topic: 'UI Principles',
    badge: 'Principle',
    coreConcept: 'Consistency & Effort',
    implementation: '3-click music discovery, sticky mini-player bar, standardized visual hierarchy.',
    impact: 'Low cognitive load during exploration',
  },
  {
    topic: 'Navigation',
    badge: 'Structure',
    coreConcept: 'Taxonomy & Breadcrumbs',
    implementation: 'Genre tree (Genre › Artist › Album), persistent search with auto-suggest query filter.',
    impact: 'Users never get lost in deep catalog',
  },
  {
    topic: 'Input Design',
    badge: 'Capture',
    coreConcept: 'Optimized Controls',
    implementation: 'Dropdowns for format selection (Vinyl/CD/FLAC), stepper for quantity, saved address selection.',
    impact: 'Prevents typing errors & friction',
  },
  {
    topic: 'Validation',
    badge: 'Integrity',
    coreConcept: 'Real-Time Pipeline',
    implementation: 'Format checks for card number/expiry, inventory verification prior to payment submission.',
    impact: 'Zero bad orders sent to fulfillment',
  },
  {
    topic: 'Output Design',
    badge: 'Presentation',
    coreConcept: 'Relevance & Formats',
    implementation: 'Instant on-screen receipt, downloadable PDF invoice, digital license key via secure portal.',
    impact: 'Immediate verification & trust',
  },
]

export function ApplyingConcepts() {
  return (
    <Slide
      title="Applying Concepts at Tune Source"
      subtitle="How each lecture domain translates directly into architectural decisions for the system."
      className="flex flex-col"
    >
      <div className="grid flex-1 grid-cols-5 gap-4">
        {conceptMappings.map((c, i) => (
          <RevealCard key={c.topic} delay={0.15 + i * 0.08} className="flex flex-col p-6">
            <div className="flex items-center justify-between">
              <Index n={i + 1} className="text-small" />
              <span className="rounded border border-accent/20 bg-accent/[0.04] px-2 py-0.5 text-[11px] font-semibold text-accent">
                {c.badge}
              </span>
            </div>
            <h3 className="mt-5 text-heading font-semibold text-ink">{c.topic}</h3>
            <p className="mt-1 text-[13px] font-medium text-accent">{c.coreConcept}</p>
            
            <div className="mt-4 border-t border-line pt-4">
              <Label>Application</Label>
              <p className="mt-1.5 text-small text-muted">{c.implementation}</p>
            </div>

            <div className="mt-auto border-t border-line pt-4">
              <Label>Outcome</Label>
              <p className="mt-1 text-caption font-medium text-ink">{c.impact}</p>
            </div>
          </RevealCard>
        ))}
      </div>

      <Reveal delay={0.6} className="mt-6 text-small text-muted">
        <span className="font-semibold text-ink">System Synergy:</span> Strong navigation gets users to the item; streamlined input and validation ensures seamless purchase; clear output builds customer confidence.
      </Reveal>
    </Slide>
  )
}

/* ------------------------------------------------------------------
   28 · Tune Source User Journey — Flow Diagram
------------------------------------------------------------------- */
const journeySteps = [
  {
    step: 'Browse Music',
    action: 'Filter by genre or search by artist',
    controls: 'Search bar, category tabs, filter chips',
    feedback: 'Dynamic live search results',
  },
  {
    step: 'View Album',
    action: 'Audition 30s clips, choose Vinyl or FLAC',
    controls: 'Audio player, format selector dropdown',
    feedback: 'High-res artwork & track duration',
  },
  {
    step: 'Add To Cart',
    action: 'Confirm format, quantity & shipping preference',
    controls: 'Primary CTA button, quantity stepper',
    feedback: 'Animated badge count & toast confirmation',
  },
  {
    step: 'Checkout',
    action: 'Provide shipping address and payment details',
    controls: 'Standardized forms with auto-fill',
    feedback: 'Inline validation on every field',
  },
  {
    step: 'Confirmation',
    action: 'Review invoice, download files, view tracking',
    controls: 'Print receipt, token download button',
    feedback: 'Order #TS-4029 issued immediately',
  },
]

export function TuneSourceJourney() {
  const base = 0.15
  const step = 0.12
  return (
    <Slide
      title="Tune Source User Journey"
      subtitle="End-to-end task analysis: tracing a customer transaction from exploration to completion."
      className="flex flex-col justify-center"
    >
      <div className="grid grid-cols-5 gap-3">
        {journeySteps.map((s, i) => (
          <div key={s.step} className="flex flex-col">
            <div className="flex items-center">
              <Reveal delay={base + i * step} y={8}>
                <span className="grid size-12 place-items-center rounded-full border-[1.5px] border-accent bg-white text-small font-semibold text-accent">
                  {i + 1}
                </span>
              </Reveal>
              {i < journeySteps.length - 1 && (
                <FlowArrow delay={base + i * step + 0.08} className="mx-2 flex-1" />
              )}
            </div>

            <Reveal delay={base + i * step + 0.06} className="mt-6 flex-1 rounded-xl border border-line bg-surface p-5">
              <h3 className="text-body font-semibold text-ink">{s.step}</h3>
              <p className="mt-2 text-caption text-muted">{s.action}</p>

              <div className="mt-4 border-t border-line pt-3">
                <Label>Interface Controls</Label>
                <p className="mt-1 text-[13px] text-ink">{s.controls}</p>
              </div>

              <div className="mt-3 border-t border-line pt-3">
                <Label>System Feedback</Label>
                <p className="mt-1 text-[13px] font-medium text-accent">{s.feedback}</p>
              </div>
            </Reveal>
          </div>
        ))}
      </div>

      <Reveal delay={0.8} className="mt-10 rounded-xl border border-line bg-white p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="size-2 rounded-full bg-accent" />
            <span className="text-small font-semibold text-ink">Analytical Takeaway</span>
          </div>
          <span className="text-caption text-muted">Human-Computer Interaction Principle</span>
        </div>
        <p className="mt-2 text-small text-muted">
          Every stage pairs user intent with immediate system feedback. When error rates spike at step 4 (Checkout), UI analysts re-evaluate input form complexity and validation messages.
        </p>
      </Reveal>
    </Slide>
  )
}
