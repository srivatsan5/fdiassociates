"use client"

import { useRef, useState, ReactNode } from "react"
import { motion } from "framer-motion"

interface TiltCardProps {
    children: ReactNode
    className?: string
    intensity?: number
    glare?: boolean
}

export default function TiltCard({
    children,
    className = "",
    intensity = 10,
    glare = true
}: TiltCardProps) {
    const cardRef = useRef<HTMLDivElement>(null)
    const [rotateX, setRotateX] = useState(0)
    const [rotateY, setRotateY] = useState(0)
    const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 })

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return

        const rect = cardRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        const mouseX = e.clientX - centerX
        const mouseY = e.clientY - centerY

        const rotateXValue = (mouseY / (rect.height / 2)) * -intensity
        const rotateYValue = (mouseX / (rect.width / 2)) * intensity

        setRotateX(rotateXValue)
        setRotateY(rotateYValue)

        // Calculate glare position
        const glareX = ((e.clientX - rect.left) / rect.width) * 100
        const glareY = ((e.clientY - rect.top) / rect.height) * 100
        setGlarePosition({ x: glareX, y: glareY })
    }

    const handleMouseLeave = () => {
        setRotateX(0)
        setRotateY(0)
        setGlarePosition({ x: 50, y: 50 })
    }

    return (
        <motion.div
            ref={cardRef}
            className={`tilt-card relative ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transformStyle: "preserve-3d",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
            <div className="tilt-card-inner relative" style={{ transform: "translateZ(0)" }}>
                {children}
            </div>

            {/* Glare effect */}
            {glare && (
                <div
                    className="tilt-card-glare absolute inset-0 pointer-events-none rounded-inherit"
                    style={{
                        background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.15) 0%, transparent 60%)`,
                        opacity: Math.abs(rotateX) + Math.abs(rotateY) > 0 ? 1 : 0,
                        transition: "opacity 0.3s ease",
                        borderRadius: "inherit",
                    }}
                />
            )}
        </motion.div>
    )
}
