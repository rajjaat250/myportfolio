import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const words = ['Full Stack Developer', 'Software Engineer', 'Backend Developer']

const up = (delay = 0) => ({
  initial:    { opacity: 0, y: 18 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Hero() {
  const scrollToAbout = () =>
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })

  /* ── Typing effect ────────────────────────────────────── */
  const [wordIdx, setWordIdx]   = useState(0)
  const [charIdx, setCharIdx]   = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIdx]

    if (!deleting && charIdx === word.length + 1) {
      const t = setTimeout(() => setDeleting(true), 2600)
      return () => clearTimeout(t)
    }
    if (deleting && charIdx === 0) {
      const t = setTimeout(() => {
        setDeleting(false)
        setWordIdx((p) => (p + 1) % words.length)
      }, 480)
      return () => clearTimeout(t)
    }

    const t = setTimeout(
      () => setCharIdx((p) => p + (deleting ? -1 : 1)),
      deleting ? 28 : 55,
    )
    return () => clearTimeout(t)
  }, [charIdx, deleting, wordIdx])

  const displayText = words[wordIdx].substring(0, charIdx)

  /* ── Render ───────────────────────────────────────────── */
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-bg-main transition-colors duration-300"
    >
      {/* Ambient glow — dead centre, non-interactive */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(0,113,227,0.05) 0%, transparent 65%)',
          }}
        />
      </div>

      {/* Content island */}
      <div className="section-container relative z-10 flex flex-col items-center text-center pt-16 pb-20 gap-0">

        {/* Availability badge */}
        <motion.div {...up(0.1)} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pill-bg border border-pill-border text-[11px] font-semibold text-text-secondary tracking-[0.06em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse shrink-0" />
            Open to Internships
          </span>
        </motion.div>

        {/*
          Apple display headline — font size driven by viewport width
          so it never wraps awkwardly and always feels enormous.
        */}
        <motion.h1
          {...up(0.18)}
          className="font-black leading-none mb-6 select-none bg-gradient-to-b from-text-primary to-text-muted bg-clip-text text-transparent"
          style={{
            fontSize: 'clamp(52px, 11vw, 120px)',
            letterSpacing: '-0.04em',
          }}
        >
          RAJ CHAUDHARY
        </motion.h1>

        {/* Typing subtitle */}
        <motion.p
          {...up(0.30)}
          className="text-[18px] md:text-[22px] font-medium text-text-secondary tracking-[-0.01em] h-9 flex items-center justify-center mb-5"
        >
          <span>{displayText}</span>
          <span className="inline-block w-0.5 h-[20px] bg-accent-blue ml-1 animate-blink" />
        </motion.p>

        {/* Value proposition — concise, Apple-muted */}
        <motion.p
          {...up(0.40)}
          className="text-[15px] md:text-base text-text-muted max-w-sm leading-relaxed mb-12"
        >
          Architecting backend systems and crafting high-performance
          interactive interfaces.
        </motion.p>

        {/*
          CTA row — Apple pattern:
          • ONE solid pill button (primary action)
          • Text links with → for secondary actions
        */}
        <motion.div
          {...up(0.50)}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
        >
          {/* Primary pill */}
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-text-primary text-bg-main text-[14px] font-semibold hover:opacity-80 transition-opacity duration-200 select-none"
          >
            Download Resume
          </a>

          {/* Arrow text links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/rajjaat250"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] font-medium text-accent-blue hover:underline underline-offset-2 transition-all"
            >
              GitHub&nbsp;→
            </a>
            <a
              href="https://www.linkedin.com/in/raj-chaudhary-15213630b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] font-medium text-accent-blue hover:underline underline-offset-2 transition-all"
            >
              LinkedIn&nbsp;→
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue — absolute bottom centre */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-text-muted hover:text-text-secondary transition-colors cursor-pointer"
        aria-label="Scroll down"
      >
        <span className="text-[9px] font-semibold tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
        >
          <ArrowDown size={13} />
        </motion.div>
      </motion.button>
    </section>
  )
}
