import {
  FOOTER_COPY,
  FOOTER_OPENING_HOURS,
  FOOTER_NAV,
  FOOTER_SOCIAL,
  CONTACT_DETAILS,
} from '../data/contact.js'

import Marquee from './Marquee.jsx'

function SocialIcon({ platform }) {
  const cls = 'h-4 w-4 text-dough-chalk/45 transition-colors duration-400 group-hover:text-dough-chalk/85'

  if (platform === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={cls}>
        <path d="M7.5 2.8h9A4.7 4.7 0 0 1 21.2 7.5v9a4.7 4.7 0 0 1-4.7 4.7h-9a4.7 4.7 0 0 1-4.7-4.7v-9A4.7 4.7 0 0 1 7.5 2.8Z" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 16.2a4.2 4.2 0 1 0 0-8.4 4.2 4.2 0 0 0 0 8.4Z" stroke="currentColor" strokeWidth="1.6" />
        <path d="M17.5 6.9h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={cls}>
      <path d="M14 8.4V6.6c0-.9.6-1.2 1.2-1.2h2.1V2.8h-3c-3.2 0-4.2 2-4.2 4.2v1.4H7.3v2.9H11v9.9h3.3V11.3h2.8l.4-2.9H14Z" fill="currentColor" opacity="0.85" />
    </svg>
  )
}

function WheatMark() {
  return (
    <svg width="14" height="18" viewBox="0 0 16 20" fill="none" aria-hidden="true" className="shrink-0">
      <ellipse cx="8" cy="8" rx="4" ry="6.5" stroke="rgba(250,247,242,0.4)" strokeWidth="1" fill="none" />
      <line x1="8" y1="14.5" x2="8" y2="20" stroke="rgba(250,247,242,0.25)" strokeWidth="1" />
      <line x1="5" y1="11" x2="2" y2="14" stroke="rgba(250,247,242,0.2)" strokeWidth="0.75" />
      <line x1="11" y1="11" x2="14" y2="14" stroke="rgba(250,247,242,0.2)" strokeWidth="0.75" />
    </svg>
  )
}

function Footer() {
  return (
    <footer className="bg-dough-espresso">
      <Marquee />
      <div className="container-wide py-14 sm:py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto_1fr] lg:items-start lg:gap-8">

          {/* Brand */}
          <div className="space-y-5">
            <a href="#home" className="group inline-flex items-center gap-2.5">
              <WheatMark />
              <span className="font-serif text-lg tracking-[0.2em] text-dough-chalk/90 sm:text-xl">
                SIR DOUGH
              </span>
            </a>
            <p className="max-w-[18rem] text-[12px] font-light leading-[1.85] text-dough-chalk/35">
              Artisan bakery, Chandigarh.<br />
              Baked before sunrise. Ready by ten.
            </p>
            <div>
              <p className="text-[9px] font-light uppercase tracking-[0.28em] text-dough-chalk/30 mb-2">Address</p>
              <p className="text-[12px] font-light text-dough-chalk/50">{CONTACT_DETAILS.address}</p>
            </div>
            <div>
              <p className="text-[9px] font-light uppercase tracking-[0.28em] text-dough-chalk/30 mb-2">Phone / WhatsApp</p>
              <a
                href={CONTACT_DETAILS.phoneHref}
                className="text-[12px] font-light text-dough-chalk/50 transition-colors duration-300 hover:text-dough-chalk/80"
              >
                {CONTACT_DETAILS.phone}
              </a>
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-8 gap-y-3 lg:justify-center">
              {FOOTER_NAV.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[9px] font-light uppercase tracking-[0.22em] text-dough-chalk/35 transition-colors duration-400 hover:text-dough-chalk/75"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Hours + Social */}
          <div className="flex flex-col gap-8 lg:items-end">
            <div>
              <p className="text-label-light mb-4">Opening Hours</p>
              <div className="space-y-2">
                {FOOTER_OPENING_HOURS.map((row) => (
                  <div
                    key={row.day}
                    className="flex items-center justify-between gap-8 text-[12px] font-light text-dough-chalk/45"
                  >
                    <span>{row.day}</span>
                    <span className="text-dough-chalk/25">{row.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-label-light mb-4">Follow</p>
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

        {/* Bottom bar */}
        <div className="divider-subtle-light mt-12 pt-8 text-center sm:mt-14 sm:pt-10">
          <p className="text-[10px] font-light tracking-[0.15em] text-dough-chalk/20">
            {FOOTER_COPY.copyright}
          </p>
          <p className="mt-2 font-serif text-xs italic tracking-wide text-dough-chalk/15">
            {FOOTER_COPY.tagline}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
