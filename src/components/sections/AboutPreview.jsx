import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import TextReveal from '../animations/TextReveal'
import { personalInfo } from '../../data/personalInfo'

export default function AboutPreview() {
  return (
    <section className="py-32 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand font-bold tracking-widest uppercase text-sm mb-6 block">About Me</span>
            <TextReveal
              text={personalInfo.about}
              className="text-3xl md:text-5xl font-bold leading-[1.2] text-white mb-10"
            />
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-white transition-colors text-lg font-semibold cursor-hover group"
            >
              More about my journey
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          
          <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden premium-glass group cursor-hover">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 to-purple-600/20 mix-blend-overlay z-10 transition-opacity group-hover:opacity-0" />
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" 
              alt="Coding workspace" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
