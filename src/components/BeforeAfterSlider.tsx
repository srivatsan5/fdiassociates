"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowLeftRight } from "lucide-react"

interface BeforeAfterSliderProps {
    beforeImage: string
    afterImage: string
    beforeLabel?: string
    afterLabel?: string
    className?: string
}

export default function BeforeAfterSlider({
    beforeImage,
    afterImage,
    beforeLabel = "Before",
    afterLabel = "After",
    className = "",
}: BeforeAfterSliderProps) {
    const [sliderPosition, setSliderPosition] = useState(50)
    const containerRef = useRef<HTMLDivElement>(null)
    const isDragging = useRef(false)

    const handleMove = (clientX: number) => {
        if (!containerRef.current || !isDragging.current) return

        const rect = containerRef.current.getBoundingClientRect()
        const x = clientX - rect.left
        const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100)
        setSliderPosition(percentage)
    }

    const handleMouseDown = () => {
        isDragging.current = true
    }

    const handleMouseUp = () => {
        isDragging.current = false
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        handleMove(e.clientX)
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        handleMove(e.touches[0].clientX)
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`relative overflow-hidden rounded-2xl border border-slate-800/50 ${className}`}
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}
        >
            {/* Before Image (Full width, clipped) */}
            <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <img
                    src={beforeImage}
                    alt={beforeLabel}
                    className="w-full h-full object-cover"
                />
                {/* Before Label */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-700/50">
                    <span className="text-sm font-medium text-white">{beforeLabel}</span>
                </div>
            </div>

            {/* After Image */}
            <div className="w-full">
                <img
                    src={afterImage}
                    alt={afterLabel}
                    className="w-full h-auto object-cover"
                />
                {/* After Label */}
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-green-500/20 border border-green-500/30">
                    <span className="text-sm font-medium text-green-400">{afterLabel}</span>
                </div>
            </div>

            {/* Slider Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
                style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
            >
                {/* Handle Knob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center cursor-ew-resize">
                    <ArrowLeftRight size={18} className="text-slate-900" />
                </div>
            </div>

            {/* Instruction overlay */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-700/50">
                <span className="text-xs text-slate-400">Drag to compare</span>
            </div>
        </motion.div>
    )
}
