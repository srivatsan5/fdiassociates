"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Monitor, BarChart, ArrowRight, Zap, AlertCircle, CheckCircle, Loader2, Sparkles, Calendar, Users } from "lucide-react"

export default function Demo() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        jobTitle: "",
        productInterest: "All Accelerators",
    })

    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        jobTitle: "",
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        if (errors[name as keyof typeof errors]) {
            setErrors((prev) => ({ ...prev, [name]: "" }))
        }
    }

    const validateForm = () => {
        let isValid = true
        const newErrors = { firstName: "", lastName: "", email: "", jobTitle: "" }

        if (!formData.firstName.trim()) {
            newErrors.firstName = "First name is required"
            isValid = false
        }
        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last name is required"
            isValid = false
        }
        if (!formData.email.trim()) {
            newErrors.email = "Work email is required"
            isValid = false
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address"
            isValid = false
        }
        if (!formData.jobTitle.trim()) {
            newErrors.jobTitle = "Job title is required"
            isValid = false
        }

        setErrors(newErrors)
        return isValid
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (validateForm()) {
            setIsSubmitting(true)
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500))
            setIsSubmitting(false)
            setIsSubmitted(true)
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                jobTitle: "",
                productInterest: "All Accelerators",
            })
        }
    }

    const features = [
        { icon: Monitor, title: "Live Walkthrough", desc: "A guided tour tailored to your role" },
        { icon: BarChart, title: "Real-world Scenarios", desc: "See how we handle complex challenges" },
        { icon: Play, title: "Interactive Q&A", desc: "Get answers in real-time" },
    ]

    const inputClasses = (fieldName: string) => `
        w-full px-5 py-4 rounded-xl text-white placeholder-gray-500 
        focus:outline-none transition-all duration-300
        ${errors[fieldName as keyof typeof errors] ? 'ring-2 ring-red-500/50' : 'focus:ring-2 focus:ring-accent-red/50'}
    `

    return (
        <div className="pt-20 overflow-hidden">
            {/* Hero Section */}
            <section className="relative py-20 sm:py-28 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a1e] via-[#0f172a] to-[#0a1628]" />
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-accent-red/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-accent-blue/10 rounded-full blur-[120px]" />
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
                        <span className="text-sm font-medium text-gray-300">See It In Action</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white"
                    >
                        Schedule a <span className="gradient-text">Live Demo</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
                    >
                        Experience the power of our Oracle FDI accelerators firsthand. Let us show you how we can transform your data landscape.
                    </motion.p>

                    {/* Feature pills */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 px-5 py-3 rounded-full"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.5) 0%, rgba(15, 23, 42, 0.7) 100%)',
                                    border: '1px solid rgba(255, 255, 255, 0.06)',
                                }}
                            >
                                <feature.icon size={18} className="text-accent-red" />
                                <span className="text-sm font-medium text-white">{feature.title}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 sm:py-28 bg-[#020617]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        {/* Left Column: Information */}
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
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">What to Expect</h2>

                            <div className="space-y-6 mb-12">
                                {features.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex gap-5 group"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                                            style={{
                                                background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(239, 68, 68, 0.05) 100%)',
                                                border: '1px solid rgba(239, 68, 68, 0.2)',
                                            }}
                                        >
                                            <item.icon size={24} className="text-accent-red" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                                            <p className="text-gray-400">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Trust badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-2xl"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.6) 100%)',
                                    border: '1px solid rgba(255, 255, 255, 0.06)',
                                }}
                            >
                                <div className="flex items-center gap-4 mb-3">
                                    <Users size={24} className="text-accent-blue" />
                                    <h3 className="text-lg font-semibold text-white">Trusted by Industry Leaders</h3>
                                </div>
                                <p className="text-gray-400">
                                    Join 100+ organizations leveraging our expertise to drive data success.
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* Right Column: Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl"
                            style={{
                                background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.5) 0%, rgba(15, 23, 42, 0.7) 100%)',
                                border: '1px solid rgba(255, 255, 255, 0.06)',
                            }}
                        >
                            <AnimatePresence mode="wait">
                                {isSubmitted ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-12"
                                    >
                                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
                                            <CheckCircle size={40} className="text-green-400" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-3">Demo Requested!</h3>
                                        <p className="text-gray-400 mb-6">We'll be in touch within 24 hours.</p>
                                        <button
                                            onClick={() => setIsSubmitted(false)}
                                            className="text-accent-red hover:underline font-medium"
                                        >
                                            Submit another request
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        onSubmit={handleSubmit}
                                        className="space-y-6"
                                    >
                                        <div className="flex items-center gap-3 mb-6">
                                            <Calendar size={20} className="text-accent-red" />
                                            <span className="text-white font-semibold">Book Your Demo</span>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-gray-300">First Name</label>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    className={inputClasses('firstName')}
                                                    style={{
                                                        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.7) 100%)',
                                                        border: '1px solid rgba(255, 255, 255, 0.08)',
                                                    }}
                                                    placeholder="John"
                                                />
                                                {errors.firstName && (
                                                    <p className="text-red-400 text-xs flex items-center gap-1 mt-1">
                                                        <AlertCircle size={12} /> {errors.firstName}
                                                    </p>
                                                )}
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-gray-300">Last Name</label>
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    className={inputClasses('lastName')}
                                                    style={{
                                                        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.7) 100%)',
                                                        border: '1px solid rgba(255, 255, 255, 0.08)',
                                                    }}
                                                    placeholder="Doe"
                                                />
                                                {errors.lastName && (
                                                    <p className="text-red-400 text-xs flex items-center gap-1 mt-1">
                                                        <AlertCircle size={12} /> {errors.lastName}
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300">Work Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={inputClasses('email')}
                                                style={{
                                                    background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.7) 100%)',
                                                    border: '1px solid rgba(255, 255, 255, 0.08)',
                                                }}
                                                placeholder="john@company.com"
                                            />
                                            {errors.email && (
                                                <p className="text-red-400 text-xs flex items-center gap-1 mt-1">
                                                    <AlertCircle size={12} /> {errors.email}
                                                </p>
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300">Job Title</label>
                                            <input
                                                type="text"
                                                name="jobTitle"
                                                value={formData.jobTitle}
                                                onChange={handleChange}
                                                className={inputClasses('jobTitle')}
                                                style={{
                                                    background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.7) 100%)',
                                                    border: '1px solid rgba(255, 255, 255, 0.08)',
                                                }}
                                                placeholder="CTO / Data Architect"
                                            />
                                            {errors.jobTitle && (
                                                <p className="text-red-400 text-xs flex items-center gap-1 mt-1">
                                                    <AlertCircle size={12} /> {errors.jobTitle}
                                                </p>
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300">Product Interest</label>
                                            <select
                                                name="productInterest"
                                                value={formData.productInterest}
                                                onChange={handleChange}
                                                className="w-full px-5 py-4 rounded-xl text-white focus:outline-none transition-all"
                                                style={{
                                                    background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.7) 100%)',
                                                    border: '1px solid rgba(255, 255, 255, 0.08)',
                                                }}
                                            >
                                                <option>All Accelerators</option>
                                                <option>FiNtelligence</option>
                                                <option>iSCM Solution</option>
                                                <option>CX Signal Hub</option>
                                                <option>HiRe</option>
                                            </select>
                                        </div>

                                        <motion.button
                                            type="submit"
                                            disabled={isSubmitting}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-3 disabled:opacity-70 transition-all"
                                            style={{
                                                background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                                                boxShadow: '0 4px 20px -5px rgba(239, 68, 68, 0.5)',
                                            }}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 size={20} className="animate-spin" />
                                                    <span>Submitting...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <span>Book Your Demo</span>
                                                    <ArrowRight size={20} />
                                                </>
                                            )}
                                        </motion.button>
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
