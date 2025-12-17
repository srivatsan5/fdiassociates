"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, ArrowRight } from "lucide-react"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setStatus("success")
        setEmail("")
        setTimeout(() => setStatus("idle"), 3000)
      } else {
        setStatus("error")
        setTimeout(() => setStatus("idle"), 3000)
      }
    } catch {
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
        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground z-10" size={18} />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email address"
          className="w-full pl-12 pr-4 py-4 rounded-lg bg-background/50 dark:bg-background/30 backdrop-blur-sm border border-border/50 text-foreground placeholder-muted-foreground focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
        />
      </div>
      <motion.button
        type="submit"
        disabled={status === "loading"}
        whileHover={{ scale: status === "loading" ? 1 : 1.05 }}
        whileTap={{ scale: status === "loading" ? 1 : 0.95 }}
        className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap relative overflow-hidden"
      >
        <span className="relative z-10 flex items-center gap-2">
          {status === "loading" ? "Submitting..." : "Subscribe"}
          {status !== "loading" && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
        </span>
      </motion.button>
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
