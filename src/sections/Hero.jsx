import { SIRDOUGH_IMAGES } from '../data/contact.js'

const BAKERY_HOURS = {
  opensAt:  7 * 60,       // 7:00 AM
  closesAt: 14 * 60,      // 2:00 PM
}

function getOpenStatus() {
  const now     = new Date()
  const minutes = now.getHours() * 60 + now.getMinutes()
  const day     = now.getDay() // 0 = Sunday, 1 = Monday …

  if (day === 1) return 'Closed today · Opens Tuesday 7:00 AM'

  const isOpen = minutes >= BAKERY_HOURS.opensAt && minutes < BAKERY_HOURS.closesAt
  return isOpen
    ? 'Open now · Closes 2:00 PM'
    : 'Closed · Opens tomorrow 7:00 AM'
}

function Hero() {
  const openStatus = getOpenStatus()

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-dough-espresso"
    >
      {/* Background — real Sir Dough image */}
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center bg-no-repeat transition-transform duration-[8s] ease-out"
        style={{
          backgroundImage: `url(${SIRDOUGH_IMAGES.heroImg})`,
          backgroundPosition: 'center 38%',
        }}
        aria-hidden="true"
      />

      {/* Warm amber overlays — not cold black */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-dough-espresso/80 via-dough-crust/25 to-dough-espresso/88"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-dough-espresso/65 via-transparent to-transparent"
        aria-hidden="true"
      />
      {/* Top darkening for navbar legibility */}
      <div
        className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-dough-espresso/80 via-dough-espresso/30 to-transparent"
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-3xl -translate-y-[8%] px-6 py-20 text-center sm:px-8">

        {/* Bakery identifier */}
        <p
          className="hero-fade-in text-supporting mb-8 sm:mb-10"
          style={{ animationDelay: '0.05s' }}
        >
          Artisan Bakery &nbsp;·&nbsp; Chandigarh
        </p>

        {/* Primary headline */}
        <h1
          className="hero-fade-in heading-hero"
          style={{ animationDelay: '0.15s' }}
        >
          Good Bread{' '}
          <br className="hidden sm:block" />
          <span className="italic">Refuses To</span>
          <br />
          Hurry.
        </h1>

        {/* Sub-headline */}
        <p
          className="hero-fade-in text-body-lg mx-auto mt-7 max-w-sm sm:mt-8"
          style={{ animationDelay: '0.28s' }}
        >
          72 hours of patience. Real fermentation.
          <br className="hidden sm:block" />
          Chandigarh's first true sourdough bakery.
        </p>

        {/* Single CTA — one intention, one action */}
        <div
          className="hero-fade-in mt-10 flex justify-center sm:mt-12"
          style={{ animationDelay: '0.42s' }}
        >
          <a href="#preorder" className="btn-primary-hero">
            Reserve Tomorrow's Loaf
          </a>
        </div>

        {/* Open status */}
        <p
          className="hero-fade-in text-supporting mt-12 sm:mt-14"
          style={{ animationDelay: '0.58s' }}
        >
          {openStatus}
        </p>
      </div>

      {/* Bottom edge — fade into the next section */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-dough-linen to-transparent"
        aria-hidden="true"
      />
    </section>
  )
}

export default Hero
