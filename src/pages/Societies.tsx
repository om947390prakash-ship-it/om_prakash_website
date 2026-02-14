import { motion } from 'framer-motion'
import SocietyCard from '@/components/SocietyCard'

const societies = [
  {
    id: 1,
    name: 'Tech Society',
    category: 'Tech',
    members: 320,
    description: 'Coding, hackathons, and tech talks. Build projects and network with industry experts.',
    accent: 'cyan' as const,
  },
  {
    id: 2,
    name: 'Cultural Club',
    category: 'Cultural',
    members: 280,
    description: 'Drama, music, dance, and art. Showcase talent and celebrate diversity.',
    accent: 'purple' as const,
  },
  {
    id: 3,
    name: 'Sports Association',
    category: 'Sports',
    members: 450,
    description: 'Cricket, football, basketball and more. Stay fit and compete at inter-college level.',
    accent: 'cyan' as const,
  },
  {
    id: 4,
    name: 'Literary Society',
    category: 'Literary',
    members: 120,
    description: 'Creative writing, debates, and poetry. Find your voice and share stories.',
    accent: 'purple' as const,
  },
  {
    id: 5,
    name: 'Photography Club',
    category: 'Creative',
    members: 95,
    description: 'Learn composition, editing, and storytelling through the lens.',
    accent: 'cyan' as const,
  },
  {
    id: 6,
    name: 'Entrepreneurship Cell',
    category: 'Business',
    members: 180,
    description: 'Startup workshops, pitch events, and mentorship from founders.',
    accent: 'purple' as const,
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
}

export default function Societies() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-8"
    >
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Societies</h1>
        <p className="text-slate-500 dark:text-slate-400">Browse and join college societies.</p>
      </div>

      <motion.div
        variants={item}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {societies.map((s) => (
          <SocietyCard
            key={s.id}
            name={s.name}
            category={s.category}
            members={s.members}
            description={s.description}
            accent={s.accent}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}
