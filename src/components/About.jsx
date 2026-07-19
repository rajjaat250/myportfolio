import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { User, MapPin } from 'lucide-react'

const education = [
  {
    period: '2024 — 2028',
    degree: 'B.Tech in Computer Science & IT',
    school: 'Ajay Kumar Garg Engineering College, Ghaziabad',
    detail: '3rd Year · CGPA 7.86',
    active: true,
  },
  {
    period: '2022 — 2024',
    degree: 'Intermediate (Class XII)',
    school: 'LFA Inter College — Science (PCM)',
    detail: 'Score: 89.66%',
    active: false,
  },
  {
    period: '2020 — 2022',
    degree: 'High School (Class X)',
    school: 'LFA Inter College',
    detail: 'Score: 86%',
    active: false,
  },
]

const fade = (delay = 0) => ({
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  },
})

export default function About() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="about"
      className="py-28 bg-bg-section relative overflow-hidden transition-colors duration-300"
      style={{ borderTop: '1px solid var(--border-card)', borderBottom: '1px solid var(--border-card)' }}
    >
      <div className="section-container" ref={ref}>

        {/* ── Section header ─────────────────────────────── */}
        <motion.div
          variants={fade(0)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-text-muted mb-4">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary tracking-[-0.03em]">
            Who I Am
          </h2>
        </motion.div>

        {/*
          Two-column grid:
          Left  (2/5): photo centred
          Right (3/5): bio + education timeline
        */}
        <div className="grid md:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* ── Photo col ─────────────────────────────────── */}
          <motion.div
            variants={fade(0.1)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="md:col-span-2 flex flex-col items-center gap-4"
          >
            {/* Photo frame — subtle gradient border trick */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-full md:max-w-[280px] md:aspect-square group">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-blue/8 to-accent-purple/8 rotate-1 blur-sm group-hover:rotate-2 transition-transform duration-500" />
              <img
                src="/images/profile.jpg"
                alt="Raj Chaudhary"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
                className="relative w-full h-full object-cover rounded-3xl border border-border-card group-hover:scale-[1.01] transition-transform duration-500"
              />
              {/* Placeholder */}
              <div
                style={{ display: 'none' }}
                className="relative w-full h-full rounded-3xl bg-bg-card border border-border-card items-center justify-center"
              >
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-pill-bg border border-pill-border mx-auto mb-3 flex items-center justify-center">
                    <User size={30} className="text-text-muted" />
                  </div>
                  <p className="text-[11px] text-text-muted font-medium">
                    Add profile.jpg to<br />public/images/
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-[13px] text-text-secondary">
              <MapPin size={13} className="text-text-muted" />
              Ghaziabad, UP, India
            </div>
          </motion.div>

          {/* ── Text col ──────────────────────────────────── */}
          <motion.div
            variants={fade(0.18)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="md:col-span-3 flex flex-col gap-8"
          >
            {/* Bio paragraphs */}
            <div className="space-y-4">
              <p className="text-[16px] md:text-[17px] leading-relaxed text-text-primary font-medium tracking-[-0.01em]">
                Hi, I&apos;m Raj — a Third-year B.Tech CSIT student at{' '}
                <span className="text-accent-blue font-semibold">
                  Ajay Kumar Garg Engineering College
                </span>
                , Ghaziabad. I specialise in full-stack web development with Python/Django and React.
              </p>
              <p className="text-[14px] md:text-[15px] leading-relaxed text-text-secondary">
                Experienced in building REST APIs, responsive frontends, and end-to-end web applications. Comfortable working with AI-assisted development tools to accelerate delivery while maintaining strong command over the underlying architecture and code.
              </p>
            </div>

            {/* Education timeline */}
            <div
              className="pt-7 flex flex-col gap-0"
              style={{ borderTop: '1px solid var(--border-card)' }}
            >
              <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-text-muted mb-6">
                Education
              </p>

              <div className="relative ml-1 flex flex-col gap-6"
                style={{ paddingLeft: '1.25rem', borderLeft: '1px solid var(--border-card)' }}
              >
                {education.map((item) => (
                  <div key={item.period} className="relative">
                    {/* Timeline dot */}
                    <div
                      className={`absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full ${
                        item.active
                          ? 'bg-accent-blue border-2 border-bg-section'
                          : 'bg-bg-section border-2 border-border-card'
                      }`}
                    />

                    <span
                      className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                        item.active
                          ? 'text-accent-blue bg-accent-blue/10'
                          : 'text-text-muted bg-pill-bg'
                      }`}
                    >
                      {item.period}
                    </span>
                    <h4 className="text-[14px] font-semibold text-text-primary mt-2 tracking-[-0.01em]">
                      {item.degree}
                    </h4>
                    <p className="text-[13px] text-text-secondary mt-0.5">{item.school}</p>
                    <p className="text-[12px] text-text-muted mt-0.5">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
