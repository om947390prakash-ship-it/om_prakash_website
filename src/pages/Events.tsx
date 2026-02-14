import { motion } from 'framer-motion'
import EventCard from '@/components/EventCard'

const events = [
  {
    id: 1,
    title: 'Hack Night',
    society: 'Tech Society',
    date: 'Feb 16, 2025',
    time: '6:00 PM',
    venue: 'CS Block - Lab 2',
    capacity: 80,
    registered: 62,
    status: 'open' as const,
  },
  {
    id: 2,
    title: 'Drama Rehearsal',
    society: 'Cultural Club',
    date: 'Feb 17, 2025',
    time: '4:00 PM',
    venue: 'Auditorium',
    capacity: 40,
    registered: 40,
    status: 'full' as const,
  },
  {
    id: 3,
    title: 'Cricket Finals',
    society: 'Sports Association',
    date: 'Feb 18, 2025',
    time: '3:00 PM',
    venue: 'Main Ground',
    capacity: 200,
    registered: 145,
    status: 'open' as const,
  },
  {
    id: 4,
    title: 'Poetry Slam',
    society: 'Literary Society',
    date: 'Feb 19, 2025',
    time: '5:30 PM',
    venue: 'Central Lawn',
    capacity: 60,
    registered: 28,
    status: 'open' as const,
  },
  {
    id: 5,
    title: 'Photo Walk',
    society: 'Photography Club',
    date: 'Feb 20, 2025',
    time: '7:00 AM',
    venue: 'Campus & City',
    capacity: 25,
    registered: 25,
    status: 'full' as const,
  },
  {
    id: 6,
    title: 'Startup Pitch',
    society: 'E-Cell',
    date: 'Feb 21, 2025',
    time: '2:00 PM',
    venue: 'Incubation Center',
    capacity: 50,
    registered: 33,
    status: 'open' as const,
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
}

export default function Events() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-8"
    >
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Events</h1>
        <p className="text-slate-500 dark:text-slate-400">Discover and register for upcoming events.</p>
      </div>

      <motion.div
        variants={item}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {events.map((e) => (
          <EventCard
            key={e.id}
            title={e.title}
            society={e.society}
            date={e.date}
            time={e.time}
            venue={e.venue}
            capacity={e.capacity}
            registered={e.registered}
            status={e.status}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}
