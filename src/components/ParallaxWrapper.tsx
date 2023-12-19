'use client'

import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useLayoutEffect, useRef, useState } from 'react'

export default function ParallaxWrapper({
  flipped = false,
  intensity = 50,
  children,
}: {
  flipped?: boolean
  intensity?: number
  children: React.ReactNode
}) {
  const { scrollY } = useScroll()
  const ref = useRef<any>()
  const [offsetTop, setOffsetTop] = useState(0)

  useLayoutEffect(() => {
    if (!ref.current) return undefined
    setOffsetTop(ref.current.offsetTop)
  }, [ref])

  const direction = flipped ? 1 : -1

  const y = useSpring(
    useTransform(
      scrollY,
      [offsetTop - intensity * 5, offsetTop + intensity * 10],
      ['0%', `${direction * intensity}%`]
    )
  )

  return (
    <motion.div ref={ref} initial={{ y: 0 }} style={{ y }}>
      {children}
    </motion.div>
  )
}
