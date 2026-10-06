import { Fragment, useState } from 'react'
import { motion } from 'framer-motion'
import Slide from '../components/Slide.jsx'
import { EASE } from '../components/motion.js'
import { Chip, FlowArrow, Index, Label, Reveal, RevealCard } from '../components/ui.jsx'

/* ------------------------------------------------------------------
   15 · Input Design Overview (Merged: Principles + Data Capture)
------------------------------------------------------------------- */
const glyphProps = {
  width: 40,
  height: 40,
  viewBox: '0 0 44 44',
  fill: 'none',
  stroke: '#1F4E79',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

const glyphs = {
  barcode: (
    <svg {...glyphProps}>
      {[8, 12, 14, 19, 23, 25, 30, 33, 36].map((x, i) => (
        <path key={x} d={`M${x} 10v24`} strokeWidth={i % 3 === 0 ? 2.4 : 1.2} />
      ))}
    </svg>
  ),
  ocr: (
    <svg {...glyphProps}>
      <path d="M6 13V8a2 2 0 012-2h5M31 6h5a2 2 0 012 2v5M38 31v5a2 2 0 01-2 2h-5M13 38H8a2 2 0 01-2-2v-5" />
      <path d="M14 16h16M14 22h16M14 28h10" />
    </svg>
  ),
  chip: (
    <svg {...glyphProps}>
      <rect x="5" y="10" width="34" height="24" rx="3" />
      <rect x="10" y="16" width="10" height="8" rx="1.5" />
      <path d="M15 16v8M10 20h10M26 28h8" />
    </svg>
  ),
  rfid: (
    <svg {...glyphProps}>
      <rect x="6" y="15" width="14" height="14" rx="2" />
      <path d="M25 17a7 7 0 010 10M29.5 13a13 13 0 010 18M34 9a19 19 0 010 26" />
    </svg>
  ),
  form: (
    <svg {...glyphProps}>
      <rect x="6" y="6" width="32" height="32" rx="3" />
      <path d="M11 13h10" />
      <rect x="11" y="17" width="22" height="5" rx="1" />
      <rect x="11" y="26" width="22" height="5" rx="1" />
    </svg>
  ),
}

const inputPrinciplesList = [
  {
    title: 'Data Accuracy',
    desc: 'Capture error-free data at the point of origination to prevent cascading corruption.',
  },
  {
    title: 'Data Integrity',
    desc: 'Enforce business rules, schema constraints, and valid relational references.',
  },
  {
    title: 'Keystroke Reduction',
    desc: 'Minimise manual typing with defaults, structured selection lists, and auto-complete.',
  },
  {
    title: 'Source Data Automation',
    desc: 'Capture data electronically where it originates to eliminate human re-keying.',
  },
]

const technologies = [
  ['Barcode Reader', 'Scans 1D/2D optical codes instantly', 'Retail POS, warehouse inventory', glyphs.barcode],
  ['OCR', 'Converts printed/written characters to digital data', 'Forms, cheques, paper archives', glyphs.ocr],
  ['Smart Card', 'Cryptographic microchip stores and authenticates data', 'EMV bank cards, national IDs', glyphs.chip],
  ['RFID', 'Radio tags read wirelessly without line of sight', 'Toll systems, supply chain logistics', glyphs.rfid],
  ['Web Forms', 'Captures structured user input directly online', 'E-commerce, customer portals', glyphs.form],
]

export function InputOverview() {
  return (
    <Slide
      title="Input Design Overview"
      subtitle="Capturing accurate information at the source through human-centered design principles and automated hardware capture."
      className="flex flex-col justify-between"
    >
      {/* Top: Principles */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <Label>Core Input Design Principles</Label>
          <span className="text-caption text-muted">Accuracy &amp; Integrity</span>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {inputPrinciplesList.map((p, i) => (
            <RevealCard key={p.title} delay={0.12 + i * 0.06} className="p-5 border-t-2 border-t-accent">
              <Index n={i + 1} className="text-caption" />
              <h3 className="mt-2 text-body font-semibold text-ink">{p.title}</h3>
              <p className="mt-1 text-caption text-muted">{p.desc}</p>
            </RevealCard>
          ))}
        </div>
      </div>

      <div className="h-px bg-line my-1" />

      {/* Bottom: Technologies */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <Label>Data Capture Technologies (Source Data Automation)</Label>
          <span className="text-caption text-muted">Hardware &amp; Electronic Entry</span>
        </div>
        <div className="grid grid-cols-5 gap-4">
          {technologies.map(([title, desc, use, glyph], i) => (
            <RevealCard key={title} delay={0.25 + i * 0.05} className="p-4 flex flex-col justify-between">
              <div>
                <div className="mb-2">{glyph}</div>
                <h4 className="text-[15px] font-semibold text-ink leading-snug">{title}</h4>
                <p className="mt-1 text-[12px] text-muted leading-tight">{desc}</p>
              </div>
              <div className="mt-3 border-t border-line/60 pt-2 text-[11px] text-ink">
                <span className="text-muted">Used in: </span>{use}
              </div>
            </RevealCard>
          ))}
        </div>
      </div>
    </Slide>
  )
}

/* ------------------------------------------------------------------
   16 · Online vs Batch Processing (Dedicated Comparison Slide)
------------------------------------------------------------------- */
function FlowNode({ title, text, delay, strong = false }) {
  return (
    <Reveal
      delay={delay}
      y={8}
      className={`flex w-[190px] shrink-0 flex-col items-center rounded-xl border px-3.5 py-4 text-center ${
        strong ? 'border-accent/60 bg-accent/[0.03]' : 'border-line bg-white'
      }`}
    >
      <p className={`text-body font-semibold ${strong ? 'text-accent' : 'text-ink'}`}>{title}</p>
      <p className="mt-1 text-caption text-muted">{text}</p>
    </Reveal>
  )
}

function ProcessingRow({ label, tag, description, examples, nodes, delay }) {
  return (
    <div className="grid grid-cols-[300px_1fr] items-center gap-12">
      <Reveal delay={delay}>
        <div className="flex items-center gap-3">
          <h3 className="text-[30px] font-semibold tracking-tight text-ink">{label}</h3>
          <Chip accent>{tag}</Chip>
        </div>
        <p className="mt-2 text-small text-muted">{description}</p>
        <p className="mt-3 text-caption text-ink">
          <span className="text-muted">e.g. </span>
          {examples}
        </p>
      </Reveal>
      <div className="flex items-center">
        {nodes.map((n, i) => (
          <div key={n.title} className={`flex items-center ${i < nodes.length - 1 ? 'flex-1' : ''}`}>
            <FlowNode {...n} delay={delay + 0.1 + i * 0.12} />
            {i < nodes.length - 1 && <FlowArrow delay={delay + 0.16 + i * 0.12} className="mx-3 flex-1" />}
          </div>
        ))}
      </div>
    </div>
  )
}

export function OnlineVsBatch() {
  return (
    <Slide
      title="Online vs Batch Processing"
      subtitle="Architectural comparison between real-time transaction handling and queued batch execution."
      className="flex flex-col justify-center gap-9"
    >
      <ProcessingRow
        label="Online Processing"
        tag="Immediate"
        description="Each transaction is processed, validated, and persisted the moment it is submitted."
        examples="ATM cash withdrawal, flight seat reservation, e-commerce checkout"
        delay={0.15}
        nodes={[
          { title: 'User Input', text: 'Customer places order online' },
          { title: 'Real-Time Validation', text: 'Checked & processed immediately', strong: true },
          { title: 'Instant Result', text: 'Confirmation & receipt displayed' },
        ]}
      />

      <div className="h-px bg-line" />

      <ProcessingRow
        label="Batch Processing"
        tag="Scheduled"
        description="Transactions are gathered over an operational period and processed together at scheduled times."
        examples="Corporate payroll, monthly utility billing, end-of-day bank clearing"
        delay={0.5}
        nodes={[
          { title: 'Accumulation', text: 'Timesheets entered all week' },
          { title: 'Batch Queue', text: 'Stored safely until run time' },
          { title: 'Scheduled Run', text: 'Mass processing executed at midnight', strong: true },
          { title: 'Bulk Output', text: 'Direct deposits & payslips issued' },
        ]}
      />

      <Reveal delay={0.9} className="rounded-xl border border-line bg-surface p-4 text-small text-muted">
        <span className="font-semibold text-ink">Core Design Recommendation:</span> Prefer online processing whenever possible because errors are flagged instantly while the user is actively present to rectify them.
      </Reveal>
    </Slide>
  )
}

/* ------------------------------------------------------------------
   17 · Input Controls (7 Controls: Text Box, Dropdown, Checkbox,
        Radio Button, List Box, Combo Box, Slider)
------------------------------------------------------------------- */
function TextBoxDemo() {
  return (
    <label className="block w-full">
      <span className="text-caption text-muted">Full name</span>
      <input id="demo-textbox" className="field mt-1.5" placeholder="e.g. Ayesha Rahman" defaultValue="Ayesha Rahman" />
    </label>
  )
}

function SelectChevron() {
  return (
    <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}

function DropdownDemo() {
  return (
    <label className="block w-full">
      <span className="text-caption text-muted">Primary Genre</span>
      <span className="relative mt-1.5 block">
        <select id="demo-dropdown" className="field appearance-none pr-9" defaultValue="Jazz">
          {['Classical', 'Jazz', 'Pop', 'Rock', 'Electronic'].map((g) => (
            <option key={g}>{g}</option>
          ))}
        </select>
        <SelectChevron />
      </span>
    </label>
  )
}

function CheckboxDemo() {
  return (
    <fieldset className="w-full space-y-1.5">
      <legend className="text-caption text-muted">Notification Options</legend>
      {[
        ['New album releases', true],
        ['Tour announcements', false],
      ].map(([l, on]) => (
        <label key={l} className="flex cursor-pointer items-center gap-2 text-[13px] text-ink">
          <input type="checkbox" defaultChecked={on} className="size-3.5 accent-accent" />
          {l}
        </label>
      ))}
    </fieldset>
  )
}

function RadioDemo() {
  return (
    <fieldset className="w-full space-y-1.5">
      <legend className="text-caption text-muted">Delivery Speed</legend>
      {['Standard (3–5 days)', 'Express (next day)'].map((l, i) => (
        <label key={l} className="flex cursor-pointer items-center gap-2 text-[13px] text-ink">
          <input type="radio" name="demo-delivery" defaultChecked={i === 0} className="size-3.5 accent-accent" />
          {l}
        </label>
      ))}
    </fieldset>
  )
}

function ListBoxDemo() {
  const [selected, setSelected] = useState('FLAC Lossless')
  const formats = ['Vinyl LP (180g)', 'Compact Disc', 'FLAC Lossless', 'Hi-Res 24-bit']

  return (
    <div className="w-full">
      <span className="text-caption text-muted">Format Selection</span>
      <div className="mt-1.5 max-h-20 overflow-y-auto rounded-lg border border-line bg-white p-1">
        {formats.map((fmt) => (
          <div
            key={fmt}
            onClick={() => setSelected(fmt)}
            className={`cursor-pointer rounded px-2 py-1 text-[12px] transition-colors ${
              selected === fmt ? 'bg-accent text-white font-medium' : 'text-ink hover:bg-surface'
            }`}
          >
            {fmt}
          </div>
        ))}
      </div>
    </div>
  )
}

function ComboDemo() {
  return (
    <label className="block w-full">
      <span className="text-caption text-muted">Artist (Type or Pick)</span>
      <span className="relative mt-1.5 block">
        <input id="demo-combobox" list="demo-artists" defaultValue="Miles Davis" className="field pr-9" placeholder="Type or choose…" />
        <SelectChevron />
      </span>
      <datalist id="demo-artists">
        {['Adele', 'Coldplay', 'John Coltrane', 'Miles Davis', 'Taylor Swift'].map((a) => (
          <option key={a} value={a} />
        ))}
      </datalist>
    </label>
  )
}

function SliderDemo() {
  const [value, setValue] = useState(40)
  return (
    <label className="block w-full">
      <span className="flex justify-between text-caption text-muted">
        Price Budget
        <span className="font-semibold tabular-nums text-accent">${value}</span>
      </span>
      <input
        id="demo-slider"
        type="range"
        min="5"
        max="100"
        step="5"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="mt-2 w-full accent-accent"
      />
      <span className="mt-1 flex justify-between text-[11px] text-muted">
        <span>$5</span>
        <span>$100</span>
      </span>
    </label>
  )
}

export function InputControls() {
  const controlsData = [
    { title: 'Text Box', bestFor: 'Free-form strings (names, addresses, comments)', Demo: TextBoxDemo },
    { title: 'Dropdown', bestFor: 'Single pick from large lists while conserving screen space', Demo: DropdownDemo },
    { title: 'Checkbox', bestFor: 'Independent multi-select yes/no binary choices', Demo: CheckboxDemo },
    { title: 'Radio Button', bestFor: 'Mutually exclusive choice from 2–5 visible options', Demo: RadioDemo },
    { title: 'List Box', bestFor: 'Scrollable list where multiple choices stay continuously visible', Demo: ListBoxDemo },
    { title: 'Combo Box', bestFor: 'Type-to-filter or select from large open-ended lists', Demo: ComboDemo },
    { title: 'Slider', bestFor: 'Bounded continuous ranges where approximate values suffice', Demo: SliderDemo },
  ]

  return (
    <Slide
      title="Input Controls"
      subtitle="Selecting the optimal form control to minimize typing, enforce data integrity, and accelerate user entry."
      className="flex flex-col justify-between"
    >
      <div className="grid grid-cols-4 gap-4">
        {controlsData.slice(0, 4).map((c, i) => (
          <RevealCard key={c.title} delay={0.12 + i * 0.05} className="p-4 flex flex-col justify-between">
            <div className="rounded-lg bg-surface p-3 mb-2 flex items-center min-h-[92px]">
              <c.Demo />
            </div>
            <div>
              <h4 className="text-[15px] font-semibold text-ink">{c.title}</h4>
              <p className="mt-0.5 text-[12px] text-muted leading-tight">
                <span className="font-medium text-accent">Best for: </span>{c.bestFor}
              </p>
            </div>
          </RevealCard>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4 mt-1">
        {controlsData.slice(4, 7).map((c, i) => (
          <RevealCard key={c.title} delay={0.32 + i * 0.05} className="p-4 flex flex-col justify-between">
            <div className="rounded-lg bg-surface p-3 mb-2 flex items-center min-h-[92px]">
              <c.Demo />
            </div>
            <div>
              <h4 className="text-[15px] font-semibold text-ink">{c.title}</h4>
              <p className="mt-0.5 text-[12px] text-muted leading-tight">
                <span className="font-medium text-accent">Best for: </span>{c.bestFor}
              </p>
            </div>
          </RevealCard>
        ))}
      </div>
    </Slide>
  )
}

/* ------------------------------------------------------------------
   18 · Input Validation (Merged Pipeline + All 6 Validation Checks)
------------------------------------------------------------------- */
const validationPipelineSteps = [
  { step: 'Completeness', rule: 'All required fields present', example: '“Full Name is required”' },
  { step: 'Format', rule: 'Matches expected type & syntax', example: '“Must be a valid email (@)”' },
  { step: 'Range', rule: 'Values within logical bounds', example: '“Quantity must be 1–10”' },
  { step: 'Check Digit', rule: 'Mathematical algorithm check', example: '“Luhn checksum verified”' },
  { step: 'Consistency', rule: 'Interdependent fields agree', example: '“End date after start date”' },
  { step: 'Database', rule: 'Referential record integrity', example: '“SKU in inventory & in stock”' },
]

export function InputValidation() {
  const base = 0.15
  const step = 0.12

  return (
    <Slide
      title="Input Validation"
      subtitle="Multi-tier validation pipeline ensuring data accuracy, integrity, and safety before database persistence."
      className="flex flex-col justify-between"
    >
      {/* Top: Pipeline Diagram */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <Label>Validation Pipeline</Label>
          <span className="text-caption text-muted">Sequential Verification Stages</span>
        </div>

        <div className="relative rounded-2xl border border-line bg-surface p-6">
          {/* Overhead Failure Return Loop */}
          <div className="relative h-10 w-full mb-3">
            <motion.div
              className="absolute inset-x-8 top-1 h-6 rounded-t-xl border-x-[1.5px] border-t-[1.5px] border-dashed border-ink/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45, delay: base + step * 6, ease: EASE }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                className="absolute -bottom-1.5 -left-[6.75px] text-ink/40"
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
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-surface px-4 text-[12px] font-medium text-muted whitespace-nowrap">
                Any check fails → Return immediately to user with clear field message, preserving all entered data
              </span>
            </motion.div>
          </div>

          <div className="flex items-center justify-between w-full px-2">
            {/* Input Start */}
            <div className="flex flex-col items-center shrink-0">
              <span className="grid size-11 place-items-center rounded-full border border-ink/30 bg-white text-small font-semibold text-ink shadow-2xs">
                ↳
              </span>
              <span className="mt-2 text-[11px] font-semibold text-muted uppercase tracking-wider">Input</span>
            </div>

            <FlowArrow delay={base + 0.05} className="flex-1 mx-2" />

            {/* 6 Checks */}
            {validationPipelineSteps.map((c, i) => (
              <Fragment key={c.step}>
                <div className="flex flex-col items-center shrink-0">
                  <Reveal delay={base + (i + 1) * step} y={6}>
                    <span className="grid size-11 place-items-center rounded-full border-[1.5px] border-accent bg-white text-small font-semibold text-accent shadow-2xs">
                      {i + 1}
                    </span>
                  </Reveal>
                  <p className="mt-2 text-[12px] font-semibold text-ink text-center leading-tight whitespace-nowrap">
                    {c.step}
                  </p>
                </div>
                <FlowArrow delay={base + (i + 1) * step + 0.05} className="flex-1 mx-2" />
              </Fragment>
            ))}

            {/* Accepted End */}
            <div className="flex flex-col items-center shrink-0">
              <span className="grid size-11 place-items-center rounded-full bg-accent text-small font-bold text-white shadow-2xs">
                ✓
              </span>
              <span className="mt-2 text-[11px] font-semibold text-accent uppercase tracking-wider">Saved</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: Detailed Cards for the 6 Validation Checks */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <Label>The Six Essential Validation Checks</Label>
          <span className="text-caption text-muted">Comprehensive Audit Criteria</span>
        </div>
        <div className="grid grid-cols-6 gap-3">
          {validationPipelineSteps.map((chk, i) => (
            <RevealCard key={chk.step} delay={0.25 + i * 0.05} className="p-3.5 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-semibold tabular-nums text-accent">Check {i + 1}</span>
                <h4 className="mt-1 text-small font-semibold text-ink leading-snug">{chk.step} Check</h4>
                <p className="mt-1 text-[11px] text-muted leading-tight">{chk.rule}</p>
              </div>
              <div className="mt-3 border-t border-line/60 pt-2 text-[11px] italic text-ink/80">
                {chk.example}
              </div>
            </RevealCard>
          ))}
        </div>
      </div>
    </Slide>
  )
}
