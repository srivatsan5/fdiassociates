"use client"

import { motion } from "framer-motion"
import { Zap, Users, Target, TrendingUp } from "lucide-react"
import Hero from "../Hero"
import ServiceCard from "../ServiceCard"
import AcceleratorCard from "../AcceleratorCard"
import Link from "next/link"
import Image from "next/image"

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
      title: "Financial Analytics",
      description: "Accelerate financial insights and reporting with prebuilt Oracle FDI analytics accelerators.",
      icon: "📊",
    },
    {
      title: "Supply Chain Optimization",
      description: "Streamline supply chain operations with advanced data intelligence and predictive analytics.",
      icon: "🚀",
    },
    {
      title: "HR Analytics",
      description: "Unlock human capital insights with comprehensive HCM analytics and workforce intelligence.",
      icon: "👥",
    },
    {
      title: "Customer Experience",
      description: "Enhance customer relationships through advanced CX analytics and behavioral insights.",
      icon: "💡",
    },
    {
      title: "Operational Excellence",
      description: "Drive operational efficiency with real-time monitoring and performance optimization.",
      icon: "⚡",
    },
  ]

  return (
    <div>
      <Hero />

      {/* Immersive Data Visuals */}
      <section className="relative py-16 sm:py-20 bg-background border-y border-border/70">
        <div className="absolute inset-0 pointer-events-none opacity-40" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"140\" height=\"140\" viewBox=\"0 0 140 140\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M0 139.5H140M0 70H140M0 0.5H140M0 0V140\" stroke='%23cfc5bb' stroke-width='0.5' /%3E%3C/svg%3E')" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-5"
            >
              <span className="text-xs sm:text-sm font-semibold text-muted-foreground px-3 py-1.5 rounded-full bg-card border border-border inline-flex items-center gap-2 uppercase tracking-[0.3em]">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                Field notes
              </span>
              <h2 className="section-title mb-2">
                Visualize <span className="gradient-text">Oracle Fusion</span> Performance
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                We blend executive dashboards, AI-enhanced visuals, and interactive analytics to bring Oracle Fusion Data
                Intelligence programs to life. Explore curated insights, adoption KPIs, and accelerator playbooks in one canvas.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Adoption Velocity", value: "92%" },
                  { label: "Data Coverage", value: "120+" },
                ].map((stat) => (
                  <div key={stat.label} className="glass-card p-4 sm:p-5 border border-border/70 shadow-sm">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl sm:text-3xl font-bold text-foreground">{stat.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="absolute -inset-6 bg-card/30 blur-3xl" />
              <div className="relative grid grid-cols-2 gap-4">
                {[
                  { src: "/Hero_image.png", caption: "Executive Cockpit" },
                  { src: "/advisory_services.png", caption: "Advisory Sprint" },
                  { src: "/implementation_services.png", caption: "Implementation Blueprint" },
                  { src: "/managed_services.png", caption: "Managed Services POD" },
                ].map((visual, index) => (
                  <motion.div
                    key={visual.caption}
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 260, damping: 22 }}
                    className={`glass-card overflow-hidden rounded-2xl border border-border/70 shadow-lg ${
                      index % 2 === 0 ? "mt-6" : ""
                    }`}
                  >
                    <Image
                      src={visual.src}
                      alt={visual.caption}
                      width={320}
                      height={220}
                      className="w-full h-full object-cover"
                      priority={index === 0}
                    />
                    <div className="p-3 text-xs sm:text-sm text-muted-foreground flex items-center justify-between">
                      <span>{visual.caption}</span>
                      <span className="text-cyan-500">Live</span>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="absolute -top-6 -right-6 glass-card p-4 rounded-2xl shadow-lg">
                <p className="text-xs text-muted-foreground">Field impact</p>
                <p className="text-lg font-bold text-foreground">+34% QoQ</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Professional Services */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-background">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="inline-block mb-4 sm:mb-6"
            >
              <span className="text-xs sm:text-sm font-semibold text-muted-foreground px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-border bg-card">
                Services
              </span>
            </motion.div>
            <h2 className="section-title mb-4 sm:mb-6">
              Our <span className="gradient-text">Professional Services</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Expert implementation and management tailored to Oracle Fusion Data Intelligence Community needs.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} delay={index * 0.15} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-muted/40">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              <div>
                <span className="text-sm font-semibold text-muted-foreground px-4 py-2 rounded-full border border-border inline-block mb-6 bg-card">
                  Why Choose Us
                </span>
                <h2 className="section-title mb-6">
                  Why Choose <span className="gradient-text">FDI Associates?</span>
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Welcome to the trusted hub for Oracle Fusion Data Intelligence Community Experts. We are a collective of
                industry-leading professionals dedicated to maximizing the value of Oracle FDI.
              </p>

              <div className="space-y-5">
                {[
                  "Free Implementation of Out-of-the-Box Oracle FDI",
                  "End-to-End Managed Services & Customization",
                  "Trusted Expertise Across Oracle Fusion Pillars",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-sm font-bold flex-shrink-0 bg-card">
                      ✓
                    </div>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors pt-1">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6"
            >
              {[
                { icon: TrendingUp, label: "Faster Adoption" },
                { icon: Zap, label: "Reduced Costs" },
                { icon: Target, label: "Smarter Insights" },
              ].map(({ icon: Icon, label }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="glass-card p-6 flex items-center gap-4 cursor-pointer group border border-border/70"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white flex-shrink-0 shadow-md shadow-cyan-500/20 group-hover:shadow-cyan-500/30 transition-shadow"
                  >
                    <Icon size={24} />
                  </motion.div>
                  <p className="font-semibold text-foreground text-lg">{label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Accelerators */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-background">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="inline-block mb-4 sm:mb-6"
            >
              <span className="text-xs sm:text-sm font-semibold text-muted-foreground px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-border bg-card">
                Accelerators
              </span>
            </motion.div>
            <h2 className="section-title mb-4 sm:mb-6">
              Oracle FDI <span className="gradient-text">Packaged Offerings</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Whether you're just beginning your FDI journey or aiming to accelerate value realization, our collective
              expertise and proven accelerators are here to support your success.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {accelerators.map((accelerator, index) => (
              <AcceleratorCard key={index} {...accelerator} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-card border-t border-b border-border/80">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h2 className="section-title mb-4 sm:mb-6">
                Ready to Transform Your <span className="gradient-text">Oracle FDI Strategy?</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-10 leading-relaxed max-w-2xl mx-auto px-4">
                Connect with our expert team to discuss your unique requirements and discover how FDI Associates can
                accelerate your success.
              </p>
            </div>
            <Link href="/contact">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="btn-primary inline-flex items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5">
                <span>Schedule a Consultation</span>
                <TrendingUp size={18} className="sm:w-5 sm:h-5" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
