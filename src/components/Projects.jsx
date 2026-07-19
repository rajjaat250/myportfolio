import { motion, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { ExternalLink, Layers, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react'
import GithubIcon from './GithubIcon'

const projects = [
  {
    title: 'FIXMYAREA AI',
    subtitle: 'Civic Issue Reporting Platform',
    role: 'Full Stack Developer',
    problem: 'Traditional civic reporting methods are slow, manual, and often lack transparency, making it hard for authorities to prioritize issues.',
    solution: 'Built a platform where citizens drop map pins and upload photos of issues. Gemini Vision AI instantly analyzes, categorizes, and assigns severity scores.',
    impact: 'Enables faster response times from authorities through AI triaging and increases citizen engagement with public issue tracking.',
    tech: ['React.js', 'TypeScript', 'Tailwind', 'Firebase', 'Gemini AI', 'Google Maps'],
    features: [
      'AI Automated Triage using Gemini Vision API',
      'Interactive Real-Time Dashboards for city health indices',
      'Gemini AI Civic Assistant for summarizing reports',
      'Live Sighting & Timeline Feeds for progress tracking',
    ],
    github: 'https://github.com/rajjaat250/FIXMYAREA',
    live:   'https://untitled-1035348437563.us-west1.run.app',
    image:  '/images/projects/fixmyarea-1.jpg',
    gallery: [
      '/images/projects/fixmyarea-1.jpg',
      '/images/projects/fixmyarea-2.jpg',
      '/images/projects/fixmyarea-3.jpg',
      '/images/projects/fixmyarea-4.jpg',
      '/images/projects/fixmyarea-5.jpg',
    ],
  },
  {
    title: 'Indestack Ecommerce',
    subtitle: 'Full-Stack Ecommerce Application',
    role: 'Full Stack Developer',
    problem: 'Needed a scalable, robust platform for managing users, products, orders, and authentication in an ecommerce environment.',
    solution: 'Developed a fast React/Vite frontend integrated with a Django REST Framework backend to ensure secure and efficient data management.',
    impact: 'Delivered a seamless shopping experience with efficient product management and secure payment processing capabilities.',
    tech: ['React', 'Vite', 'Tailwind', 'Python', 'Django', 'REST Framework'],
    features: [
      'Comprehensive product and order management',
      'Secure user authentication and authorization',
      'Responsive frontend built with Tailwind CSS',
      'RESTful API backend powered by Django',
    ],
    github: 'https://github.com/rajjaat250/ecommerce',
    live:   'https://indestack.live',
    image:  '/images/projects/ecommerce-1.jpg',
    gallery: [
      '/images/projects/ecommerce-1.jpg',
      '/images/projects/ecommerce-2.jpg',
      '/images/projects/ecommerce-3.jpg',
      '/images/projects/ecommerce-4.jpg',
    ],
  },
  {
    title: 'Stake Game Clone',
    subtitle: 'Online Gaming Platform',
    role: 'Frontend Developer',
    problem: 'Required a highly interactive, real-time gaming platform frontend with a seamless user experience and robust state management.',
    solution: 'Developed the frontend using React.js, integrating it with a Node.js/MongoDB/Redis backend built by a collaborator for real-time play.',
    impact: 'Created a responsive, engaging gaming interface that mirrors the original platform with secure server-side authentication.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Redis', 'Vercel'],
    features: [
      'Real-time game interactions and updates',
      'Secure server-side authentication integration',
      'Responsive and dynamic user interface',
      'Scalable architecture for high concurrency',
    ],
    github: '',
    live:   'https://stakegameclone.vercel.app/',
    image:  '/images/projects/stake-1.png',
    gallery: [
      '/images/projects/stake-1.png',
      '/images/projects/stake-2.png',
      '/images/projects/stake-3.png',
      '/images/projects/stake-4.png',
    ],
  },
]

export default function Projects() {
  // Modal State
  const [activeProject, setActiveProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [activeProject])

  const nextImage = (e) => {
    e.stopPropagation()
    if (activeProject && activeProject.gallery) {
      setCurrentImageIndex((prev) => (prev + 1) % activeProject.gallery.length)
    }
  }

  const prevImage = (e) => {
    e.stopPropagation()
    if (activeProject && activeProject.gallery) {
      setCurrentImageIndex((prev) => (prev - 1 + activeProject.gallery.length) % activeProject.gallery.length)
    }
  }

  const openGallery = (project) => {
    if (project.gallery && project.gallery.length > 0) {
      setActiveProject(project)
      setCurrentImageIndex(0)
    }
  }

  return (
    <div className="py-28 bg-bg-main relative overflow-hidden transition-colors duration-300 min-h-screen">
      <div className="section-container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="premium-card overflow-hidden w-full"
          >
            {/* Screenshot banner */}
            <div 
              className="relative w-full aspect-video bg-pill-bg overflow-hidden group cursor-pointer"
              style={{ borderBottom: '1px solid var(--border-card)' }}
              onClick={() => openGallery(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-bg-section">
                <Layers size={22} className="text-text-muted" />
                <span className="text-[11px] text-text-muted font-medium text-center leading-normal">
                  Add screenshot to<br />public{project.image}
                </span>
              </div>
              
              {/* Overlay for gallery */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[13px] font-semibold tracking-wide">
                     <ImageIcon size={16} />
                     View Gallery ({project.gallery.length})
                   </div>
                </div>
              )}
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
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-text-primary text-bg-main text-[13px] font-semibold hover:opacity-80 transition-opacity"
                  >
                    <GithubIcon size={14} />
                    View on GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] font-medium text-accent-blue hover:underline underline-offset-2 flex items-center gap-1.5"
                  >
                    <ExternalLink size={13} />
                    Live Demo&nbsp;→
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Gallery Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-12 cursor-zoom-out"
            onClick={() => setActiveProject(null)}
          >
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-6 right-6 md:top-8 md:right-8 z-50 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl aspect-[16/9] md:aspect-auto md:h-[85vh] bg-black rounded-xl overflow-hidden shadow-2xl flex flex-col cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Main Image Viewer */}
              <div className="relative flex-grow flex items-center justify-center overflow-hidden bg-bg-card/20 group">
                <img
                  key={currentImageIndex} // forces re-render for smooth transition or handled by motion if we want
                  src={activeProject.gallery[currentImageIndex]}
                  alt={`${activeProject.title} screenshot ${currentImageIndex + 1}`}
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                  className="w-full h-full object-contain"
                />
                
                {/* Fallback for missing image */}
                <div className="absolute inset-0 hidden flex-col items-center justify-center gap-3 bg-bg-card border border-border-card">
                  <Layers size={32} className="text-text-muted" />
                  <span className="text-[12px] text-text-muted font-medium text-center">
                    Image missing at<br />public{activeProject.gallery[currentImageIndex]}
                  </span>
                </div>

                {/* Left/Right Controls */}
                {activeProject.gallery.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white hover:bg-black/80 transition-colors opacity-0 group-hover:opacity-100 disabled:opacity-0"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white hover:bg-black/80 transition-colors opacity-0 group-hover:opacity-100 disabled:opacity-0"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails Footer */}
              {activeProject.gallery.length > 1 && (
                <div className="h-24 md:h-28 bg-bg-main border-t border-border-card p-3 flex gap-3 overflow-x-auto items-center justify-start hide-scrollbar shrink-0">
                  {activeProject.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`relative h-full aspect-video rounded-md overflow-hidden shrink-0 border-2 transition-all ${
                        idx === currentImageIndex ? 'border-accent-blue opacity-100' : 'border-transparent opacity-50 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`Thumbnail ${idx+1}`} className="w-full h-full object-cover pointer-events-none" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
