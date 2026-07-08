import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { label: 'Home',        href: '#home'      },
  { label: 'The Process', href: '#process'   },
  { label: 'Menu',        href: '#menu'      },
  { label: 'Gallery',     href: '#gallery'   },
  { label: 'Community',   href: '#community' },
]

/* Wheat grain mark — the Sir Dough brand icon */
function WheatMark({ light }) {
  const stroke = light ? 'rgba(250,247,242,0.6)' : 'rgba(44,26,14,0.45)'
  const strokeThin = light ? 'rgba(250,247,242,0.35)' : 'rgba(44,26,14,0.25)'
  return (
    <svg
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill="none"
      aria-hidden="true"
      className="shrink-0 transition-transform duration-700 ease-expo group-hover:rotate-6"
    >
      <ellipse cx="8" cy="8" rx="4" ry="6.5" stroke={stroke} strokeWidth="1" fill="none" />
      <line x1="8" y1="14.5" x2="8" y2="20" stroke={strokeThin} strokeWidth="1" />
      <line x1="5" y1="11" x2="2" y2="14" stroke={strokeThin} strokeWidth="0.75" />
      <line x1="11" y1="11" x2="14" y2="14" stroke={strokeThin} strokeWidth="0.75" />
      <line x1="5.5" y1="8.5" x2="3" y2="11" stroke={strokeThin} strokeWidth="0.75" />
      <line x1="10.5" y1="8.5" x2="13" y2="11" stroke={strokeThin} strokeWidth="0.75" />
    </svg>
  )
}

function Navbar() {
  const [isScrolled, setIsScrolled]   = useState(false)
  const [isMenuOpen, setIsMenuOpen]   = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  /* Hero has a dark overlay → navbar needs light text at top */
  const overHero = !isScrolled && !isMenuOpen

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-400 ease-expo ${
        isScrolled || isMenuOpen ? 'navbar-shell-scrolled' : 'navbar-shell'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:py-[1.125rem]">

        {/* Logo */}
        <a href="#home" className="group flex items-center gap-2.5" onClick={closeMenu}>
          <WheatMark light={overHero} />
          <span
            className={`font-serif text-lg tracking-[0.2em] transition-colors duration-400 sm:text-xl ${
              overHero ? 'text-dough-chalk/95' : 'text-dough-espresso'
            }`}
          >
            SIR DOUGH
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 lg:flex xl:gap-9">
          <ul className="flex items-center gap-6 xl:gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`group nav-link ${
                    overHero
                      ? 'text-dough-chalk/60 hover:text-dough-chalk/95'
                      : 'text-dough-charcoal/55 hover:text-dough-espresso'
                  }`}
                >
                  {link.label}
                  <span className="nav-link-line" />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#preorder"
            className={overHero ? 'btn-primary-sm-light' : 'btn-primary-sm'}
          >
            Reserve
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          <span
            className={`block h-px w-5 transition-all duration-300 ${
              isMenuOpen
                ? 'translate-y-[3px] rotate-45 bg-dough-espresso/90'
                : overHero ? 'bg-dough-chalk/90' : 'bg-dough-espresso/90'
            }`}
          />
          <span
            className={`block h-px w-5 transition-all duration-300 ${
              isMenuOpen
                ? 'opacity-0 bg-dough-espresso/90'
                : overHero ? 'bg-dough-chalk/90' : 'bg-dough-espresso/90'
            }`}
          />
          <span
            className={`block h-px w-5 transition-all duration-300 ${
              isMenuOpen
                ? '-translate-y-[3px] -rotate-45 bg-dough-espresso/90'
                : overHero ? 'bg-dough-chalk/90' : 'bg-dough-espresso/90'
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-expo lg:hidden ${
          isMenuOpen ? 'max-h-[100dvh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="menu-fade-in border-t border-dough-linen bg-dough-chalk/97 px-6 pb-10 pt-3 backdrop-blur-md">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block border-b border-dough-linen py-4 text-[11px] font-light uppercase tracking-[0.22em] text-dough-charcoal/55 transition-colors duration-300 hover:text-dough-espresso"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#preorder" onClick={closeMenu} className="btn-primary mt-8 w-full">
            Reserve Tomorrow's Loaf
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
