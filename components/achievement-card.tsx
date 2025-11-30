"use client"

import { motion } from "framer-motion"

interface AchievementCardProps {
  title: string
  description: string
  icon: string
  metric?: string
  index?: number
}

export default function AchievementCard({ title, description, icon, metric, index = 0 }: AchievementCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors group"
    >
      <div className="flex items-start gap-4">
        <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{icon}</div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-foreground mb-1">{title}</h3>
          <p className="text-muted-foreground text-sm mb-3">{description}</p>
          {metric && <p className="text-primary font-semibold text-sm">{metric}</p>}
        </div>
      </div>
    </motion.div>
  )
}
