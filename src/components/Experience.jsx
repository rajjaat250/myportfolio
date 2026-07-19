import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    role:     'Web Development Intern',
    company:  'Cognifyz Technologies',
    type:     'Internship',
    duration: 'June 2025 – July 2025',
    location: 'Remote',
    accent:   'var(--accent-blue)',
    accentBg: 'rgba(0, 113, 227, 0.07)',
    highlights: [
      'Contributed to real web development assignments and gained hands-on exposure to professional workflows.',
      'Developed responsive UI components and delivered real-world tasks aligned with production code standards.',
      'Maintained strong attention to detail and effective team communication throughout the internship.',
    ],
  },
]

const cardVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Experience() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="experience"
      className="py-28 bg-bg-section relative overflow-hidden transition-colors duration-300"
      style={{ borderBottom: '1px solid var(--border-card)' }}
    >
      <div className="section-container" ref={ref}>

        {/* ── Header ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-text-muted mb-4">
            Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary tracking-[-0.03em] mb-4">
            Work & Contributions
          </h2>
          <p className="text-[15px] text-text-secondary max-w-xs mx-auto leading-relaxed">
            Real-world experience building and contributing to
            production-level projects.
          </p>
        </motion.div>

        {/* ── Cards ─────────────────────────────────────── */}
        <div className="flex flex-col gap-4">
          {experiences.map((exp, i) => (
            <motion.article
              key={exp.company}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="premium-card p-6 md:p-8 w-full"
            >
              {/* Top row: role + meta */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">

                {/* Role block */}
                <div className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-2xl flex items-center justify-center shrink-0 border border-border-card mt-0.5"
                    style={{ background: exp.accentBg }}
                  >
                    <Briefcase size={15} style={{ color: exp.accent }} />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-semibold text-text-primary tracking-[-0.02em] leading-snug">
                      {exp.role}
                    </h3>
                    <p className="text-[14px] font-semibold mt-0.5" style={{ color: exp.accent }}>
                      {exp.company}
                    </p>
                  </div>
                </div>

                {/* Meta badges */}
                <div className="flex flex-row sm:flex-col items-start sm:items-end gap-2 ml-12 sm:ml-0 shrink-0 flex-wrap">
                  <span
                    className="px-3 py-1 rounded-full text-[11px] font-semibold border border-border-card bg-pill-bg whitespace-nowrap tracking-[-0.005em]"
                    style={{ color: exp.accent }}
                  >
                    {exp.type}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-text-muted">
                    <Calendar size={10} /> {exp.duration}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-text-muted">
                    <MapPin size={10} /> {exp.location}
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: '1px', background: 'var(--border-card)', marginBottom: '1.25rem' }} />

              {/* Highlights — Apple-style clean bullets */}
              <ul className="space-y-2.5">
                {exp.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[13px] text-text-secondary leading-snug">
                    <span
                      className="mt-[5px] w-1 h-1 rounded-full shrink-0"
                      style={{ background: exp.accent }}
                    />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
