"use client"

import { motion } from "framer-motion"
import { Award, Zap, TrendingUp, CheckCircle } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"
import Image from "next/image"

export default function Page() {
  const reasons = [
    {
      icon: <Award size={32} />,
      title: "Trusted Expertise",
      description:
        "Our community of FDI experts brings deep experience in Fusion ERP, SCM, HR, and CX to help you modernize analytics.",
    },
    {
      icon: <Zap size={32} />,
      title: "Faster Adoption",
      description:
        "With our proven methodologies, get started quickly with free implementation of standard Oracle FDI.",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Reduced Costs",
      description: "Minimize implementation expenses with our packaged offerings and strategic advisory services.",
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Smarter Insights",
      description: "Unlock actionable insights from your Oracle Fusion data to drive better business decisions.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero */}
        <section className="relative py-16 sm:py-24 md:py-32 bg-card border-b border-border/80">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="section-title mb-4 sm:mb-6"
            >
              Why Choose <span className="gradient-text">FDI Associates</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4"
            >
              Partner with industry leaders to maximize the value of your Oracle Fusion Data Intelligence investment
            </motion.p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-12 sm:py-16 md:py-24 bg-background dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 mb-16 sm:mb-20 md:mb-24">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="glass-card p-6 sm:p-8 space-y-4 overflow-hidden"
              >
                <div className="relative h-40 rounded-2xl overflow-hidden">
                  <Image src="/implementation_services.png" alt="Mission visual" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <p className="absolute bottom-3 left-4 text-xs uppercase tracking-[0.3em] text-white/80">Mission</p>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4">Our Mission</h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  We assess and validate all the prerequisites and implement standard Oracle FDI at no cost to get you
                  started quickly and effectively. Our mission is to democratize access to advanced data intelligence
                  solutions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="glass-card p-6 sm:p-8 space-y-4 overflow-hidden"
              >
                <div className="relative h-40 rounded-2xl overflow-hidden">
                  <Image src="/managed_services.png" alt="Vision visual" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <p className="absolute bottom-3 left-4 text-xs uppercase tracking-[0.3em] text-white/80">Vision</p>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4">Our Vision</h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  From initial implementation to post Go-live support, we manage, customize, and optimize your FDI
                  solution to align with your evolving business needs. We envision a world where every organization can
                  harness data intelligence effectively.
                </p>
              </motion.div>
            </div>

            {/* Reasons Grid */}
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="glass-card p-6 sm:p-8"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white mb-3 sm:mb-4 shadow-lg shadow-cyan-500/30"
                  >
                    {reason.icon}
                  </motion.div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{reason.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="relative py-16 sm:py-24 md:py-32 bg-gradient-to-b from-background via-cyan-500/5 to-background dark:via-cyan-500/2 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="text-center glass-card p-8 sm:p-10 md:p-12"
            >
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-3 sm:mb-4 leading-relaxed">
                "Exceptional service and expertise provided."
              </p>
              <p className="text-cyan-500 dark:text-cyan-400 font-semibold text-sm sm:text-base">— Oracle User</p>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-16 sm:py-24 md:py-32 bg-gradient-to-br from-cyan-500/10 via-blue-600/10 to-cyan-500/10 dark:from-cyan-500/5 dark:via-blue-600/5 dark:to-cyan-500/5 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <h2 className="section-title mb-4 sm:mb-6">Ready to <span className="gradient-text">Get Started?</span></h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-10 leading-relaxed px-4">
                Join hundreds of organizations leveraging FDI Associates to transform their Oracle Fusion strategy
              </p>
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="btn-primary inline-block text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3"
                >
                  Connect With Us Today
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
