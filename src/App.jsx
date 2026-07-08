import { Analytics } from '@vercel/analytics/react'
import Navbar      from './components/Navbar.jsx'
import Footer      from './components/Footer.jsx'
import Hero        from './sections/Hero.jsx'
import Process     from './sections/Process.jsx'
import Menu        from './sections/Menu.jsx'
import Gallery     from './sections/Gallery.jsx'
import Community   from './sections/Community.jsx'
import Testimonials from './sections/Testimonials.jsx'
import PreOrder    from './sections/PreOrder.jsx'

function App() {
  return (
    <div className="min-h-screen bg-dough-canvas">
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
  )
}

export default App
