"use client"

import { motion } from "framer-motion"

interface SkillTagProps {
  label: string
  index?: number
  category?: "frontend" | "backend" | "tools" | "learning"
}

const categoryColors = {
  frontend: "bg-blue-500/10 border-blue-500/30 hover:border-blue-500/70 text-blue-300",
  backend: "bg-purple-500/10 border-purple-500/30 hover:border-purple-500/70 text-purple-300",
  tools: "bg-cyan-500/10 border-cyan-500/30 hover:border-cyan-500/70 text-cyan-300",
  learning: "bg-amber-500/10 border-amber-500/30 hover:border-amber-500/70 text-amber-300",
}

export default function SkillTag({ label, index = 0, category = "frontend" }: SkillTagProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05, y: -2 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      viewport={{ once: true }}
      className={`px-4 py-2 rounded-lg border font-medium text-sm transition-all cursor-default ${categoryColors[category]}`}
    >
      {label}
    </motion.div>
  )
}
