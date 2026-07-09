import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Preloader({ onComplete }) {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    // Wait a bit before starting the animation
    const timer = setTimeout(() => {
      setIsReady(true)
    }, 200)
    
    // Total preloader duration
    const completeTimer = setTimeout(() => {
      onComplete()
    }, 2800)

    return () => {
      clearTimeout(timer)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ 
        y: '-100%', 
        transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dough-canvas"
    >
      <div className="flex flex-col items-center gap-6 overflow-hidden">
        {/* We use a custom SVG here that we can animate with Framer Motion, 
            rather than the static WheatMark from Navbar, to get the path drawing effect. */}
        <motion.svg
          width="24"
          height="32"
          viewBox="0 0 24 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-dough-espresso"
        >
          <motion.path
            d="M12 28V20M12 20C12 20 6 18 6 12C6 6 12 4 12 4C12 4 18 6 18 12C18 18 12 20 12 20ZM12 20C9.5 22 9.5 25 12 28C14.5 25 14.5 22 12 20Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isReady ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        </motion.svg>
        
        <div className="overflow-hidden">
          <motion.span
            initial={{ y: '100%', opacity: 0 }}
            animate={isReady ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
            className="block font-serif text-lg tracking-[0.2em] text-dough-espresso sm:text-xl"
          >
            SIR DOUGH
          </motion.span>
        </div>
      </div>
    </motion.div>
  )
}

export default Preloader
