"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  details: string
  link?: string
  delay?: number
}

export default function ServiceCard({ icon, title, description, details, link = "#", delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
      className="group relative h-full"
    >
      <Link href={link} className="block h-full">
        <div className="glass-card p-6 sm:p-7 h-full flex flex-col bg-card/95">
          <div className="relative z-10">
            <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl border border-border/70 bg-muted/60 text-primary flex items-center justify-center">
                {icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground flex-1 tracking-tight">
                {title}
              </h3>
            </div>

            <p className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">{description}</p>

            <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 leading-relaxed">{details}</p>

            <div className="mt-auto flex items-center gap-2 text-sm font-medium text-primary group-hover:text-secondary transition-colors">
              <span>Learn more</span>
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
