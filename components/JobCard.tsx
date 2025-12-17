"use client"

import { motion } from "framer-motion"
import { ExternalLink, MapPin, Clock } from "lucide-react"

interface JobCardProps {
  title: string
  department: string
  location: string
  type: string
  description: string
  link: string
  delay?: number
}

export default function JobCard({ title, department, location, type, description, link, delay = 0 }: JobCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="glass-card p-8 hover:shadow-lg hover:shadow-red-500/20 dark:hover:shadow-red-500/10 transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
          <p className="text-red-500 font-semibold mb-3">{department}</p>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
        >
          <ExternalLink size={20} className="text-muted-foreground" />
        </a>
      </div>

      <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>

      <div className="flex flex-wrap gap-4 mb-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin size={16} />
          {location}
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock size={16} />
          {type}
        </div>
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-red-500 font-semibold hover:gap-3 transition-all"
      >
        Apply Now
        <ExternalLink size={16} />
      </a>
    </motion.div>
  )
}
