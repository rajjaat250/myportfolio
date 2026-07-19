import { cn } from '../../utils/cn'

export default function GlassCard({ children, className, ...props }) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-300 hover:border-white/20',
        className
      )}
      {...props}
    >
      {/* Subtle top glare */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      {children}
    </div>
  )
}
