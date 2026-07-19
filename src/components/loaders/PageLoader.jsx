import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function PageLoader() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setLoading(false), 500)
          return 100
        }
        return prev + Math.floor(Math.random() * 15) + 5
      })
    }, 150)

    return () => clearInterval(timer)
  }, [])

  if (!loading) return null

  return (
    <motion.div
      className="fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-bg-main"
      initial={{ y: 0 }}
      animate={{ y: loading ? 0 : '-100vh' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      exit={{ y: '-100vh' }}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 tracking-tight">
          {Math.min(progress, 100)}%
        </div>
        <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-white"
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>
      </div>
    </motion.div>
  )
}
