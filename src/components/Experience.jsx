import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Briefcase, Calendar, MapPin, ExternalLink, ChevronRight } from 'lucide-react'

const experiences = [
  {
    id: 1,
    role: 'Web Development Intern',
    company: 'Cognifyz Technologies',
    type: 'Internship',
    duration: 'June 2025 – July 2025',
    location: 'Remote',
    accent: 'var(--accent-blue)',
    accentBg: 'rgba(0, 113, 227, 0.1)',
    highlights: [
      'Contributed to real web development assignments and gained hands-on exposure to professional workflows.',
      'Developed responsive UI components and delivered real-world tasks aligned with production code standards.',
      'Maintained strong attention to detail and effective team communication throughout the internship.',
    ],
    tech: ['React', 'JavaScript', 'HTML/CSS'],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <section id="experience" className="py-32 bg-bg-main relative overflow-hidden">
      <div className="section-container max-w-4xl" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-pill-bg border border-pill-border mb-6">
            <Briefcase size={16} className="text-accent-blue" />
            <span className="text-xs font-bold tracking-widest uppercase text-text-muted">Experience</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight">
            Work & Contributions
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue/50 via-accent-purple/20 to-transparent -translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0
              const isHovered = hoveredId === exp.id

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${isEven ? 'md:flex-row-reverse' : ''}`}
                  onMouseEnter={() => setHoveredId(exp.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full border-4 border-bg-main -translate-x-1/2 z-10 transition-colors duration-300"
                    style={{ backgroundColor: isHovered ? exp.accent : 'var(--text-muted)' }}
                  />
                  
                  {/* Glowing Aura on Hover */}
                  <div className={`absolute left-8 md:left-1/2 w-12 h-12 rounded-full blur-xl -translate-x-1/2 -translate-y-4 z-0 transition-opacity duration-500 ${isHovered ? 'opacity-50' : 'opacity-0'}`}
                    style={{ backgroundColor: exp.accent }}
                  />

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-1/2" />

                  {/* Card Content */}
                  <div className="w-full md:w-1/2 pl-20 md:pl-0 md:px-12">
                    <div 
                      className={`relative p-8 rounded-3xl border transition-all duration-300 ${
                        isHovered 
                          ? 'bg-white shadow-2xl scale-[1.02] z-20' 
                          : 'bg-white/50 backdrop-blur-sm border-border-card hover:border-transparent'
                      }`}
                      style={{ 
                        borderColor: isHovered ? exp.accent : undefined,
                        boxShadow: isHovered ? `0 20px 40px -10px ${exp.accent}20` : undefined
                      }}
                    >
                      {/* Meta info */}
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full text-xs font-bold text-white tracking-wide" style={{ backgroundColor: exp.accent }}>
                          {exp.type}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs font-medium text-text-muted">
                          <Calendar size={12} /> {exp.duration}
                        </span>
                      </div>

                      {/* Title & Company */}
                      <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-1">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mb-6">
                        <span className="font-semibold" style={{ color: exp.accent }}>{exp.company}</span>
                        <span className="w-1 h-1 rounded-full bg-border-card" />
                        <span className="flex items-center gap-1 text-sm text-text-muted">
                          <MapPin size={12} /> {exp.location}
                        </span>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-3 mb-6">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed">
                            <ChevronRight size={16} className="mt-0.5 shrink-0" style={{ color: exp.accent }} />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-border-card">
                        {exp.tech.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 rounded-lg text-xs font-semibold bg-pill-bg text-text-secondary border border-pill-border transition-colors hover:bg-white hover:text-text-primary">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
