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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <div className="glass-card p-5 sm:p-6 h-full flex flex-col border border-border/80 cursor-pointer">
        <div className="text-3xl sm:text-4xl mb-3">{icon}</div>
        <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}
