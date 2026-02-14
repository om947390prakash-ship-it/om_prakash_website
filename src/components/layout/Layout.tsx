import { type ReactNode } from 'react'
import { useSidebar } from '@/hooks/useSidebar'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import BottomNav from './BottomNav'

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const { collapsed } = useSidebar()
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const sidebarWidth = isDesktop ? (collapsed ? 72 : 256) : 0

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen transition-[margin-left] duration-300" style={{ marginLeft: sidebarWidth }}>
        <Navbar />
        <main className="flex-1 pt-16 pb-20 md:pb-8 px-4 md:px-6 overflow-auto">
          <div className="max-w-7xl mx-auto py-6">
            {children}
          </div>
        </main>
        <BottomNav />
      </div>
    </div>
  )
}
