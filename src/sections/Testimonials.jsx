import { useInView } from '../hooks/useInView.js'
import {
  TESTIMONIALS,
  TESTIMONIALS_SECTION,
  TESTIMONIALS_SUMMARY,
} from '../data/testimonials.js'

function TestimonialCard({ quote, index }) {
  const { ref, isVisible } = useInView(0.1)

  return (
    <blockquote
      ref={ref}
      className={`scroll-reveal border border-white/[0.06] bg-white/[0.01] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-costa-caramel/20 ${
        isVisible ? 'is-visible' : ''
      }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <span
        className="font-serif text-3xl leading-none text-costa-caramel/35"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      <p className="mt-4 font-serif text-lg font-light italic leading-[1.7] text-white/75 sm:text-xl sm:leading-[1.75]">
        {quote}
      </p>

      <span
        className="mt-8 block h-px w-10 bg-white/10"
        aria-hidden="true"
      />
    </blockquote>
  )
}

function Testimonials() {
  const { ref: headerRef, isVisible: headerVisible } = useInView()
  const { ref: summaryRef, isVisible: summaryVisible } = useInView()

  return (
    <section
      id="testimonials"
      className="scroll-mt-24 section-padding relative bg-costa-espresso-deep"
    >
      <div className="container-wide">
        <header
          ref={headerRef}
          className={`scroll-reveal mx-auto mb-14 max-w-2xl text-center sm:mb-16 lg:mb-20 ${
            headerVisible ? 'is-visible' : ''
          }`}
        >
          <p className="text-label mb-7">{TESTIMONIALS_SECTION.label}</p>
          <h2 className="heading-section">{TESTIMONIALS_SECTION.heading}</h2>
          <p className="text-body mx-auto mt-8 max-w-md sm:mt-10">
            {TESTIMONIALS_SECTION.subheading}
          </p>
        </header>

        <div
          ref={summaryRef}
          className={`scroll-reveal divider-subtle mx-auto mb-14 max-w-lg py-10 sm:mb-16 sm:py-12 lg:mb-20 ${
            summaryVisible ? 'is-visible' : ''
          }`}
        >
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12">
            <div className="text-center">
              <p className="stat-value">{TESTIMONIALS_SUMMARY.rating}</p>
              <p className="stat-label mt-2">
                out of {TESTIMONIALS_SUMMARY.maxRating}
              </p>
            </div>

            <span
              className="hidden h-12 w-px bg-white/[0.06] sm:block"
              aria-hidden="true"
            />

            <div className="text-center">
              <p className="stat-value">{TESTIMONIALS_SUMMARY.totalReviews}</p>
              <p className="stat-label mt-2">Reviews</p>
            </div>
          </div>

          <p
            className="mt-6 text-center text-[10px] tracking-[0.3em] text-costa-caramel/45"
            aria-hidden="true"
          >
            ★ ★ ★ ★ ★
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3 md:gap-6 lg:gap-8">
          {TESTIMONIALS.map((t, index) => (
            <TestimonialCard key={t.id} quote={t.quote} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

