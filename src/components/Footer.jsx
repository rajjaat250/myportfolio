import { Mail, Code2 } from 'lucide-react'
import GithubIcon from './GithubIcon'
import LinkedinIcon from './LinkedinIcon'

const links = [
  {
    href: 'https://github.com',
    label: 'GitHub',
    icon: GithubIcon,
  },
  {
    href: 'https://www.linkedin.com/in/raj-chaudhary-15213630b',
    label: 'LinkedIn',
    icon: LinkedinIcon,
  },
  {
    href: 'https://leetcode.com',
    label: 'LeetCode',
    icon: Code2,
  },
  {
    href: 'mailto:dhariwalraj37@gmail.com',
    label: 'Email',
    icon: Mail,
  },
]

export default function Footer() {
  return (
    <footer className="bg-bg-main border-t border-border-card text-text-primary py-14 px-6 relative overflow-hidden transition-colors duration-300">
      {/* Subtle background glow */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[300px] h-[150px] bg-accent-blue/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="section-container flex flex-col items-center gap-7 relative z-10">
        {/* Name */}
        <p className="text-[15px] font-bold tracking-tight text-text-primary">Raj Chaudhary</p>

        {/* Tagline */}
        <p className="text-[13px] text-text-secondary text-center max-w-xs font-medium">
          Full Stack Developer · B.Tech CSIT · AKGEC Ghaziabad
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          {links.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-2xl bg-pill-bg border border-pill-border flex items-center justify-center text-text-secondary hover:bg-accent-blue hover:text-white hover:border-accent-blue transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,113,227,0.25)]"
            >
              <Icon size={17} />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border-card" />

        {/* Copyright */}
        <p className="text-[12px] text-text-muted font-medium">
          © {new Date().getFullYear()} Raj Chaudhary. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
