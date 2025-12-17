"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Gift, ArrowRight, Mail } from "lucide-react"

interface ExitIntentProps {
    delay?: number // Delay in ms before enabling exit intent
}

export default function ExitIntent({ delay = 5000 }: ExitIntentProps) {
    const [isVisible, setIsVisible] = useState(false)
    const [isEnabled, setIsEnabled] = useState(false)
    const [email, setEmail] = useState("")
    const [hasShown, setHasShown] = useState(false)

    // Check if already shown in this session
    useEffect(() => {
        const shown = sessionStorage.getItem("exitIntentShown")
        if (shown) {
            setHasShown(true)
        }

        // Enable after delay
        const timer = setTimeout(() => {
            setIsEnabled(true)
        }, delay)

        return () => clearTimeout(timer)
    }, [delay])

    const handleMouseLeave = useCallback((e: MouseEvent) => {
        // Only trigger when mouse leaves through the top
        if (e.clientY <= 0 && isEnabled && !hasShown) {
            setIsVisible(true)
            setHasShown(true)
            sessionStorage.setItem("exitIntentShown", "true")
        }
    }, [isEnabled, hasShown])

    useEffect(() => {
        document.addEventListener("mouseleave", handleMouseLeave)
        return () => document.removeEventListener("mouseleave", handleMouseLeave)
    }, [handleMouseLeave])

    const handleClose = () => {
        setIsVisible(false)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send to your email service
        console.log("Email submitted:", email)
        handleClose()
        // Show success message or redirect
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="exit-modal-overlay visible"
                    onClick={handleClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 20 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="exit-modal"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-600 transition-colors"
                            aria-label="Close"
                        >
                            <X size={18} />
                        </button>

                        {/* Icon */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 400 }}
                            className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-accent-red/20 to-accent-blue/20 flex items-center justify-center"
                        >
                            <Gift size={32} className="text-accent-red" />
                        </motion.div>

                        {/* Content */}
                        <h3 className="text-2xl font-bold text-white mb-3">
                            Wait! Don't Miss Out
                        </h3>
                        <p className="text-slate-400 mb-6">
                            Get our exclusive <span className="text-white font-semibold">FDI Implementation Guide</span> and discover how to accelerate your Oracle analytics journey.
                        </p>

                        {/* Email Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="relative">
                                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                    className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-accent-red/50 focus:ring-2 focus:ring-accent-red/20 transition-all"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full btn-primary btn-glow flex items-center justify-center gap-2"
                            >
                                Get Free Guide
                                <ArrowRight size={18} />
                            </button>
                        </form>

                        <p className="text-xs text-slate-500 mt-4">
                            No spam, ever. Unsubscribe anytime.
                        </p>

                        {/* Skip link */}
                        <button
                            onClick={handleClose}
                            className="mt-4 text-sm text-slate-500 hover:text-slate-300 transition-colors"
                        >
                            No thanks, I'll skip this offer
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
