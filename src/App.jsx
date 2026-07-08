import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import About from './sections/About.jsx'
import Menu from './sections/Menu.jsx'
import Gallery from './sections/Gallery.jsx'
import Community from './sections/Community.jsx'
import Testimonials from './sections/Testimonials.jsx'
import Contact from './sections/Contact.jsx'
import Hero from './sections/Hero.jsx'

function App() {
  return (
    <div className="min-h-screen bg-costa-espresso-deep">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Community />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <Analytics />
    </div>
  )
}

export default App
