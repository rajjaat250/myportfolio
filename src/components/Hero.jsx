import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import GithubIcon from './GithubIcon'
import LinkedinIcon from './LinkedinIcon'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-slate-50">
      {/* Abstract Background Decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-brand-100/50 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="section-container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text & CTA */}
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-sm font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-600"></span>
              </span>
              Available for Internships
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]"
          >
            Building the next <br className="hidden sm:block" />
            generation of <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              web experiences.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-lg"
          >
            I'm a full-stack developer who transforms complex problems into elegant, scalable, and highly performant applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-600 text-white font-semibold hover:bg-brand-700 transition-colors shadow-lg shadow-brand-500/25"
            >
              View My Work <ArrowRight size={18} />
            </Link>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-slate-700 font-semibold border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors shadow-sm"
            >
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-4 pt-6"
          >
            <a href="https://github.com/rajjaat250" target="_blank" rel="noreferrer" className="p-2.5 bg-white border border-slate-200 rounded-lg text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-colors shadow-sm">
              <GithubIcon size={20} />
            </a>
            <a href="https://www.linkedin.com/in/raj-chaudhary-15213630b" target="_blank" rel="noreferrer" className="p-2.5 bg-white border border-slate-200 rounded-lg text-slate-600 hover:text-[#0a66c2] hover:border-slate-300 transition-colors shadow-sm">
              <LinkedinIcon size={20} />
            </a>
            <Link to="/contact" className="p-2.5 bg-white border border-slate-200 rounded-lg text-slate-600 hover:text-brand-600 hover:border-slate-300 transition-colors shadow-sm">
              <Mail size={20} />
            </Link>
          </motion.div>
        </div>

        {/* Right Column: Visual Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          <div className="relative w-full aspect-square max-w-[500px] mx-auto">
            {/* Main floating card */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute inset-0 bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Fake window header */}
              <div className="h-12 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              {/* Fake code content */}
              <div className="flex-1 p-8 bg-slate-900 text-slate-300 font-mono text-sm leading-loose">
                <p><span className="text-pink-400">const</span> developer = {'{'}</p>
                <p className="ml-4">name: <span className="text-emerald-400">'Raj Chaudhary'</span>,</p>
                <p className="ml-4">role: <span className="text-emerald-400">'Full Stack Engineer'</span>,</p>
                <p className="ml-4">skills: [<span className="text-emerald-400">'React'</span>, <span className="text-emerald-400">'Django'</span>, <span className="text-emerald-400">'Python'</span>],</p>
                <p className="ml-4">passionate: <span className="text-blue-400">true</span></p>
                <p>{'}'};</p>
                <br/>
                <p><span className="text-pink-400">const</span> buildFuture = () <span className="text-pink-400">=&gt;</span> {'{'}</p>
                <p className="ml-4">developer.code();</p>
                <p>{'}'};</p>
              </div>
            </motion.div>

            {/* Floating decoration 1 */}
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -right-8 -top-8 p-4 bg-white rounded-2xl shadow-xl border border-slate-100 text-slate-800 font-bold flex flex-col items-center gap-2"
            >
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              <span>Clean Code</span>
            </motion.div>

            {/* Floating decoration 2 */}
            <motion.div
              animate={{ y: [-15, 15, -15] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 }}
              className="absolute -left-8 -bottom-8 p-4 bg-white rounded-2xl shadow-xl border border-slate-100 text-slate-800 font-bold flex flex-col items-center gap-2"
            >
               <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <span>Performance</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
