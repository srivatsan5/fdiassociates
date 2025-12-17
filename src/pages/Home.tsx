"use client"

import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { Link } from "react-router-dom"
import { Zap, Users, Target, TrendingUp, ArrowRight, Award, Shield, Clock, CheckCircle2, BarChart3 } from "lucide-react"
import Hero from "../components/Hero"
import ServiceCard from "../components/ServiceCard"
import AcceleratorCard from "../components/AcceleratorCard"
import Testimonials from "../components/Testimonials"
import LogoTicker from "../components/LogoTicker"
import ROICalculator from "../components/ROICalculator"
import CountdownTimer from "../components/CountdownTimer"
import PricingCalculator from "../components/PricingCalculator"
import { useEffect, useRef } from "react"

// Animated counter component for stats
function AnimatedCounter({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 2000 })
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = prefix + Math.floor(latest).toLocaleString() + suffix
      }
    })
  }, [springValue, suffix, prefix])

  return <span ref={ref}>{prefix}0{suffix}</span>
}

export default function Home() {
  const services = [
    {
      icon: <Zap size={24} />,
      title: "Implementation Services",
      description:
        "Tailored Oracle solutions for seamless integration, enhancing business processes and maximizing efficiency.",
      details: "We will implement the Out of The Box Oracle FDI without any cost.",
      link: "/services",
    },
    {
      icon: <Users size={24} />,
      title: "Managed Services",
      description:
        "Comprehensive support designed to optimize your Oracle environment, ensuring peak performance and reliability.",
      details: "We will Manage, Customize and Support from implementation to post Go-live as per the business need.",
      link: "/services",
    },
    {
      icon: <Target size={24} />,
      title: "FDI Advisory Services",
      description: "Strategic guidance to accelerate your FDI journey with expert insights and best practices.",
      details: "FDI Advisory services, Trainings, Roadmap, Effort estimation, Project Plan, migration plan",
      link: "/services",
    },
  ]

  const accelerators = [
    {
      title: "FiNtelligence",
      description: "AI-powered Financial Insights Layer for AP, AR, GL, and Cash Flow using embedded Oracle FDI KPIs.",
      icon: "💰",
    },
    {
      title: "iSCM Solution",
      description: "End-to-end supply chain control tower dashboard built on top of Fusion SCM and FDI data model.",
      icon: "🚚",
    },
    {
      title: "FDI Kickstarter Kit",
      description: "Rapid setup toolkit with best-practice KPIs, mapping templates, and enablement guides.",
      icon: "🚀",
    },
    {
      title: "CX Signal Hub",
      description: "Customer intelligence accelerator integrating Fusion CX and Service modules with FDI.",
      icon: "👥",
    },
    {
      title: "HiRe",
      description: "AI powered Oracle HCM analytics solution that will meet your Organization's HR analytics solution.",
      icon: "🎓",
    },
  ]

  const stats = [
    { value: 100, suffix: "+", label: "Implementations", icon: Award },
    { value: 50, suffix: "+", label: "Enterprise Clients", icon: Users },
    { value: 99, suffix: "%", label: "Client Satisfaction", icon: Shield },
    { value: 24, suffix: "/7", label: "Expert Support", icon: Clock },
  ]

  const trustedBy = [
    "Oracle Partner Network",
    "Fortune 500 Companies",
    "Global Enterprises",
    "Leading Industries"
  ]

  return (
    <div className="overflow-hidden">
      <Hero />

      {/* Trust Bar - Animated Logo Ticker */}
      <section className="py-4 bg-[#0a0f1a] border-y border-slate-800/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <span className="text-slate-500 text-sm font-medium uppercase tracking-wider">Trusted by Industry Leaders</span>
          </div>
          <LogoTicker />
        </div>
      </section>

      {/* Stats Section - Animated Counters */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#0a0f1a] to-[#020617]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group text-center p-6 sm:p-8 rounded-2xl overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.6) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-accent-red/10 rounded-full blur-3xl" />
                </div>

                <div className="relative z-10">
                  <stat.icon className="w-8 h-8 mx-auto mb-4 text-accent-red" />
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-gray-400 font-medium text-sm sm:text-base">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Video Section */}
      <section className="py-16 sm:py-24 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-red/10 border border-accent-red/20 mb-6">
                <span className="w-2 h-2 bg-accent-red rounded-full animate-pulse" />
                <span className="text-sm font-medium text-accent-red">Watch Demo</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
                See FDI in <span className="gradient-text">Action</span>
              </h2>
              <p className="text-gray-400 text-base sm:text-lg mb-8 leading-relaxed">
                Watch how FDI Associates is transforming Oracle Fusion Data Intelligence with cutting-edge solutions and expert-driven implementation strategies.
              </p>
              <a href="https://www.youtube.com/watch?v=fmwQlgpo9JM" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-3 group">
                <span>Watch Full Video</span>
                <motion.div
                  className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </motion.div>
              </a>
            </motion.div>

            {/* Right Side - Video */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="relative order-1 md:order-2"
            >
              {/* Glow behind video */}
              <div className="absolute -inset-4 bg-gradient-to-br from-accent-red/20 to-accent-blue/20 rounded-3xl blur-2xl opacity-50" />

              <div className="relative aspect-video rounded-2xl overflow-hidden" style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                padding: '1px',
              }}>
                <div className="rounded-2xl overflow-hidden bg-[#0f172a]">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/fmwQlgpo9JM?autoplay=1&mute=1"
                    title="FDI Associates Promotional Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full aspect-video"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Professional Services */}
      <section className="py-20 sm:py-28 bg-[#020617] relative">
        {/* Background accent */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent-red/5 rounded-full blur-[120px] -translate-x-1/2" />
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[120px] translate-x-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              className="h-1 bg-gradient-to-r from-accent-red to-orange-500 mx-auto mb-6 rounded-full"
            />
            <h2 className="section-title mb-4">Our Professional Services</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Expert implementation and management tailored to Oracle Fusion Data Intelligence Community needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} delay={index * 0.15} />
            ))}
          </div>

          {/* Offerings Image - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-accent-red/15 to-accent-blue/15 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />

              {/* Image container with glass border */}
              <div className="relative rounded-2xl overflow-hidden glass-card p-1">
                <img
                  src="/offerings.jpg"
                  alt="FDI Associates Service Offerings"
                  className="w-full h-auto rounded-xl object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 sm:py-28 bg-[#0a0f1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
                Why Choose <span className="gradient-text">FDI Associates?</span>
              </h2>
              <p className="text-gray-400 text-base sm:text-lg mb-8 leading-relaxed">
                Welcome to the trusted hub for Oracle Fusion Data Intelligence Community Experts. We are a collective of
                industry-leading professionals dedicated to maximizing the value of Oracle FDI.
              </p>

              <div className="space-y-4">
                {[
                  "Free Implementation of Out-of-the-Box Oracle FDI",
                  "End-to-End Managed Services & Customization",
                  "Trusted Expertise Across Oracle Fusion Pillars",
                  "24/7 Global Support & Consultation",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-red/20 to-accent-red/5 flex items-center justify-center flex-shrink-0 group-hover:from-accent-red/30 transition-all">
                      <CheckCircle2 size={20} className="text-accent-red" />
                    </div>
                    <p className="text-gray-300 font-medium">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                { icon: TrendingUp, label: "Faster Adoption", desc: "Accelerate your FDI deployment with proven methodologies", color: "from-green-500/20 to-green-500/5" },
                { icon: Zap, label: "Reduced Costs", desc: "Optimize your spending with efficient implementation", color: "from-yellow-500/20 to-yellow-500/5" },
                { icon: Target, label: "Smarter Insights", desc: "Make data-driven decisions with powerful analytics", color: "from-blue-500/20 to-blue-500/5" },
              ].map(({ icon: Icon, label, desc, color }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                  className="group glass-card p-6 flex items-start gap-5 cursor-pointer"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg mb-1">{label}</p>
                    <p className="text-gray-400">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Accelerators */}
      <section className="py-20 sm:py-28 bg-[#020617] relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-accent-blue/10 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
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
            <h2 className="section-title mb-4">Oracle FDI Packaged Offerings</h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Whether you're just beginning your FDI journey or aiming to accelerate value realization, our collective
              expertise and proven accelerators are here to support your success.
            </p>
          </motion.div>

          {/* Swipeable on mobile, grid on desktop */}
          <div className="overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:overflow-visible">
            <div className="flex gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-5 sm:gap-6" style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}>
              {accelerators.map((accelerator, index) => (
                <div key={index} className="flex-shrink-0 w-[280px] sm:w-auto" style={{ scrollSnapAlign: 'start' }}>
                  <AcceleratorCard {...accelerator} delay={index * 0.1} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator & Case Studies Section */}
      <section className="py-20 sm:py-28 bg-[#0a0f1a] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-500/5 rounded-full blur-[120px] translate-x-1/4 translate-y-1/4" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
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
              className="h-1 bg-gradient-to-r from-accent-red to-orange-500 mx-auto mb-6 rounded-full"
            />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Proven <span className="gradient-text">Results</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              See how leading enterprises achieved measurable ROI with FDI Associates.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
            {/* Left - Case Study Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <h3 className="text-xl font-semibold text-white mb-6">Case Study Highlights</h3>

              {/* Case Study Cards */}
              <div className="space-y-4 flex-grow">
                {[
                  { company: "Global Retail Chain", metric: "40%", desc: "Faster time-to-insight", industry: "Retail" },
                  { company: "Fortune 500 Manufacturer", metric: "35%", desc: "Cost reduction in analytics", industry: "Manufacturing" },
                  { company: "Leading Hotel Group", metric: "60%", desc: "Improved decision accuracy", industry: "Hospitality" },
                ].map((study, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative p-5 rounded-xl bg-gradient-to-br from-slate-900/80 to-slate-950/80 border border-slate-800/50 hover:border-slate-700/50 transition-all duration-300 cursor-pointer overflow-hidden"
                  >
                    {/* Left accent bar */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 to-blue-500 rounded-l-xl" />

                    <div className="flex items-center justify-between pl-4">
                      <div>
                        <p className="text-white font-semibold">{study.company}</p>
                        <p className="text-slate-500 text-sm">{study.industry}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-green-400">{study.metric}</p>
                        <p className="text-slate-500 text-sm">{study.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link
                to="/why-us"
                className="mt-6 inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-medium transition-colors self-start"
              >
                View All Case Studies
                <ArrowRight size={16} />
              </Link>
            </motion.div>

            {/* Right - ROI Calculator */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ROICalculator />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing & Urgency Section */}
      <section className="py-20 sm:py-28 bg-[#0a0f1a] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-green-500/5 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              className="h-1 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto mb-6 rounded-full"
            />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get Your Custom Quote</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Use our pricing calculator to get an instant estimate for your Oracle FDI implementation
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <PricingCalculator />
            <div className="space-y-6">
              <CountdownTimer />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-950/80 border border-slate-800/50"
              >
                <h4 className="text-lg font-semibold text-white mb-3">Why Act Now?</h4>
                <ul className="space-y-3">
                  {[
                    "Free Oracle assessment worth $5,000",
                    "Priority implementation scheduling",
                    "Dedicated success manager",
                    "Extended 90-day post-launch support",
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-400 text-sm">
                      <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        {/* Premium gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a1e] via-[#0f172a] to-[#0a1628]" />
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-accent-red/10 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-accent-blue/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-accent-red/20 to-accent-blue/20 flex items-center justify-center"
            >
              <Zap size={40} className="text-white" />
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your <br className="hidden sm:block" />
              <span className="gradient-text">Oracle FDI Strategy?</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg mb-10 max-w-2xl mx-auto">
              Connect with our expert team to discuss your unique requirements and discover how FDI Associates can
              accelerate your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/consultation" className="btn-primary inline-flex items-center justify-center gap-2 group">
                <span>Schedule a Consultation</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </Link>
              <Link to="/connect" className="btn-secondary inline-flex items-center justify-center gap-2">
                Connect with Us Today
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
