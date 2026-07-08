import { useState } from 'react'
import { MENU_CATEGORIES, MENU_SECTION } from '../data/menu.js'
import { useInView } from '../hooks/useInView.js'

function MenuItemCard({ item }) {
  return (
    <article className="group overflow-hidden rounded-[2px] border border-costa-cream/[0.05] bg-costa-cream/[0.01] transition-all duration-500 ease-expo hover:-translate-y-1 hover:border-costa-caramel/25 hover:bg-costa-cream/[0.02]">
      <div className="relative">
        <img
          src={item.image}
          alt={item.imageAlt}
          loading="lazy"
          className="h-44 w-full object-cover transition-transform duration-700 ease-expo group-hover:scale-[1.04]"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(243,239,230,0.06)_0%,rgba(0,0,0,0)_60%)]"
          aria-hidden="true"
        />
      </div>

      <div className="space-y-3 p-4.5 sm:p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-xl font-light text-costa-cream">
            {item.name}
          </h3>
          <p className="font-serif text-lg font-light text-costa-cream/90">
            {item.price}
          </p>
        </div>

        <p className="text-body text-costa-cream/60">{item.description}</p>
      </div>
    </article>
  )
}

function Menu() {
  const [activeCategoryId, setActiveCategoryId] = useState(
    MENU_CATEGORIES[0]?.id ?? 'hot-coffee',
  )

  const activeCategory =
    MENU_CATEGORIES.find((c) => c.id === activeCategoryId) ??
    MENU_CATEGORIES[0]

  const { ref: headerRef, isVisible: headerVisible } = useInView()
  const { ref: contentRef, isVisible: contentVisible } = useInView(0.1)

  return (
    <section
      id="menu"
      className="scroll-mt-24 section-padding relative bg-costa-espresso-deep"
    >
      <div className="container-wide">
        <header
          ref={headerRef}
          className={`scroll-reveal mb-10 max-w-2xl text-center sm:mb-14 ${
            headerVisible ? 'is-visible' : ''
          }`}
        >
          <p className="text-label mb-7">{MENU_SECTION.label}</p>
          <h2 className="heading-section">{MENU_SECTION.heading}</h2>
          <p className="text-body mx-auto mt-8 max-w-md sm:mt-10">
            {MENU_SECTION.subheading}
          </p>
        </header>

        <div
          ref={contentRef}
          className={`scroll-reveal ${contentVisible ? 'is-visible' : ''}`}
        >
          <div className="mb-10 overflow-x-auto pb-2 no-scrollbar">
            <div
              role="tablist"
              aria-label="Menu categories"
              className="flex min-w-max items-center gap-3"
            >
              {MENU_CATEGORIES.map((category) => {
                const selected = category.id === activeCategory.id

                return (
                  <button
                    key={category.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    className={`inline-flex whitespace-nowrap rounded-[2px] border px-4 py-2 text-[11px] font-light uppercase tracking-[0.22em] transition-all duration-500 ease-expo ${
                      selected
                        ? 'border-costa-caramel/60 bg-costa-cream/[0.05] text-costa-cream'
                        : 'border-costa-cream/[0.08] bg-costa-cream/[0.01] text-costa-cream/60 hover:text-costa-cream'
                    }`}
                    onClick={() => setActiveCategoryId(category.id)}
                  >
                    {category.label}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:gap-6 lg:grid-cols-3">
            {activeCategory.items.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu

