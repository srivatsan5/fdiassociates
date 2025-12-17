"use client"

import { useEffect, useState } from "react"
import { motion, useSpring, useScroll } from "framer-motion"

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 100)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 z-[100] origin-left pointer-events-none"
            style={{
                scaleX,
                background: "linear-gradient(90deg, #ef4444 0%, #f97316 50%, #3b82f6 100%)",
                opacity: isVisible ? 1 : 0,
                transition: "opacity 0.3s ease",
            }}
        />
    )
}
