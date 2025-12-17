"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import type { ReactNode } from "react"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  details: string
  link?: string
  delay?: number
}

export default function ServiceCard({ icon, title, description, details, link = "/", delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Link
        to={link}
        className="group relative flex flex-col h-full p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-950/80 border border-slate-800/50 hover:border-red-500/30 transition-all duration-500 overflow-hidden"
      >
        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-blue-500/0 group-hover:from-red-500/5 group-hover:to-blue-500/5 transition-all duration-700 rounded-2xl" />

        {/* Top glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Icon */}
          <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 flex items-center justify-center text-red-500 group-hover:border-red-500/40 group-hover:shadow-lg group-hover:shadow-red-500/10 transition-all duration-300">
            {icon}
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
            {description}
          </p>

          {/* Footer - pushed to bottom */}
          <div className="pt-5 mt-auto border-t border-slate-800/50 flex items-center justify-between">
            <p className="text-xs text-slate-500 max-w-[70%]">{details}</p>
            <div className="flex items-center gap-1 text-slate-600 group-hover:text-red-500 transition-all duration-300 group-hover:translate-x-1">
              <ArrowRight size={18} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}


