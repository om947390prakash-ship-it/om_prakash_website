import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  Users,
  Calendar,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import clsx from 'clsx'
import { useSidebar } from '@/hooks/useSidebar'

const navItems = [
  { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/societies', icon: Users, label: 'Societies' },
  { to: '/events', icon: Calendar, label: 'Events' },
  { to: '/ai', icon: Sparkles, label: 'AI' },
]

export default function Sidebar() {
  const { collapsed, toggle } = useSidebar()

  return (
    <motion.aside
      className={clsx(
        'hidden md:flex flex-col fixed left-0 top-0 z-40 h-screen',
        'backdrop-blur-xl bg-white/10 dark:bg-black/10 border-r border-white/20 dark:border-white/10',
        'shadow-soft dark:shadow-card-dark'
      )}
      initial={false}
      animate={{ width: collapsed ? 72 : 256 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
    >
      <div className="flex flex-col h-full p-3">
        <div className="flex items-center justify-between h-14 px-2 mb-4">
          {!collapsed && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="font-bold text-lg bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent"
            >
              Society
            </motion.span>
          )}
          <button
            type="button"
            onClick={toggle}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            className="w-9 h-9 rounded-2xl flex items-center justify-center hover:bg-white/10 dark:hover:bg-white/10 transition-colors"
          >
            {collapsed ? (
              <ChevronRight className="w-5 h-5 text-slate-600 dark:text-slate-400" />
            ) : (
              <ChevronLeft className="w-5 h-5 text-slate-600 dark:text-slate-400" />
            )}
          </button>
        </div>
        <nav className="flex-1 flex flex-col gap-1">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                clsx(
                  'flex items-center gap-3 rounded-2xl px-3 py-2.5 transition-colors',
                  isActive
                    ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-white/10 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-slate-100'
                )
              }
            >
              <Icon className="w-5 h-5 shrink-0" strokeWidth={2} />
              {!collapsed && <span className="font-medium">{label}</span>}
            </NavLink>
          ))}
        </nav>
      </div>
    </motion.aside>
  )
}
