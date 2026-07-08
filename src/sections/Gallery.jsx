import { useState } from 'react'
import Lightbox from '../components/Lightbox.jsx'
import { GALLERY_IMAGES, GALLERY_SECTION } from '../data/gallery.js'
import { useInView } from '../hooks/useInView.js'

/* Editorial masonry — asymmetric sizing, intentional whitespace */
const getGridClasses = (idx) => {
  switch (idx) {
    case 0: return 'col-span-1 md:col-span-2 h-[18rem] sm:h-[22rem] md:h-[30rem]'  // wide hero
    case 1: return 'col-span-1              h-[18rem] sm:h-[22rem] md:h-[30rem]'   // tall companion
    case 2: return 'col-span-1              h-[18rem] sm:h-[20rem] md:h-[22rem]'   // shorter
    case 3: return 'col-span-1 md:col-span-2 h-[18rem] sm:h-[20rem] md:h-[22rem]'  // wide short
    case 4: return 'col-span-1              h-[18rem] sm:h-[22rem] md:h-[26rem]'   // medium
    case 5: return 'col-span-1              h-[18rem] sm:h-[22rem] md:h-[34rem]'   // tallest — anchor
    default: return 'col-span-1 h-64'
  }
}

function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [startIndex, setStartIndex]     = useState(0)

  const { ref: headerRef, isVisible: headerVisible } = useInView()
  const { ref: gridRef,   isVisible: gridVisible }   = useInView(0.08)

  return (
    <section
      id="gallery"
      className="scroll-mt-24 section-padding relative bg-dough-chalk"
    >
      <div className="container-wide">

        {/* Header */}
        <header
          ref={headerRef}
          className={`scroll-reveal mb-10 max-w-2xl text-center sm:mb-14 ${
            headerVisible ? 'is-visible' : ''
          }`}
        >
          <p className="text-label mb-7">{GALLERY_SECTION.label}</p>
          <h2 className="heading-section">
            {GALLERY_SECTION.heading.split('\n').map((line, i) => (
              <span key={i}>
                {i > 0 && (
                  <>
                    <br />
                    <span className="italic text-dough-terra">{line}</span>
                  </>
                )}
                {i === 0 && line}
              </span>
            ))}
          </h2>
          <p className="text-body mx-auto mt-8 max-w-md sm:mt-10">
            {GALLERY_SECTION.subheading}
          </p>
        </header>

        {/* Editorial grid */}
        <div
          ref={gridRef}
          className={`scroll-reveal ${gridVisible ? 'is-visible' : ''}`}
        >
          <div className="grid gap-3 grid-cols-1 md:grid-cols-3 sm:gap-4 lg:gap-5">
            {GALLERY_IMAGES.map((img, idx) => (
              <button
                key={img.id}
                type="button"
                onClick={() => {
                  setStartIndex(idx)
                  setLightboxOpen(true)
                }}
                className={`group gallery-item ${getGridClasses(idx)}`}
                aria-label={`Open image: ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-expo group-hover:scale-[1.04]"
                />
                {/* Hover caption */}
                <div className="absolute inset-0 bg-dough-espresso/0 transition-colors duration-500 ease-expo group-hover:bg-dough-espresso/20" />
                <div className="absolute inset-x-0 bottom-0 px-5 py-4 translate-y-1 opacity-0 transition-all duration-400 ease-expo group-hover:opacity-100 group-hover:translate-y-0">
                  <p className="text-[10px] font-light uppercase tracking-[0.22em] text-dough-chalk/85">
                    View
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <Lightbox
        open={lightboxOpen}
        images={GALLERY_IMAGES}
        startIndex={startIndex}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  )
}

export default Gallery
