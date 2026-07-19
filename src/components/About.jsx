import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { BookOpen, Code, GraduationCap, Laptop } from 'lucide-react'

const education = [
  {
    period: '2024 — 2028',
    degree: 'B.Tech in Computer Science & IT',
    school: 'Ajay Kumar Garg Engineering College',
    detail: '3rd Year · CGPA 7.86',
    icon: GraduationCap,
    active: true,
  },
  {
    period: '2022 — 2024',
    degree: 'Intermediate (Class XII)',
    school: 'LFA Inter College',
    detail: 'Score: 89.66%',
    icon: BookOpen,
    active: false,
  },
  {
    period: '2020 — 2022',
    degree: 'High School (Class X)',
    school: 'LFA Inter College',
    detail: 'Score: 86%',
    icon: Laptop,
    active: false,
  },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section id="about" className="py-32 bg-bg-section relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-blue/5 via-transparent to-transparent pointer-events-none" />

      <div className="section-container max-w-5xl" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col gap-20"
        >
          {/* Mission Statement Style Bio */}
          <div className="text-center max-w-3xl mx-auto">
            <motion.div variants={itemVariants} className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-pill-bg border border-pill-border mb-8">
              <Code size={16} className="text-accent-purple" />
              <span className="text-xs font-bold tracking-widest uppercase text-text-muted">About Me</span>
            </motion.div>
            
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-5xl font-bold text-text-primary leading-tight tracking-tight mb-8"
            >
              I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">fast, scalable</span> applications that solve real problems.
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-text-secondary leading-relaxed font-medium"
            >
              I'm a third-year CSIT student obsessed with full-stack development. I combine robust backend architecture (Python/Django) with beautiful, interactive frontends (React) to deliver complete, polished products. When I'm not coding, I'm exploring new AI tools to accelerate my workflow.
            </motion.p>
          </div>

          {/* Horizontal Education Cards */}
          <motion.div variants={itemVariants} className="relative">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-text-primary tracking-tight">Academic Journey</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {education.map((item, idx) => (
                <div 
                  key={idx}
                  className={`relative p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1 ${
                    item.active 
                      ? 'bg-white shadow-xl shadow-accent-blue/5 border-accent-blue/20' 
                      : 'bg-white/50 backdrop-blur-sm border-border-card hover:shadow-lg'
                  }`}
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${
                    item.active ? 'bg-accent-blue/10 text-accent-blue' : 'bg-pill-bg text-text-muted'
                  }`}>
                    <item.icon size={24} />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-2">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      item.active ? 'bg-accent-blue text-white' : 'bg-pill-bg text-text-secondary'
                    }`}>
                      {item.period}
                    </span>
                    <h4 className="text-lg font-bold text-text-primary leading-tight">
                      {item.degree}
                    </h4>
                    <p className="text-sm font-medium text-text-secondary">
                      {item.school}
                    </p>
                    <p className="text-sm text-text-muted mt-4 pt-4 border-t border-border-card">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
