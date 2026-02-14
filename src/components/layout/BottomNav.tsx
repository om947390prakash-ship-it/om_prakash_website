import { NavLink } from 'react-router-dom'
import { LayoutDashboard, Users, Calendar, Sparkles } from 'lucide-react'
import clsx from 'clsx'

const navItems = [
  { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/societies', icon: Users, label: 'Societies' },
  { to: '/events', icon: Calendar, label: 'Events' },
  { to: '/ai', icon: Sparkles, label: 'AI' },
]

export default function BottomNav() {
  return (
    <nav
      className={clsx(
        'md:hidden fixed bottom-0 left-0 right-0 z-40',
        'backdrop-blur-xl bg-white/10 dark:bg-black/10 border-t border-white/20 dark:border-white/10',
        'safe-area-pb'
      )}
    >
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              clsx(
                'flex flex-col items-center justify-center gap-0.5 rounded-2xl px-4 py-2 min-w-[64px] transition-colors',
                isActive
                  ? 'text-neon-cyan'
                  : 'text-slate-500 dark:text-slate-400'
              )
            }
          >
            <Icon className="w-5 h-5" strokeWidth={2} />
            <span className="text-xs font-medium">{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
