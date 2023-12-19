'use client'

import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function RevealWrapper({
  duration = 0.3,
  delay = 0,
  children,
}: {
  duration?: number
  delay?: number
  children: React.ReactNode
}) {
  const ref = useRef<any>()
  const isInView = useInView(ref)
  const revealControl = useAnimation()

  useEffect(() => {
    if (isInView) {
      revealControl.start({
        opacity: 1,
        y: 0,
      })
    }
  }, [revealControl, isInView])

  return (
    <div ref={ref} className='relative overflow-hidden'>
      <motion.div
        initial={{ opacity: 0, y: '100%' }}
        animate={revealControl}
        transition={{ delay, duration, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </div>
  )
}
