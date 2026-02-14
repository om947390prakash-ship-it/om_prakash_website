import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'
import clsx from 'clsx'

const duration = 0.5

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={clsx(
        'relative w-12 h-12 rounded-3xl flex items-center justify-center overflow-hidden',
        'backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10',
        'hover:shadow-glow-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan',
        'transition-shadow duration-300'
      )}
    >
      <span className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/20 to-purple-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      <div className="relative w-6 h-6">
        {/* Sun: rotates and "sets" (moves down + fade) when switching to dark */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{
            scale: isDark ? 0.3 : 1,
            opacity: isDark ? 0 : 1,
            y: isDark ? 12 : 0,
            rotate: isDark ? 90 : 0,
          }}
          transition={{ duration, ease: 'easeInOut' }}
        >
          <Sun className="w-6 h-6 text-amber-400 drop-shadow-sm" strokeWidth={2} />
        </motion.div>
        {/* Moon: rises (from below + fade in) when switching to dark */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{
            scale: isDark ? 1 : 0.3,
            opacity: isDark ? 1 : 0,
            y: isDark ? 0 : -12,
            rotate: isDark ? 0 : -90,
          }}
          transition={{ duration, ease: 'easeInOut' }}
        >
          <Moon className="w-6 h-6 text-slate-300 drop-shadow-sm" strokeWidth={2} />
        </motion.div>
      </div>
    </button>
  )
}
