"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Clock, Zap } from "lucide-react"

interface CountdownTimerProps {
    endDate?: Date
    className?: string
}

export default function CountdownTimer({
    endDate = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // Default 3 days from now
    className = ""
}: CountdownTimerProps) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = endDate.getTime() - Date.now()

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / (1000 * 60)) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                })
            }
        }

        calculateTimeLeft()
        const timer = setInterval(calculateTimeLeft, 1000)
        return () => clearInterval(timer)
    }, [endDate])

    const TimeBlock = ({ value, label }: { value: number; label: string }) => (
        <div className="flex flex-col items-center">
            <motion.div
                key={value}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-slate-800/80 border border-slate-700/50 flex items-center justify-center"
            >
                <span className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
                    {value.toString().padStart(2, '0')}
                </span>
            </motion.div>
            <span className="text-xs text-slate-500 mt-2 uppercase tracking-wide">{label}</span>
        </div>
    )

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800/50 ${className}`}
        >
            <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <Zap size={16} className="text-red-500" />
                </div>
                <span className="text-sm font-medium text-red-400">Limited Time Offer</span>
            </div>

            <p className="text-white font-semibold mb-4">Free Oracle Assessment ends in:</p>

            <div className="flex items-center justify-center gap-3 sm:gap-4">
                <TimeBlock value={timeLeft.days} label="Days" />
                <span className="text-2xl text-slate-600 font-light">:</span>
                <TimeBlock value={timeLeft.hours} label="Hours" />
                <span className="text-2xl text-slate-600 font-light">:</span>
                <TimeBlock value={timeLeft.minutes} label="Mins" />
                <span className="text-2xl text-slate-600 font-light hidden sm:block">:</span>
                <div className="hidden sm:block">
                    <TimeBlock value={timeLeft.seconds} label="Secs" />
                </div>
            </div>
        </motion.div>
    )
}
