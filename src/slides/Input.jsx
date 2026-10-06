import { useState } from 'react'
import { motion } from 'framer-motion'
import Slide from '../components/Slide.jsx'
import { EASE } from '../components/motion.js'
import { Chip, FlowArrow, Index, Label, Reveal, RevealCard } from '../components/ui.jsx'

/* ------------------------------------------------------------------
   18 · Input design overview
------------------------------------------------------------------- */
const inputGoals = [
  ['Data accuracy', 'Capture correct data the first time it is entered.'],
  ['Data integrity', 'Keep data valid and consistent across the whole system.'],
  ['User satisfaction', 'Make data entry quick, clear and painless.'],
  ['Efficient data entry', 'Fewer keystrokes, fewer screens, less re-typing.'],
]

export function InputOverview() {
  return (
    <Slide
      title="Input Design Overview"
      subtitle="Goal: capture accurate information for the system — simply and easily."
      className="flex flex-col"
    >
      <div className="grid flex-1 grid-cols-4 gap-12">
        {inputGoals.map(([title, text], i) => (
          <Reveal key={title} delay={0.18 + i * 0.08} className="border-t-2 border-accent pt-7">
            <Index n={i + 1} className="text-small" />
            <h3 className="mt-4 text-heading font-semibold text-ink">{title}</h3>
            <p className="mt-3 text-small text-muted">{text}</p>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.55} className="rounded-2xl bg-surface px-9 py-7">
        <Label>Three input principles</Label>
        <div className="mt-4 grid grid-cols-3 gap-10">
          {[
            ['Use online processing', 'when possible, for immediate feedback'],
            ['Capture data at the source', 'to avoid copying and re-keying'],
            ['Minimise keystrokes', 'with defaults, lists and automation'],
          ].map(([a, b]) => (
            <p key={a} className="text-small text-muted">
              <span className="font-semibold text-ink">{a}</span> {b}
            </p>
          ))}
        </div>
      </Reveal>
    </Slide>
  )
}

/* ------------------------------------------------------------------
   19 · Online vs batch processing
------------------------------------------------------------------- */
function FlowNode({ title, text, delay, strong = false, children }) {
  return (
    <Reveal
      delay={delay}
      y={8}
      className={`flex w-[196px] shrink-0 flex-col items-center rounded-xl border px-4 py-5 text-center ${
        strong ? 'border-accent/60 bg-accent/[0.03]' : 'border-line bg-white'
      }`}
    >
      {children}
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
            <FlowNode {...n} delay={delay + 0.1 + i * 0.14} />
            {i < nodes.length - 1 && <FlowArrow delay={delay + 0.18 + i * 0.14} className="mx-3 flex-1" />}
          </div>
        ))}
      </div>
    </div>
  )
}

export function OnlineVsBatch() {
  return (
    <Slide title="Online vs Batch Processing" className="flex flex-col justify-center gap-10">
      <ProcessingRow
        label="Online"
        tag="Immediate"
        description="Each transaction is processed the moment it is entered."
        examples="ATM withdrawal, flight booking, online checkout"
        delay={0.15}
        nodes={[
          { title: 'Input', text: 'User places an order' },
          { title: 'System', text: 'Validated and processed instantly', strong: true },
          { title: 'Result', text: 'Confirmation shown' },
        ]}
      />
      <div className="h-px bg-line" />
      <ProcessingRow
        label="Batch"
        tag="Scheduled"
        description="Transactions are collected and processed together at set times."
        examples="payroll, monthly billing, end-of-day bank updates"
        delay={0.55}
        nodes={[
          { title: 'Input', text: 'Records entered all day' },
          { title: 'Queue', text: 'Held until the scheduled run' },
          { title: 'Batch', text: 'Processed together at 23:00', strong: true },
          { title: 'Result', text: 'Reports and updates' },
        ]}
      />
      <Reveal delay={1.1} className="text-small text-muted">
        <span className="font-semibold text-ink">Prefer online processing where possible</span> — errors
        are caught while the user is still there to fix them.
      </Reveal>
    </Slide>
  )
}

