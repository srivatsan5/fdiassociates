"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

interface ComparisonTableProps {
    className?: string
}

export default function ComparisonTable({ className = "" }: ComparisonTableProps) {
    const features = [
        { feature: "Implementation Time", fdi: "4-8 weeks", traditional: "6-12 months" },
        { feature: "Pre-built Accelerators", fdi: true, traditional: false },
        { feature: "Oracle Certified Team", fdi: true, traditional: "Varies" },
        { feature: "Zero Implementation Cost", fdi: true, traditional: false },
        { feature: "24/7 Support", fdi: true, traditional: "Limited" },
        { feature: "Custom KPI Dashboards", fdi: true, traditional: "Extra Cost" },
        { feature: "Post Go-Live Support", fdi: "Included", traditional: "Paid Add-on" },
        { feature: "Data Migration Assistance", fdi: true, traditional: "Extra Cost" },
    ]

    const renderValue = (value: boolean | string) => {
        if (value === true) {
            return (
                <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500/20">
                    <Check size={14} className="text-green-500" />
                </div>
            )
        }
        if (value === false) {
            return (
                <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-500/20">
                    <X size={14} className="text-red-500" />
                </div>
            )
        }
        return <span className="text-slate-300 text-sm">{value}</span>
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`overflow-hidden rounded-2xl border border-slate-800/50 ${className}`}
        >
            {/* Header */}
            <div className="grid grid-cols-3 bg-slate-900/80">
                <div className="p-4 sm:p-6 border-b border-r border-slate-800/50">
                    <span className="text-slate-500 text-sm font-medium">Feature</span>
                </div>
                <div className="p-4 sm:p-6 border-b border-r border-slate-800/50 text-center bg-gradient-to-br from-red-500/5 to-red-500/0">
                    <span className="text-red-400 font-semibold">FDI Associates</span>
                </div>
                <div className="p-4 sm:p-6 border-b border-slate-800/50 text-center">
                    <span className="text-slate-400 font-medium">Traditional</span>
                </div>
            </div>

            {/* Rows */}
            {features.map((row, index) => (
                <motion.div
                    key={row.feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-3 hover:bg-slate-800/20 transition-colors"
                >
                    <div className="p-4 sm:p-5 border-b border-r border-slate-800/30">
                        <span className="text-white text-sm">{row.feature}</span>
                    </div>
                    <div className="p-4 sm:p-5 border-b border-r border-slate-800/30 flex items-center justify-center bg-gradient-to-br from-red-500/5 to-red-500/0">
                        {renderValue(row.fdi)}
                    </div>
                    <div className="p-4 sm:p-5 border-b border-slate-800/30 flex items-center justify-center">
                        {renderValue(row.traditional)}
                    </div>
                </motion.div>
            ))}
        </motion.div>
    )
}
