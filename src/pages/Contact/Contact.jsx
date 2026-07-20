import { motion } from 'framer-motion'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, Send, Loader2, Phone } from 'lucide-react'
import { personalInfo } from '../../data/personalInfo'
import GlassCard from '../../components/ui/GlassCard'
import MagneticButton from '../../components/buttons/MagneticButton'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => setFormData(p => ({ ...p, [e.target.id]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    setStatus('loading')

    // Dummy email logic for now, configure EmailJS properly later
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 3000)
    }, 1500)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 min-h-screen relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand font-bold tracking-widest uppercase text-sm mb-4 block">Connect</span>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-8">
              Let's <span className="premium-gradient-text">Collaborate</span>.
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed mb-12">
              I'm always open to discussing product design work or partnership opportunities. Let's make something great together.
            </p>

            <div className="flex flex-col gap-6">
              <a href={`mailto:${personalInfo.email}`} className="group flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-16 h-16 rounded-full bg-brand/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="text-brand" size={28} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-text-muted mb-1 uppercase tracking-wider">Email</div>
                  <div className="text-xl font-bold text-white">{personalInfo.email}</div>
                </div>
              </a>
              {personalInfo.phone && (
                <a href={`tel:${personalInfo.phone}`} className="group flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-brand/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="text-brand" size={28} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-text-muted mb-1 uppercase tracking-wider">Phone</div>
                    <div className="text-xl font-bold text-white">{personalInfo.phone}</div>
                  </div>
                </a>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassCard className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  <label htmlFor="name" className="text-sm font-bold tracking-widest uppercase text-text-muted">Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-brand transition-colors text-lg"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="flex flex-col gap-3">
                  <label htmlFor="email" className="text-sm font-bold tracking-widest uppercase text-text-muted">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-brand transition-colors text-lg"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <label htmlFor="message" className="text-sm font-bold tracking-widest uppercase text-text-muted">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-brand transition-colors text-lg resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <MagneticButton className="self-end mt-4">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-black font-bold text-lg hover:bg-slate-200 transition-colors disabled:opacity-50"
                  >
                    {status === 'loading' ? <Loader2 className="animate-spin" /> : <Send size={20} />}
                    {status === 'loading' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send Message'}
                  </button>
                </MagneticButton>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
