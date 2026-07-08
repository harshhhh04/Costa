import { useInView } from '../hooks/useInView.js'
import { COMMUNITY_CARDS, COMMUNITY_SECTION } from '../data/community.js'

function CommunityIcon({ name }) {
  const colorClass = 'text-costa-caramel/75 transition-colors duration-500 group-hover:text-costa-caramel/95'

  if (name === 'book') {
    return (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={`h-7 w-7 ${colorClass}`}>
        <path
          d="M7 5.8h12.2c1.7 0 3.1 1.4 3.1 3.1V26H10.1C8.3 26 7 24.6 7 22.9V5.8Z"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M10.2 9.3h9.2"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.7"
        />
        <path
          d="M10.2 13h9.2"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.55"
        />
      </svg>
    )
  }

  if (name === 'study') {
    return (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={`h-7 w-7 ${colorClass}`}>
        <path
          d="M7.2 12.2V26h17.6V12.2"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M9 10c0-2 1.6-3.6 3.6-3.6h6.8c2 0 3.6 1.6 3.6 3.6v2.2H9V10Z"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M12 18h8"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.7"
        />
      </svg>
    )
  }

  if (name === 'meet') {
    return (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={`h-7 w-7 ${colorClass}`}>
        <path
          d="M9 12.2c0-3 2.4-5.4 5.4-5.4S19.8 9.2 19.8 12.2c0 3-2.4 5.4-5.4 5.4S9 15.2 9 12.2Z"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M6.8 26c.9-4.2 4-6.8 7.6-6.8s6.7 2.6 7.6 6.8"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.75"
        />
        <path
          d="M22.4 13.6h3.8"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    )
  }

  // weekend
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={`h-7 w-7 ${colorClass}`}>
      <path
        d="M10 7.6h12v2.5H10V7.6Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M8.2 11.2h15.6v9.8c0 2-1.6 3.6-3.6 3.6h-8.4c-2 0-3.6-1.6-3.6-3.6v-9.8Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M12 18h8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M16 14.2v1.8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  )
}

function CommunityCard({ card, index }) {
  const { ref, isVisible } = useInView(0.1)

  return (
    <article
      ref={ref}
      className={`group scroll-reveal relative overflow-hidden border border-white/[0.06] bg-white/[0.01] p-9 transition-all duration-500 ease-expo hover:-translate-y-1 hover:border-costa-caramel/20 sm:last:col-span-2 lg:last:col-span-1 ${
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
        className="absolute inset-0 bg-gradient-to-b from-black/72 via-black/75 to-black/82 transition-opacity duration-500 ease-expo group-hover:opacity-90"
        aria-hidden="true"
      />

      <div className="relative mb-8 flex items-center justify-between">
        <CommunityIcon name={card.icon} />
        <span className="text-label">{String(index + 1).padStart(2, '0')}</span>
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

