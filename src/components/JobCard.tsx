"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { MapPin, Clock } from "lucide-react"

interface JobCardProps {
  title: string
  department: string
  location: string
  type: string
  description: string
  reportsTo: string
  jobId: string
  applyLink: string
  duration?: string
  delay?: number
}

export default function JobCard({
  title,
  department,
  location,
  type,
  description,
  reportsTo,
  jobId,
  applyLink,
  duration,
  delay = 0
}: JobCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="glass-card p-5 sm:p-8 hover:shadow-lg hover:shadow-accent-red/20 dark:hover:shadow-accent-red/10 transition-all duration-300"
    >
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-text dark:text-dark-text mb-2">{title}</h3>
          <p className="text-accent-red font-semibold mb-3 text-sm sm:text-base">{department}</p>
        </div>
      </div>

      <p className="text-text-secondary dark:text-dark-text-secondary mb-4 leading-relaxed text-sm sm:text-base">{description}</p>

      <div className="space-y-2 mb-6 text-xs sm:text-sm text-text-secondary dark:text-dark-text-secondary">
        <div className="flex items-center gap-2">
          <MapPin size={16} className="flex-shrink-0" />
          <span><strong>Location:</strong> {location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={16} className="flex-shrink-0" />
          <span><strong>Type:</strong> {type}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 text-accent-red flex-shrink-0">•</span>
          <span><strong>Reports To:</strong> {reportsTo}</span>
        </div>
        {duration && (
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 text-accent-red flex-shrink-0">•</span>
            <span><strong>Duration:</strong> {duration}</span>
          </div>
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 border-t border-border">
        <Link
          to={`/careers/${jobId}`}
          className="flex-1 px-4 py-3 bg-surface dark:bg-dark-surface text-text dark:text-dark-text font-semibold rounded-lg hover:bg-surface-hover dark:hover:bg-dark-surface-hover transition-colors text-center text-sm min-h-[48px] flex items-center justify-center"
        >
          Job Description
        </Link>
        <a
          href={applyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 px-4 py-3 bg-accent-red text-white font-semibold rounded-lg hover:bg-accent-red/90 transition-colors text-center text-sm min-h-[48px] flex items-center justify-center"
        >
          Apply
        </a>
      </div>
    </motion.div>
  )
}
