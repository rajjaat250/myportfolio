import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ExternalLink, ChevronRight, X } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { projects } from '../../data/projects'
import GlassCard from '../../components/ui/GlassCard'
import MagneticButton from '../../components/buttons/MagneticButton'

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)

  useEffect(() => {
    if (activeProject) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [activeProject])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 min-h-screen relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="text-brand font-bold tracking-widest uppercase text-sm mb-4 block">Portfolio</span>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight">
            Featured <span className="premium-gradient-text">Projects</span>.
          </h1>
        </motion.div>

        <div className="flex flex-col gap-24">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
            >
              <div
                className="w-full lg:w-1/2 relative group cursor-pointer"
                onClick={() => setActiveProject(project)}
              >
                <div className="absolute inset-0 bg-brand/30 rounded-3xl transform translate-x-4 translate-y-4 opacity-50 transition-transform group-hover:translate-x-6 group-hover:translate-y-6 blur-lg" />
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 premium-glass">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-full font-bold border border-white/20">
                      View Gallery
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 flex flex-col items-start">
                <span className="text-brand font-bold tracking-wider text-sm uppercase mb-3">
                  {project.subtitle}
                </span>
                <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
                  {project.title}
                </h3>
                
                <GlassCard className="p-8 mb-8 relative w-full">
                  <div className="absolute -left-4 top-8 w-1 h-12 bg-brand rounded-r-full" />
                  <p className="text-text-secondary leading-relaxed text-lg">
                    {project.solution}
                  </p>
                </GlassCard>

                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-white/5 text-text-secondary border border-white/10 text-sm font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6">
                  {project.github && (
                    <MagneticButton>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-bold hover:bg-slate-200 transition-colors cursor-hover"
                      >
                        <FaGithub size={20} />
                        Source Code
                      </a>
                    </MagneticButton>
                  )}
                  {project.live && (
                    <MagneticButton>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-transparent border border-white/20 text-white font-bold hover:bg-white/5 transition-colors cursor-hover"
                      >
                        <ExternalLink size={20} />
                        Live Demo
                      </a>
                    </MagneticButton>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Gallery Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 cursor-zoom-out"
            onClick={() => setActiveProject(null)}
          >
            <button
              className="absolute top-8 right-8 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
              onClick={() => setActiveProject(null)}
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl aspect-video rounded-2xl overflow-hidden cursor-default"
            >
              {/* Here we'd add the full gallery slider logic, keeping it simple for the preview */}
              <img src={activeProject.image} alt={activeProject.title} className="w-full h-full object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
