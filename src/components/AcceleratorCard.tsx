"use client"

import { motion } from "framer-motion"

interface AcceleratorCardProps {
  title: string
  description: string
  icon: string
  delay?: number
}

export default function AcceleratorCard({ title, description, icon, delay = 0 }: AcceleratorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="h-full"
    >
      <div className="group relative h-full p-6 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-950/80 border border-slate-800/50 hover:border-blue-500/30 transition-all duration-500 overflow-hidden">
        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-700 rounded-2xl" />

        {/* Top glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
            {icon}
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm text-slate-400 leading-relaxed">
            {description}
          </p>

          {/* Bottom accent line */}
          <motion.div
            className="mt-5 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "40%" }}
            transition={{ duration: 0.6, delay: delay + 0.3 }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    </motion.div>
  )
}


