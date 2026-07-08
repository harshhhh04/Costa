import { useInView } from '../hooks/useInView.js'
import { COMMUNITY_CARDS, COMMUNITY_SECTION } from '../data/community.js'

function CommunityCard({ card, index }) {
  const { ref, isVisible } = useInView(0.1)

  return (
    <article
      ref={ref}
      className={`group scroll-reveal relative overflow-hidden border border-costa-cream/[0.05] bg-costa-cream/[0.01] p-9 transition-all duration-500 ease-expo hover:-translate-y-1 hover:border-costa-caramel/20 sm:last:col-span-2 lg:last:col-span-1 ${
        isVisible ? 'is-visible' : ''
      }`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <img
        src={card.image}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-expo group-hover:scale-[1.03]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-costa-espresso-deep/70 via-costa-espresso-deep/75 to-costa-espresso-deep/85 transition-opacity duration-500 ease-expo group-hover:opacity-90"
        aria-hidden="true"
      />

      <div className="relative mb-6 flex items-baseline justify-between">
        <span className="font-serif text-3xl font-light italic text-costa-caramel/70">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <span
        className="relative mb-6 block h-px w-8 bg-costa-caramel/35 transition-all duration-500 ease-expo group-hover:w-14 group-hover:bg-costa-caramel/60"
        aria-hidden="true"
      />

      <h3 className="relative heading-dish text-2xl sm:text-3xl">{card.title}</h3>
      <p className="relative text-body mt-5 max-w-[18rem]">{card.description}</p>
    </article>
  )
}

function Community() {
  const { ref: headerRef, isVisible: headerVisible } = useInView()

  return (
    <section
      id="community"
      className="scroll-mt-24 section-padding relative bg-costa-espresso-deep"
    >
      <div className="container-wide">
        <header
          ref={headerRef}
          className={`scroll-reveal mx-auto mb-16 max-w-2xl text-center sm:mb-20 lg:mb-24 ${
            headerVisible ? 'is-visible' : ''
          }`}
        >
          <p className="text-label mb-7">{COMMUNITY_SECTION.label}</p>
          <h2 className="heading-section">{COMMUNITY_SECTION.heading}</h2>
          <p className="text-body mx-auto mt-8 max-w-md sm:mt-10">
            {COMMUNITY_SECTION.subheading}
          </p>
        </header>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {COMMUNITY_CARDS.map((card, index) => (
            <CommunityCard key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Community

