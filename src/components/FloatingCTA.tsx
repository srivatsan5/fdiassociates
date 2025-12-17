"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight, Calendar, X } from "lucide-react"

interface FloatingCTAProps {
    threshold?: number // Scroll threshold in pixels to show CTA
}

export default function FloatingCTA({ threshold = 800 }: FloatingCTAProps) {
    const [isVisible, setIsVisible] = useState(false)
    const [isHidden, setIsHidden] = useState(false) // User dismissed

    useEffect(() => {
        const handleScroll = () => {
            if (isHidden) return
            const scrollY = window.scrollY
            setIsVisible(scrollY > threshold)
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [threshold, isHidden])

    // Don't show if user has dismissed in this session
    if (isHidden) return null

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    style={{
                        position: 'fixed',
                        bottom: '24px',
                        right: '24px',
                        zIndex: 50,
                    }}
                    className="hidden md:block"
                >
                    <div className="relative">
                        <Link
                            to="/demo"
                            className="flex items-center gap-3 px-5 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold shadow-lg shadow-red-600/25 transition-all duration-300 hover:shadow-xl hover:shadow-red-600/30"
                        >
                            <Calendar size={18} />
                            <span>Schedule Demo</span>
                            <ArrowRight size={16} />
                        </Link>

                        {/* Close button */}
                        <button
                            onClick={(e) => {
                                e.preventDefault()
                                setIsHidden(true)
                            }}
                            className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                            aria-label="Dismiss"
                        >
                            <X size={12} />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

