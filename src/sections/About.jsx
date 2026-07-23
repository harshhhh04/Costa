import aboutImage from '../../assets/images/1.jpeg'

const STATS = [
  { value: '7:30 AM - 11 PM', label: 'Open Daily' },
  { value: '4.0', label: 'Google Rating' },
  { value: 'Sector 7C', label: 'Local Favorite' },
]

const DEFAULTS = {
  image: aboutImage,
  imageAlt: 'Coffee cup on a wooden table with interior ambience',
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
      className="scroll-mt-24 section-padding relative bg-dough-crust"
    >
      <div className="container-wide">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20 xl:gap-28">
          {/* Image */}
          <div className="relative lg:pr-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[4px] sm:aspect-[3/4]">
              <img
                src={image}
                alt={imageAlt}
                className="h-full w-full object-cover transition-transform duration-700 ease-expo hover:scale-[1.01]"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-dough-espresso/35 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-2 lg:py-6">
            <p className="text-label mb-7 sm:mb-8">The Space</p>

            <h2 className="heading-section max-w-md">
              Cozy, not rustic. <br />
              Warm, <span className="italic text-dough-oak font-light">not loud.</span>
            </h2>

            <p className="text-body mt-10 max-w-[26rem] text-dough-canvas/70 sm:mt-12">{paragraph}</p>

            {/* Warm narrative sign-off instead of SaaS stats */}
            <div className="divider-subtle mt-12 pt-8 sm:mt-14">
              <p className="text-editorial max-w-[26rem]">
                Open daily &nbsp;·&nbsp; 7:30 AM - 11 PM &nbsp;·&nbsp; Sector 7C, Chandigarh
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
