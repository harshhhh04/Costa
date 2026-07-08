import { useState } from 'react'
import { useInView } from '../hooks/useInView.js'
import { CONTACT_DETAILS } from '../data/contact.js'
import serveTableImage from '../../assets/images/serve-table.png'

const BREAD_OPTIONS = [
  'Sourdough Country Loaf — ₹280',
  'Seeded Rye — ₹260',
  'Focaccia al Rosmarino — ₹220',
  'Einkorn Batard — ₹300',
  'Butter Croissant, 4-pack — ₹440',
  'Almond Croissant, 4-pack — ₹520',
  'Pain au Chocolat, 4-pack — ₹560',
  'Morning Bun, 4-pack — ₹480',
  'Mixed Pastry Box, 6-pack — ₹720',
]

function getTomorrowDate() {
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  return tomorrow.toISOString().split('T')[0] // YYYY-MM-DD
}

function formatDisplayDate(isoDate) {
  if (!isoDate) return ''
  const d = new Date(isoDate + 'T00:00:00')
  return d.toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function PreOrder() {
  const [form, setForm]       = useState({
    name:     '',
    phone:    '',
    date:     getTomorrowDate(),
    bread:    '',
    quantity: '1',
    notes:    '',
  })
  const [submitted, setSubmitted] = useState(false)

  const { ref: headerRef,  isVisible: headerVisible  } = useInView()
  const { ref: formRef,    isVisible: formVisible    } = useInView(0.1)
  const { ref: infoRef,    isVisible: infoVisible    } = useInView(0.1)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const displayDate = formatDisplayDate(form.date)

    const lines = [
      '🍞 *Sir Dough — Bread Reservation*',
      '',
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      `*Pick-up Date:* ${displayDate}`,
      `*Item:* ${form.bread}`,
      `*Quantity:* ${form.quantity}`,
      form.notes.trim() ? `*Notes:* ${form.notes.trim()}` : '',
      '',
      '_Reserved via sirdough.in_',
    ].filter((l) => l !== undefined)

    const message = lines.join('\n')
    const url = `https://wa.me/${CONTACT_DETAILS.whatsappNumber}?text=${encodeURIComponent(message)}`

    window.open(url, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  const isValid =
    form.name.trim() &&
    form.phone.trim() &&
    form.date &&
    form.bread

  return (
    <section
      id="preorder"
      className="scroll-mt-24 section-padding relative bg-dough-canvas"
    >
      <div className="container-wide">

        {/* Section header */}
        <header
          ref={headerRef}
          className={`scroll-reveal mb-14 text-center sm:mb-16 lg:mb-20 ${
            headerVisible ? 'is-visible' : ''
          }`}
        >
          <p className="text-label mb-7">Reserve</p>
          <h2 className="heading-section">
            Tomorrow's loaf,{' '}
            <br className="hidden sm:block" />
            <span className="italic text-dough-terra">reserved today.</span>
          </h2>
          <p className="text-body mx-auto mt-8 max-w-[28rem] sm:mt-10">
            We bake in small batches. Reserve by{' '}
            <span className="text-dough-crust/80 font-normal">9 PM tonight</span>{' '}
            to secure yours for tomorrow morning.
          </p>
        </header>

        {/* Two-column layout */}
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 xl:gap-24">

          {/* Left — form */}
          <div
            ref={formRef}
            className={`scroll-reveal ${formVisible ? 'is-visible' : ''}`}
          >
            {submitted ? (
              /* Success state */
              <div className="preorder-panel flex flex-col items-center justify-center text-center min-h-[28rem]">
                <span className="font-serif text-5xl text-dough-terra/60 mb-6" aria-hidden="true">✓</span>
                <h3 className="font-serif text-2xl font-normal text-dough-espresso">
                  Opening WhatsApp…
                </h3>
                <p className="text-body mt-4 max-w-xs">
                  Your reservation message is pre-filled. Just send it and we'll confirm within the hour.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-[11px] font-light uppercase tracking-[0.22em] text-dough-charcoal/45 underline underline-offset-4 hover:text-dough-espresso transition-colors duration-300"
                >
                  Make another reservation
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="preorder-panel space-y-8" noValidate>
                <div className="grid gap-7 sm:grid-cols-2">
                  {/* Name */}
                  <div className="form-field">
                    <label htmlFor="preorder-name" className="form-label">
                      Your Name
                    </label>
                    <input
                      id="preorder-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Priya Sharma"
                      className="form-input"
                    />
                  </div>

                  {/* Phone */}
                  <div className="form-field">
                    <label htmlFor="preorder-phone" className="form-label">
                      WhatsApp Number
                    </label>
                    <input
                      id="preorder-phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Pick-up Date */}
                <div className="form-field">
                  <label htmlFor="preorder-date" className="form-label">
                    Pick-up Date
                  </label>
                  <input
                    id="preorder-date"
                    name="date"
                    type="date"
                    required
                    min={getTomorrowDate()}
                    value={form.date}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                {/* Bread selection */}
                <div className="form-field">
                  <label htmlFor="preorder-bread" className="form-label">
                    What would you like?
                  </label>
                  <select
                    id="preorder-bread"
                    name="bread"
                    required
                    value={form.bread}
                    onChange={handleChange}
                    className="form-input form-select"
                  >
                    <option value="" disabled>Choose from today's selection</option>
                    {BREAD_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Quantity */}
                <div className="form-field">
                  <label htmlFor="preorder-quantity" className="form-label">
                    Quantity
                  </label>
                  <select
                    id="preorder-quantity"
                    name="quantity"
                    value={form.quantity}
                    onChange={handleChange}
                    className="form-input form-select"
                  >
                    {['1', '2', '3', '4'].map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>

                {/* Notes */}
                <div className="form-field">
                  <label htmlFor="preorder-notes" className="form-label">
                    Any notes? <span className="opacity-50">(optional)</span>
                  </label>
                  <input
                    id="preorder-notes"
                    name="notes"
                    type="text"
                    value={form.notes}
                    onChange={handleChange}
                    placeholder="Sliced, left whole, gift wrap…"
                    className="form-input"
                  />
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={!isValid}
                    className={`btn-primary w-full transition-opacity duration-300 ${
                      !isValid ? 'opacity-40 cursor-not-allowed hover:translate-y-0' : ''
                    }`}
                  >
                    Reserve via WhatsApp
                  </button>
                  <p className="mt-4 text-center text-[11px] font-light text-dough-charcoal/35">
                    Opens WhatsApp with your order pre-filled. We confirm within the hour.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Right — editorial info + image */}
          <div
            ref={infoRef}
            className={`scroll-reveal space-y-12 lg:py-4 ${infoVisible ? 'is-visible' : ''}`}
          >
            {/* Atmospheric image */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={serveTableImage}
                alt="Sliced sourdough bread with coffee and cultured butter on a morning table"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dough-espresso/12 to-transparent" />
            </div>

            {/* How it works */}
            <div className="space-y-8">
              <div className="divider-subtle pt-8">
                <p className="text-label mb-8">How it works</p>
                <ol className="space-y-7">
                  {[
                    { n: '01', t: 'Reserve by 9 PM', d: 'Fill out the form. We receive your message on WhatsApp before closing.' },
                    { n: '02', t: 'We confirm',       d: 'You\'ll get a reply confirming your loaf is set aside for tomorrow.' },
                    { n: '03', t: 'Pick up at 10 AM', d: 'Your bread is fresh from the oven and waiting when we open.' },
                  ].map(({ n, t, d }) => (
                    <li key={n} className="flex gap-5">
                      <span className="font-serif text-xl font-normal text-dough-crust/25 shrink-0 pt-0.5">
                        {n}
                      </span>
                      <div>
                        <p className="text-[13px] font-normal uppercase tracking-[0.16em] text-dough-espresso/75 mb-1.5">
                          {t}
                        </p>
                        <p className="text-[13px] font-light leading-[1.8] text-dough-charcoal/55">
                          {d}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Contact + Hours note */}
              <div className="space-y-3">
                <p className="text-editorial">
                  Open Monday – Sunday &nbsp;·&nbsp; 10:00 AM – 11:00 PM<br />
                  Sector 7-C, Chandigarh
                </p>
                <p className="text-[12px] font-light text-dough-charcoal/50">
                  Call or WhatsApp:{' '}
                  <a
                    href="tel:+916283371140"
                    className="text-dough-crust/70 hover:text-dough-crust transition-colors duration-300"
                  >
                    +91 62833 71140
                  </a>
                </p>
                <p className="text-[12px] font-light text-dough-charcoal/50">
                  Follow us:{' '}
                  <a
                    href="https://www.instagram.com/sirdoughofficial/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dough-crust/70 hover:text-dough-crust transition-colors duration-300"
                  >
                    @sirdoughofficial
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PreOrder
