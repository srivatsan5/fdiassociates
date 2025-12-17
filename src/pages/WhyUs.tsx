"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Link } from "react-router-dom"
import { CheckCircle, Award, Zap, TrendingUp, Brain, Globe, Users, Layers, Lightbulb, ArrowRight, Sparkles, Target, Shield } from "lucide-react"
import ComparisonTable from "../components/ComparisonTable"

// Reusable animation variants for consistency
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}

export default function WhyUs() {
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" })

  const reasons = [
    { icon: Award, title: "Trusted Expertise", description: "Deep experience in Fusion ERP, SCM, HR, and CX to help you modernize analytics." },
    { icon: Zap, title: "Faster Adoption", description: "Proven methodologies with free implementation of standard Oracle FDI." },
    { icon: TrendingUp, title: "Reduced Costs", description: "Minimize expenses with packaged offerings and strategic advisory." },
    { icon: Target, title: "Smarter Insights", description: "Unlock actionable insights to drive better business decisions." },
  ]

  const stats = [
    { value: "50+", label: "Implementations" },
    { value: "99%", label: "Client Satisfaction" },
    { value: "40%", label: "Faster Time-to-Value" },
    { value: "24/7", label: "Global Support" },
  ]

  const capabilities = [
    "From initial planning to live dashboards and continuous managed services",
    "Full-lifecycle coverage: KPI design, semantic modeling, AI integration",
    "Prebuilt templates and AI-enhanced accelerators",
  ]

  const expertise = [
    { icon: Shield, text: "50+ Oracle FDI implementations across Finance, Supply Chain, HR, and CX" },
    { icon: Sparkles, text: "Early adopters of Redwood UI and Generative AI integrations" },
    { icon: Globe, text: "Global network of certified FDI professionals and Oracle ACE associates" },
  ]

  const testimonials = [
    { quote: "FDI Associates helped us accelerate our implementation by 40%. Their deep Oracle expertise is unmatched.", author: "CIO", role: "Retail SMB, North America" },
    { quote: "The team's understanding of financial analytics and EPM is outstanding.", author: "Director of Finance IT", role: "Leading Hotel Chain, USA" },
    { quote: "Their managed services have been a game-changer for our operations.", author: "Senior Manager Enterprise IT", role: "Leading Hitech Company, USA" },
  ]

  return (
    <div className="pt-24 overflow-hidden">
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f172a] to-[#1a0a1e]" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-accent-red/8 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-accent-blue/8 rounded-full blur-[150px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <Award size={16} className="text-accent-red" />
            <span className="text-sm font-medium text-gray-300">Industry Leaders</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white"
          >
            Why Choose <span className="gradient-text">FDI Associates</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Partner with industry leaders to maximize the value of your Oracle Fusion Data Intelligence investment
          </motion.p>
        </div>
      </section>

      {/* Stats Bar */}
      <section ref={statsRef} className="py-12 bg-[#0f172a] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Cards */}
      <section className="py-24 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-red-500 mb-5">
                  <reason.icon size={22} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{reason.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-[#0a0f1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl bg-slate-900/50 border border-slate-800"
            >
              <div className="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center text-white mb-6">
                <Target size={20} />
              </div>
              <h2 className="text-xl font-semibold text-white mb-3">Our Mission</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                To empower businesses with continuous innovation, seamless maintenance, and strategic optimization of their Oracle Fusion Data Intelligence environments.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl bg-slate-900/50 border border-slate-800"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white mb-6">
                <Lightbulb size={20} />
              </div>
              <h2 className="text-xl font-semibold text-white mb-3">Our Vision</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                To be the trusted partner of choice for organizations navigating the evolving landscape of Oracle Fusion Data Intelligence through cutting-edge AI and continuous innovation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-accent-red to-orange-500 mb-6 rounded-full"
              />
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">End-to-End FDI Capabilities</h2>
              <div className="space-y-4">
                {capabilities.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-300 text-sm">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-accent-red/20 to-accent-blue/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity" />
              <div className="relative rounded-2xl overflow-hidden glass-card p-1">
                <img src="/end-end.png" alt="End-to-End FDI Capabilities" className="w-full h-auto rounded-xl" loading="lazy" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24 bg-[#0a0f1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Enterprise Expertise</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Backed by decades of combined Oracle experience</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl glass-card"
              >
                <item.icon size={24} className="text-accent-blue mb-4" />
                <p className="text-gray-300 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-accent-blue to-cyan-400 mx-auto mb-6 rounded-full"
            />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-gray-400">Trusted by industry leaders across the globe</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="p-8 rounded-2xl glass-card"
              >
                <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-[#0a0f1a] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-accent-red to-orange-500 mx-auto mb-6 rounded-full"
            />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">FDI Associates vs Traditional Consultants</h2>
            <p className="text-gray-400">See why leading enterprises choose FDI Associates</p>
          </motion.div>

          <ComparisonTable />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#020617] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-accent-red/10 to-accent-blue/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-gray-400 text-lg mb-8">Join hundreds of organizations leveraging FDI Associates</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/consultation"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)', boxShadow: '0 4px 15px -3px rgba(239, 68, 68, 0.4)' }}
              >
                Schedule a Consultation
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 glass-button"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
