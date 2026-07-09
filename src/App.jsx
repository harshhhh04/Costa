import { useEffect, useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
import Lenis from 'lenis'
import { AnimatePresence } from 'framer-motion'

import Navbar      from './components/Navbar.jsx'
import Footer      from './components/Footer.jsx'
import Preloader   from './components/Preloader.jsx'

import Hero        from './sections/Hero.jsx'
import Process     from './sections/Process.jsx'
import Menu        from './sections/Menu.jsx'
import Gallery     from './sections/Gallery.jsx'
import Community   from './sections/Community.jsx'
import Testimonials from './sections/Testimonials.jsx'
import PreOrder    from './sections/PreOrder.jsx'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Initialize smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Stop scrolling while preloader is active
    if (isLoading) {
      lenis.stop()
    } else {
      lenis.start()
    }

    return () => {
      lenis.destroy()
    }
  }, [isLoading])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-dough-canvas">
        {/* Tactile Texture Layer */}
        <div className="bg-noise pointer-events-none fixed inset-0 z-[200]"></div>

        <Navbar />

        <main>
          <Hero />
          <Process />
          <Menu />
          <Gallery />
          <Community />
          <Testimonials />
          <PreOrder />
        </main>

        <Footer />
        <Analytics />
      </div>
    </>
  )
}

export default App
