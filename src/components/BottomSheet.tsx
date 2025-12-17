"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { Calendar, MessageCircle, Phone, X, Sparkles } from "lucide-react"

export default function BottomSheet() {
    const [isOpen, setIsOpen] = useState(false)

    const actions = [
        { icon: Calendar, label: "Schedule Demo", href: "/demo", color: "from-red-500 to-orange-500" },
        { icon: MessageCircle, label: "Contact Us", href: "/contact", color: "from-blue-500 to-cyan-500" },
        { icon: Phone, label: "Consultation", href: "/consultation", color: "from-green-500 to-emerald-500" },
    ]

    return (
        <>
            {/* FAB Button - Only visible on mobile */}
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                onClick={() => setIsOpen(true)}
                className="fixed bottom-20 right-4 z-40 w-11 h-11 rounded-full flex items-center justify-center lg:hidden bg-slate-900 border border-slate-700"
                style={{
                    boxShadow: "0 4px 16px -4px rgba(0, 0, 0, 0.4)",
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Quick Actions"
            >
                <Sparkles size={20} className="text-red-500" />
            </motion.button>

            {/* Bottom Sheet Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
                        />

                        {/* Sheet */}
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
                        >
                            <div
                                className="rounded-t-3xl p-6 pb-8"
                                style={{
                                    background: "linear-gradient(180deg, rgba(15, 23, 42, 0.98) 0%, rgba(2, 6, 23, 0.98) 100%)",
                                    backdropFilter: "blur(20px)",
                                    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                                }}
                            >
                                {/* Handle */}
                                <div className="w-12 h-1.5 bg-gray-600 rounded-full mx-auto mb-6" />

                                {/* Header */}
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-lg font-semibold text-white">Quick Actions</h3>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 rounded-full hover:bg-white/10 text-gray-400"
                                        aria-label="Close"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>

                                {/* Action Buttons */}
                                <div className="space-y-3">
                                    {actions.map((action, index) => (
                                        <motion.div
                                            key={action.label}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <Link
                                                to={action.href}
                                                onClick={() => setIsOpen(false)}
                                                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                                            >
                                                <div
                                                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center`}
                                                >
                                                    <action.icon size={22} className="text-white" />
                                                </div>
                                                <span className="text-white font-medium text-lg group-hover:translate-x-1 transition-transform">
                                                    {action.label}
                                                </span>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
