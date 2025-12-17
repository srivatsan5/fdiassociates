"use client"

import { motion } from "framer-motion"
import { CheckCircle, Users, Zap, ArrowRight, Target, Sparkles } from "lucide-react"
import { useNavigate, Link } from "react-router-dom"

export default function Services() {
  const navigate = useNavigate()

  const serviceDetails = [
    {
      icon: <Zap size={28} />,
      title: "Implementation Services",
      description:
        "Tailored Oracle solutions for seamless integration, enhancing business processes and maximizing efficiency.",
      highlights: [
        "Out-of-the-box Oracle FDI implementation",
        "Zero implementation cost",
        "Rapid deployment",
        "Best practices implementation",
        "Seamless integration",
      ],
      image: "/implementation_services.png",
      route: "/implementation-services",
      color: "from-accent-red to-orange-500",
    },
    {
      icon: <Users size={28} />,
      title: "Managed Services",
      description:
        "Comprehensive support designed to optimize your Oracle environment, ensuring peak performance and reliability.",
      highlights: [
        "Ongoing management and optimization",
        "Customization as per business needs",
        "Post Go-live support",
        "Performance monitoring",
        "24/7 expert support",
      ],
      image: "/managed_services.png",
      route: "/managed-services",
      color: "from-accent-blue to-cyan-400",
    },
    {
      icon: <Target size={28} />,
      title: "FDI Advisory Services",
      description: "Strategic guidance to accelerate your FDI journey with expert insights and best practices.",
      highlights: [
        "Strategic roadmap planning",
        "Effort estimation",
        "Project planning",
        "Training programs",
        "Migration planning",
      ],
      image: "/advisory_services.png",
      route: "/advisory-services",
      color: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <div className="pt-24 overflow-hidden">
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a1e] via-[#0f172a] to-[#0a1628]" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-accent-red/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-blue/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <Sparkles size={16} className="text-accent-red" />
            <span className="text-sm font-medium text-gray-300">Expert Solutions</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white"
          >
            Our Professional <span className="gradient-text">Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Comprehensive Oracle FDI solutions tailored to drive your business forward
          </motion.p>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 sm:py-28 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24 sm:space-y-32">
            {serviceDetails.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
              >
                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.icon}
                  </motion.div>

                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{service.title}</h2>
                  <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-3 mb-8">
                    {service.highlights.map((highlight, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                          <CheckCircle size={14} className="text-white" />
                        </div>
                        <span className="text-gray-300">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    onClick={() => navigate(service.route)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all"
                    style={{
                      background: `linear-gradient(135deg, ${service.color.includes('red') ? '#ef4444' : service.color.includes('blue') ? '#3b82f6' : '#8b5cf6'} 0%, ${service.color.includes('red') ? '#dc2626' : service.color.includes('blue') ? '#2563eb' : '#7c3aed'} 100%)`,
                      boxShadow: `0 4px 15px -3px ${service.color.includes('red') ? 'rgba(239, 68, 68, 0.4)' : service.color.includes('blue') ? 'rgba(59, 130, 246, 0.4)' : 'rgba(139, 92, 246, 0.4)'}`,
                    }}
                  >
                    Learn More
                    <ArrowRight size={18} />
                  </motion.button>
                </div>

                {/* Image */}
                <motion.div
                  className={`${index % 2 === 1 ? "lg:order-1" : ""} relative group cursor-pointer`}
                  onClick={() => navigate(service.route)}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Glow */}
                  <div className={`absolute -inset-4 bg-gradient-to-br ${service.color} rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />

                  {/* Image container */}
                  <div className="relative rounded-2xl overflow-hidden" style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                    padding: '1px',
                  }}>
                    <div className="rounded-2xl overflow-hidden bg-[#0f172a]">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-[#0a0f1a] relative overflow-hidden">
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
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-accent-red to-orange-500 mx-auto mb-6 rounded-full"
            />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Let's Discuss Your Requirements
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Our expert team is ready to help you choose the right service package for your needs
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                boxShadow: '0 4px 15px -3px rgba(239, 68, 68, 0.4)',
              }}
            >
              Get in Touch
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
