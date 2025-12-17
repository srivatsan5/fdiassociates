"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { Calendar, X } from "lucide-react"

export default function StickyCTA() {
    const [isVisible, setIsVisible] = useState(false)
    const [isDismissed, setIsDismissed] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling 600px
            if (window.scrollY > 600 && !isDismissed) {
                setIsVisible(true)
            } else if (window.scrollY <= 400) {
                setIsVisible(false)
                setIsDismissed(false) // Reset when scrolling back to top
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [isDismissed])

    const handleDismiss = () => {
        setIsDismissed(true)
        setIsVisible(false)
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 flex items-center gap-2"
                >
                    {/* Main CTA Button */}
                    <Link
                        to="/demo"
                        className="flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-3 rounded-full text-white font-semibold shadow-2xl group active:scale-95 transition-transform"
                        style={{
                            background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
                            boxShadow: "0 10px 40px -10px rgba(239, 68, 68, 0.5), 0 0 0 1px rgba(255,255,255,0.1)",
                        }}
                    >
                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                        >
                            <Calendar size={18} />
                        </motion.div>
                        <span className="hidden sm:inline text-sm">Schedule a Demo</span>
                        <span className="sm:hidden text-sm">Demo</span>
                    </Link>

                    {/* Dismiss Button */}
                    <button
                        onClick={handleDismiss}
                        className="p-2.5 rounded-full bg-gray-800/80 backdrop-blur-sm text-gray-400 hover:text-white hover:bg-gray-700 transition-colors active:scale-95"
                        aria-label="Dismiss"
                    >
                        <X size={16} />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