/* ------------------------------------------------------------------
   20 · Data capture technologies
------------------------------------------------------------------- */
const glyphProps = {
  width: 44,
  height: 44,
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
  stripe: (
    <svg {...glyphProps}>
      <rect x="5" y="10" width="34" height="24" rx="3" />
      <path d="M5 16h34M5 20h34" strokeWidth="2.6" />
      <path d="M10 28h8" />
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

const technologies = [
  ['Barcode Reader', 'Scans printed codes to identify items instantly.', 'Retail checkout, inventory', glyphs.barcode],
  ['OCR', 'Converts printed or handwritten text into digital data.', 'Forms, cheques, ID cards', glyphs.ocr],
  ['Magnetic Stripe', 'Reads data stored on a magnetic strip.', 'Bank cards, hotel keys', glyphs.stripe],
  ['Smart Card', 'An embedded chip stores and processes data securely.', 'Bank cards, SIM cards, IDs', glyphs.chip],
  ['RFID', 'Radio tags are read without contact or line of sight.', 'Toll gates, library books', glyphs.rfid],
  ['Web Forms', 'Users enter data directly into the system online.', 'Registration, checkout', glyphs.form],
]

export function DataCapture() {
  return (
    <Slide
      title="Data Capture Technologies"
      subtitle="Source data automation: capture data electronically, where it originates."
      className="grid grid-cols-3 grid-rows-2 gap-5"
    >
      {technologies.map(([title, text, use, glyph], i) => (
        <RevealCard key={title} delay={0.18 + i * 0.06} className="flex gap-6 p-7">
          <div className="shrink-0">{glyph}</div>
          <div className="flex flex-col">
            <h3 className="text-body font-semibold text-ink">{title}</h3>
            <p className="mt-1.5 text-small text-muted">{text}</p>
            <p className="mt-auto pt-3 text-caption text-ink">
              <span className="text-muted">Used in · </span>
              {use}
            </p>
          </div>
        </RevealCard>
      ))}
    </Slide>
  )
}

/* ------------------------------------------------------------------
   21 · Input controls — live, interactive examples
------------------------------------------------------------------- */
function TextBoxDemo() {
  return (
    <label className="block w-full">
      <span className="text-caption text-muted">Full name</span>
      <input id="demo-textbox" className="field mt-1.5" placeholder="e.g. Ayesha Rahman" />
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
      <span className="text-caption text-muted">Genre</span>
      <span className="relative mt-1.5 block">
        <select id="demo-dropdown" className="field appearance-none pr-9" defaultValue="Jazz">
          {['Classical', 'Jazz', 'Pop', 'Rock', 'Hip-hop', 'Folk'].map((g) => (
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
    <fieldset className="w-full space-y-2">
      <legend className="text-caption text-muted">Notify me about</legend>
      {[
        ['New releases', true],
        ['Price drops', false],
        ['Concerts nearby', true],
      ].map(([l, on]) => (
        <label key={l} className="flex cursor-pointer items-center gap-2.5 text-small text-ink">
          <input type="checkbox" defaultChecked={on} className="size-4 accent-accent" />
          {l}
        </label>
      ))}
    </fieldset>
  )
}

function RadioDemo() {
  return (
    <fieldset className="w-full space-y-2">
      <legend className="text-caption text-muted">Delivery</legend>
      {['Standard (3–5 days)', 'Express (next day)', 'Store pickup'].map((l, i) => (
        <label key={l} className="flex cursor-pointer items-center gap-2.5 text-small text-ink">
          <input type="radio" name="demo-delivery" defaultChecked={i === 0} className="size-4 accent-accent" />
          {l}
        </label>
      ))}
    </fieldset>
  )
}

function ComboDemo() {
  return (
    <label className="block w-full">
      <span className="text-caption text-muted">Artist</span>
      <span className="relative mt-1.5 block">
        <input id="demo-combobox" list="demo-artists" className="field pr-9" placeholder="Type or choose…" />
        <SelectChevron />
      </span>
      <datalist id="demo-artists">
        {['Adele', 'Arijit Singh', 'Coldplay', 'Norah Jones', 'Queen', 'Taylor Swift'].map((a) => (
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
        Maximum price
        <span className="font-medium tabular-nums text-ink">${value}</span>
      </span>
      <input
        id="demo-slider"
        type="range"
        min="5"
        max="100"
        step="5"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="mt-4 w-full accent-accent"
      />
      <span className="mt-1 flex justify-between text-[12px] text-muted">
        <span>$5</span>
        <span>$100</span>
      </span>
    </label>
  )
}

const inputControls = [
  ['Text Box', 'Free-form data such as names, addresses and comments.', TextBoxDemo],
  ['Dropdown', 'Pick one value from a long list while saving space.', DropdownDemo],
  ['Checkbox', 'Select any number of independent yes/no options.', CheckboxDemo],
  ['Radio Button', 'Choose exactly one from a few visible options.', RadioDemo],
  ['Combo Box', 'Type a value or choose from a list — ideal for long lists.', ComboDemo],
  ['Slider', 'Choose from a continuous range when exact precision isn’t needed.', SliderDemo],
]

export function InputControls() {
  return (
    <Slide title="Input Controls" className="grid grid-cols-3 grid-rows-2 gap-5">
      {inputControls.map(([title, text, Demo], i) => (
        <RevealCard key={title} delay={0.15 + i * 0.06} className="flex flex-col overflow-hidden">
          <div className="flex flex-1 items-center bg-surface px-7 py-5">
            <Demo />
          </div>
          <div className="px-7 py-4">
            <h3 className="text-body font-semibold text-ink">{title}</h3>
            <p className="mt-0.5 text-caption text-muted">
              <span className="font-medium text-accent">Best for · </span>
              {text}
            </p>
          </div>
        </RevealCard>
      ))}
    </Slide>
  )
}

/* ------------------------------------------------------------------
   22 · Input validation pipeline
------------------------------------------------------------------- */
const checks = [
  ['User Input', 'Data is entered on a form', 'Form submitted'],
  ['Completeness', 'All required fields are filled', '“Name is required”'],
  ['Format', 'Right type and pattern', '“Phone has letters”'],
  ['Range', 'Values within allowed limits', '“Quantity 1–10”'],
  ['Consistency', 'Related fields agree', '“End before start”'],
  ['Database', 'Values match stored records', '“Customer ID not found”'],
]

export function ValidationPipeline() {
  const base = 0.2
  const step = 0.14
  return (
    <Slide
      title="Input Validation"
      subtitle="Every input passes through a series of checks before it is accepted."
      className="flex flex-col justify-center"
    >
      <div className="grid grid-cols-[repeat(6,1fr)_auto]">
        {/* Return path when a check fails */}
        <div className="relative col-span-6 h-16">
          <motion.div
            className="absolute bottom-0 left-[26px] h-8 w-[83.333%] rounded-t-2xl border-x-[1.5px] border-t-[1.5px] border-dashed border-ink/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: base + step * 7, ease: EASE }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" className="absolute -bottom-1.5 -left-[6.75px] text-ink/40" aria-hidden="true">
              <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white px-4 text-caption text-muted">
              Any check fails → return to the user with a clear message, keeping their data
            </span>
          </motion.div>
        </div>
        <div />

        {checks.map(([title, text, example], i) => (
          <div key={title}>
            <div className="flex items-center">
              <Reveal delay={base + i * step} y={8}>
                <span
                  className={`grid size-[52px] place-items-center rounded-full border-[1.5px] text-small font-semibold ${
                    i === 0 ? 'border-ink/30 text-ink' : 'border-accent text-accent'
                  }`}
                >
                  {i === 0 ? '↳' : i}
                </span>
              </Reveal>
              <FlowArrow delay={base + i * step + 0.08} className="mx-3 flex-1" />
            </div>
            <Reveal delay={base + i * step + 0.05} className="mt-6 pr-6">
              <h3 className="text-body font-semibold text-ink">{title}</h3>
              <p className="mt-1 text-caption text-muted">{text}</p>
              <p className="mt-3 text-caption italic text-ink/70">{example}</p>
            </Reveal>
          </div>
        ))}

        <Reveal delay={base + 6 * step} y={8} className="flex flex-col items-start">
          <span className="grid size-[52px] place-items-center rounded-full bg-accent text-body text-white">
            ✓
          </span>
          <p className="mt-6 text-body font-semibold text-accent">Accepted</p>
          <p className="mt-1 text-caption text-muted">Saved to the system</p>
        </Reveal>
      </div>

      <Reveal delay={1.3} className="mt-14 text-caption text-muted">
        Also common: <span className="text-ink">check-digit</span> validation for codes such as ISBNs
        and card numbers.
      </Reveal>
    </Slide>
  )
}

/* ------------------------------------------------------------------
   23 · Validation examples — live form
------------------------------------------------------------------- */
function parseDMY(value) {
  const m = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(value.trim())
  if (!m) return null
  const [d, mo, y] = [Number(m[1]), Number(m[2]), Number(m[3])]
  const date = new Date(y, mo - 1, d)
  return date.getFullYear() === y && date.getMonth() === mo - 1 && date.getDate() === d ? date : null
}

const validators = {
  email: (v) =>
    /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(v.trim()) ? null : 'Enter a valid email, e.g. name@example.com',
  phone: (v) => {
    const digits = v.replace(/[\s-]/g, '')
    if (!/^\d+$/.test(digits)) return 'Use digits only'
    if (digits.length !== 11) return `Must be 11 digits — ${digits.length} entered`
    return null
  },
  expiry: (v) => {
    const m = /^(0[1-9]|1[0-2])\/(\d{2})$/.exec(v.trim())
    if (!m) return 'Use the format MM/YY'
    const firstOfNextMonth = new Date(2000 + Number(m[2]), Number(m[1]), 1)
    return firstOfNextMonth <= new Date() ? `This card expired in ${v.trim()}` : null
  },
  dob: (v) => (parseDMY(v) ? null : 'Not a real date — use DD/MM/YYYY'),
  checkIn: (v) => (parseDMY(v) ? null : 'Use DD/MM/YYYY'),
  checkOut: (v, all) => {
    const out = parseDMY(v)
    if (!out) return 'Use DD/MM/YYYY'
    const inDate = parseDMY(all.checkIn)
    if (inDate && out <= inDate) return 'Check-out must be after check-in'
    return null
  },
}

const initialValues = {
  email: 'ayesha.rahman@mail',
  phone: '0171-234567',
  expiry: '03/24',
  dob: '31/02/2004',
  checkIn: '12/10/2026',
  checkOut: '10/10/2026',
}

function ValidatedField({ id, label, value, error, onChange, placeholder }) {
  return (
    <label className="block" htmlFor={id}>
      <span className="text-caption text-muted">{label}</span>
      <input
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={`${id}-msg`}
        className={`field mt-1 ${error ? 'border-ink/70' : 'border-accent/50'}`}
        autoComplete="off"
        spellCheck="false"
      />
      <span id={`${id}-msg`} className={`mt-1 block h-5 text-[13px] ${error ? 'text-ink' : 'text-accent'}`}>
        {error ? `✕  ${error}` : '✓  Looks good'}
      </span>
    </label>
  )
}

const rules = [
  ['Email', 'One “@”, a domain and an ending such as .com', ['Format']],
  ['Phone number', 'Digits only, exactly 11 digits', ['Format', 'Range']],
  ['Card expiry', 'Valid MM/YY that is not in the past', ['Format', 'Range']],
  ['Date', 'A real calendar date — no 31 February', ['Format']],
  ['Cross-field', 'Check-out must be after check-in', ['Consistency']],
]

export function ValidationExamples() {
  const [values, setValues] = useState(initialValues)
  const set = (key) => (v) => setValues((prev) => ({ ...prev, [key]: v }))
  const err = (key) => validators[key](values[key], values)

  return (
    <Slide title="Validation Examples" className="grid grid-cols-[1.05fr_1fr] gap-16">
      <RevealCard delay={0.15} className="p-8">
        <div className="mb-5 flex items-baseline justify-between">
          <h3 className="text-body font-semibold text-ink">Book a stay</h3>
          <button
            id="validation-reset"
            type="button"
            onClick={() => setValues(initialValues)}
            className="text-caption text-muted underline-offset-4 hover:text-accent hover:underline"
          >
            Reset example
          </button>
        </div>
        <div className="grid grid-cols-2 gap-x-5 gap-y-1.5">
          <div className="col-span-2">
            <ValidatedField id="v-email" label="Email" value={values.email} error={err('email')} onChange={set('email')} />
          </div>
          <div className="col-span-2">
            <ValidatedField id="v-phone" label="Phone number" value={values.phone} error={err('phone')} onChange={set('phone')} />
          </div>
          <ValidatedField id="v-expiry" label="Card expiry (MM/YY)" value={values.expiry} error={err('expiry')} onChange={set('expiry')} />
          <ValidatedField id="v-dob" label="Date of birth" value={values.dob} error={err('dob')} onChange={set('dob')} />
          <ValidatedField id="v-checkin" label="Check-in" value={values.checkIn} error={err('checkIn')} onChange={set('checkIn')} />
          <ValidatedField id="v-checkout" label="Check-out" value={values.checkOut} error={err('checkOut')} onChange={set('checkOut')} />
        </div>
      </RevealCard>

      <div className="flex flex-col justify-center">
        <Reveal delay={0.2}>
          <Label>Rules behind the form</Label>
          <p className="mt-2 text-small text-muted">Edit the fields — messages update as you type.</p>
        </Reveal>
        <ul className="mt-6 divide-y divide-line border-y border-line">
          {rules.map(([field, rule, types], i) => (
            <Reveal as="li" key={field} delay={0.28 + i * 0.07} className="flex items-center gap-6 py-4">
              <div className="flex-1">
                <p className="text-small font-semibold text-ink">{field}</p>
                <p className="text-caption text-muted">{rule}</p>
              </div>
              <div className="flex gap-1.5">
                {types.map((t) => (
                  <Chip key={t} accent={t === 'Consistency'}>
                    {t}
                  </Chip>
                ))}
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </Slide>
  )
}
