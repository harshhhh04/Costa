import aboutImage from '../../assets/images/coffee-about.jpeg'

const STATS = [
  { value: '4.9', label: 'Guest Love' },
  { value: 'Wi-Fi', label: 'Workspace Ready' },
  { value: 'Local', label: 'Community First' },
]

const DEFAULTS = {
  image: aboutImage,
  imageAlt: 'Warm Costa Coffee interior with natural light',
  label: 'A Café Made for Your Day',
  heading: 'Where Coffee\nFeels Like Home',
  paragraph:
    'From fresh espresso to soft pastries, every detail is crafted for comfort. Stay for a meeting, settle in with a book, or catch up with friends in a warm, welcoming space.',
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
                className="h-full w-full object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"
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

            <p className="text-body mt-10 max-w-[22rem] sm:mt-12">{paragraph}</p>

            {/* Statistics */}
            <div className="divider-subtle mt-16 grid grid-cols-3 gap-6 pt-12 sm:mt-20 sm:gap-8 sm:pt-14 lg:mt-24">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={index > 0 ? 'divider-vertical pl-6 sm:pl-8' : ''}
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
