import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { projects } from '../../data/projects'
import GlassCard from '../ui/GlassCard'
import MagneticButton from '../buttons/MagneticButton'

export default function FeaturedProjects() {
  const featured = projects.slice(0, 2)

  return (
    <section className="py-32 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="text-brand font-bold tracking-widest uppercase text-sm mb-4 block">Work</span>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight">
              Selected <span className="premium-gradient-text">Projects</span>.
            </h2>
          </div>
          <MagneticButton>
            <Link to="/projects" className="inline-flex items-center gap-2 text-white border border-white/20 px-6 py-3 rounded-full hover:bg-white/5 transition-colors cursor-hover">
              View All Work
              <ArrowRight size={16} />
            </Link>
          </MagneticButton>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {featured.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <GlassCard className="group h-full flex flex-col cursor-hover">
                <div className="relative aspect-video overflow-hidden border-b border-white/10">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                    <span className="px-3 py-1 bg-white/10 text-white text-xs font-semibold rounded-full border border-white/10">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-text-secondary line-clamp-2 mb-8 flex-1">
                    {project.solution}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map(t => (
                      <span key={t} className="text-xs font-medium text-text-muted px-2 py-1 rounded bg-black/50 border border-white/5">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="text-xs font-medium text-text-muted px-2 py-1 rounded bg-black/50 border border-white/5">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
