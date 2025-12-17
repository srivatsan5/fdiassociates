"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface AnimatedCounterProps {
    end: number
    duration?: number
    suffix?: string
    prefix?: string
    className?: string
}

export default function AnimatedCounter({
    end,
    duration = 2000,
    suffix = "",
    prefix = "",
    className = "",
}: AnimatedCounterProps) {
    const [count, setCount] = useState(0)
    const ref = useRef<HTMLSpanElement>(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const hasAnimated = useRef(false)

    useEffect(() => {
        if (!isInView || hasAnimated.current) return
        hasAnimated.current = true

        const startTime = Date.now()
        const startValue = 0

        const animate = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)

            // Ease out cubic for smooth deceleration
            const easeProgress = 1 - Math.pow(1 - progress, 3)
            const currentValue = Math.round(startValue + (end - startValue) * easeProgress)

            setCount(currentValue)

            if (progress < 1) {
                requestAnimationFrame(animate)
            }
        }

        requestAnimationFrame(animate)
    }, [isInView, end, duration])

    return (
        <motion.span
            ref={ref}
            className={`tabular-nums ${className}`}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
        >
            {prefix}{count.toLocaleString()}{suffix}
        </motion.span>
    )
}
