import heroBackground from '../../assets/images/5.jpeg'

const DEFAULTS = {
  backgroundImage: heroBackground,
  label: 'Costa Coffee Sector 35C, Chandigarh',
  brandTagline: '',
  heading: 'Your usual table is waiting.',
  subheading:
    'Slow mornings. Warm cups. Book breaks, and conversations that run long.',
  primaryCta: { label: 'Find Us', href: '#contact' },
  secondaryCta: { label: 'View Menu', href: '#menu' },
  rating: 4.0,
  reviewCount: 171,
}

const BUSINESS_HOURS = {
  opensAt: 7 * 60 + 30,
  closesAt: 23 * 60,
}

function getOpenStatusLabel() {
  const now = new Date()
  const currentMinutes = now.getHours() * 60 + now.getMinutes()
  const isOpen =
    currentMinutes >= BUSINESS_HOURS.opensAt &&
    currentMinutes < BUSINESS_HOURS.closesAt

  return isOpen ? 'Open Now - Closes at 11:00 PM' : 'Closed Now - Opens at 7:30 AM'
}

function Hero({
  backgroundImage = DEFAULTS.backgroundImage,
  label = DEFAULTS.label,
  brandTagline = DEFAULTS.brandTagline,
  heading = DEFAULTS.heading,
  subheading = DEFAULTS.subheading,
  primaryCta = DEFAULTS.primaryCta,
  secondaryCta = DEFAULTS.secondaryCta,
  rating = DEFAULTS.rating,
  reviewCount = DEFAULTS.reviewCount,
}) {
  const openStatusLabel = getOpenStatusLabel()

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-costa-espresso-deep"
    >
      {/* Background image — sharp, atmospheric */}
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'center 34%',
        }}
        aria-hidden="true"
      />

      {/* Overlays — lighter centre, image remains visible */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-costa-espresso-deep/70 via-costa-espresso/35 to-costa-espresso-deep/80"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-costa-espresso-deep/55 via-transparent to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/75 via-black/40 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.25)_100%)]"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-3xl -translate-y-[10%] px-6 py-20 text-center sm:px-8">
        {/* 1 — Primary heading */}
        <h1
          className="hero-fade-in heading-hero"
          style={{ animationDelay: '0.15s' }}
        >
          {heading}
        </h1>

        {/* 2 — Subheading */}
        <p
          className="hero-fade-in text-body-lg mx-auto mt-6 max-w-sm sm:mt-7"
          style={{ animationDelay: '0.28s' }}
        >
          {subheading}
        </p>

        {/* 3 & 4 — CTAs */}
        <div
          className="hero-fade-in mt-10 flex flex-col items-center justify-center gap-6 sm:mt-12 sm:flex-row sm:gap-8"
          style={{ animationDelay: '0.4s' }}
        >
          <a href={primaryCta.href} className="btn-primary w-full sm:w-auto">
            {primaryCta.label}
          </a>

          <a
            href={secondaryCta.href}
            className="group inline-flex items-center text-[11px] font-normal uppercase tracking-[0.22em] text-costa-cream/65 transition-colors duration-500 ease-expo hover:text-costa-cream w-full sm:w-auto justify-center"
          >
            {secondaryCta.label}
            <span className="ml-2.5 transition-transform duration-500 ease-expo group-hover:translate-x-1">→</span>
          </a>
        </div>

        {/* 5 — Supporting tagline */}
        <p
          className="hero-fade-in text-editorial mt-12 sm:mt-14"
          style={{ animationDelay: '0.52s' }}
        >
          {brandTagline}
        </p>

        {/* 6 — Supporting label + Open Status */}
        <p
          className="hero-fade-in text-supporting mt-5 sm:mt-6"
          style={{ animationDelay: '0.6s' }}
        >
          {label} &nbsp;·&nbsp; {openStatusLabel}
        </p>
      </div>
    </section>
  )
}

export default Hero
