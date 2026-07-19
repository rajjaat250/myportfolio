import { motion } from 'framer-motion'
import {

  Globe, Server, Wrench, Brain,
  FileCode, Database, GitBranch, Cpu,
  Monitor, Terminal, Cloud, Zap, Network, Shield,
} from 'lucide-react'

/*
  Apple Bento Grid — 3-column asymmetric layout:

  Desktop (md+):
  ┌──────────────────────┬──────────┐
  │  Frontend  (span 2)  │ Backend  │
  ├──────────┬───────────────────────┤
  │  Tools   │  CS Concepts (span 2) │
  └──────────┴───────────────────────┘

  Mobile: single column, natural order.
*/

const bento = [
  {
    id: 'languages',
    label: 'Languages',
    icon: FileCode,
    accent: 'var(--accent-blue)',
    span: 2,
    desc: 'Programming languages used to build software solutions.',
    skills: [
      { name: 'Python',       icon: Terminal },
      { name: 'C/C++',        icon: FileCode },
      { name: 'JavaScript',   icon: FileCode },
      { name: 'HTML/CSS',     icon: Globe },
      { name: 'Bash',         icon: Terminal },
    ],
  },
  {
    id: 'backend',
    label: 'Frameworks',
    icon: Server,
    accent: 'var(--accent-green)',
    span: 1,
    desc: 'Backend architectures and RESTful services.',
    skills: [
      { name: 'Django',      icon: Server },
      { name: 'DRF',         icon: Database },
      { name: 'React.js',    icon: Globe },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Cloud',
    icon: Cloud,
    accent: 'var(--accent-orange)',
    span: 1,
    desc: 'Development, deployment, and cloud infrastructure.',
    skills: [
      { name: 'Git & GitHub', icon: GitBranch },
      { name: 'Firebase',     icon: Cloud },
      { name: 'AWS (S3)',     icon: Cloud },
      { name: 'Supabase',     icon: Database },
      { name: 'Docker',       icon: Wrench },
      { name: 'Linux',        icon: Terminal },
      { name: 'Postman',      icon: Zap },
      { name: 'Vercel',       icon: Cloud },
    ],
  },
  {
    id: 'concepts',
    label: 'Coursework',
    icon: Brain,
    accent: 'var(--accent-purple)',
    span: 2,
    desc: 'Academic foundations in computer science.',
    skills: [
      { name: 'Operating Systems',   icon: Cpu },
      { name: 'Computer Networks',   icon: Network },
      { name: 'DBMS',                icon: Database },
      { name: 'OOP',                 icon: Brain },
    ],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const itemVariants = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

function BentoCard({ card }) {
  const GroupIcon = card.icon
  return (
    <motion.div
      variants={itemVariants}
      className={`premium-card p-7 flex flex-col gap-6 ${
        card.span === 2 ? 'md:col-span-2' : 'md:col-span-1'
      }`}
    >
      {/* Icon + label + description */}
      <div className="flex flex-col gap-3">
        <div
          className="w-10 h-10 rounded-2xl flex items-center justify-center border border-border-card bg-pill-bg shrink-0"
        >
          <GroupIcon size={18} style={{ color: card.accent }} />
        </div>

        <div>
          <h3
            className="text-[17px] font-semibold text-text-primary tracking-[-0.02em] mb-1"
          >
            {card.label}
          </h3>
          <p className="text-[13px] text-text-secondary leading-snug">
            {card.desc}
          </p>
        </div>
      </div>

      {/* Skill pills — inherit full card width, wrap naturally */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {card.skills.map((s) => (
          <span
            key={s.name}
            className="px-3 py-1.5 rounded-full bg-pill-bg border border-pill-border text-[12px] font-medium text-text-secondary tracking-[-0.005em] whitespace-nowrap"
          >
            {s.name}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <div className="py-28 bg-bg-main relative overflow-hidden transition-colors duration-300 min-h-screen">
      {/* Subtle ambient glow — left side */}
      <div
        className="absolute left-0 bottom-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at bottom-left, rgba(0,113,227,0.05) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="section-container">

        {/* ── Section header ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-text-muted mb-4">
            Tech Stack
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary tracking-[-0.03em] mb-4">
            Skills & Expertise
          </h2>
          <p className="text-[15px] text-text-secondary max-w-xs mx-auto leading-relaxed">
            Technologies and engineering concepts I use to build
            scalable, maintainable applications.
          </p>
        </motion.div>

        {/* ── Bento grid ─────────────────────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {bento.map((card) => (
            <BentoCard key={card.id} card={card} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}
