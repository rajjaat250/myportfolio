import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
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
    id: 'frontend',
    label: 'Frontend',
    icon: Globe,
    accent: 'var(--accent-blue)',
    span: 2,              // col-span-2 on md+
    desc: 'Building interactive, accessible interfaces with modern web technologies.',
    skills: [
      { name: 'React.js',       icon: FileCode },
      { name: 'JavaScript ES6+',icon: FileCode },
      { name: 'Tailwind CSS',   icon: Zap      },
      { name: 'HTML5 & CSS3',   icon: Globe    },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: Server,
    accent: 'var(--accent-green)',
    span: 1,
    desc: 'Scalable APIs, data models, and server-side logic.',
    skills: [
      { name: 'Django',      icon: Server   },
      { name: 'Python',      icon: Terminal },
      { name: 'DRF & SQL',   icon: Database },
      { name: 'REST APIs',   icon: Database },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & DevOps',
    icon: Wrench,
    accent: 'var(--accent-orange)',
    span: 1,
    desc: 'Development workflow and deployment pipelines.',
    skills: [
      { name: 'Git & GitHub', icon: GitBranch },
      { name: 'Firebase',     icon: Cloud     },
      { name: 'AI Studio',    icon: Brain     },
      { name: 'Vercel',       icon: Cloud     },
    ],
  },
  {
    id: 'concepts',
    label: 'CS Concepts',
    icon: Brain,
    accent: 'var(--accent-purple)',
    span: 2,
    desc: 'Strong theoretical foundation across core computer science disciplines.',
    skills: [
      { name: 'Object-Oriented Programming', icon: Brain   },
      { name: 'Operating Systems',           icon: Cpu     },
      { name: 'Computer Networks',           icon: Network },
      { name: 'Cyber Security',              icon: Shield  },
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
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="skills"
      className="py-28 bg-bg-main relative overflow-hidden transition-colors duration-300"
    >
      {/* Subtle ambient glow — left side */}
      <div
        className="absolute left-0 bottom-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at bottom-left, rgba(0,113,227,0.05) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="section-container" ref={ref}>

        {/* ── Section header ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
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
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {bento.map((card) => (
            <BentoCard key={card.id} card={card} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
