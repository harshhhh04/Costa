import { useState } from 'react'
import { MENU_CATEGORIES, MENU_SECTION } from '../data/menu.js'
import { useInView } from '../hooks/useInView.js'

function MenuItemCard({ item }) {
  return (
    <article className="group flex gap-5 border-b border-dough-charcoal/[0.06] pb-7 transition-all duration-500 ease-expo hover:-translate-y-0.5">
      {/* Image */}
      <div className="relative h-[4.5rem] w-[4.5rem] flex-shrink-0 overflow-hidden sm:h-20 sm:w-20">
        <img
          src={item.image}
          alt={item.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-expo group-hover:scale-[1.07]"
        />
      </div>

      {/* Copy */}
      <div className="flex-grow space-y-2 pt-0.5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-serif text-[1.1rem] font-normal leading-[1.25] text-dough-espresso">
            {item.name}
          </h3>
          {/* Dashed leader */}
          <span className="mt-1.5 hidden h-px flex-grow border-b border-dashed border-dough-charcoal/10 sm:block" aria-hidden="true" />
          <p className="font-serif text-base font-normal text-dough-terra shrink-0">
            {item.price}
          </p>
        </div>
        <p className="text-[12px] font-light leading-[1.75] text-dough-charcoal/55">
          {item.description}
        </p>
      </div>
    </article>
  )
}

function Menu() {
  const [activeCategoryId, setActiveCategoryId] = useState(
    MENU_CATEGORIES[0]?.id ?? 'bread',
  )

  const activeCategory =
    MENU_CATEGORIES.find((c) => c.id === activeCategoryId) ?? MENU_CATEGORIES[0]

  const { ref: headerRef, isVisible: headerVisible } = useInView()
  const { ref: contentRef, isVisible: contentVisible } = useInView(0.1)

  return (
    <section
      id="menu"
      className="scroll-mt-24 section-padding relative bg-dough-canvas"
    >
      <div className="container-wide">

        {/* Header */}
        <header
          ref={headerRef}
          className={`scroll-reveal mb-12 text-center sm:mb-16 ${
            headerVisible ? 'is-visible' : ''
          }`}
        >
          <p className="text-label mb-7">{MENU_SECTION.label}</p>
          <h2 className="heading-section">
            {MENU_SECTION.heading.split('\n').map((line, i) => (
              <span key={i}>
                {i > 0 && (
                  <>
                    {' '}
                    <span className="italic text-dough-terra">{line}</span>
                  </>
                )}
                {i === 0 && line}
              </span>
            ))}
          </h2>
          <p className="text-body mx-auto mt-8 max-w-sm sm:mt-10">
            {MENU_SECTION.subheading}
          </p>
        </header>

        <div
          ref={contentRef}
          className={`scroll-reveal ${contentVisible ? 'is-visible' : ''}`}
        >
          {/* Category tabs — like a printed menu */}
          <div className="mb-12 overflow-x-auto pb-2 no-scrollbar">
            <div
              role="tablist"
              aria-label="Menu categories"
              className="flex min-w-max items-center justify-center gap-1"
            >
              {MENU_CATEGORIES.map((category) => {
                const selected = category.id === activeCategory.id
                return (
                  <button
                    key={category.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActiveCategoryId(category.id)}
                    className={`whitespace-nowrap px-5 py-2.5 text-[11px] font-normal uppercase tracking-[0.22em] transition-all duration-400 ease-expo border-b-2 ${
                      selected
                        ? 'border-dough-terra text-dough-espresso'
                        : 'border-transparent text-dough-charcoal/45 hover:text-dough-espresso'
                    }`}
                  >
                    {category.label}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Menu items — 3 columns on large, 2 on medium */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {activeCategory.items.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>

          {/* Reserve CTA below menu */}
          <div className="divider-subtle mt-14 pt-10 text-center sm:mt-16">
            <p className="text-editorial mb-6">
              Reserve by 9 PM for tomorrow morning's bake.
            </p>
            <a href="#preorder" className="btn-primary inline-flex">
              Reserve Tomorrow's Loaf
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu
