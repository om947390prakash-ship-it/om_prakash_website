import { motion } from 'framer-motion'
import clsx from 'clsx'

type GlassCardProps = {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export default function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <motion.div
      className={clsx(
        'rounded-3xl backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10',
        'shadow-soft dark:shadow-card-dark p-6',
        hover && 'hover:shadow-glow-cyan/50 dark:hover:shadow-glow-cyan/30 transition-shadow duration-300',
        className
      )}
      whileHover={hover ? { scale: 1.03, y: -4 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  )
}
