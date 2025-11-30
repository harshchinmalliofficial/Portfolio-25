"use client"

import { motion } from "framer-motion"

interface CertificateCardProps {
  title: string
  platform: string
  year: string
  image?: string
  index?: number
}

export default function CertificateCard({
  title,
  platform,
  year,
  image = "/formal-certificate.png",
  index = 0,
}: CertificateCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all"
    >
      <div className="relative h-64 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-1">{platform}</p>
        <p className="text-primary text-sm font-medium mb-4">{year}</p>
        <button className="w-full py-2 px-4 rounded-lg bg-primary/10 text-primary font-medium text-sm hover:bg-primary hover:text-primary-foreground transition-colors">
          View Certificate
        </button>
      </div>
    </motion.div>
  )
}
