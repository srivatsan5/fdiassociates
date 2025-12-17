"use client"

import { motion } from "framer-motion"
import { CheckCircle, Users, Zap } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"
import Image from "next/image"

export default function Page() {
  const serviceDetails = [
    {
      icon: <Zap size={32} />,
      title: "Implementation Services",
      image: "/implementation_services.png",
      description:
        "Tailored Oracle solutions for seamless integration, enhancing business processes and maximizing efficiency.",
      highlights: [
        "Out-of-the-box Oracle FDI implementation",
        "Zero implementation cost",
        "Rapid deployment",
        "Best practices implementation",
        "Seamless integration",
      ],
    },
    {
      icon: <Users size={32} />,
      title: "Managed Services",
      image: "/managed_services.png",
      description:
        "Comprehensive support designed to optimize your Oracle environment, ensuring peak performance and reliability.",
      highlights: [
        "Ongoing management and optimization",
        "Customization as per business needs",
        "Post Go-live support",
        "Performance monitoring",
        "24/7 expert support",
      ],
    },
    {
      icon: <CheckCircle size={32} />,
      title: "FDI Advisory Services",
      image: "/advisory_services.png",
      description: "Strategic guidance to accelerate your FDI journey with expert insights and best practices.",
      highlights: [
        "Strategic roadmap planning",
        "Effort estimation",
        "Project planning",
        "Training programs",
        "Migration planning",
      ],
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
              Our Professional <span className="gradient-text">Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4"
            >
              Comprehensive Oracle FDI solutions tailored to drive your business forward
            </motion.p>
          </div>
        </section>

        {/* Services Details */}
        <section className="relative py-16 sm:py-24 md:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16 sm:space-y-20 md:space-y-24">
              {serviceDetails.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center"
                >
                  <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white mb-4 sm:mb-6 shadow-md shadow-cyan-500/20"
                    >
                      {service.icon}
                    </motion.div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">{service.title}</h2>
                    <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">{service.description}</p>

                    <ul className="space-y-4">
                      {service.highlights.map((highlight, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3 group"
                        >
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="w-6 h-6 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-md shadow-cyan-500/20"
                          >
                            <CheckCircle size={16} className="text-white" />
                          </motion.div>
                          <span className="text-muted-foreground group-hover:text-foreground transition-colors">{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`glass-card p-4 sm:p-6 overflow-hidden ${index % 2 === 1 ? "md:order-1" : ""}`}
                  >
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                      <div className="absolute top-4 right-4 glass-card px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold flex items-center gap-2">
                        {service.icon}
                        <span>Interactive</span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 glass-card px-4 py-3 rounded-xl">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Oracle FDI View</p>
                        <p className="text-sm sm:text-base font-semibold text-foreground">{service.title}</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-16 sm:py-24 md:py-32 bg-muted/40">
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <h2 className="section-title mb-4 sm:mb-6">Let's Discuss Your <span className="gradient-text">Requirements</span></h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-10 leading-relaxed px-4">
                Our expert team is ready to help you choose the right service package
              </p>
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="btn-primary inline-block text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3"
                >
                  Get in Touch
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
