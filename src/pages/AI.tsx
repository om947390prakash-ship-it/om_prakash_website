import { motion } from 'framer-motion'
import { Sparkles, MessageCircle } from 'lucide-react'
import GlassCard from '@/components/ui/GlassCard'

export default function AI() {
  return (
    <div className="space-y-8 relative">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">AI Recommendations</h1>
        <p className="text-slate-500 dark:text-slate-400">Personalized society and event suggestions.</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative"
      >
        <GlassCard className="relative overflow-hidden" hover={false}>
          {/* Sparkle accents */}
          <motion.span
            className="absolute top-6 right-12 w-2 h-2 rounded-full bg-neon-cyan"
            animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.span
            className="absolute top-16 right-24 w-1.5 h-1.5 rounded-full bg-neon-purple"
            animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.3, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
          />
          <motion.span
            className="absolute bottom-12 left-16 w-1 h-1 rounded-full bg-neon-cyan"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          />
          <motion.span
            className="absolute bottom-20 left-32 w-2 h-2 rounded-full bg-neon-purple"
            animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
          />

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-white" strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                Based on your interests
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                You might like <strong className="text-neon-cyan">Tech Society</strong> and{' '}
                <strong className="text-neon-purple">E-Cell</strong>. Consider attending{' '}
                <strong>Hack Night</strong> (Feb 16) and <strong>Startup Pitch</strong> (Feb 21).
              </p>
              <motion.button
                type="button"
                className="rounded-2xl px-4 py-2 bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/40 hover:bg-neon-cyan/30 hover:shadow-glow-cyan/30 transition-all text-sm font-medium"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                View recommendations
              </motion.button>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Floating chatbot button: gentle bounce + outer ring pulse */}
      <motion.button
        type="button"
        aria-label="Open AI chat"
        className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-50 flex items-center justify-center w-14 h-14 rounded-3xl bg-gradient-to-br from-neon-cyan to-neon-purple text-white shadow-glow-cyan hover:shadow-glow-cyan-hover transition-shadow overflow-visible"
        initial={false}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="absolute inset-0 rounded-3xl border-2 border-neon-cyan/50 animate-ring-pulse scale-150" />
        <MessageCircle className="w-6 h-6 relative z-10" strokeWidth={2} />
      </motion.button>
    </div>
  )
}
