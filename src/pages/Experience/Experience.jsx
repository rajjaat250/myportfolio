import { motion } from 'framer-motion'
import { experience } from '../../data/experience'
import GlassCard from '../../components/ui/GlassCard'

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 min-h-screen relative"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="text-brand font-bold tracking-widest uppercase text-sm mb-4 block">Work</span>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight">
            Professional <span className="premium-gradient-text">Experience</span>.
          </h1>
        </motion.div>

        <div className="space-y-12 relative border-l border-white/10 ml-4 md:ml-6">
          {experience.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative pl-8 md:pl-16"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-bg-main border-2 border-brand" />

              <GlassCard className="p-8 cursor-hover group">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                    <div className="text-brand font-semibold">{exp.company}</div>
                  </div>
                  <div className="text-sm font-medium text-text-muted bg-white/5 px-4 py-2 rounded-full border border-white/10 shrink-0">
                    {exp.date}
                  </div>
                </div>

                <p className="text-text-secondary leading-relaxed mb-8">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/5 text-text-secondary border border-white/10 group-hover:border-brand/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
