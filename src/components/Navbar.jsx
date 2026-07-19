import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home',         href: '/'             },
  { label: 'Projects',     href: '/projects'     },
  { label: 'Skills',       href: '/skills'       },
  { label: 'Certificates', href: '/certificates' },
  { label: 'Contact',      href: '/contact'      },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -56, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[rgba(255,255,255,0.85)] backdrop-blur-2xl border-b border-black/[0.07]'
            : 'bg-transparent'
        }`}
      >
        <nav className="section-container h-11 flex items-center justify-between">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="text-[15px] font-bold text-text-primary tracking-[-0.02em] hover:text-accent-blue transition-colors duration-200 select-none"
          >
            Raj Chaudhary
          </Link>

          <ul className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={`text-[13px] font-medium transition-colors duration-200 tracking-[-0.005em] ${
                    location.pathname === link.href ? 'text-accent-blue' : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
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

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0  }}
            exit={{   opacity: 0, y: -8  }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="fixed top-11 left-0 right-0 z-40 bg-[rgba(255,255,255,0.94)] backdrop-blur-2xl border-b border-black/[0.07] md:hidden shadow-xl"
          >
            <ul className="section-container flex flex-col py-4 gap-0.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block py-2.5 text-[15px] transition-colors ${
                      location.pathname === link.href ? 'font-bold text-accent-blue' : 'font-medium text-text-primary hover:text-accent-blue'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
