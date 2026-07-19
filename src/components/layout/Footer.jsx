import { Link } from 'react-router-dom'
import { personalInfo } from '../../data/personalInfo'

export default function Footer() {
  return (
    <footer className="border-t border-border-card bg-bg-main py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-end">
          <div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6">
              Let's build<br />
              <span className="text-brand">the future.</span>
            </h2>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-xl md:text-2xl font-semibold text-text-secondary hover:text-white transition-colors"
            >
              {personalInfo.email}
            </a>
          </div>

          <div className="flex flex-col md:items-end gap-6">
            <div className="flex gap-6">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-text-muted hover:text-white font-medium transition-colors">
                GitHub
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-text-muted hover:text-white font-medium transition-colors">
                LinkedIn
              </a>
              <a href={personalInfo.resume} target="_blank" rel="noreferrer" className="text-text-muted hover:text-white font-medium transition-colors">
                Resume
              </a>
            </div>
            <p className="text-sm text-text-muted">
              &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
