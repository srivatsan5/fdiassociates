"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, ArrowRight } from "lucide-react"
import { submitNewsletter } from "../api/handlers"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    const result = await submitNewsletter({ email })

    if (result.success) {
      setStatus("success")
      setEmail("")
      setTimeout(() => setStatus("idle"), 3000)
    } else {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 3000)
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col sm:flex-row gap-2"
    >
      <div className="flex-1 relative">
        <Mail
          className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary dark:text-dark-text-secondary"
          size={18}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email address"
          className="w-full pl-10 pr-4 py-3 rounded-lg bg-surface dark:bg-dark-surface border border-border dark:border-dark-border text-text dark:text-dark-text placeholder-text-tertiary dark:placeholder-dark-text-tertiary focus:outline-none focus:border-accent-red focus:ring-2 focus:ring-accent-red/10 transition-all"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="px-6 py-3 rounded-lg bg-gradient-to-r from-accent-red to-accent-blue text-white font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap"
      >
        {status === "loading" ? "Submitting..." : "Submit"}
        {status !== "loading" && <ArrowRight size={18} />}
      </button>
      {status === "success" && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm text-green-600 dark:text-green-400"
        >
          ✓ Subscribed!
        </motion.p>
      )}
    </motion.form>
  )
}
