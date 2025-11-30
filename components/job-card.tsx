"use client"

import { motion } from "framer-motion"

interface JobCardProps {
  role: string
  company: string
  duration: string
  responsibilities: string[]
  technologies: string[]
  index?: number
}

export default function JobCard({ role, company, duration, responsibilities, technologies, index = 0 }: JobCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="relative pl-8 pb-8 border-l-2 border-primary"
    >
      {/* Timeline dot */}
      <div className="absolute -left-3.5 top-0 w-6 h-6 rounded-full bg-primary border-4 border-background" />

      <div className="bg-card rounded-xl p-6 border border-border">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
          <div>
            <h3 className="text-lg font-bold text-foreground">{role}</h3>
            <p className="text-primary font-medium">{company}</p>
          </div>
          <span className="text-sm text-muted-foreground whitespace-nowrap">{duration}</span>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-foreground mb-2">Responsibilities</h4>
          <ul className="space-y-1">
            {responsibilities.map((resp, idx) => (
              <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
