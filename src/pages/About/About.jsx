import { motion } from 'framer-motion'
import { education } from '../../data/personalInfo'
import GlassCard from '../../components/ui/GlassCard'

export default function About() {
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
          className="mb-20"
        >
          <span className="text-brand font-bold tracking-widest uppercase text-sm mb-4 block">The Journey</span>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight">
            Academic <span className="premium-gradient-text">Excellence</span>.
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <GlassCard className="h-full p-8 flex flex-col cursor-hover group">
                <div className="text-brand font-bold text-sm tracking-wider mb-4 border border-brand/20 bg-brand/10 inline-block px-3 py-1 rounded-full w-fit">
                  {edu.date}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                <h4 className="text-text-secondary font-medium mb-6">{edu.institution}</h4>
                <p className="text-text-muted mt-auto leading-relaxed">
                  {edu.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
