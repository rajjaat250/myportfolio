import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { Award, ImageOff, X, ExternalLink } from 'lucide-react'

// Add your certificate images to public/images/certificates/
// Name them cert1.jpg, cert2.jpg, etc. OR update the list below.
const certificates = [
  { id: 1, title: 'Web Development Internship', issuer: 'Cognifyz Technologies', src: '/images/certificates/cognifyz.png' },
  { id: 2, title: 'Introduction to Cyber Security', issuer: 'Infosys Springboard', src: '/images/certificates/infoysescybersecurity.png' },
  { id: 3, title: 'Hacknovate 7.0 Participant (Team Code4Coders)', issuer: 'ABES Institute of Technology', src: '/images/certificates/abesithackthone.png' },
  { id: 4, title: 'Software Engineering Job Simulation', issuer: 'JPMorgan Chase & Co.', src: '/images/certificates/jpmorganforage.png' },
]

// Duplicate for seamless infinite loop
const doubled = [...certificates, ...certificates]

function CertCard({ cert, onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex-shrink-0 w-72 md:w-80 premium-card overflow-hidden cursor-pointer select-none"
    >
      {/* Image */}
      <div className="relative w-full h-48 bg-pill-bg overflow-hidden border-b border-border-card">
        <img
          src={cert.src}
          alt={cert.title}
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.nextSibling.style.display = 'flex'
          }}
          className="w-full h-full object-cover"
          draggable={false}
        />
        <div
          className="absolute inset-0 items-center justify-center flex-col gap-2 bg-pill-bg hidden border border-border-card"
        >
          <ImageOff size={28} className="text-text-secondary/40" />
          <span className="text-[11px] text-text-secondary font-semibold text-center px-4">
            Add image to<br />public/images/certificates/
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-xl bg-pill-bg border border-border-card flex items-center justify-center flex-shrink-0 mt-0.5">
            <Award size={14} className="text-accent-blue" />
          </div>
          <div>
            <h4 className="text-[14px] font-bold text-text-primary leading-snug">{cert.title}</h4>
            <p className="text-[12px] text-text-secondary mt-0.5 font-medium">{cert.issuer}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null)

  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedCert])

  return (
    <div className="py-28 bg-bg-section overflow-hidden relative transition-colors duration-300 min-h-screen"
      style={{ borderTop: '1px solid var(--border-card)' }}
    >
      {/* Decorative background glow */}
      <div className="absolute left-0 bottom-1/3 w-[300px] h-[300px] bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-text-muted mb-4">
            Certificates
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary tracking-[-0.03em] mb-4">
            Achievements & Certifications
          </h2>
          <p className="text-[15px] text-text-secondary max-w-xs mx-auto leading-relaxed">
            Credentials earned through learning, internships, and hands-on contributions.
          </p>
        </motion.div>
      </div>


      {/* Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="carousel-wrapper"
      >
        <div className="carousel-track py-4 px-6">
          {doubled.map((cert, i) => (
            <CertCard
              key={`${cert.id}-${i}`}
              cert={cert}
              onClick={() => setSelectedCert(cert)}
            />
          ))}
        </div>
      </motion.div>

      {/* Hint */}
      <p className="text-center mt-8 text-[12px] text-text-muted px-6 font-medium">
        Click on any certificate to inspect details · Hover to pause
      </p>

      {/* Modal / Mini Window */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-bg-card border border-border-card rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl flex flex-col cursor-default"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-black/25 text-white hover:bg-black/40 transition-colors cursor-pointer flex items-center justify-center border border-white/10"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              {/* Certificate Image Frame */}
              <div className="relative w-full aspect-[4/3] bg-black/10 flex items-center justify-center overflow-hidden border-b border-border-card">
                <img
                  src={selectedCert.src}
                  alt={selectedCert.title}
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                  className="w-full h-full object-contain max-h-[70vh]"
                />
                {/* Fallback frame */}
                <div className="absolute inset-0 items-center justify-center flex-col gap-3 bg-bg-card hidden">
                  <ImageOff size={48} className="text-text-secondary/30" />
                  <span className="text-[14px] text-text-secondary font-semibold text-center px-6">
                    Certificate Image not found
                  </span>
                </div>
              </div>

              {/* Metadata Info Footer */}
              <div className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-bg-card/90 backdrop-blur-md">
                <div>
                  <h3 className="text-[16px] font-bold text-text-primary leading-tight capitalize">
                    {selectedCert.title}
                  </h3>
                  <p className="text-[14px] text-text-secondary mt-1 font-medium">
                    Issued by: <span className="text-accent-blue font-semibold">{selectedCert.issuer}</span>
                  </p>
                </div>
                <a
                  href={selectedCert.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-pill-bg text-text-primary text-[13px] font-semibold hover:bg-pill-bg/80 active:scale-95 transition-all duration-200 border border-pill-border cursor-pointer self-stretch sm:self-auto text-center justify-center"
                >
                  <ExternalLink size={14} />
                  Open Full File
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
