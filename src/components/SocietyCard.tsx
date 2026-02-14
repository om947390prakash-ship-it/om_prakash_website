import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import clsx from 'clsx'

type SocietyCardProps = {
  name: string
  category: string
  members: number
  description: string
  accent?: 'cyan' | 'purple'
}

export default function SocietyCard({
  name,
  category,
  members,
  description,
  accent = 'cyan',
}: SocietyCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { stiffness: 300, damping: 25 }
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), springConfig)
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), springConfig)


  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  const isCyan = accent === 'cyan'

  return (
    <motion.div
      ref={cardRef}
      className={clsx(
        'rounded-3xl overflow-hidden cursor-pointer',
        'backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10',
        'shadow-soft dark:shadow-card-dark',
        'hover:shadow-glow-cyan dark:hover:shadow-glow-cyan/50',
        !isCyan && 'hover:shadow-glow-purple dark:hover:shadow-glow-purple/50'
      )}
      style={{
        perspective: 1000,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <motion.div
        className="p-6"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
      >
        <div
          className={clsx(
            'w-12 h-12 rounded-2xl flex items-center justify-center text-lg font-bold mb-4',
            isCyan ? 'bg-neon-cyan/20 text-neon-cyan' : 'bg-neon-purple/20 text-neon-purple'
          )}
          style={{ transform: 'translateZ(20px)' }}
        >
          {name.slice(0, 2).toUpperCase()}
        </div>
        <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1" style={{ transform: 'translateZ(16px)' }}>
          {category}
        </p>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2" style={{ transform: 'translateZ(18px)' }}>
          {name}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2 mb-4" style={{ transform: 'translateZ(12px)' }}>
          {description}
        </p>
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400" style={{ transform: 'translateZ(14px)' }}>
          {members} members
        </p>
      </motion.div>
    </motion.div>
  )
}
