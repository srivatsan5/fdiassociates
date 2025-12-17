"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote, Pause, Play } from "lucide-react"

const testimonials = [
    {
        id: 1,
        quote: "FDI Associates transformed our Oracle Fusion Data Intelligence implementation. Their expertise cut our deployment time in half and delivered insights we never thought possible.",
        author: "Sarah Chen",
        role: "VP of Analytics",
        company: "Fortune 500 Manufacturing",
        metric: "50% faster deployment"
    },
    {
        id: 2,
        quote: "The team's deep knowledge of Oracle FDI and their commitment to our success made all the difference. We're now making data-driven decisions faster than ever.",
        author: "Michael Rodriguez",
        role: "CIO",
        company: "Global Retail Enterprise",
        metric: "3x faster decisions"
    },
    {
        id: 3,
        quote: "Outstanding support and implementation services. FDI Associates doesn't just deliver solutions—they become true partners in your digital transformation journey.",
        author: "Jennifer Park",
        role: "Director of Digital Transformation",
        company: "Healthcare Systems Inc.",
        metric: "100% satisfaction"
    },
]

export default function Testimonials() {
    const [current, setCurrent] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const containerRef = useRef<HTMLDivElement>(null)
    const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

    // Touch handling
    const [touchStart, setTouchStart] = useState(0)

    const nextSlide = useCallback(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length)
    }, [])

    const prevSlide = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

    // Autoplay functionality
    useEffect(() => {
        if (isAutoPlaying) {
            autoPlayRef.current = setInterval(nextSlide, 5000) // Change every 5 seconds
        }
        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current)
            }
        }
    }, [isAutoPlaying, nextSlide])

    const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX)
    const handleTouchEnd = (e: React.TouchEvent) => {
        const touchEnd = e.changedTouches[0].clientX
        if (touchStart - touchEnd > 75) nextSlide()
        if (touchStart - touchEnd < -75) prevSlide()
    }

    const getInitials = (name: string) => name.split(" ").map((n) => n[0]).join("").toUpperCase()

    return (
        <section className="py-24 lg:py-32 bg-[#0a0f1a] relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-br from-accent-red/5 to-accent-blue/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header with animated accent bar */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 48 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="h-1 bg-gradient-to-r from-accent-red to-orange-500 mx-auto mb-6 rounded-full"
                    />
                    <p className="text-red-500 text-sm font-medium tracking-wide uppercase mb-4">Testimonials</p>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
                        Trusted by Industry Leaders
                    </h2>
                </motion.div>

                {/* Testimonial Card */}
                <div
                    ref={containerRef}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    className="relative"
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="relative"
                        >
                            {/* Card */}
                            <div className="relative p-8 lg:p-12 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-950/80 border border-slate-800/50 overflow-hidden">
                                {/* Quote icon */}
                                <Quote size={48} className="absolute top-6 right-6 text-slate-800/50" />

                                {/* Metric badge */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-green-500/10 border border-green-500/20"
                                >
                                    <span className="text-green-400 font-semibold text-sm">{testimonials[current].metric}</span>
                                </motion.div>

                                {/* Quote */}
                                <blockquote className="text-xl lg:text-2xl text-slate-300 leading-relaxed mb-10 font-light relative z-10">
                                    "{testimonials[current].quote}"
                                </blockquote>

                                {/* Author */}
                                <div className="flex items-center gap-4">
                                    <motion.div
                                        className="w-14 h-14 rounded-full bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center text-white font-semibold text-sm ring-2 ring-red-500/20"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        {getInitials(testimonials[current].author)}
                                    </motion.div>
                                    <div>
                                        <p className="text-white font-medium text-lg">{testimonials[current].author}</p>
                                        <p className="text-slate-500 text-sm">
                                            {testimonials[current].role}
                                        </p>
                                        <p className="text-slate-600 text-xs">
                                            {testimonials[current].company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation */}
                    <div className="flex items-center justify-between mt-8">
                        {/* Dots with progress indicator */}
                        <div className="flex items-center gap-3">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrent(index)}
                                    className="relative h-2 transition-all overflow-hidden rounded-full"
                                    style={{ width: index === current ? 32 : 8 }}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                >
                                    <div className={`absolute inset-0 ${index === current ? "bg-slate-700" : "bg-slate-700"} rounded-full`} />
                                    {index === current && isAutoPlaying && (
                                        <motion.div
                                            className="absolute inset-0 bg-red-500 rounded-full origin-left"
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: 1 }}
                                            transition={{ duration: 5, ease: "linear" }}
                                            key={`progress-${current}`}
                                        />
                                    )}
                                    {index === current && !isAutoPlaying && (
                                        <div className="absolute inset-0 bg-red-500 rounded-full" />
                                    )}
                                </button>
                            ))}
                        </div>

                        <div className="flex gap-2">
                            {/* Autoplay toggle */}
                            <button
                                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                                className="p-2.5 rounded-lg border border-slate-700 text-slate-400 hover:text-white hover:border-slate-600 transition-colors"
                                aria-label={isAutoPlaying ? "Pause autoplay" : "Resume autoplay"}
                            >
                                {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
                            </button>
                            <button
                                onClick={prevSlide}
                                className="p-2.5 rounded-lg border border-slate-700 text-slate-400 hover:text-white hover:border-slate-600 transition-colors"
                                aria-label="Previous"
                            >
                                <ChevronLeft size={18} />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="p-2.5 rounded-lg border border-slate-700 text-slate-400 hover:text-white hover:border-slate-600 transition-colors"
                                aria-label="Next"
                            >
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

