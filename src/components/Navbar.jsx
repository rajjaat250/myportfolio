import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'

const navLinks = [
  { label: 'About',        href: '#about'        },
  { label: 'Skills',       href: '#skills'       },
  { label: 'Experience',   href: '#experience'   },
  { label: 'Projects',     href: '#projects'     },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact',      href: '#contact'      },
]

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* ── Main bar ────────────────────────────────────────── */}
      <motion.header
        initial={{ y: -56, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[rgba(255,255,255,0.85)] dark:bg-[rgba(0,0,0,0.82)] backdrop-blur-2xl border-b border-black/[0.07] dark:border-white/[0.07]'
            : 'bg-transparent'
        }`}
      >
        {/* Apple Nav height: 44px */}
        <nav className="section-container h-11 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => go(e, '#hero')}
            className="text-[15px] font-semibold text-text-primary tracking-[-0.02em] hover:text-accent-blue transition-colors duration-200 select-none"
          >
            Raj Chaudhary
          </a>

          {/* Desktop links — normal weight, small, spaced out */}
          <ul className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => go(e, link.href)}
                  className="text-[13px] font-normal text-text-secondary hover:text-text-primary transition-colors duration-200 tracking-[-0.005em]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Controls */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle colour scheme"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-pill-bg border border-pill-border text-text-muted hover:text-text-primary transition-all duration-200 cursor-pointer"
            >
              {darkMode
                ? <Sun  size={14} className="text-accent-orange" />
                : <Moon size={14} className="text-accent-purple" />
              }
            </button>

            {/* Hamburger */}
            <button
              className="md:hidden w-8 h-8 flex items-center justify-center rounded-full bg-pill-bg border border-pill-border text-text-muted hover:text-text-primary transition-colors cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Open menu"
            >
              {menuOpen ? <X size={14} /> : <Menu size={14} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* ── Mobile drawer ─────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0  }}
            exit={{   opacity: 0, y: -8  }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="fixed top-11 left-0 right-0 z-40 bg-[rgba(255,255,255,0.94)] dark:bg-[rgba(0,0,0,0.9)] backdrop-blur-2xl border-b border-black/[0.07] dark:border-white/[0.07] md:hidden"
          >
            <ul className="section-container flex flex-col py-4 gap-0.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => go(e, link.href)}
                    className="block py-2.5 text-[15px] font-medium text-text-primary hover:text-accent-blue transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
