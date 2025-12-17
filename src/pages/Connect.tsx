
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Globe, Users, ArrowRight, Linkedin, Twitter, Facebook, AlertCircle } from "lucide-react"
import { Link } from "react-router-dom"

export default function Connect() {
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!email.trim()) {
            setError("Email is required")
            return
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("Please enter a valid email address")
            return
        }

        // Handle successful subscription
        console.log("Newsletter Subscription:", email)
        alert("Thank you for subscribing to our newsletter!")
        setEmail("")
        setError("")
    }

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden bg-[#020617]">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-[#020617]" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400"
                        >
                            Connect with <span className="text-accent-blue">Us Today</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl text-gray-400 leading-relaxed"
                        >
                            Join our community, stay updated with the latest insights, or reach out for general inquiries. We're here to build lasting relationships.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Options Section */}
            <section className="py-20 bg-[#0f172a]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* General Inquiry */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="glass-card p-8 hover:border-accent-blue/50 group"
                        >
                            <div className="w-14 h-14 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Mail size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">General Inquiry</h3>
                            <p className="text-gray-400 mb-6">
                                Have a question that doesn't fit into a consultation or demo? Send us a message and we'll help you out.
                            </p>
                            <Link to="/general-inquiry" className="inline-flex items-center gap-2 text-accent-blue font-semibold hover:gap-3 transition-all">
                                Contact Support <ArrowRight size={18} />
                            </Link>
                        </motion.div>

                        {/* Community */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-8 hover:border-accent-red/50 group"
                        >
                            <div className="w-14 h-14 rounded-xl bg-accent-red/10 flex items-center justify-center text-accent-red mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Users size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Join Community</h3>
                            <p className="text-gray-400 mb-6">
                                Connect with other Oracle FDI experts and enthusiasts. Share knowledge and grow together.
                            </p>
                            <Link to="/join-community" className="inline-flex items-center gap-2 text-accent-red font-semibold hover:gap-3 transition-all">
                                Join Community <ArrowRight size={18} />
                            </Link>
                        </motion.div>

                        {/* Socials */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="glass-card p-8 hover:border-green-500/50 group"
                        >
                            <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Globe size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Follow Us</h3>
                            <p className="text-gray-400 mb-6">
                                Stay updated with the latest news, articles, and announcements on our social media channels.
                            </p>
                            <div className="flex gap-4">
                                <a
                                    href="https://www.linkedin.com/company/fdi-associates/posts/?feedView=all"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-[#020617] flex items-center justify-center text-gray-400 hover:bg-[#0077B5] hover:text-white transition-all duration-300"
                                >
                                    <Linkedin size={18} />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-[#020617] flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all duration-300"
                                >
                                    <Twitter size={18} />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-[#020617] flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all duration-300"
                                >
                                    <Facebook size={18} />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-20 bg-surface dark:bg-dark-surface border-t border-[#1e293b]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Subscribe to Our Newsletter</h2>
                    <p className="text-gray-400 mb-8">
                        Get the latest insights on Oracle FDI, data analytics, and business intelligence delivered straight to your inbox.
                    </p>
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto relative">
                        <div className="flex-grow relative">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                    setError("")
                                }}
                                placeholder="Enter your email address"
                                className={`w-full bg-[#020617] border rounded-lg px-4 py-3 text-white focus:outline-none transition-colors ${error ? "border-red-500 focus:border-red-500" : "border-[#334155] focus:border-accent-blue"
                                    }`}
                            />
                            {error && (
                                <p className="absolute -bottom-6 left-0 text-red-500 text-xs flex items-center gap-1">
                                    <AlertCircle size={12} /> {error}
                                </p>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="bg-white text-black font-bold px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}
