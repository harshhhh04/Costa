import { useState } from 'react'
import Lightbox from '../components/Lightbox.jsx'
import { GALLERY_IMAGES, GALLERY_SECTION } from '../data/gallery.js'
import { useInView } from '../hooks/useInView.js'

function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [startIndex, setStartIndex] = useState(0)

  const { ref: headerRef, isVisible: headerVisible } = useInView()
  const { ref: gridRef, isVisible: gridVisible } = useInView(0.1)

  return (
    <section
      id="gallery"
      className="scroll-mt-24 section-padding relative bg-costa-espresso-deep"
    >
      <div className="container-wide">
        <header
          ref={headerRef}
          className={`scroll-reveal mb-10 max-w-2xl text-center sm:mb-14 ${
            headerVisible ? 'is-visible' : ''
          }`}
        >
          <p className="text-label mb-7">{GALLERY_SECTION.label}</p>
          <h2 className="heading-section">{GALLERY_SECTION.heading}</h2>
          <p className="text-body mx-auto mt-8 max-w-md sm:mt-10">
            {GALLERY_SECTION.subheading}
          </p>
        </header>

        <div
          ref={gridRef}
          className={`scroll-reveal ${gridVisible ? 'is-visible' : ''}`}
        >
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-6">
            {GALLERY_IMAGES.map((img, idx) => (
              <button
                key={img.id}
                type="button"
                onClick={() => {
                  setStartIndex(idx)
                  setLightboxOpen(true)
                }}
                className="group relative overflow-hidden rounded-[2px] border border-white/[0.06] bg-white/[0.01] text-left transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.10]"
                aria-label={`Open image: ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-60 w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.16)_0%,rgba(0,0,0,0)_55%)]" />
                <div className="absolute inset-x-0 bottom-0 px-4 py-3">
                  <p className="text-[10px] font-light uppercase tracking-[0.22em] text-white/0 transition-colors duration-300 group-hover:text-white/55">
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

