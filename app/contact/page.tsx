"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ContactForm from "@/components/ContactForm"
import Image from "next/image"

export default function Page() {
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
              Let's Connect <span className="gradient-text">Together</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4"
            >
              Have questions about our Oracle FDI solutions? We're here to help.
            </motion.p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="relative py-16 sm:py-24 md:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="space-y-6 sm:space-y-8"
              >
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="glass-card overflow-hidden rounded-3xl border border-white/20 shadow-lg shadow-cyan-500/10"
                >
                  <div className="relative h-48 sm:h-56">
                    <Image src="/Hero_image.png" alt="FDI Studio" fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-xs uppercase tracking-[0.3em] text-white/70">Experience Center</p>
                      <p className="text-lg font-semibold">Global Oracle FDI Studio</p>
                      <p className="text-sm text-white/80">Immersive demos &amp; whiteboarding labs</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="glass-card p-6 sm:p-8 cursor-pointer"
                >
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/30"
                    >
                      <Mail size={20} className="sm:w-6 sm:h-6" />
                    </motion.div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground">Email</h3>
                  </div>
                  <a href="mailto:info@fdiassociates.com" className="text-cyan-500 dark:text-cyan-400 hover:underline font-semibold transition-colors text-sm sm:text-base break-all">
                    info@fdiassociates.com
                  </a>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="glass-card p-6 sm:p-8 cursor-pointer"
                >
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/30"
                    >
                      <Phone size={20} className="sm:w-6 sm:h-6" />
                    </motion.div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground">Phone</h3>
                  </div>
                  <a href="tel:7605848820" className="text-cyan-500 dark:text-cyan-400 hover:underline font-semibold transition-colors text-sm sm:text-base">
                    7605848820
                  </a>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="glass-card p-6 sm:p-8 cursor-pointer"
                >
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/30"
                    >
                      <MapPin size={20} className="sm:w-6 sm:h-6" />
                    </motion.div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground">Support</h3>
                  </div>
                  <p className="text-muted-foreground text-sm sm:text-base">Global support team available 24/7 to assist you</p>
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="md:col-span-2"
              >
                <div className="glass-card p-6 sm:p-8 relative overflow-hidden rounded-3xl">
                  <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.2),_transparent_45%)]" />
                  <div className="absolute -right-20 top-8 hidden lg:block opacity-40">
                    <Image src="/placeholder-logo.png" alt="FDI visuals" width={220} height={220} className="animate-pulse" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">Send us a Message</h2>
                  <ContactForm />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-16 sm:py-24 md:py-32 bg-muted/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-12"
            >
              <h2 className="section-title mb-3 sm:mb-4">Frequently Asked Questions</h2>
            </motion.div>

            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  q: "What is the implementation timeline for Oracle FDI?",
                  a: "Implementation timelines vary based on your specific requirements and current Oracle Fusion setup. Most standard implementations take 4-12 weeks.",
                },
                {
                  q: "Do you provide training for the FDI platform?",
                  a: "Yes, we offer comprehensive training programs for your team to ensure successful adoption and utilization of Oracle FDI.",
                },
                {
                  q: "What is the cost of your services?",
                  a: "We offer flexible engagement models starting with free out-of-the-box implementation, followed by managed services based on your needs.",
                },
                {
                  q: "Can you help with existing Oracle FDI implementations?",
                  a: "We provide optimization, customization, and support services for existing FDI implementations.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="glass-card p-5 sm:p-6"
                >
                  <h3 className="font-bold text-foreground mb-2 text-base sm:text-lg">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
