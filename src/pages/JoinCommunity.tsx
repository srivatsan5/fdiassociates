"use client"

import { motion } from "framer-motion"
import { Users, Linkedin, MessageSquare, BookOpen, Zap, Globe, ArrowRight, CheckCircle, Sparkles } from "lucide-react"
import { Link } from "react-router-dom"

// Animation variants for consistency
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
}

export default function JoinCommunity() {
    const benefits = [
        { icon: MessageSquare, title: "Expert Discussions", description: "Engage in meaningful conversations with Oracle FDI experts.", color: "from-accent-red to-orange-500" },
        { icon: BookOpen, title: "Knowledge Sharing", description: "Access exclusive resources, best practices, and guides.", color: "from-accent-blue to-cyan-400" },
        { icon: Zap, title: "Early Access", description: "Get early access to new accelerators and feature announcements.", color: "from-purple-500 to-pink-500" },
        { icon: Globe, title: "Global Network", description: "Connect with professionals worldwide working with Oracle FDI.", color: "from-green-500 to-emerald-400" },
    ]

    const communityStats = [
        { value: "500+", label: "Members" },
        { value: "50+", label: "Experts" },
        { value: "100+", label: "Resources" },
        { value: "24/7", label: "Active" },
    ]

    const membershipPerks = [
        "Access to exclusive FDI resources and documentation",
        "Priority support from Oracle FDI specialists",
        "Invitations to webinars and virtual events",
        "Networking with industry peers and experts",
        "Early access to new product releases",
    ]

    return (
        <div className="pt-20 overflow-hidden">
            {/* Hero */}
            <section className="relative py-24 sm:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a1e] via-[#0f172a] to-[#0a1628]" />
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-accent-red/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px]" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-20 h-20 rounded-3xl mx-auto mb-8 flex items-center justify-center"
                        style={{ background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(239, 68, 68, 0.05) 100%)', border: '1px solid rgba(239, 68, 68, 0.2)' }}
                    >
                        <Users size={36} className="text-accent-red" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white"
                    >
                        Join Our <span className="gradient-text">Community</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
                    >
                        Connect with Oracle FDI experts, share knowledge, and grow together. Be part of the leading community for Fusion Data Intelligence professionals.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <a
                            href="https://www.linkedin.com/company/fdi-associates/posts/?feedView=all"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105"
                            style={{ background: 'linear-gradient(135deg, #0077B5 0%, #005885 100%)', boxShadow: '0 4px 15px -3px rgba(0, 119, 181, 0.4)' }}
                        >
                            <Linkedin size={20} />
                            Join on LinkedIn
                            <ArrowRight size={18} />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 bg-[#0f172a] border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-4 gap-8">
                        {communityStats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <p className="text-2xl md:text-3xl font-bold text-accent-red mb-1">{stat.value}</p>
                                <p className="text-gray-500 text-sm">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-24 bg-[#020617]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 48 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="h-1 bg-gradient-to-r from-accent-red to-orange-500 mx-auto mb-6 rounded-full"
                        />
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Why Join Our Community?</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Discover the benefits of being part of our exclusive FDI network</p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group p-6 rounded-2xl glass-card"
                            >
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300`}>
                                    <benefit.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Membership Perks */}
            <section className="py-24 bg-[#0a0f1a]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                                className="h-1 bg-gradient-to-r from-accent-blue to-cyan-400 mb-6 rounded-full"
                            />
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Membership Perks</h2>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                As a community member, you'll gain access to exclusive resources and opportunities to grow your Oracle FDI expertise.
                            </p>
                            <div className="space-y-4">
                                {membershipPerks.map((perk, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-center gap-4"
                                    >
                                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent-blue to-cyan-400 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle size={14} className="text-white" />
                                        </div>
                                        <p className="text-gray-300">{perk}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl glass-card"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Sparkles size={24} className="text-accent-red" />
                                <h3 className="text-xl font-bold text-white">Ready to Join?</h3>
                            </div>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Connect with us on LinkedIn to join the community and start engaging with Oracle FDI professionals worldwide.
                            </p>
                            <a
                                href="https://www.linkedin.com/company/fdi-associates/posts/?feedView=all"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 w-full justify-center px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105"
                                style={{ background: 'linear-gradient(135deg, #0077B5 0%, #005885 100%)', boxShadow: '0 4px 15px -3px rgba(0, 119, 181, 0.4)' }}
                            >
                                <Linkedin size={20} />
                                Connect on LinkedIn
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-[#020617] relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-accent-red/10 to-purple-500/10 rounded-full blur-[120px]" />
                </div>

                <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Have Questions?</h2>
                        <p className="text-gray-400 text-lg mb-8">We'd love to hear from you. Reach out to learn more about our community.</p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105"
                            style={{ background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)', boxShadow: '0 4px 15px -3px rgba(239, 68, 68, 0.4)' }}
                        >
                            Contact Us
                            <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
