import {
  FOOTER_COPY,
  FOOTER_OPENING_HOURS,
  FOOTER_NAV,
  FOOTER_SOCIAL,
} from '../data/contact.js'

function SocialIcon({ platform }) {
  const common = 'h-4 w-4 text-white/55 transition-colors duration-400 group-hover:text-white/90'

  if (platform === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={common}>
        <path
          d="M7.5 2.8h9A4.7 4.7 0 0 1 21.2 7.5v9a4.7 4.7 0 0 1-4.7 4.7h-9a4.7 4.7 0 0 1-4.7-4.7v-9A4.7 4.7 0 0 1 7.5 2.8Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M12 16.2a4.2 4.2 0 1 0 0-8.4 4.2 4.2 0 0 0 0 8.4Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M17.5 6.9h.01"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    )
  }

  if (platform === 'facebook') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={common}>
        <path
          d="M14 8.4V6.6c0-.9.6-1.2 1.2-1.2h2.1V2.8h-3c-3.2 0-4.2 2-4.2 4.2v1.4H7.3v2.9H11v9.9h3.3V11.3h2.8l.4-2.9H14Z"
          fill="currentColor"
          opacity="0.9"
        />
      </svg>
    )
  }

  // x / twitter default
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={common}>
      <path
        d="M18.7 3H21l-5.6 6.4L22 21h-5l-3.9-5.7L7.7 21H5.3l6.1-7L2 3h5.1l3.5 5.1L18.7 3Z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  )
}

function Footer() {
  return (
    <footer className="border-t border-costa-cream/[0.05] bg-costa-espresso-deep">
      <div className="container-wide py-14 sm:py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto_1fr] lg:items-start lg:gap-8">
          {/* Logo */}
          <a href="#home" className="group inline-flex items-center gap-2.5">
            <span
              className="inline-block h-4 w-2.5 rounded-[1px] border border-costa-caramel/60 bg-costa-espresso-deep/40 transition-colors duration-300 group-hover:border-costa-caramel/80"
              aria-hidden="true"
            />
            <span className="font-serif text-lg tracking-[0.18em] text-costa-cream/95 sm:text-xl">
              COSTA
            </span>
          </a>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-8 gap-y-3 lg:justify-center">
              {FOOTER_NAV.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[9px] font-light uppercase tracking-[0.22em] text-costa-cream/45 transition-colors duration-400 hover:text-costa-cream/85"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Opening hours + Social */}
          <div className="flex flex-col gap-8 lg:items-end">
            <div>
              <p className="text-label mb-4">Opening Hours</p>
              <div className="space-y-2">
                {FOOTER_OPENING_HOURS.map((row) => (
                  <div
                    key={row.day}
                    className="flex items-center justify-between gap-8 text-[12px] font-light text-costa-cream/55"
                  >
                    <span>{row.day}</span>
                    <span className="text-costa-cream/35">{row.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-label mb-4">Social</p>
              <ul className="flex items-center gap-6">
                {FOOTER_SOCIAL.map((link) => (
                  <li key={link.platform}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center"
                      aria-label={link.label}
                    >
                      <SocialIcon platform={link.platform} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="divider-subtle mt-12 pt-8 text-center sm:mt-14 sm:pt-10">
          <p className="text-[10px] font-light tracking-[0.15em] text-costa-cream/25">
            {FOOTER_COPY.copyright}
          </p>
          <p className="mt-2 font-serif text-xs italic tracking-wide text-costa-cream/20">
            {FOOTER_COPY.tagline}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
