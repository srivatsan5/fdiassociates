"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight, Sparkles, Zap, Package, Layers } from "lucide-react"

export default function Accelerators() {
  const accelerators = [
    {
      title: "FiNtelligence",
      description:
        "AI-powered Financial Insights Layer for AP, AR, GL, and Cash Flow using embedded Oracle FDI KPIs. One stop Financial solution leveraging Oracle FDI ERP and built-in AI/ML. Just a click to have it ready!",
      icon: "💰",
      color: "from-green-500 to-emerald-400",
      tag: "Finance",
    },
    {
      title: "iSCM Solution",
      description:
        "End-to-end supply chain control tower dashboard built on top of Fusion SCM and FDI data model.",
      icon: "🚚",
      color: "from-accent-blue to-cyan-400",
      tag: "Supply Chain",
    },
    {
      title: "FDI Kickstarter Kit",
      description:
        "Rapid setup toolkit with best-practice KPIs, mapping templates, and enablement guides for all Fusion modules.",
      icon: "🚀",
      color: "from-accent-red to-orange-500",
      tag: "Quick Start",
    },
    {
      title: "CX Signal Hub",
      description:
        "Customer intelligence accelerator integrating Fusion CX and Service modules with FDI.",
      icon: "👥",
      color: "from-purple-500 to-pink-500",
      tag: "Customer Experience",
    },
    {
      title: "HiRe",
      description:
        "AI powered Oracle HCM analytics solution that will meet your Organization's HR analytics solution",
      icon: "🎓",
      color: "from-yellow-500 to-amber-400",
      tag: "HR Analytics",
    },
  ]

  const features = [
    { icon: Zap, title: "Plug & Play", desc: "Ready to deploy with minimal configuration" },
    { icon: Package, title: "FDI Compatible", desc: "Built on Oracle FDI standards" },
    { icon: Layers, title: "Customizable", desc: "Adapt to your specific needs" },
  ]

  return (
    <div className="pt-20 overflow-hidden">
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f172a] to-[#1a0a1e]" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-accent-blue/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-red/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <Sparkles size={16} className="text-accent-blue" />
            <span className="text-sm font-medium text-gray-300">Oracle Marketplace Listed</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white"
          >
            FDI <span className="gradient-text">Accelerators</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-12"
          >
            Accelerate timelines using our Oracle Cloud Marketplace-listed solutions. Plug-and-play, lightweight, fully FDI-compatible, and highly customizable.
          </motion.p>

          {/* Feature pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-5 py-3 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.5) 0%, rgba(15, 23, 42, 0.7) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                <feature.icon size={18} className="text-accent-blue" />
                <span className="text-sm font-medium text-white">{feature.title}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Accelerators Grid */}
      <section className="py-20 sm:py-28 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {accelerators.map((accelerator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative p-8 rounded-2xl cursor-pointer overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.5) 0%, rgba(15, 23, 42, 0.7) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${accelerator.color} rounded-full blur-3xl opacity-20`} />
                </div>

                {/* Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: 'white',
                    }}
                  >
                    {accelerator.tag}
                  </span>
                </div>

                {/* Icon */}
                <motion.div
                  className="text-5xl mb-5"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {accelerator.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-accent-blue transition-all">
                  {accelerator.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {accelerator.description}
                </p>

                {/* Bottom accent */}
                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${accelerator.color} group-hover:w-3/4 transition-all duration-500 rounded-full`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-[#0a0f1a] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-accent-blue/10 to-purple-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-accent-blue to-cyan-400 mx-auto mb-6 rounded-full"
            />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Find the Perfect Accelerator
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Let us show you how our accelerators can transform your Oracle FDI implementation
            </p>
            <Link
              to="/demo"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                boxShadow: '0 4px 15px -3px rgba(59, 130, 246, 0.4)',
              }}
            >
              Schedule a Demo
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
