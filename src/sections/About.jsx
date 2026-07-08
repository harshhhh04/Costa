import aboutImage from '../../assets/images/1.jpeg'

const STATS = [
  { value: '7:30 AM - 11 PM', label: 'Open Daily' },
  { value: '4.0', label: 'Google Rating' },
  { value: 'Sector 35C', label: 'Local Favorite' },
]

const DEFAULTS = {
  image: aboutImage,
  imageAlt: 'Costa coffee cup on a wooden table with interior ambience',
  label: 'Why People Keep Coming Back',
  heading: 'Built for Real\nEveryday Moments',
  paragraph:
    'Some guests open laptops and settle in for remote work. Some come early with books for quiet mornings. Students meet for study sessions, friends catch up over cappuccino, and teams drop in for informal meetings. It feels easy, familiar, and genuinely welcoming.',
  stats: STATS,
}

function About({
  image = DEFAULTS.image,
  imageAlt = DEFAULTS.imageAlt,
  label = DEFAULTS.label,
  heading = DEFAULTS.heading,
  paragraph = DEFAULTS.paragraph,
  stats = DEFAULTS.stats,
}) {
  return (
    <section
      id="about"
      className="scroll-mt-24 section-padding relative bg-costa-espresso-deep"
    >
      <div className="container-wide">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20 xl:gap-28">
          {/* Image */}
          <div className="relative lg:pr-4">
            <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[3/4]">
              <img
                src={image}
                alt={imageAlt}
                className="h-full w-full object-cover transition-transform duration-700 ease-expo hover:scale-[1.01]"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-costa-espresso-deep/35 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-2 lg:py-6">
            <p className="text-label mb-7 sm:mb-8">{label}</p>

            <h2 className="heading-section max-w-md">
              {heading.split('\n').map((line, i) => (
                <span key={line}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
            </h2>

            <p className="text-body mt-10 max-w-[26rem] text-costa-cream/70 sm:mt-12">{paragraph}</p>

            {/* Statistics */}
            <div className="divider-subtle mt-16 grid grid-cols-1 gap-y-6 pt-12 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 sm:pt-14 lg:mt-24">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={
                    index > 0
                      ? 'border-t border-costa-cream/10 pt-6 sm:border-t-0 sm:border-l sm:pl-6 sm:pt-0 sm:pl-8'
                      : ''
                  }
                >
                  <p className="stat-value">{stat.value}</p>
                  <p className="stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
