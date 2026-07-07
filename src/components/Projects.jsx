import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Layers } from 'lucide-react'
import GithubIcon from './GithubIcon'

const projects = [
  {
    title: 'FarmVaani',
    subtitle: 'AgriTech Platform',
    role: 'Full Stack Contributor',
    problem:
      'Farmers lack real-time access to localised agricultural advisory services and peer connection, leading to crop losses and delayed decision-making.',
    solution:
      'Designed React.js frontends integrated with a Django REST API backend to power real-time forums, weather feeds, and AI crop advisories.',
    impact:
      'Improved page-load performance and gave rural users a robust dashboard that loads advisory updates asynchronously.',
    tech: ['React.js', 'Django', 'REST API', 'PostgreSQL', 'Tailwind CSS', 'Git'],
    features: [
      'Asynchronous crop status dashboard',
      'Community forums with image/voice sharing',
      'AI advisory integration via image upload',
      'Responsive design across mobile and desktop',
    ],
    github: 'https://github.com/rajjaat250',
    live:   'https://github.com/rajjaat250',
    image:  '/images/projects/farmvaani.jpg',
  },
]

export default function Projects() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="projects"
      className="py-28 bg-bg-main relative overflow-hidden transition-colors duration-300"
    >
      <div className="section-container" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-text-muted mb-4">
            Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary tracking-[-0.03em] mb-4">
            Featured Work
          </h2>
          <p className="text-[15px] text-text-secondary max-w-xs mx-auto leading-relaxed">
            A platform built with clean, maintainable full-stack architecture.
          </p>
        </motion.div>

        {/* Project card(s) */}
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="premium-card overflow-hidden w-full"
          >
            {/* Screenshot banner */}
            <div className="relative w-full aspect-video bg-pill-bg overflow-hidden"
              style={{ borderBottom: '1px solid var(--border-card)' }}
            >
              <img
                src={project.image}
                alt={project.title}
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-bg-section">
                <Layers size={22} className="text-text-muted" />
                <span className="text-[11px] text-text-muted font-medium text-center leading-normal">
                  Add screenshot to<br />public/images/projects/farmvaani.jpg
                </span>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 md:p-9 flex flex-col gap-7">

              {/* Title — centred */}
              <div className="text-center">
                <div className="flex flex-wrap items-center justify-center gap-2.5 mb-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-text-primary tracking-[-0.03em]">
                    {project.title}
                  </h3>
                  <span className="px-3 py-0.5 rounded-full bg-pill-bg border border-pill-border text-[11px] font-semibold text-text-secondary tracking-[-0.005em]">
                    {project.subtitle}
                  </span>
                </div>
                <p className="text-[11px] font-semibold text-text-muted tracking-[0.08em] uppercase">
                  {project.role}
                </p>
              </div>

              {/* Challenge / Solution / Impact */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: 'Challenge', text: project.problem  },
                  { label: 'Solution',  text: project.solution },
                  { label: 'Impact',    text: project.impact   },
                ].map(({ label, text }) => (
                  <div key={label} className="rounded-2xl bg-bg-section p-5"
                    style={{ border: '1px solid var(--border-card)' }}
                  >
                    <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-text-muted mb-2">
                      {label}
                    </p>
                    <p className="text-[13px] text-text-secondary leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.features.map((f, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-[13px] text-text-secondary leading-snug">
                    <span
                      className="mt-[5px] w-1 h-1 rounded-full shrink-0 bg-accent-blue"
                    />
                    {f}
                  </div>
                ))}
              </div>

              {/* Tech pills — centred */}
              <div className="flex flex-wrap justify-center gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-full bg-pill-bg border border-pill-border text-[11px] font-medium text-text-secondary tracking-[-0.005em]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* CTAs — centred, Apple pattern */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-text-primary text-bg-main text-[13px] font-semibold hover:opacity-80 transition-opacity"
                >
                  <GithubIcon size={14} />
                  View on GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] font-medium text-accent-blue hover:underline underline-offset-2 flex items-center gap-1.5"
                >
                  <ExternalLink size={13} />
                  Live Demo&nbsp;→
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
