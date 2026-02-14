import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Bell, ChevronDown, Menu } from 'lucide-react'
import clsx from 'clsx'
import ThemeToggle from '@/components/ThemeToggle'
import { useSidebar } from '@/hooks/useSidebar'
import { useMediaQuery } from '@/hooks/useMediaQuery'

export default function Navbar() {
  const [searchFocused, setSearchFocused] = useState(false)
  const [notifOpen, setNotifOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const { collapsed, toggle } = useSidebar()
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const sidebarWidth = isDesktop ? (collapsed ? 72 : 256) : 0

  return (
    <header
      className={clsx(
        'fixed top-0 right-0 z-30 h-16',
        'backdrop-blur-xl bg-white/10 dark:bg-black/10 border-b border-white/20 dark:border-white/10',
        'transition-[left] duration-300 ease-in-out'
      )}
      style={{ left: `${sidebarWidth}px` }}
    >
      <div className="flex items-center justify-between h-full px-4 md:px-6 gap-4">
        <div className="flex items-center gap-3 flex-1 max-w-xl">
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle sidebar"
            className="md:hidden w-10 h-10 rounded-2xl flex items-center justify-center hover:bg-white/10"
          >
            <Menu className="w-5 h-5" />
          </button>
          <Link
            to="/"
            className="md:hidden font-bold text-lg bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent"
          >
            Society
          </Link>
          <div
            className={clsx(
              'flex-1 flex items-center gap-2 rounded-3xl px-4 py-2.5',
              'backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10',
              'transition-all duration-300',
              searchFocused && 'ring-2 ring-neon-cyan/50 shadow-glow-cyan/20'
            )}
          >
            <Search className="w-4 h-4 text-slate-400 shrink-0" />
            <input
              type="search"
              placeholder="Search societies, events..."
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              className="flex-1 bg-transparent border-none outline-none text-sm placeholder:text-slate-400"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="relative">
            <button
              type="button"
              onClick={() => setNotifOpen((o) => !o)}
              aria-label="Notifications"
              className="relative w-10 h-10 rounded-2xl flex items-center justify-center backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 hover:shadow-glow-cyan/20 transition-shadow"
            >
              <Bell className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
            </button>
            <AnimatePresence>
              {notifOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="absolute right-0 top-full mt-2 w-72 rounded-3xl backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 p-4 shadow-xl"
                >
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Notifications</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">No new notifications.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="relative">
            <button
              type="button"
              onClick={() => setProfileOpen((o) => !o)}
              className="flex items-center gap-2 rounded-3xl pl-2 pr-3 py-2 backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 hover:shadow-glow-cyan/20 transition-shadow"
            >
              <div className="w-8 h-8 rounded-2xl bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center text-white text-sm font-bold">
                OP
              </div>
              <ChevronDown className={clsx('w-4 h-4 text-slate-500 transition-transform', profileOpen && 'rotate-180')} />
            </button>
            <AnimatePresence>
              {profileOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="absolute right-0 top-full mt-2 w-48 rounded-3xl backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 p-2 shadow-xl"
                >
                  <button
                    type="button"
                    className="w-full text-left px-4 py-2 rounded-2xl text-sm hover:bg-white/10"
                  >
                    Profile
                  </button>
                  <button
                    type="button"
                    className="w-full text-left px-4 py-2 rounded-2xl text-sm hover:bg-white/10"
                  >
                    Settings
                  </button>
                  <button
                    type="button"
                    className="w-full text-left px-4 py-2 rounded-2xl text-sm hover:bg-white/10 text-red-400"
                  >
                    Sign out
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  )
}
