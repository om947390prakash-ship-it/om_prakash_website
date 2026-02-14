import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Layout from '@/components/layout/Layout'
import { SidebarProvider } from '@/hooks/useSidebar'

const Dashboard = lazy(() => import('@/pages/Dashboard'))
const Societies = lazy(() => import('@/pages/Societies'))
const Events = lazy(() => import('@/pages/Events'))
const AI = lazy(() => import('@/pages/AI'))

const pageVariants = {
  initial: {
    opacity: 0,
    y: 16,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.2 },
  },
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="h-full"
    >
      {children}
    </motion.div>
  )
}

function App() {
  const location = useLocation()

  return (
    <SidebarProvider>
      <Layout>
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-[60vh]">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="w-10 h-10 border-2 border-neon-cyan border-t-transparent rounded-full"
              />
            </div>
          }
        >
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <PageWrapper>
                    <Dashboard />
                  </PageWrapper>
                }
              />
              <Route
                path="/societies"
                element={
                  <PageWrapper>
                    <Societies />
                  </PageWrapper>
                }
              />
              <Route
                path="/events"
                element={
                  <PageWrapper>
                    <Events />
                  </PageWrapper>
                }
              />
              <Route
                path="/ai"
                element={
                  <PageWrapper>
                    <AI />
                  </PageWrapper>
                }
              />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </Layout>
    </SidebarProvider>
  )
}

export default App
