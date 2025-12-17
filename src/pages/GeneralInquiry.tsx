"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Send, AlertCircle, CheckCircle } from "lucide-react"

export default function GeneralInquiry() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: "" }))
        }
    }

    const validateForm = () => {
        const newErrors: Record<string, string> = {}
        if (!formData.name.trim()) newErrors.name = "Name is required"
        if (!formData.email.trim()) newErrors.email = "Email is required"
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Please enter a valid email"
        if (!formData.subject.trim()) newErrors.subject = "Subject is required"
        if (!formData.message.trim()) newErrors.message = "Message is required"
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (validateForm()) {
            console.log("General Inquiry:", formData)
            setSubmitted(true)
            setFormData({ name: "", email: "", subject: "", message: "" })
        }
    }

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden bg-[#020617]">
                <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/10 to-[#020617]" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="w-20 h-20 rounded-2xl bg-accent-blue/10 flex items-center justify-center text-accent-blue mx-auto mb-6"
                        >
                            <Mail size={40} />
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400"
                        >
                            General <span className="text-accent-blue">Inquiry</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl text-gray-400 leading-relaxed"
                        >
                            Have a question that doesn't fit into a specific category? We're here to help. Send us a message and our team will get back to you promptly.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-20 bg-[#0f172a]">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    {submitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="glass-panel p-12 text-center"
                        >
                            <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mx-auto mb-6">
                                <CheckCircle size={40} />
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-4">Message Sent!</h2>
                            <p className="text-gray-400 mb-8">
                                Thank you for reaching out. We'll review your inquiry and get back to you within 1-2 business days.
                            </p>
                            <button
                                onClick={() => setSubmitted(false)}
                                className="btn-primary"
                            >
                                Send Another Message
                            </button>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="glass-panel p-8 md:p-12"
                        >
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className={`w-full bg-[#020617] border rounded-lg px-4 py-3 text-white focus:outline-none transition-colors ${errors.name ? "border-red-500" : "border-[#334155] focus:border-accent-blue"
                                                }`}
                                        />
                                        {errors.name && (
                                            <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                                <AlertCircle size={12} /> {errors.name}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@company.com"
                                            className={`w-full bg-[#020617] border rounded-lg px-4 py-3 text-white focus:outline-none transition-colors ${errors.email ? "border-red-500" : "border-[#334155] focus:border-accent-blue"
                                                }`}
                                        />
                                        {errors.email && (
                                            <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                                <AlertCircle size={12} /> {errors.email}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Subject *
                                    </label>
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className={`w-full bg-[#020617] border rounded-lg px-4 py-3 text-white focus:outline-none transition-colors ${errors.subject ? "border-red-500" : "border-[#334155] focus:border-accent-blue"
                                            }`}
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="general">General Question</option>
                                        <option value="partnership">Partnership Inquiry</option>
                                        <option value="media">Media & Press</option>
                                        <option value="feedback">Feedback</option>
                                        <option value="other">Other</option>
                                    </select>
                                    {errors.subject && (
                                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                            <AlertCircle size={12} /> {errors.subject}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Your Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={6}
                                        placeholder="Tell us how we can help you..."
                                        className={`w-full bg-[#020617] border rounded-lg px-4 py-3 text-white focus:outline-none transition-colors resize-none ${errors.message ? "border-red-500" : "border-[#334155] focus:border-accent-blue"
                                            }`}
                                    />
                                    {errors.message && (
                                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                            <AlertCircle size={12} /> {errors.message}
                                        </p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className="w-full btn-primary flex items-center justify-center gap-2"
                                >
                                    <Send size={18} />
                                    Send Message
                                </button>
                            </form>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Contact Info */}
            <section className="py-16 bg-[#020617] border-t border-[#1e293b]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h3 className="text-xl font-bold text-white mb-4">Need Immediate Assistance?</h3>
                    <p className="text-gray-400 mb-6">
                        For urgent matters, you can reach us directly at{" "}
                        <a href="mailto:contact@fdi-associates.com" className="text-accent-blue hover:underline">
                            contact@fdi-associates.com
                        </a>
                    </p>
                </div>
            </section>
        </div>
    )
}
