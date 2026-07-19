import { motion } from 'framer-motion'
import { skillCategories } from '../../data/skills'
import GlassCard from '../../components/ui/GlassCard'

export default function Skills() {
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
          <span className="text-brand font-bold tracking-widest uppercase text-sm mb-4 block">Capabilities</span>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight">
            Technical <span className="premium-gradient-text">Arsenal</span>.
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <GlassCard className="h-full p-8 flex flex-col group cursor-hover">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{category.label}</h3>
                  <p className="text-text-secondary">{category.desc}</p>
                </div>

                <div className="flex flex-wrap gap-3 mt-auto">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-semibold transition-all duration-300 group-hover:border-white/20 hover:bg-white/10 hover:-translate-y-1"
                    >
                      <skill.icon className="text-xl text-brand" />
                      {skill.name}
                    </div>
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
