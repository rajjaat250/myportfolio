import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    id: 1,
    role: 'Web Development Intern',
    company: 'Cognifyz Technologies',
    location: 'Remote',
    date: 'Current',
    description: 'Working on full-stack web applications, integrating APIs, and building responsive user interfaces.',
    skills: ['React', 'JavaScript', 'Tailwind CSS', 'API Integration']
  },
  {
    id: 2,
    role: 'Software Development Trainee',
    company: 'AKGEC',
    location: 'Ghaziabad, India',
    date: '2023 - Present',
    description: 'Engaged in comprehensive software development training, focusing on object-oriented programming, data structures, and algorithms.',
    skills: ['C++', 'Python', 'OOP', 'Data Structures']
  }
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="section-container max-w-4xl" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-100 mb-6">
            <Briefcase size={16} className="text-brand-600" />
            <span className="text-xs font-bold tracking-widest uppercase text-brand-700">Experience</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            My Professional <span className="text-brand-600">Journey</span>.
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="modern-card p-8 flex flex-col md:flex-row gap-6 relative"
            >
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-semibold">
                    <Calendar size={14} /> {exp.date}
                  </span>
                </div>
                
                <div className="flex items-center gap-4 text-sm font-medium text-slate-500 mb-6">
                  <span className="flex items-center gap-1 text-brand-600">
                    <Briefcase size={16} /> {exp.company}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={16} /> {exp.location}
                  </span>
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {exp.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-brand-50 text-brand-700 rounded-lg text-xs font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
