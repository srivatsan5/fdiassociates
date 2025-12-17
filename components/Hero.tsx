"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={containerRef} className="relative overflow-hidden min-h-[calc(100vh-5rem)] flex items-center">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 pointer-events-none opacity-60" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg opacity=\"0.2\" width=\"120\" height=\"120\" viewBox=\"0 0 120 120\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M0 119.5H120M0 60H120M0 0.5H120M0 0V120\" stroke='%23cfc5bb' stroke-width='0.7' /%3E%3C/svg%3E')" }} />
      <motion.div
        style={{ opacity }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-32 w-full"
      >
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-border bg-card shadow-sm">
              <Sparkles size={14} className="text-secondary" />
              <span className="text-xs sm:text-sm font-semibold text-muted-foreground tracking-[0.2em] uppercase">
                Oracle FDI Studio
              </span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
            >
              <motion.span
                className="gradient-text-strong block mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Empowering Enterprise
              </motion.span>
              <motion.span
                className="text-foreground block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                with Oracle Fusion
              </motion.span>
              <motion.span
                className="gradient-text-strong block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Data Intelligence
              </motion.span>
              <motion.span
                className="text-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                (FDI) Solutions
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl"
            >
              Discover the ultimate Oracle FDI expert community—driving faster adoption, reduced implementation costs,
              and smarter Fusion ERP, HCM, CX, and SCM insights.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-3 sm:gap-4"
            >
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button size="lg" className="btn-primary group text-sm sm:text-base">
                    <span className="relative z-10 flex items-center gap-2">
                      Get Started
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </motion.div>
              </Link>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button variant="outline" size="lg" className="btn-secondary text-sm sm:text-base">
                  Learn More on FDI
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-3 gap-3 sm:gap-4 pt-6 sm:pt-8"
            >
              {[
                { value: "Free", label: "Out-of-Box FDI" },
                { value: "24/7", label: "Expert Support" },
                { value: "100+", label: "Implementations" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="glass-card p-4 sm:p-6 text-center cursor-pointer"
                >
                  <p className="text-2xl sm:text-3xl font-bold gradient-text-strong mb-1">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden md:grid gap-4"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { src: "/implementation_services.png", caption: "Implementation floor" },
                { src: "/managed_services.png", caption: "Managed pods" },
                { src: "/advisory_services.png", caption: "Strategy desk" },
                { src: "/Hero_image.png", caption: "FDI observatory" },
              ].map((shot, idx) => (
                <div
                  key={shot.caption}
                  className={`glass-card overflow-hidden rounded-3xl border border-border/60 shadow-[0_12px_30px_rgba(15,23,42,0.12)] ${
                    idx % 2 === 0 ? "mt-6" : ""
                  }`}
                >
                  <div className="relative h-48">
                    <Image src={shot.src} alt={shot.caption} fill className="object-cover" />
                  </div>
                  <div className="px-4 py-3 border-t border-border/60">
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{shot.caption}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute -left-6 bottom-4 glass-card px-4 py-3 rounded-2xl shadow-md shadow-black/10">
              <p className="text-xs text-muted-foreground uppercase tracking-[0.3em]">Daily notebooks</p>
              <p className="text-lg font-semibold text-foreground">12 product squads</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
