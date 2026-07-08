import { useInView } from '../hooks/useInView.js'
import { COMMUNITY_CARDS, COMMUNITY_SECTION } from '../data/community.js'

function CommunityCard({ card, index }) {
  const { ref, isVisible } = useInView(0.1)

  return (
    <article
      ref={ref}
      className={`group scroll-reveal relative overflow-hidden min-h-[20rem] sm:min-h-[22rem] ${
        isVisible ? 'is-visible' : ''
      }`}
      style={{ transitionDelay: `${index * 0.07}s` }}
    >
      {/* Background image */}
      <img
        src={card.image}
        alt=""
        loading="lazy"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-expo group-hover:scale-[1.04]"
      />

      {/* Warm dark gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-dough-espresso/60 via-dough-espresso/72 to-dough-espresso/90 transition-opacity duration-500 ease-expo group-hover:opacity-95"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-8 sm:p-9 lg:p-10">
        {/* Number */}
        <span
          className="font-serif text-2xl font-normal italic text-dough-oak/50 mb-5"
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Accent line */}
        <span
          className="mb-5 block h-px w-7 bg-dough-terra/50 transition-all duration-500 ease-expo group-hover:w-14 group-hover:bg-dough-terra/75"
          aria-hidden="true"
        />

        <h3 className="font-serif text-[1.5rem] font-normal leading-[1.25] text-dough-chalk sm:text-[1.65rem]">
          {card.title}
        </h3>
        <p className="mt-4 text-[13px] font-light leading-[1.8] text-dough-chalk/55 max-w-[18rem]">
          {card.description}
        </p>
      </div>
    </article>
  )
}

function Community() {
  const { ref: headerRef, isVisible: headerVisible } = useInView()

  return (
    <section
      id="community"
      className="scroll-mt-24 section-padding relative bg-dough-espresso"
    >
      <div className="container-wide">

        {/* Header */}
        <header
          ref={headerRef}
          className={`scroll-reveal mx-auto mb-16 max-w-2xl text-center sm:mb-20 lg:mb-24 ${
            headerVisible ? 'is-visible' : ''
          }`}
        >
          <p className="text-label-light mb-7">{COMMUNITY_SECTION.label}</p>
          <h2 className="heading-section-light">
            {COMMUNITY_SECTION.heading.split('\n').map((line, i) => (
              <span key={i}>
                {i > 0 && (
                  <>
                    <br />
                    <span className="italic text-dough-oak">{line}</span>
                  </>
                )}
                {i === 0 && line}
              </span>
            ))}
          </h2>
          <p className="text-body-light mx-auto mt-8 max-w-md sm:mt-10">
            {COMMUNITY_SECTION.subheading}
          </p>
        </header>

        {/* Card grid — last card spans 2 columns on md, 1 on lg */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
          {COMMUNITY_CARDS.map((card, index) => (
            <div
              key={card.id}
              className={
                index === COMMUNITY_CARDS.length - 1
                  ? 'sm:col-span-2 lg:col-span-1'
                  : ''
              }
            >
              <CommunityCard card={card} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Community
