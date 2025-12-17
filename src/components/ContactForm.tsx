"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { submitContactForm } from "../api/handlers"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<{ email?: string; name?: string }>({}
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Real-time validation
    if (name === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(value)) {
        setFieldErrors(prev => ({ ...prev, email: 'Please enter a valid email address' }))
      } else {
        setFieldErrors(prev => ({ ...prev, email: undefined }))
      }
    }
    if (name === 'name' && value && value.length < 2) {
      setFieldErrors(prev => ({ ...prev, name: 'Name must be at least 2 characters' }))
    } else if (name === 'name') {
      setFieldErrors(prev => ({ ...prev, name: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const result = await submitContactForm(formData)

    if (result.success) {
      setSubmitStatus("success")
      setFormData({ name: "", email: "", company: "", message: "" })
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } else {
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 5000)
    }
    setIsSubmitting(false)
  }

  const inputClasses = (fieldName: string) => `
    relative w-full px-5 py-4 rounded-xl text-white placeholder-gray-500 
    focus:outline-none transition-all duration-300
    ${focusedField === fieldName ? 'ring-2 ring-accent-red/50' : ''}
  `

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <div className="grid md:grid-cols-2 gap-6">
        {/* Name Field */}
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-semibold text-white">
            Name
          </label>
          <div className="relative group">
            <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-accent-red/20 to-accent-blue/20 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              required
              className={inputClasses('name')}
              style={{
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.7) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
              placeholder="Your Name"
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-semibold text-white">
            Email Address<span className="text-accent-red ml-1">*</span>
          </label>
          <div className="relative group">
            <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-accent-red/20 to-accent-blue/20 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              required
              aria-invalid={!!fieldErrors.email}
              aria-describedby={fieldErrors.email ? 'email-error' : undefined}
              className={inputClasses('email') + (fieldErrors.email ? ' ring-2 ring-red-500/50' : '')}
              style={{
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.7) 100%)',
                border: fieldErrors.email ? '1px solid rgba(239, 68, 68, 0.3)' : '1px solid rgba(255, 255, 255, 0.08)',
              }}
              placeholder="your@email.com"
            />
          </div>
          {fieldErrors.email && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              id="email-error"
              className="text-sm text-red-400 flex items-center gap-1"
            >
              <AlertCircle size={14} />
              {fieldErrors.email}
            </motion.p>
          )}
        </div>
      </div>

      {/* Company Field */}
      <div className="space-y-2">
        <label htmlFor="company" className="block text-sm font-semibold text-white">
          Company Name
        </label>
        <div className="relative group">
          <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-accent-red/20 to-accent-blue/20 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
          <input
            id="company"
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            onFocus={() => setFocusedField('company')}
            onBlur={() => setFocusedField(null)}
            className={inputClasses('company')}
            style={{
              background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.7) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
            placeholder="Your Company"
          />
        </div>
      </div>

      {/* Message Field */}
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-semibold text-white">
          Message<span className="text-accent-red ml-1">*</span>
        </label>
        <div className="relative group">
          <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-accent-red/20 to-accent-blue/20 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onFocus={() => setFocusedField('message')}
            onBlur={() => setFocusedField(null)}
            required
            rows={5}
            className={inputClasses('message') + ' resize-none'}
            style={{
              background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.7) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
            placeholder="Tell us about your project or inquiry..."
          />
        </div>
      </div>

      {/* Status Messages */}
      <AnimatePresence mode="wait">
        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="p-5 rounded-xl flex items-center gap-4"
            style={{
              background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(34, 197, 94, 0.05) 100%)',
              border: '1px solid rgba(34, 197, 94, 0.2)',
            }}
          >
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
              <CheckCircle className="text-green-400" size={20} />
            </div>
            <div>
              <p className="font-semibold text-green-400">Message sent successfully!</p>
              <p className="text-sm text-green-400/70">We'll get back to you as soon as possible.</p>
            </div>
          </motion.div>
        )}

        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="p-5 rounded-xl flex items-center gap-4"
            style={{
              background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.05) 100%)',
              border: '1px solid rgba(239, 68, 68, 0.2)',
            }}
          >
            <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
              <AlertCircle className="text-red-400" size={20} />
            </div>
            <div>
              <p className="font-semibold text-red-400">Failed to send message</p>
              <p className="text-sm text-red-400/70">Please try again or contact us directly.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-3 overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed transition-all"
        style={{
          background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 50%, #b91c1c 100%)',
          boxShadow: '0 4px 20px -5px rgba(239, 68, 68, 0.5)',
        }}
      >
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        />

        <span className="relative z-10">
          {isSubmitting ? "Sending..." : "Send Message"}
        </span>

        <span className="relative z-10">
          {isSubmitting ? (
            <Loader2 size={18} className="animate-spin" />
          ) : (
            <Send size={18} />
          )}
        </span>
      </motion.button>
    </motion.form>
  )
}
