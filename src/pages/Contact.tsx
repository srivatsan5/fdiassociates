"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, MessageSquare, ArrowRight, Sparkles } from "lucide-react"
import ContactForm from "../components/ContactForm"

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "info@fdiassociates.com",
      href: "mailto:info@fdiassociates.com",
      color: "from-accent-red to-orange-500",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "7605848820",
      href: "tel:7605848820",
      color: "from-accent-blue to-cyan-400",
    },
    {
      icon: Clock,
      title: "Support Hours",
      value: "24/7 Global Support",
      href: null,
      color: "from-green-500 to-emerald-400",
    },
  ]

  const faqs = [
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
  ]

  return (
    <div className="pt-20 overflow-hidden">
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a1e] via-[#0f172a] to-[#0a1628]" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-accent-red/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-accent-blue/10 rounded-full blur-[120px]" />
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
            <MessageSquare size={16} className="text-accent-red" />
            <span className="text-sm font-medium text-gray-300">Get in Touch</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white"
          >
            Let's <span className="gradient-text">Connect</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Have questions about our Oracle FDI solutions? Our expert team is here to help you transform your data intelligence.
          </motion.p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group p-6 rounded-2xl cursor-pointer transition-all"
                style={{
                  background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.5) 0%, rgba(15, 23, 42, 0.7) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  <method.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{method.title}</h3>
                {method.href ? (
                  <a href={method.href} className="text-accent-red hover:underline font-medium text-lg">
                    {method.value}
                  </a>
                ) : (
                  <p className="text-gray-400 font-medium">{method.value}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 sm:py-28 bg-[#0a0f1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left - Info */}
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
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Ready to transform your Oracle FDI strategy? Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Sparkles, text: "Free consultation for new projects" },
                  { icon: Clock, text: "Response within 24 hours" },
                  { icon: MapPin, text: "Global support across time zones" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-red/20 to-accent-red/5 flex items-center justify-center">
                      <item.icon size={18} className="text-accent-red" />
                    </div>
                    <span className="text-gray-300">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.6) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
              }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-28 bg-[#020617]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-accent-blue to-cyan-400 mx-auto mb-6 rounded-full"
            />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400">Quick answers to common questions</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-2xl transition-all hover:-translate-y-1"
                style={{
                  background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.6) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                }}
              >
                <h3 className="font-bold text-white mb-3 text-lg group-hover:text-accent-red transition-colors">
                  {faq.q}
                </h3>
                <p className="text-gray-400 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
