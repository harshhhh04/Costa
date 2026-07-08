import { useInView } from '../hooks/useInView.js'
import {
  TESTIMONIALS,
  TESTIMONIALS_SECTION,
} from '../data/testimonials.js'

function TestimonialCard({ quote, index }) {
  const { ref, isVisible } = useInView(0.1)

  return (
    <blockquote
      ref={ref}
      className={`scroll-reveal ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      {/* Large serif quote mark */}
      <span
        className="font-serif text-[4.5rem] leading-none text-dough-crust/15 select-none"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      {/* The quote — editorial, no card box */}
      <p className="mt-1 font-serif text-[1.2rem] font-normal leading-[1.7] text-dough-espresso/80 sm:text-[1.35rem] sm:leading-[1.75]">
        {quote}
      </p>

      {/* Accent rule */}
      <span
        className="mt-8 block h-px w-8 bg-dough-terra/35"
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
      className="scroll-mt-24 section-padding relative bg-dough-linen"
    >
      <div className="container-wide">

        {/* Header */}
        <header
          ref={headerRef}
          className={`scroll-reveal mx-auto mb-16 max-w-2xl text-center sm:mb-20 ${
            headerVisible ? 'is-visible' : ''
          }`}
        >
          <p className="text-label mb-7">{TESTIMONIALS_SECTION.label}</p>
          <h2 className="heading-section">
            {TESTIMONIALS_SECTION.heading.split('.')[0]}.{' '}
            <span className="italic text-dough-terra">
              {TESTIMONIALS_SECTION.heading.split('.')[1]}
            </span>
          </h2>
          <p className="text-body mx-auto mt-8 max-w-md sm:mt-10">
            {TESTIMONIALS_SECTION.subheading}
          </p>
        </header>

        {/* Testimonial columns — no card borders, pure editorial */}
        <div className="grid gap-12 md:grid-cols-3 md:gap-14 lg:gap-20 mt-4">
          {TESTIMONIALS.map((t, index) => (
            <TestimonialCard key={t.id} quote={t.quote} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
