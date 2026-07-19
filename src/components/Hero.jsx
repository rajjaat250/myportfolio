import { motion } from 'framer-motion'
import { ArrowRight, Code2, Database, Layout, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

const FloatingIcon = ({ children, delay, x, y, rotate }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
    animate={{ opacity: 1, scale: 1, rotate }}
    transition={{ duration: 1, delay, type: 'spring' }}
    className="absolute z-20"
    style={{ left: x, top: y }}
  >
    <motion.div
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay }}
      className="p-4 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-xl"
    >
      {children}
    </motion.div>
  </motion.div>
)

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-bg-main">
      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full blur-[120px] bg-accent-blue/10 animate-pulse" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] rounded-full blur-[120px] bg-accent-purple/10" />
      </div>

      <div className="section-container relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center h-full">
        {/* Left Side: Typography & CTAs */}
        <div className="flex flex-col gap-8 max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <span className="px-4 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-sm font-semibold flex items-center gap-2">
              <Sparkles size={16} />
              Full Stack Developer
            </span>
            <span className="px-4 py-1.5 rounded-full bg-accent-green/10 border border-accent-green/20 text-accent-green text-sm font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
              Available for Internships
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-text-primary tracking-tight leading-[1.05] mb-6">
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink">
                Digital Dreams
              </span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl font-medium">
              Hi, I'm Raj Chaudhary. I architect scalable backend systems and craft high-performance, interactive user experiences.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-4 mt-2"
          >
            <Link to="/projects" className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-text-primary text-white font-semibold text-base overflow-hidden hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2">
                Explore Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            
            <a href="/resume.pdf" download className="px-8 py-4 rounded-full bg-pill-bg border-2 border-border-card text-text-primary font-semibold text-base hover:border-accent-blue hover:text-accent-blue transition-colors duration-300">
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Right Side: Visual Graphic / Abstract Representation */}
        <div className="relative hidden lg:flex items-center justify-center h-full min-h-[600px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative w-full max-w-[500px] aspect-square"
          >
            {/* Central glowing orb */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent-blue via-accent-purple to-accent-pink opacity-20 blur-[60px] animate-pulse" />
            
            {/* Abstract geometric shape in center */}
            <div className="absolute inset-16 rounded-3xl bg-white/40 backdrop-blur-2xl border border-white/50 shadow-2xl overflow-hidden flex flex-col">
              <div className="h-10 border-b border-white/30 flex items-center px-4 gap-2 bg-white/20">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="flex-1 p-8 flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="w-3/4 h-4 rounded-md bg-accent-blue/20" />
                  <div className="w-1/2 h-4 rounded-md bg-accent-purple/20" />
                  <div className="w-full h-4 rounded-md bg-accent-pink/20" />
                  <div className="w-5/6 h-4 rounded-md bg-accent-green/20" />
                  <div className="w-2/3 h-4 rounded-md bg-accent-blue/20" />
                </div>
              </div>
            </div>

            {/* Floating Tech Icons */}
            <FloatingIcon delay={0.4} x="0%" y="10%" rotate={-10}>
              <Layout size={32} className="text-accent-blue" />
            </FloatingIcon>
            
            <FloatingIcon delay={0.6} x="80%" y="25%" rotate={15}>
              <Code2 size={32} className="text-accent-purple" />
            </FloatingIcon>
            
            <FloatingIcon delay={0.8} x="10%" y="75%" rotate={-5}>
              <Database size={32} className="text-accent-pink" />
            </FloatingIcon>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
