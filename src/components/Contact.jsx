import { motion, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, MapPin, Send } from 'lucide-react'
import GithubIcon from './GithubIcon'
import LinkedinIcon from './LinkedinIcon'

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || 'YOUR_SERVICE_ID'
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || 'YOUR_PUBLIC_KEY'

/* Premium iOS-style Toast Notification */
function Toast({ message, type, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 4000)
    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0, y: -50, scale: 0.9, x: '-50%' }}
      animate={{ opacity: 1, y: 0, scale: 1, x: '-50%' }}
      exit={{ opacity: 0, y: -20, scale: 0.95, x: '-50%' }}
      transition={{ type: 'spring', stiffness: 380, damping: 26 }}
      className="fixed top-6 left-1/2 z-50 flex items-center gap-3 px-5 py-3 rounded-full bg-white/70 dark:bg-black/75 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-2xl text-[13px] font-medium tracking-tight pointer-events-auto"
      style={{
        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04)'
      }}
    >
      {type === 'success' ? (
        <span className="w-5 h-5 rounded-full bg-[#34c759] dark:bg-[#30d158] flex items-center justify-center text-white shrink-0 shadow-sm">
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
      ) : (
        <span className="w-5 h-5 rounded-full bg-[#ff3b30] dark:bg-[#ff453a] flex items-center justify-center text-white shrink-0 shadow-sm">
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </span>
      )}
      <span className="text-text-primary whitespace-nowrap">{message}</span>
      <button 
        onClick={onClose} 
        className="ml-2 text-text-muted hover:text-text-primary transition-colors focus:outline-none cursor-pointer"
        aria-label="Close notification"
      >
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </motion.div>
  )
}

/* Floating-label input wrapper with glassmorphism and smooth ring focus */
function FloatField({ type = 'text', name, id, label, value, onChange, rows }) {
  const baseClass =
    'block w-full px-4 pt-6 pb-2 rounded-2xl border border-input-border bg-input-bg text-[14px] text-text-primary outline-none focus:ring-4 focus:ring-accent-blue/10 focus:border-accent-blue focus:bg-white/40 dark:focus:bg-black/25 transition-all duration-300 peer backdrop-blur-sm shadow-sm'
  const labelClass =
    'absolute left-4 top-4 text-[13px] text-text-secondary transition-all duration-300 origin-[0] -translate-y-2.5 scale-[0.85] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-2.5 peer-focus:scale-[0.85] peer-focus:text-accent-blue pointer-events-none'

  return (
    <div className="relative group">
      {rows ? (
        <textarea
          name={name} id={id} value={value} onChange={onChange}
          required rows={rows} placeholder=" "
          className={`${baseClass} resize-none`}
        />
      ) : (
        <input
          type={type} name={name} id={id} value={value} onChange={onChange}
          required placeholder=" " className={baseClass}
        />
      )}
      <label htmlFor={id} className={labelClass}>{label}</label>
    </div>
  )
}

