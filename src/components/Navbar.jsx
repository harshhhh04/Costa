import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Community', href: '#community' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,backdrop-filter,border-color,box-shadow,transform] duration-300 ${
        isScrolled || isMenuOpen ? 'navbar-shell-scrolled' : 'navbar-shell'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:py-[1.125rem]">
        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2.5"
          onClick={closeMenu}
        >
          <span
            className="inline-block h-4 w-2.5 rounded-[1px] border border-costa-caramel/50 bg-costa-espresso-deep/40 transition-colors duration-300 group-hover:border-costa-caramel/80"
            aria-hidden="true"
          />
          <span className="font-serif text-lg tracking-[0.18em] text-costa-cream/95 sm:text-xl">
            COSTA
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 lg:flex xl:gap-9">
          <ul className="flex items-center gap-6 xl:gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="group nav-link">
                  {link.label}
                  <span className="nav-link-line" />
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="btn-primary-sm">
            Visit Us
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
            className={`block h-px w-5 bg-costa-cream/90 transition-all duration-300 ${
              isMenuOpen ? 'translate-y-[3px] rotate-45' : ''
            }`}
          />
          <span
            className={`block h-px w-5 bg-costa-cream/90 transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-px w-5 bg-costa-cream/90 transition-all duration-300 ${
              isMenuOpen ? '-translate-y-[3px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-expo lg:hidden ${
          isMenuOpen ? 'max-h-[100dvh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="menu-fade-in divider-subtle bg-costa-espresso-deep/95 px-6 pb-10 pt-3 backdrop-blur-md">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block border-b border-costa-cream/[0.04] py-4 text-[11px] font-light uppercase tracking-[0.22em] text-costa-cream/60 transition-colors duration-300 hover:text-costa-cream/90"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" onClick={closeMenu} className="btn-primary mt-8 w-full">
            Visit Us
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
