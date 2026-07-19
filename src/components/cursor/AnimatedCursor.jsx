import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useMousePosition } from '../../hooks/useMousePosition'

export default function AnimatedCursor() {
  const { x, y } = useMousePosition()
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.cursor-hover')
      ) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    window.addEventListener('mouseover', handleMouseOver)
    return () => window.removeEventListener('mouseover', handleMouseOver)
  }, [])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/30 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        animate={{
          x: x - 16,
          y: y - 16,
          scale: isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0)',
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-white pointer-events-none z-[10000] mix-blend-difference hidden md:block"
        animate={{
          x: x - 3,
          y: y - 3,
          opacity: isHovered ? 0 : 1
        }}
        transition={{
          type: 'tween',
          ease: 'linear',
          duration: 0.01,
        }}
      />
    </>
  )
}
