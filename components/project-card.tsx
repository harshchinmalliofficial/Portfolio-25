"use client"

import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string
  image?: string
  tags?: string[]
  index?: number
}

export default function ProjectCard({
  title,
  description,
  image = "/project-management-team.png",
  tags = [],
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-colors group"
    >
      <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
