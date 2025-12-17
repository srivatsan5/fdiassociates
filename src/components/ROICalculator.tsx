"use client"

import { useState, useEffect, useRef } from "react"
import { Calculator, TrendingUp, DollarSign, Clock, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

interface ROICalculatorProps {
    className?: string
}

export default function ROICalculator({ className = "" }: ROICalculatorProps) {
    const [employees, setEmployees] = useState(500)
    const [currentCost, setCurrentCost] = useState(50000)

    // Calculate ROI metrics
    const timeSavings = Math.round(employees * 0.4) // 40% time savings per employee
    const costSavings = Math.round(currentCost * 0.35) // 35% cost reduction
    const implementationDays = Math.max(30, Math.round(employees / 25)) // Days based on size
    const roiPercentage = Math.round((costSavings / currentCost) * 100)

    // Animated counter
    const AnimatedValue = ({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) => {
        const [displayValue, setDisplayValue] = useState(0)
        const ref = useRef<HTMLSpanElement>(null)

        useEffect(() => {
            const duration = 500
            const startTime = Date.now()
            const startValue = displayValue

            const animate = () => {
                const elapsed = Date.now() - startTime
                const progress = Math.min(elapsed / duration, 1)
                const easeProgress = 1 - Math.pow(1 - progress, 3) // Ease out cubic

                setDisplayValue(Math.round(startValue + (value - startValue) * easeProgress))

                if (progress < 1) {
                    requestAnimationFrame(animate)
                }
            }

            requestAnimationFrame(animate)
        }, [value])

        return (
            <span ref={ref} className="tabular-nums">
                {prefix}{displayValue.toLocaleString()}{suffix}
            </span>
        )
    }

    return (
        <div className={`relative p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800/50 ${className}`}>
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <Calculator size={22} className="text-blue-400" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white">ROI Calculator</h3>
                    <p className="text-slate-500 text-sm">Estimate your savings with FDI</p>
                </div>
            </div>

            {/* Sliders */}
            <div className="space-y-6 mb-8">
                {/* Employees Slider */}
                <div>
                    <div className="flex justify-between items-center mb-3">
                        <label className="text-slate-300 text-sm font-medium">Number of Employees</label>
                        <span className="text-white font-bold tabular-nums">{employees.toLocaleString()}</span>
                    </div>
                    <input
                        type="range"
                        min="100"
                        max="5000"
                        step="100"
                        value={employees}
                        onChange={(e) => setEmployees(parseInt(e.target.value))}
                        className="w-full h-2 bg-slate-800 rounded-full appearance-none cursor-pointer accent-blue-500"
                    />
                    <div className="flex justify-between text-xs text-slate-600 mt-2">
                        <span>100</span>
                        <span>5,000+</span>
                    </div>
                </div>

                {/* Current Analytics Cost Slider */}
                <div>
                    <div className="flex justify-between items-center mb-3">
                        <label className="text-slate-300 text-sm font-medium">Annual Analytics Spend</label>
                        <span className="text-white font-bold tabular-nums">${currentCost.toLocaleString()}</span>
                    </div>
                    <input
                        type="range"
                        min="10000"
                        max="500000"
                        step="5000"
                        value={currentCost}
                        onChange={(e) => setCurrentCost(parseInt(e.target.value))}
                        className="w-full h-2 bg-slate-800 rounded-full appearance-none cursor-pointer accent-blue-500"
                    />
                    <div className="flex justify-between text-xs text-slate-600 mt-2">
                        <span>$10K</span>
                        <span>$500K+</span>
                    </div>
                </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/30">
                    <div className="flex items-center gap-2 mb-2">
                        <DollarSign size={14} className="text-green-400" />
                        <span className="text-slate-500 text-xs">Annual Savings</span>
                    </div>
                    <p className="text-xl font-bold text-green-400">
                        <AnimatedValue value={costSavings} prefix="$" />
                    </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/30">
                    <div className="flex items-center gap-2 mb-2">
                        <TrendingUp size={14} className="text-blue-400" />
                        <span className="text-slate-500 text-xs">ROI</span>
                    </div>
                    <p className="text-xl font-bold text-blue-400">
                        <AnimatedValue value={roiPercentage} suffix="%" />
                    </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/30">
                    <div className="flex items-center gap-2 mb-2">
                        <Clock size={14} className="text-purple-400" />
                        <span className="text-slate-500 text-xs">Time to Value</span>
                    </div>
                    <p className="text-xl font-bold text-purple-400">
                        <AnimatedValue value={implementationDays} suffix=" days" />
                    </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/30">
                    <div className="flex items-center gap-2 mb-2">
                        <TrendingUp size={14} className="text-orange-400" />
                        <span className="text-slate-500 text-xs">Hours Saved</span>
                    </div>
                    <p className="text-xl font-bold text-orange-400">
                        <AnimatedValue value={timeSavings} suffix="/yr" />
                    </p>
                </div>
            </div>

            {/* CTA */}
            <Link
                to="/consultation"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors duration-300"
            >
                Get Your Custom Analysis
                <ArrowRight size={18} />
            </Link>

            <p className="text-xs text-slate-600 text-center mt-4">
                * Estimates based on industry benchmarks
            </p>
        </div>
    )
}

