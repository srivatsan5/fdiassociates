"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Calculator, Building2, Users, Clock, TrendingUp, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

interface PricingCalculatorProps {
    className?: string
}

export default function PricingCalculator({ className = "" }: PricingCalculatorProps) {
    const [companySize, setCompanySize] = useState<"small" | "medium" | "large">("medium")
    const [modules, setModules] = useState(3)
    const [timeline, setTimeline] = useState<"standard" | "accelerated">("standard")

    // Calculate estimated pricing
    const basePrice = {
        small: 25000,
        medium: 50000,
        large: 100000,
    }

    const modulePrice = 8000
    const acceleratedMultiplier = 1.3

    const calculatePrice = () => {
        let price = basePrice[companySize] + (modules * modulePrice)
        if (timeline === "accelerated") {
            price *= acceleratedMultiplier
        }
        return Math.round(price)
    }

    const calculateTimeline = () => {
        const baseWeeks = {
            small: 4,
            medium: 6,
            large: 10,
        }
        let weeks = baseWeeks[companySize] + Math.floor(modules / 2)
        if (timeline === "accelerated") {
            weeks = Math.ceil(weeks * 0.6)
        }
        return weeks
    }

    const estimatedPrice = calculatePrice()
    const estimatedWeeks = calculateTimeline()

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800/50 ${className}`}
        >
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                    <Calculator size={22} className="text-green-400" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white">Pricing Estimator</h3>
                    <p className="text-slate-500 text-sm">Get an instant project estimate</p>
                </div>
            </div>

            {/* Company Size */}
            <div className="mb-6">
                <label className="flex items-center gap-2 text-slate-300 text-sm font-medium mb-3">
                    <Building2 size={16} />
                    Company Size
                </label>
                <div className="grid grid-cols-3 gap-2">
                    {[
                        { value: "small", label: "Small", desc: "< 500 employees" },
                        { value: "medium", label: "Medium", desc: "500-2000" },
                        { value: "large", label: "Enterprise", desc: "2000+" },
                    ].map((option) => (
                        <button
                            key={option.value}
                            onClick={() => setCompanySize(option.value as "small" | "medium" | "large")}
                            className={`p-3 rounded-xl border text-center transition-all ${companySize === option.value
                                    ? "bg-red-500/10 border-red-500/50 text-white"
                                    : "bg-slate-800/30 border-slate-700/30 text-slate-400 hover:border-slate-600"
                                }`}
                        >
                            <span className="block text-sm font-medium">{option.label}</span>
                            <span className="block text-xs text-slate-500">{option.desc}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Number of Modules */}
            <div className="mb-6">
                <label className="flex items-center gap-2 text-slate-300 text-sm font-medium mb-3">
                    <Users size={16} />
                    Oracle Modules Needed
                    <span className="ml-auto text-white font-bold">{modules}</span>
                </label>
                <input
                    type="range"
                    min="1"
                    max="8"
                    value={modules}
                    onChange={(e) => setModules(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-full appearance-none cursor-pointer accent-red-500"
                />
                <div className="flex justify-between text-xs text-slate-600 mt-2">
                    <span>1 module</span>
                    <span>8 modules</span>
                </div>
            </div>

            {/* Timeline */}
            <div className="mb-8">
                <label className="flex items-center gap-2 text-slate-300 text-sm font-medium mb-3">
                    <Clock size={16} />
                    Implementation Timeline
                </label>
                <div className="grid grid-cols-2 gap-2">
                    <button
                        onClick={() => setTimeline("standard")}
                        className={`p-3 rounded-xl border transition-all ${timeline === "standard"
                                ? "bg-blue-500/10 border-blue-500/50 text-white"
                                : "bg-slate-800/30 border-slate-700/30 text-slate-400 hover:border-slate-600"
                            }`}
                    >
                        <span className="block text-sm font-medium">Standard</span>
                        <span className="block text-xs text-slate-500">Best value</span>
                    </button>
                    <button
                        onClick={() => setTimeline("accelerated")}
                        className={`p-3 rounded-xl border transition-all ${timeline === "accelerated"
                                ? "bg-orange-500/10 border-orange-500/50 text-white"
                                : "bg-slate-800/30 border-slate-700/30 text-slate-400 hover:border-slate-600"
                            }`}
                    >
                        <span className="block text-sm font-medium">Accelerated</span>
                        <span className="block text-xs text-slate-500">40% faster</span>
                    </button>
                </div>
            </div>

            {/* Results */}
            <div className="p-5 rounded-xl bg-slate-800/40 border border-slate-700/30 mb-6">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-slate-500 text-xs mb-1">Estimated Investment</p>
                        <p className="text-2xl font-bold text-white">
                            ${estimatedPrice.toLocaleString()}
                        </p>
                    </div>
                    <div>
                        <p className="text-slate-500 text-xs mb-1">Timeline</p>
                        <p className="text-2xl font-bold text-green-400">
                            {estimatedWeeks} weeks
                        </p>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <Link
                to="/consultation"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors duration-300"
            >
                Get Custom Quote
                <ArrowRight size={18} />
            </Link>

            <p className="text-xs text-slate-600 text-center mt-4">
                * Final pricing depends on specific requirements
            </p>
        </motion.div>
    )
}
