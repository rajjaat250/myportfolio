import { motion } from 'framer-motion'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, MapPin, Send, Loader2 } from 'lucide-react'
import GithubIcon from './GithubIcon'
import LinkedinIcon from './LinkedinIcon'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle, loading, success, error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return

    setStatus('loading')

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    }

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      })
      .catch((err) => {
        console.error('EmailJS Error:', err)
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      })
  }

  return (
    <div className="py-32 bg-slate-50 min-h-screen flex items-center justify-center border-t border-slate-200">
      <div className="section-container max-w-5xl w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-100 mb-6">
            <Mail size={16} className="text-brand-600" />
            <span className="text-xs font-bold tracking-widest uppercase text-brand-700">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Let's build something <span className="text-brand-600">together</span>.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            I'm currently looking for new opportunities, internships, and exciting projects. My inbox is always open!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-start">
          {/* Contact Info (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 border border-brand-100">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Email</h3>
                  <a href="mailto:rajjaat250@gmail.com" className="text-slate-600 hover:text-brand-600 transition-colors">
                    rajjaat250@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 border border-brand-100">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Location</h3>
                  <p className="text-slate-600">
                    Ghaziabad, UP, India
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl shadow-xl flex flex-col gap-6 text-white">
              <h3 className="text-xl font-bold">Connect on Social</h3>
              <p className="text-slate-400">Feel free to connect with me on LinkedIn or check out my code on GitHub.</p>
              
              <div className="flex gap-4">
                <a href="https://github.com/rajjaat250" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
                  <GithubIcon size={24} />
                </a>
                <a href="https://www.linkedin.com/in/raj-chaudhary-15213630b" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
                  <LinkedinIcon size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3 bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-bold text-slate-900">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all placeholder:text-slate-400 text-slate-900"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-bold text-slate-900">Your Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all placeholder:text-slate-400 text-slate-900"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-bold text-slate-900">Your Message</label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  placeholder="Hello, I'd like to talk about..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all resize-none placeholder:text-slate-400 text-slate-900"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="group w-full md:w-auto md:ml-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-600 text-white font-bold hover:bg-brand-700 focus:ring-4 focus:ring-brand-500/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <>
                    Sent Successfully!
                  </>
                ) : status === 'error' ? (
                  <>
                    Failed to Send
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
