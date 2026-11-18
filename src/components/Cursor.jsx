import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const [active, setActive] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 260, damping: 26, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 260, damping: 26, mass: 0.4 })

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return
    setEnabled(true)
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setActive(!!e.target.closest?.('a, button, [role="tab"], [data-hover]'))
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => window.removeEventListener('pointermove', move)
  }, [x, y])

  if (!enabled) return null
  return (
    <motion.div
      aria-hidden="true"
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[90]"
    >
      <motion.div
        animate={{ scale: active ? 2.4 : 1, opacity: active ? 0.9 : 0.6 }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        className="-ml-3 -mt-3 h-6 w-6 rounded-full border border-lilac bg-lilac/10"
      />
    </motion.div>
  )
}
