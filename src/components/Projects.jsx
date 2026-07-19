import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react'
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
    image:  '/images/projects/fixmyarea-1.png',
    gallery: [
      '/images/projects/fixmyarea-1.png',
      '/images/projects/fixmyarea-2.png',
      '/images/projects/fixmyarea-3.png',
      '/images/projects/fixmyarea-4.png',
      '/images/projects/fixmyarea-5.png',
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
    image:  '/images/projects/ecommerce-1.png',
    gallery: [
      '/images/projects/ecommerce-1.png',
      '/images/projects/ecommerce-2.png',
      '/images/projects/ecommerce-3.png',
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
  const [activeProject, setActiveProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    if (activeProject) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [activeProject])

  const nextImage = (e) => {
    e.stopPropagation()
    if (activeProject?.gallery) setCurrentImageIndex((prev) => (prev + 1) % activeProject.gallery.length)
  }

  const prevImage = (e) => {
    e.stopPropagation()
    if (activeProject?.gallery) setCurrentImageIndex((prev) => (prev - 1 + activeProject.gallery.length) % activeProject.gallery.length)
  }

  const openGallery = (project) => {
    if (project.gallery?.length) {
      setActiveProject(project)
      setCurrentImageIndex(0)
    }
  }

  return (
    <div className="py-32 bg-slate-50 min-h-screen">
      <div className="section-container max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-100 mb-6">
            <span className="text-xs font-bold tracking-widest uppercase text-brand-700">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Featured <span className="text-brand-600">Projects</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Real-world applications built with modern architectures, focusing on performance, scalability, and exceptional user experience.
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="flex flex-col gap-16 md:gap-24">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`flex flex-col gap-8 md:gap-12 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
            >
              {/* Image Side */}
              <div 
                className="w-full md:w-1/2 relative group cursor-pointer"
                onClick={() => openGallery(project)}
              >
                <div className="absolute inset-0 bg-brand-500 rounded-2xl transform translate-x-3 translate-y-3 opacity-20 transition-transform group-hover:translate-x-4 group-hover:translate-y-4" />
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-2 bg-white text-slate-900 rounded-full text-sm font-semibold shadow-xl">
                      View Gallery
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 flex flex-col items-start">
                <span className="text-brand-600 font-bold tracking-wider text-sm uppercase mb-2">
                  {project.subtitle}
                </span>
                <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                  {project.title}
                </h3>
                
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-6 relative">
                  <p className="text-slate-600 leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-brand-600 transition-colors"
                    >
                      <GithubIcon size={18} />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-700 text-sm font-semibold hover:border-slate-300 hover:bg-slate-50 transition-colors"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gallery Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/90 backdrop-blur-md p-4 md:p-8 cursor-zoom-out"
            onClick={() => setActiveProject(null)}
          >
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 md:top-8 md:right-8 z-50 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl h-auto max-h-[90vh] bg-slate-950 rounded-2xl overflow-hidden shadow-2xl flex flex-col cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Main Image */}
              <div className="relative flex-1 flex items-center justify-center overflow-hidden bg-slate-900 group">
                <img
                  key={currentImageIndex}
                  src={activeProject.gallery[currentImageIndex]}
                  alt={`${activeProject.title} screenshot ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain p-2"
                />
                
                {activeProject.gallery.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 border border-white/10 text-white hover:bg-brand-600 transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 border border-white/10 text-white hover:bg-brand-600 transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              {activeProject.gallery.length > 1 && (
                <div className="h-24 md:h-32 bg-slate-950 border-t border-white/10 p-4 flex gap-3 overflow-x-auto items-center justify-start hide-scrollbar shrink-0">
                  {activeProject.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`relative h-full aspect-video rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                        idx === currentImageIndex ? 'border-brand-500 opacity-100' : 'border-transparent opacity-50 hover:opacity-100'
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
