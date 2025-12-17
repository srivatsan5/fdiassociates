"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface LiveActivityProps {
    className?: string
}

export default function LiveActivity({ className = "" }: LiveActivityProps) {
    const [count, setCount] = useState(0)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Initial random count between 3-8
        const initialCount = Math.floor(Math.random() * 6) + 3
        setCount(initialCount)

        // Delay visibility for a nice entrance
        const visibilityTimer = setTimeout(() => {
            setIsVisible(true)
        }, 1500)

        // Occasionally update the count
        const interval = setInterval(() => {
            setCount(prev => {
                const change = Math.random() > 0.5 ? 1 : -1
                const newCount = prev + change
                return Math.min(Math.max(newCount, 2), 12) // Keep between 2-12
            })
        }, 30000) // Update every 30 seconds

        return () => {
            clearInterval(interval)
            clearTimeout(visibilityTimer)
        }
    }, [])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-700/50 backdrop-blur-sm ${className}`}
                >
                    {/* Pulsing green dot */}
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                    </span>

                    <span className="text-sm text-slate-400">
                        <motion.span
                            key={count}
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="font-semibold text-white"
                        >
                            {count}
                        </motion.span>
                        {" "}consultations scheduled today
                    </span>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

