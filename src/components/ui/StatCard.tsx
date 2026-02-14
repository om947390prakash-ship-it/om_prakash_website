import { motion, useSpring, useMotionValueEvent } from 'framer-motion'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import type { LucideIcon } from 'lucide-react'

type StatCardProps = {
  label: string
  value: number
  icon: LucideIcon
  accent?: 'cyan' | 'purple'
  suffix?: string
}

function CountUp({ value, suffix = '' }: { value: number; suffix?: string }) {
  const spring = useSpring(0, { stiffness: 50, damping: 30 })
  const [display, setDisplay] = useState(0)

  useMotionValueEvent(spring, 'change', (v) => setDisplay(Math.round(v)))

  useEffect(() => {
    spring.set(value)
  }, [value, spring])

  return (
    <span className="tabular-nums">
      {display}
      {suffix}
    </span>
  )
}

export default function StatCard({ label, value, icon: Icon, accent = 'cyan', suffix = '' }: StatCardProps) {
  const isCyan = accent === 'cyan'
  return (
    <motion.div
      className={clsx(
        'rounded-3xl backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10',
        'shadow-soft dark:shadow-card-dark p-6',
        'hover:shadow-glow-cyan hover:border-neon-cyan/30 dark:hover:border-neon-cyan/30',
        !isCyan && 'hover:shadow-glow-purple hover:border-neon-purple/30 dark:hover:border-neon-purple/30',
        'transition-all duration-300'
      )}
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">{label}</p>
          <p
            className={clsx(
              'text-2xl font-bold',
              isCyan ? 'text-neon-cyan' : 'text-neon-purple'
            )}
          >
            <CountUp value={value} suffix={suffix} />
          </p>
        </div>
        <div
          className={clsx(
            'w-10 h-10 rounded-2xl flex items-center justify-center',
            isCyan ? 'bg-neon-cyan/20 text-neon-cyan' : 'bg-neon-purple/20 text-neon-purple'
          )}
        >
          <Icon className="w-5 h-5" strokeWidth={2} />
        </div>
      </div>
    </motion.div>
  )
}
