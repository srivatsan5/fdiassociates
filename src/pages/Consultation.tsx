"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, Clock, MessageSquare, CheckCircle, ArrowRight, AlertCircle, Sparkles, Shield, Users } from "lucide-react"
import { Link } from "react-router-dom"

export default function Consultation() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        companyName: "",
        topic: "General Inquiry",
        message: "",
    })

    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        companyName: "",
        message: "",
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        if (errors[name as keyof typeof errors]) {
            setErrors((prev) => ({ ...prev, [name]: "" }))
        }
    }

    const validateForm = () => {
        let isValid = true
        const newErrors = { firstName: "", lastName: "", email: "", companyName: "", message: "" }

        if (!formData.firstName.trim()) { newErrors.firstName = "First name is required"; isValid = false }
        if (!formData.lastName.trim()) { newErrors.lastName = "Last name is required"; isValid = false }
        if (!formData.email.trim()) { newErrors.email = "Work email is required"; isValid = false }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { newErrors.email = "Please enter a valid email"; isValid = false }
        if (!formData.companyName.trim()) { newErrors.companyName = "Company name is required"; isValid = false }
        if (!formData.message.trim()) { newErrors.message = "Please provide some details"; isValid = false }

        setErrors(newErrors)
        return isValid
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (validateForm()) {
            setIsSubmitting(true)
            await new Promise(resolve => setTimeout(resolve, 1500))
            setIsSubmitting(false)
            setIsSuccess(true)
            setFormData({ firstName: "", lastName: "", email: "", companyName: "", topic: "General Inquiry", message: "" })
        }
    }

    const benefits = [
        { icon: CheckCircle, title: "Expert Analysis", description: "Deep dive into your current data infrastructure." },
        { icon: Calendar, title: "Tailored Roadmap", description: "Customized plan to achieve your BI goals." },
        { icon: MessageSquare, title: "Direct Access", description: "Speak directly with senior architects." },
    ]

    return (
        <div className="pt-20 overflow-hidden">
            {/* Hero Section */}
            <section className="relative py-24 sm:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f172a] to-[#1a0a1e]" />
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-[150px]" />
                    <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px]" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                    >
                        <Calendar size={16} className="text-accent-blue" />
                        <span className="text-sm font-medium text-gray-300">Book Your Session</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white"
                    >
                        Schedule a <span className="text-gradient-animated">Consultation</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto"
                    >
                        Get expert advice tailored to your business needs. Our specialists are ready to help you unlock the full potential of your data.
                    </motion.p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 bg-[#0f172a]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Left Column */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold text-white mb-8">Why Consult with Us?</h2>
                            <div className="space-y-6">
                                {benefits.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex gap-4 p-4 rounded-xl glass-card"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-blue to-cyan-400 flex items-center justify-center text-white flex-shrink-0">
                                            <item.icon size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                                            <p className="text-gray-400 text-sm">{item.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                viewport={{ once: true }}
                                className="mt-8 p-6 rounded-xl glass-card"
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <Sparkles size={20} className="text-accent-red" />
                                    <h3 className="text-lg font-semibold text-white">Ready to start?</h3>
                                </div>
                                <p className="text-gray-400">
                                    Fill out the form and we'll get back to you within 24 hours.
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* Right Column - Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="glass-panel p-8"
                        >
                            <AnimatePresence mode="wait">
                                {isSuccess ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="text-center py-12"
                                    >
                                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center">
                                            <CheckCircle size={40} className="text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-3">Request Received!</h3>
                                        <p className="text-gray-400 mb-6">We'll contact you within 24 hours.</p>
                                        <Link to="/" className="btn-primary inline-flex items-center gap-2">
                                            Back to Home <ArrowRight size={18} />
                                        </Link>
                                    </motion.div>
                                ) : (
                                    <motion.form key="form" onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-gray-300">First Name</label>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    className={`w-full rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none transition-all glass-input ${errors.firstName ? "border-red-500" : ""}`}
                                                    placeholder="John"
                                                />
                                                {errors.firstName && <p className="text-red-400 text-xs flex items-center gap-1"><AlertCircle size={12} />{errors.firstName}</p>}
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-gray-300">Last Name</label>
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    className={`w-full rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none transition-all glass-input ${errors.lastName ? "border-red-500" : ""}`}
                                                    placeholder="Doe"
                                                />
                                                {errors.lastName && <p className="text-red-400 text-xs flex items-center gap-1"><AlertCircle size={12} />{errors.lastName}</p>}
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300">Work Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={`w-full rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none transition-all glass-input ${errors.email ? "border-red-500" : ""}`}
                                                placeholder="john@company.com"
                                            />
                                            {errors.email && <p className="text-red-400 text-xs flex items-center gap-1"><AlertCircle size={12} />{errors.email}</p>}
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300">Company Name</label>
                                            <input
                                                type="text"
                                                name="companyName"
                                                value={formData.companyName}
                                                onChange={handleChange}
                                                className={`w-full rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none transition-all glass-input ${errors.companyName ? "border-red-500" : ""}`}
                                                placeholder="Acme Inc."
                                            />
                                            {errors.companyName && <p className="text-red-400 text-xs flex items-center gap-1"><AlertCircle size={12} />{errors.companyName}</p>}
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300">Consultation Topic</label>
                                            <select
                                                name="topic"
                                                value={formData.topic}
                                                onChange={handleChange}
                                                className="w-full rounded-xl px-4 py-3.5 text-white focus:outline-none transition-all glass-input"
                                            >
                                                <option>General Inquiry</option>
                                                <option>Implementation Services</option>
                                                <option>Managed Services</option>
                                                <option>Advisory Services</option>
                                                <option>Accelerators</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300">Message</label>
                                            <textarea
                                                name="message"
                                                rows={4}
                                                value={formData.message}
                                                onChange={handleChange}
                                                className={`w-full rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none transition-all glass-input resize-none ${errors.message ? "border-red-500" : ""}`}
                                                placeholder="Tell us about your project..."
                                            />
                                            {errors.message && <p className="text-red-400 text-xs flex items-center gap-1"><AlertCircle size={12} />{errors.message}</p>}
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70"
                                            style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #1d4ed8 100%)' }}
                                        >
                                            {isSubmitting ? (
                                                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            ) : (
                                                <>
                                                    Request Consultation
                                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}
