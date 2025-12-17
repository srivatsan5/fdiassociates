"use client"

import { motion } from "framer-motion"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"

export default function Page() {
  const accelerators = [
    {
      title: "Financial Analytics",
      description:
        "Accelerate financial insights and reporting with prebuilt Oracle FDI analytics accelerators. Gain real-time visibility into financial performance.",
      icon: "📊",
    },
    {
      title: "Supply Chain Optimization",
      description:
        "Streamline supply chain operations with advanced data intelligence and predictive analytics. Reduce costs and improve efficiency.",
      icon: "🚀",
    },
    {
      title: "HR Analytics",
      description:
        "Unlock human capital insights with comprehensive HCM analytics and workforce intelligence. Drive strategic HR decisions.",
      icon: "👥",
    },
    {
      title: "Customer Experience",
      description:
        "Enhance customer relationships through advanced CX analytics and behavioral insights. Build lasting customer loyalty.",
      icon: "💡",
    },
    {
      title: "Operational Excellence",
      description:
        "Drive operational efficiency with real-time monitoring and performance optimization. Maximize productivity and reduce waste.",
      icon: "⚡",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero */}
        <section className="relative py-32 bg-gradient-to-br from-cyan-500/10 via-blue-600/10 to-purple-600/10 dark:from-cyan-500/5 dark:via-blue-600/5 dark:to-purple-600/5 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="section-title mb-6"
            >
              Oracle FDI <span className="gradient-text">Packaged Offerings</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Pre-built accelerators to jumpstart your FDI implementation and maximize value realization
            </motion.p>
          </div>
        </section>

        {/* Accelerators Grid */}
        <section className="py-24 bg-background dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {accelerators.map((accelerator, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-8 hover:shadow-lg hover:shadow-blue-500/20 dark:hover:shadow-blue-500/10 transition-all duration-300"
                >
                  <div className="mb-4 text-5xl">{accelerator.icon}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{accelerator.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{accelerator.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title mb-6">Find the Perfect Accelerator for Your Needs</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Explore which accelerators align with your business objectives
              </p>
              <Link href="/contact" className="btn-primary inline-block">
                Schedule a Demo
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
