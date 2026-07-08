import { useEffect, useRef, useState } from 'react'

function Lightbox({ open, images, startIndex = 0, onClose }) {
  const closeBtnRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(startIndex)

  useEffect(() => {
    if (!open) return

    setActiveIndex(startIndex)

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft')
        setActiveIndex((i) => (i - 1 + images.length) % images.length)
      if (e.key === 'ArrowRight')
        setActiveIndex((i) => (i + 1) % images.length)
    }

    document.addEventListener('keydown', onKeyDown)
    closeBtnRef.current?.focus()

    return () => {
      document.body.style.overflow = prevOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open, startIndex, images.length, onClose])

  if (!open) return null

  const active = images[activeIndex]

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="relative w-full max-w-4xl overflow-hidden rounded-[2px] border border-white/[0.08] bg-costa-espresso-deep">
        <div className="flex items-center justify-between gap-4 border-b border-white/[0.06] px-4 py-3">
          <p className="text-[11px] font-light uppercase tracking-[0.22em] text-white/45">
            {activeIndex + 1} / {images.length}
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-[2px] border border-white/[0.10] bg-white/[0.04] text-white/80 transition-colors duration-300 hover:bg-white/[0.08]"
              onClick={() =>
                setActiveIndex((i) => (i - 1 + images.length) % images.length)
              }
              aria-label="Previous image"
            >
              ←
            </button>
            <button
              type="button"
              ref={closeBtnRef}
              className="inline-flex h-9 w-9 items-center justify-center rounded-[2px] border border-white/[0.10] bg-white/[0.04] text-white/80 transition-colors duration-300 hover:bg-white/[0.08]"
              onClick={onClose}
              aria-label="Close preview"
            >
              ✕
            </button>
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-[2px] border border-white/[0.10] bg-white/[0.04] text-white/80 transition-colors duration-300 hover:bg-white/[0.08]"
              onClick={() => setActiveIndex((i) => (i + 1) % images.length)}
              aria-label="Next image"
            >
              →
            </button>
          </div>
        </div>

        <div className="relative">
          <img
            src={active.src}
            alt={active.alt}
            className="max-h-[70dvh] w-full object-contain bg-costa-espresso-deep"
          />
        </div>
      </div>
    </div>
  )
}

export default Lightbox

