import { motion } from 'framer-motion'
import { Users, Calendar, TrendingUp, Activity } from 'lucide-react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts'
import StatCard from '@/components/ui/StatCard'
import GlassCard from '@/components/ui/GlassCard'

const stats = [
  { label: 'Total Societies', value: 12, icon: Users, accent: 'cyan' as const },
  { label: 'Upcoming Events', value: 8, icon: Calendar, accent: 'purple' as const },
  { label: 'Active Members', value: 1247, icon: TrendingUp, accent: 'cyan' as const },
  { label: 'This Week', value: 23, icon: Activity, accent: 'purple' as const },
]

const lineData = [
  { name: 'Mon', members: 420, events: 12 },
  { name: 'Tue', members: 480, events: 15 },
  { name: 'Wed', members: 510, events: 18 },
  { name: 'Thu', members: 590, events: 14 },
  { name: 'Fri', members: 620, events: 22 },
  { name: 'Sat', members: 580, events: 20 },
  { name: 'Sun', members: 650, events: 16 },
]

const pieData = [
  { name: 'Tech', value: 35, color: '#00f5ff' },
  { name: 'Cultural', value: 28, color: '#a855f7' },
  { name: 'Sports', value: 22, color: '#22d3ee' },
  { name: 'Other', value: 15, color: '#c084fc' },
]

const recentActivity = [
  { id: 1, text: 'New member joined Tech Society', time: '2m ago' },
  { id: 2, text: 'Event "Hack Night" registered', time: '15m ago' },
  { id: 3, text: 'Cultural Society updated profile', time: '1h ago' },
  { id: 4, text: 'Sports meet scheduled for Friday', time: '2h ago' },
]

const upcomingEvents = [
  { id: 1, title: 'Hack Night', society: 'Tech', date: 'Feb 16' },
  { id: 2, title: 'Drama Rehearsal', society: 'Cultural', date: 'Feb 17' },
  { id: 3, title: 'Cricket Finals', society: 'Sports', date: 'Feb 18' },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
}

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
}

export default function Dashboard() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-8"
    >
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Dashboard</h1>
        <p className="text-slate-500 dark:text-slate-400">Welcome back. Here’s your society overview.</p>
      </div>

      <motion.div variants={item} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <StatCard
            key={s.label}
            label={s.label}
            value={s.value}
            icon={s.icon}
            accent={s.accent}
          />
        ))}
      </motion.div>

      <motion.div variants={item} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GlassCard className="lg:col-span-2" hover={false}>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Activity trend</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200 dark:stroke-slate-700" />
                <XAxis dataKey="name" className="text-xs" stroke="currentColor" />
                <YAxis className="text-xs" stroke="currentColor" />
                <Tooltip
                  contentStyle={{
                    borderRadius: '1rem',
                    border: '1px solid rgba(255,255,255,0.2)',
                    background: 'rgba(0,0,0,0.5)',
                    backdropFilter: 'blur(12px)',
                  }}
                />
                <Line type="monotone" dataKey="members" stroke="#00f5ff" strokeWidth={2} dot={{ fill: '#00f5ff' }} name="Members" />
                <Line type="monotone" dataKey="events" stroke="#a855f7" strokeWidth={2} dot={{ fill: '#a855f7' }} name="Events" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>
        <GlassCard hover={false}>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Societies by category</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                  nameKey="name"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {pieData.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Legend />
                <Tooltip
                  contentStyle={{
                    borderRadius: '1rem',
                    border: '1px solid rgba(255,255,255,0.2)',
                    background: 'rgba(0,0,0,0.5)',
                    backdropFilter: 'blur(12px)',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>
      </motion.div>

      <motion.div variants={item} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard hover={false}>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Recent activity</h3>
          <ul className="space-y-3">
            {recentActivity.map((a) => (
              <li
                key={a.id}
                className="flex items-center justify-between py-2 px-3 rounded-2xl bg-white/5 dark:bg-black/5 hover:bg-white/10 dark:hover:bg-black/10 transition-colors"
              >
                <span className="text-sm text-slate-700 dark:text-slate-300">{a.text}</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">{a.time}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
        <GlassCard hover={false}>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Upcoming events</h3>
          <ul className="space-y-3">
            {upcomingEvents.map((e) => (
              <li
                key={e.id}
                className="flex items-center justify-between py-3 px-4 rounded-2xl bg-white/5 dark:bg-black/5 border border-white/10 hover:border-neon-cyan/30 transition-colors"
              >
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">{e.title}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{e.society}</p>
                </div>
                <span className="text-sm font-medium text-neon-cyan">{e.date}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </motion.div>
    </motion.div>
  )
}
