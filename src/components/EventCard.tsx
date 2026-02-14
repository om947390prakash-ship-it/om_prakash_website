import { motion } from 'framer-motion'
import { Calendar, MapPin, Users } from 'lucide-react'
import clsx from 'clsx'

type EventCardProps = {
  title: string
  society: string
  date: string
  time: string
  venue: string
  capacity: number
  registered: number
  status: 'open' | 'full' | 'cancelled'
}

const statusConfig = {
  open: {
    label: 'Open',
    className: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    pulse: true,
  },
  full: {
    label: 'Full',
    className: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    pulse: false,
  },
  cancelled: {
    label: 'Cancelled',
    className: 'bg-red-500/20 text-red-400 border-red-500/30',
    pulse: false,
  },
}

export default function EventCard({
  title,
  society,
  date,
  time,
  venue,
  capacity,
  registered,
  status,
}: EventCardProps) {
  const config = statusConfig[status]
  const pct = capacity > 0 ? Math.min(100, (registered / capacity) * 100) : 0

  return (
    <motion.div
      className={clsx(
        'rounded-3xl overflow-hidden',
        'backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10',
        'shadow-soft dark:shadow-card-dark p-6',
        'hover:shadow-glow-cyan/50 dark:hover:shadow-glow-cyan/30',
        'hover:border-neon-cyan/30 transition-all duration-300'
      )}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">{society}</p>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">{title}</h3>
        </div>
        <span
          className={clsx(
            'shrink-0 inline-flex items-center gap-1.5 px-3 py-1 rounded-2xl border text-xs font-medium',
            config.className
          )}
        >
          {config.pulse && (
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-current" />
            </span>
          )}
          {config.label}
        </span>
      </div>

      <div className="space-y-2 text-sm text-slate-600 dark:text-slate-300 mb-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-neon-cyan shrink-0" />
          <span>{date} · {time}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-neon-purple shrink-0" />
          <span>{venue}</span>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
            <Users className="w-3.5 h-3.5" />
            Capacity
          </span>
          <span className="font-medium text-slate-700 dark:text-slate-300">
            {registered} / {capacity}
          </span>
        </div>
        <div className="h-2 rounded-full bg-white/10 dark:bg-black/20 overflow-hidden">
          <motion.div
            className={clsx(
              'h-full rounded-full',
              status === 'full' ? 'bg-amber-500' : 'bg-gradient-to-r from-neon-cyan to-neon-purple'
            )}
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        </div>
      </div>
    </motion.div>
  )
}
