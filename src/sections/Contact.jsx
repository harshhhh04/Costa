import {
  CONTACT_DETAILS,
  CONTACT_HEADER,
  FOOTER_SOCIAL,
} from '../data/contact.js'
import { useInView } from '../hooks/useInView.js'

function SocialIcon({ platform }) {
  const common = 'h-4 w-4 text-white/60 transition-colors duration-400'

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

function Contact() {
  const { ref: headerRef, isVisible: headerVisible } = useInView()
  const { ref: contentRef, isVisible: contentVisible } = useInView()
  const { ref: mapRef, isVisible: mapVisible } = useInView()

  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    CONTACT_DETAILS.mapQuery,
  )}&output=embed`

  return (
    <section
      id="contact"
      className="scroll-mt-24 section-padding relative bg-costa-espresso-deep"
    >
      <div className="container-wide">
        {/* Section header */}
        <header
          ref={headerRef}
          className={`scroll-reveal mb-16 max-w-xl sm:mb-20 lg:mb-24 ${
            headerVisible ? 'is-visible' : ''
          }`}
        >
          <p className="text-label mb-7">{CONTACT_HEADER.label}</p>

          <h2 className="heading-section">{CONTACT_HEADER.heading}</h2>

          <p className="text-body mt-8 max-w-md sm:mt-10">
            {CONTACT_HEADER.subheading}
          </p>
        </header>

        {/* Contact grid */}
        <div
          ref={contentRef}
          className={`scroll-reveal grid gap-14 lg:grid-cols-2 lg:gap-20 xl:gap-24 ${
            contentVisible ? 'is-visible' : ''
          }`}
        >
          {/* Left — contact details */}
          <div className="lg:py-2">
            <div className="space-y-10 sm:space-y-12">
              <div>
                <p className="text-label mb-3">Address</p>
                <p className="font-serif text-xl font-light text-white/85 sm:text-2xl">
                  {CONTACT_DETAILS.address}
                </p>
              </div>

              <div>
                <p className="text-label mb-3">Phone</p>
                <a
                  href={CONTACT_DETAILS.phoneHref}
                  className="font-serif text-xl font-light text-white/85 transition-colors duration-400 hover:text-costa-caramel/80 sm:text-2xl"
                >
                  {CONTACT_DETAILS.phone}
                </a>
              </div>

              <div>
                <p className="text-label mb-3">Email</p>
                <a
                  href={CONTACT_DETAILS.emailHref}
                  className="font-serif text-xl font-light text-white/85 transition-colors duration-400 hover:text-costa-caramel/80 sm:text-2xl"
                >
                  {CONTACT_DETAILS.email}
                </a>
              </div>

              <div>
                <p className="text-label mb-5">Working Hours</p>
                <div className="space-y-5">
                  {CONTACT_DETAILS.hours.map((slot) => (
                    <div key={slot.day}>
                      <p className="font-serif text-lg font-light text-white/75">
                        {slot.day}
                      </p>
                      <p className="text-body mt-1">{slot.time}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-label mb-4">Follow Us</p>
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
                        <span className="transition-colors duration-400 group-hover:text-costa-caramel/90">
                          <SocialIcon platform={link.platform} />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right — map */}
          <div
            ref={mapRef}
            className={`scroll-reveal relative overflow-hidden rounded-[2px] border border-white/[0.06] bg-white/[0.01] ${
              mapVisible ? 'is-visible' : ''
            }`}
          >
            <iframe
              title="Costa Coffee map"
              src={mapEmbedUrl}
              loading="lazy"
              className="h-[22rem] w-full sm:h-[26rem]"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.28)_100%)]" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
