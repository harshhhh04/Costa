import React from 'react'
import { motion } from 'framer-motion'

export default function Marquee() {
  const items = [
    'TIME', '✦', 'FLOUR', '✦', 'WATER', '✦', 'PATIENCE', '✦',
    'TIME', '✦', 'FLOUR', '✦', 'WATER', '✦', 'PATIENCE', '✦'
  ]

  return (
    <div className="relative flex w-full overflow-hidden border-y border-dough-chalk/[0.05] bg-dough-espresso py-4 lg:py-6">
      <motion.div
        className="flex flex-nowrap whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 20
        }}
      >
        {/* We render the sequence twice to create the seamless loop */}
        <div className="flex shrink-0 items-center gap-6 px-3 lg:gap-12 lg:px-6">
          {items.map((item, i) => (
            <span
              key={`marquee-1-${i}`}
              className={`text-[10px] uppercase tracking-[0.2em] lg:text-xs ${
                item === '✦' ? 'text-dough-crust/50' : 'font-light text-dough-chalk/40'
              }`}
            >
              {item}
            </span>
          ))}
        </div>
        
        <div className="flex shrink-0 items-center gap-6 px-3 lg:gap-12 lg:px-6">
          {items.map((item, i) => (
            <span
              key={`marquee-2-${i}`}
              className={`text-[10px] uppercase tracking-[0.2em] lg:text-xs ${
                item === '✦' ? 'text-dough-crust/50' : 'font-light text-dough-chalk/40'
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
