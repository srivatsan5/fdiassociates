"use client"

import { motion } from "framer-motion"

interface LogoTickerProps {
    className?: string
}

export default function LogoTicker({ className = "" }: LogoTickerProps) {
    // Partner/Client logos - simplified professional design
    const logos = [
        { name: "Oracle Partner", abbr: "O" },
        { name: "Fortune 500", abbr: "F500" },
        { name: "Global Enterprise", abbr: "GE" },
        { name: "Tech Leaders", abbr: "TL" },
        { name: "Oracle Cloud", abbr: "OC" },
        { name: "Data Analytics", abbr: "DA" },
        { name: "Cloud Solutions", abbr: "CS" },
        { name: "Digital Trans", abbr: "DT" },
    ]

    // Duplicate logos for seamless infinite scroll
    const duplicatedLogos = [...logos, ...logos]

    return (
        <div className={`relative overflow-hidden ${className}`}>
            {/* Gradient fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0f1a] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0f1a] to-transparent z-10 pointer-events-none" />

            {/* Scrolling track */}
            <motion.div
                className="flex items-center gap-12 py-4"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 25,
                        ease: "linear",
                    },
                }}
            >
                {duplicatedLogos.map((logo, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-3 shrink-0 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-default"
                    >
                        <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700/50 flex items-center justify-center">
                            <span className="text-xs font-bold text-slate-400">{logo.abbr}</span>
                        </div>
                        <span className="text-sm text-slate-400 font-medium whitespace-nowrap">
                            {logo.name}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

