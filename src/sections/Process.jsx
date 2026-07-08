import starterCultureImage  from '../../assets/images/starter-culture.png'
import fermentationDoughImage from '../../assets/images/fermentation-dough.png'
import breadOvenBakeImage    from '../../assets/images/bread-oven-bake.png'
import serveTableImage       from '../../assets/images/serve-table.png'
import { useInView }         from '../hooks/useInView.js'

const PROCESS_STEPS = [
  {
    id: 'starter',
    number: '01',
    label: 'The Starter',
    heading: 'Everything begins\nwith a living thing.',
    body: 'Our sourdough starter is three years old. Fed daily. Never refrigerated. It is the heartbeat of every loaf we make — a colony of wild yeast and bacteria that gives Sir Dough its flavour, its texture, its identity.',
    image: starterCultureImage,
    imageAlt: 'Active sourdough starter culture bubbling in a glass jar',
  },
  {
    id: 'fermentation',
    number: '02',
    label: 'Fermentation',
    heading: '72 hours of\ndeliberate patience.',
    body: 'We cold-ferment every dough for a minimum of 48 hours. Some for 72. This is not a shortcut we skip. Long fermentation is what makes sourdough digestible, complex in flavour, and genuinely different from what you find everywhere else.',
    image: fermentationDoughImage,
    imageAlt: 'Artisan bread dough in a wicker banneton proofing basket',
  },
  {
    id: 'bake',
    number: '03',
    label: 'The Bake',
    heading: 'High heat.\nOne chance.',
    body: 'The oven runs at 260°C. Dutch ovens trap steam in the first fifteen minutes, creating the crust you can hear crack across the room. Every loaf gets one chance. We take it seriously.',
    image: breadOvenBakeImage,
    imageAlt: 'Sourdough loaf with perfect scored crust freshly baked',
  },
  {
    id: 'serve',
    number: '04',
    label: 'Serve',
    heading: 'Ready by ten.\nGone by afternoon.',
    body: 'Bread is at its best in the first four hours after baking. We open at 10 AM. We sell until we\'re out. We never hold loaves back. What you get is what just came out of the oven.',
    image: serveTableImage,
    imageAlt: 'Sliced sourdough on a wooden table with coffee and butter',
  },
]

function ProcessStep({ step, index }) {
  const { ref, isVisible } = useInView(0.15)
  const isEven = index % 2 === 0 // even → image right, odd → image left

  return (
    <article
      ref={ref}
      className={`scroll-reveal grid gap-12 items-center lg:grid-cols-2 lg:gap-20 xl:gap-28 ${
        isVisible ? 'is-visible' : ''
      }`}
      style={{ transitionDelay: '0.05s' }}
    >
      {/* Text block — always first in DOM, visually flips on large screens */}
      <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'} lg:py-8`}>
        {/* Step number — large decorative */}
        <span
          className="process-step-number block leading-none select-none"
          aria-hidden="true"
        >
          {step.number}
        </span>

        {/* Label */}
        <p className="text-label mt-3 mb-6">{step.label}</p>

        {/* Heading */}
        <h3 className="font-serif text-[1.75rem] font-normal leading-[1.15] tracking-[-0.01em] text-dough-espresso sm:text-[2.1rem] lg:text-[2.4rem]">
          {step.heading.split('\n').map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </h3>

        {/* Accent line */}
        <span className="mt-6 mb-6 block h-px w-8 bg-dough-terra/40" aria-hidden="true" />

        {/* Body copy */}
        <p className="text-body max-w-[30rem]">{step.body}</p>
      </div>

      {/* Image block */}
      <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[3/4] lg:aspect-[4/5]">
          <img
            src={step.image}
            alt={step.imageAlt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-expo hover:scale-[1.025]"
          />
          {/* Subtle warm overlay at bottom */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-dough-espresso/12 to-transparent"
            aria-hidden="true"
          />
        </div>
      </div>
    </article>
  )
}

function Process() {
  const { ref: headerRef, isVisible: headerVisible } = useInView()

  return (
    <section
      id="process"
      className="scroll-mt-24 section-padding relative bg-dough-linen"
    >
      <div className="container-wide">

        {/* Section header */}
        <header
          ref={headerRef}
          className={`scroll-reveal mx-auto mb-20 max-w-2xl text-center sm:mb-24 lg:mb-28 ${
            headerVisible ? 'is-visible' : ''
          }`}
        >
          <p className="text-label mb-7">The Process</p>
          <h2 className="heading-section">
            Craft is not a{' '}
            <span className="italic text-dough-terra">shortcut.</span>
          </h2>
          <p className="text-body mx-auto mt-8 max-w-md sm:mt-10">
            Four steps. Three years of practice. One loaf at a time.
          </p>
        </header>

        {/* Steps — alternating layout */}
        <div className="space-y-24 md:space-y-28 lg:space-y-36">
          {PROCESS_STEPS.map((step, index) => (
            <ProcessStep key={step.id} step={step} index={index} />
          ))}
        </div>

        {/* Editorial sign-off */}
        <div className="divider-subtle mt-24 pt-12 text-center sm:mt-28">
          <p className="text-editorial">
            Every loaf is made to order. Reserve yours the evening before.
          </p>
          <a href="#preorder" className="btn-primary mt-8 inline-flex">
            Reserve Tomorrow's Loaf
          </a>
        </div>
      </div>
    </section>
  )
}

export default Process
