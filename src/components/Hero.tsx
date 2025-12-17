"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle2, Play, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"
import LiveActivity from "./LiveActivity"

export default function Hero() {
    const benefits = [
        "Free Out-of-Box FDI Implementation",
        "24/7 Expert Support & Consultation",
        "100+ Successful Implementations"
    ]

    const fullText = "Oracle Fusion Data Intelligence"
    const [displayText, setDisplayText] = useState("")
    const [isTypingComplete, setIsTypingComplete] = useState(false)

    useEffect(() => {
        if (displayText.length < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayText(fullText.slice(0, displayText.length + 1))
            }, 50)
            return () => clearTimeout(timeout)
        } else {
            setIsTypingComplete(true)
        }
    }, [displayText, fullText])

    return (
        <section className="relative bg-[#020617] overflow-hidden min-h-[90vh] flex items-center">
            {/* Background gradients */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#020617]" />

                {/* Red accent - top right */}
                <div
                    className="absolute top-0 right-0 w-1/2 h-full"
                    style={{
                        background: 'radial-gradient(ellipse 80% 80% at 100% 0%, rgba(239, 68, 68, 0.08), transparent 60%)',
                    }}
                />

                {/* Blue accent - bottom left */}
                <div
                    className="absolute bottom-0 left-0 w-1/2 h-full"
                    style={{
                        background: 'radial-gradient(ellipse 80% 80% at 0% 100%, rgba(59, 130, 246, 0.06), transparent 60%)',
                    }}
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="lg:col-span-7"
                    >
                        {/* Premium badge with animation */}
                        <motion.div
                            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full"
                            style={{
                                background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(249, 115, 22, 0.1) 100%)',
                                border: '1px solid rgba(239, 68, 68, 0.2)',
                            }}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <motion.div
                                animate={{ rotate: [0, 15, -15, 0] }}
                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                            >
                                <Sparkles size={16} className="text-red-400" />
                            </motion.div>
                            <span className="text-sm font-medium text-red-400 tracking-wide uppercase">Oracle FDI Partner</span>
                        </motion.div>

                        {/* Main heading with enhanced styling */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 tracking-tight">
                            <span className="text-white block mb-2">Empowering Enterprise</span>
                            <span className="text-white block mb-2">with</span>
                            <span
                                className="text-transparent bg-clip-text inline-block"
                                style={{
                                    backgroundImage: 'linear-gradient(135deg, #ef4444 0%, #f97316 50%, #eab308 100%)',
                                }}
                            >
                                {displayText}
                                {!isTypingComplete && (
                                    <motion.span
                                        className="inline-block w-0.5 h-[0.9em] bg-red-500 ml-1 align-middle"
                                        animate={{ opacity: [1, 0] }}
                                        transition={{ duration: 0.5, repeat: Infinity }}
                                    />
                                )}
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-lg lg:text-xl text-slate-400 mb-8 leading-relaxed max-w-xl">
                            The premier Oracle FDI expert community driving faster adoption, reduced costs, and smarter business intelligence.
                        </p>

                        {/* Live Activity Indicator */}
                        <div className="mb-8">
                            <LiveActivity />
                        </div>

                        {/* CTAs with premium styling */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <Link
                                to="/contact"
                                className="btn-primary btn-glow inline-flex items-center justify-center gap-3 px-7 py-4 font-semibold rounded-xl"
                            >
                                Get Started
                                <motion.span
                                    animate={{ x: [0, 4, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <ArrowRight size={18} />
                                </motion.span>
                            </Link>
                            <Link
                                to="/demo"
                                className="btn-secondary inline-flex items-center justify-center gap-3 px-7 py-4 font-semibold rounded-xl group"
                            >
                                <motion.div
                                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <Play size={14} className="ml-0.5" />
                                </motion.div>
                                Watch Demo
                            </Link>
                        </div>

                        {/* Benefits with stagger animation */}
                        <div className="flex flex-wrap gap-x-8 gap-y-3">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                                    className="flex items-center gap-2 group"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.2 }}
                                        className="flex-shrink-0"
                                    >
                                        <CheckCircle2 size={16} className="text-green-500" />
                                    </motion.div>
                                    <span className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-5"
                    >
                        <div className="relative">
                            {/* Image container */}
                            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-slate-900/50">
                                <motion.img
                                    src="/Hero_image.png"
                                    alt="FDI Solutions Dashboard"
                                    className="w-full h-auto object-cover"
                                    loading="eager"
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none" />
                            </div>

                            {/* Floating Oracle Certified badge - bottom left */}
                            <motion.div
                                className="absolute -bottom-5 left-4 sm:left-6 px-4 py-3 rounded-xl bg-slate-900/95 border border-slate-700/50 shadow-xl shadow-slate-900/50"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                                        <CheckCircle2 size={18} className="text-green-500" />
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold text-sm">Oracle Certified</p>
                                        <p className="text-slate-500 text-xs">Gold Partner</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Metric badge - top right */}
                            <motion.div
                                className="absolute -top-3 right-4 sm:right-6 flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/95 border border-slate-700/50 shadow-xl shadow-slate-900/50"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1, duration: 0.5 }}
                            >
                                <span className="text-green-400 font-bold text-sm">↑ 40%</span>
                                <span className="text-slate-400 text-xs">Faster ROI</span>
                            </motion.div>

                            {/* Subtle glow behind */}
                            <div
                                className="absolute -inset-8 -z-10 rounded-3xl opacity-40"
                                style={{
                                    background: 'radial-gradient(ellipse at center, rgba(239, 68, 68, 0.15), transparent 70%)',
                                }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

