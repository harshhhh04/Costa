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
      className={`scroll-reveal border border-costa-cream/[0.05] bg-costa-cream/[0.01] p-8 transition-all duration-500 ease-expo hover:-translate-y-1 hover:border-costa-caramel/25 ${
        isVisible ? 'is-visible' : ''
      }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <span
        className="font-serif text-3xl leading-none text-costa-caramel/50"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      <p className="mt-4 font-serif text-lg font-light italic leading-[1.7] text-costa-cream/85 sm:text-xl sm:leading-[1.75]">
        {quote}
      </p>

      <span
        className="mt-8 block h-px w-10 bg-costa-cream/10"
        aria-hidden="true"
      />
    </blockquote>
  )
}

function Testimonials() {
  const { ref: headerRef, isVisible: headerVisible } = useInView()

  return (
    <section
      id="testimonials"
      className="scroll-mt-24 section-padding relative bg-costa-mahogany"
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

        <div className="grid gap-5 md:grid-cols-3 md:gap-6 lg:gap-8 mt-16 sm:mt-20">
          {TESTIMONIALS.map((t, index) => (
            <TestimonialCard key={t.id} quote={t.quote} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

