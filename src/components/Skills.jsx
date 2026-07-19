import { motion } from 'framer-motion'
import {
  Globe, Server, Wrench, Brain,
  FileCode, Database, GitBranch, Cpu,
  Monitor, Terminal, Cloud, Zap, Network, Shield,
} from 'lucide-react'

const skillCategories = [
  {
    id: 'languages',
    label: 'Languages',
    icon: FileCode,
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
    id: 'frameworks',
    label: 'Frameworks',
    icon: Server,
    desc: 'Backend architectures and frontend libraries.',
    skills: [
      { name: 'Django',      icon: Server },
      { name: 'Django REST', icon: Database },
      { name: 'React.js',    icon: Globe },
      { name: 'Tailwind CSS',icon: Globe },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Cloud',
    icon: Cloud,
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
    id: 'coursework',
    label: 'Coursework',
    icon: Brain,
    desc: 'Academic foundations in computer science.',
    skills: [
      { name: 'Operating Systems',   icon: Cpu },
      { name: 'Computer Networks',   icon: Network },
      { name: 'DBMS',                icon: Database },
      { name: 'OOP',                 icon: Brain },
    ],
  },
]

export default function Skills() {
  return (
    <div className="py-32 bg-white min-h-screen border-t border-slate-200">
      <div className="section-container max-w-6xl">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-100 mb-6">
            <span className="text-xs font-bold tracking-widest uppercase text-brand-700">Tech Stack</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Skills & <span className="text-brand-600">Expertise</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Technologies and engineering concepts I use to build scalable, maintainable applications.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="modern-card p-8 flex flex-col h-full"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-200 text-brand-600">
                  <category.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {category.label}
                  </h3>
                  <p className="text-sm text-slate-600 leading-snug">
                    {category.desc}
                  </p>
                </div>
              </div>

              <div className="mt-auto pt-6 border-t border-slate-100">
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((s) => (
                    <div
                      key={s.name}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-sm font-medium text-slate-700"
                    >
                      <s.icon size={14} className="text-slate-400" />
                      {s.name}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