export default function Contact() {
  const formRef = useRef(null)

  const [form,   setForm]   = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [toast,  setToast]  = useState(null) // null | { message, type }

  const handleChange  = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  
  const triggerToast = (message, type) => {
    setToast({ message, type })
  }

  const handleSubmit  = async (e) => {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')
    
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY })
      
      // Play iOS message sent chime exactly once
      try {
        const audio = new Audio('/message-sent.wav')
        audio.volume = 0.4
        audio.play()
      } catch (soundErr) {
        console.warn('Audio playback was blocked or failed to play:', soundErr)
      }

      setStatus('success')
      triggerToast('Message Sent Successfully', 'success')
      setForm({ name: '', email: '', message: '' })
      
      // Keep checkmark for 3 seconds before resetting the button state
      setTimeout(() => {
        setStatus('idle')
      }, 3000)
    } catch (err) {
      console.error('EmailJS submission failed:', err)
      setStatus('error')
      triggerToast('Failed to send. Please try again.', 'error')
      
      setTimeout(() => {
        setStatus('idle')
      }, 3500)
    }
  }

  return (
    <div className="py-28 bg-bg-main relative overflow-hidden transition-colors duration-300 min-h-screen">
      {/* iOS Toast Mount point */}
      <AnimatePresence>
        {toast && (
          <Toast 
            message={toast.message} 
            type={toast.type} 
            onClose={() => setToast(null)} 
          />
        )}
      </AnimatePresence>

      {/* Centered ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <div
          className="w-[700px] h-[700px] rounded-full"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(0,113,227,0.05) 0%, transparent 65%)',
          }}
        />
      </div>

      <div className="section-container relative z-10">

        {/* ── Header ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-text-muted mb-4">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary tracking-[-0.03em] mb-4">
            Let's Connect
          </h2>
          <p className="text-[15px] text-text-secondary max-w-xs mx-auto leading-relaxed">
            Open to internship opportunities, collaborations, and
            interesting conversations.
          </p>
        </motion.div>

        {/* Two-column Apple Support-style layout */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
        >

          {/* ── Left Column: Contact details, Socials & Availability ── */}
          <div className="lg:col-span-5 flex flex-col gap-4">

            {/* Details Card */}
            <div className="premium-card p-6 flex flex-col gap-5">
              <h3 className="text-[15px] font-semibold text-text-primary tracking-[-0.02em]">
                Contact
              </h3>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(0,113,227,0.08)', border: '1px solid rgba(0,113,227,0.15)' }}
                >
                  <Mail size={15} className="text-accent-blue" />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-text-muted mb-0.5">
                    Email
                  </p>
                  <a
                    href="mailto:dhariwalraj37@gmail.com"
                    className="text-[13px] font-medium text-text-primary hover:text-accent-blue transition-colors"
                  >
                    dhariwalraj37@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-2xl flex items-center justify-center shrink-0 bg-pill-bg border border-pill-border">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-muted"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-text-muted mb-0.5">
                    Phone
                  </p>
                  <p className="text-[13px] font-medium text-text-primary">
                    +91 6396196356
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-2xl flex items-center justify-center shrink-0 bg-pill-bg border border-pill-border">
                  <MapPin size={15} className="text-text-muted" />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-text-muted mb-0.5">
                    Location
                  </p>
                  <p className="text-[13px] font-medium text-text-primary">
                    Ghaziabad, UP, India
                  </p>
                </div>
              </div>

              <div style={{ height: '1px', background: 'var(--border-card)' }} />

              {/* Social links */}
              <div>
                <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-text-muted mb-3">
                  Socials
                </p>
                <div className="flex gap-2">
                  <a
                    href="https://github.com/rajjaat250"
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-pill-bg border border-pill-border text-[12px] font-medium text-text-secondary hover:text-text-primary hover:border-border-card transition-all"
                  >
                    <GithubIcon size={13} /> GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/raj-chaudhary-15213630b"
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-pill-bg border border-pill-border text-[12px] font-medium text-text-secondary hover:text-accent-blue hover:border-accent-blue/30 transition-all"
                  >
                    <LinkedinIcon size={13} /> LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Availability Indicator */}
            <div className="premium-card p-5">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent-green shrink-0 animate-pulse" />
                <div>
                  <p className="text-[13px] font-semibold text-text-primary tracking-[-0.01em]">
                    Open to Opportunities
                  </p>
                  <p className="text-[12px] text-text-muted mt-0.5">
                    Actively seeking internships · 2025–26
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right Column: Apple-inspired Form ── */}
          <div className="lg:col-span-7">
            <div className="premium-card p-6 md:p-8">
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h3 className="text-[15px] font-semibold text-text-primary tracking-[-0.02em] mb-1">
                  Send a Message
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FloatField
                    name="name" id="contact-name" label="Your Name"
                    value={form.name} onChange={handleChange}
                  />
                  <FloatField
                    type="email" name="email" id="contact-email" label="Email Address"
                    value={form.email} onChange={handleChange}
                  />
                </div>

                <FloatField
                  name="message" id="contact-message" label="Message"
                  value={form.message} onChange={handleChange} rows={5}
                />

                {/* Submit button with dynamic morphing background and animated scale scale-pop */}
                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  animate={{
                    backgroundColor: 
                      status === 'success'
                        ? 'var(--accent-green, #34c759)'
                        : status === 'error'
                        ? '#ff3b30'
                        : 'var(--accent-blue, #0071e3)',
                    scale: status === 'success' ? [1, 1.03, 1] : 1
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  whileHover={{ y: -1 }}
                  whileTap={{ y: 0.5 }}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-2xl text-white text-[14px] font-semibold cursor-pointer select-none transition-shadow shadow-sm hover:shadow-md disabled:cursor-not-allowed focus:outline-none"
                >
                  <AnimatePresence mode="wait">
                    {status === 'idle' && (
                      <motion.div
                        key="idle"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.15 }}
                        className="flex items-center justify-center gap-2"
                      >
                        <Send size={14} />
                        <span>Send Message</span>
                      </motion.div>
                    )}

                    {status === 'sending' && (
                      <motion.div
                        key="sending"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.15 }}
                        className="flex items-center justify-center gap-2"
                      >
                        {/* Smooth loading spinner */}
                        <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        <span>Sending...</span>
                      </motion.div>
                    )}

                    {status === 'success' && (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center justify-center gap-2"
                      >
                        {/* Apple-style drawing checkmark animation */}
                        <svg className="w-4.5 h-4.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <motion.path
                            d="M20 6L9 17L4 12"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.35, ease: 'easeOut', delay: 0.05 }}
                          />
                        </svg>
                        <span>Message Sent</span>
                      </motion.div>
                    )}

                    {status === 'error' && (
                      <motion.div
                        key="error"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center justify-center gap-2"
                      >
                        <svg className="w-4.5 h-4.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span>Failed to Send</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
