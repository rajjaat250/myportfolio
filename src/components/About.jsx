import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, GraduationCap, BookOpen, Laptop } from 'lucide-react'

const education = [
  {
    period: '2024 — 2028',
    degree: 'B.Tech in Computer Science & IT',
    school: 'Ajay Kumar Garg Engineering College',
    detail: '3rd Year · CGPA 7.86',
    icon: GraduationCap,
    active: true,
  },
  {
    period: '2022 — 2024',
    degree: 'Intermediate (Class XII)',
    school: 'LFA Inter College',
    detail: 'Score: 89.66%',
    icon: BookOpen,
    active: false,
  },
  {
    period: '2020 — 2022',
    degree: 'High School (Class X)',
    school: 'LFA Inter College',
    detail: 'Score: 86%',
    icon: Laptop,
    active: false,
  },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-100 mb-6">
            <Code size={16} className="text-brand-600" />
            <span className="text-xs font-bold tracking-widest uppercase text-brand-700">About Me</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Bridging the gap between <span className="text-brand-600">design</span> and <span className="text-brand-600">engineering</span>.
          </h2>
          
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            I'm a third-year CSIT student obsessed with full-stack development. I combine robust backend architecture using Python and Django with beautiful, highly interactive React frontends to deliver complete, polished products.
          </p>
        </motion.div>

        {/* Education Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-2xl font-bold text-slate-900">Academic Journey</h3>
            <div className="h-px bg-slate-200 flex-1" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {education.map((item, idx) => (
              <div 
                key={idx}
                className={`modern-card p-8 flex flex-col ${
                  item.active 
                    ? 'ring-2 ring-brand-500 shadow-xl shadow-brand-500/10' 
                    : ''
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                  item.active ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/30' : 'bg-slate-100 text-slate-600'
                }`}>
                  <item.icon size={24} />
                </div>
                
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold w-max mb-4 ${
                  item.active ? 'bg-brand-100 text-brand-700' : 'bg-slate-100 text-slate-600'
                }`}>
                  {item.period}
                </span>
                
                <h4 className="text-lg font-bold text-slate-900 mb-2 leading-tight">
                  {item.degree}
                </h4>
                <p className="text-sm font-medium text-slate-600 mb-4 flex-1">
                  {item.school}
                </p>
                
                <div className="pt-4 border-t border-slate-100 mt-auto">
                  <p className="text-sm font-semibold text-slate-800">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
