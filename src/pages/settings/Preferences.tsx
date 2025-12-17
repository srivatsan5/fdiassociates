"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Globe, Palette, Eye, Accessibility } from "lucide-react"
import { Link } from "react-router-dom"

export default function Preferences() {
    const [language, setLanguage] = useState("en")
    const [theme, setTheme] = useState("dark")
    const [fontSize, setFontSize] = useState("medium")

    return (
        <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-gray-900 via-slate-900 to-black">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                    <Link to="/profile" className="p-2 rounded-xl hover:bg-white/5 transition-colors">
                        <ArrowLeft size={20} className="text-gray-400" />
                    </Link>
                    <h1 className="text-2xl font-bold text-white">Preferences</h1>
                </div>

                {/* Language */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
                    <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Language & Region</h2>
                    <div className="p-6 rounded-2xl" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5">
                                <Globe size={20} className="text-gray-400" />
                            </div>
                            <div className="flex-1">
                                <p className="text-white font-medium">Language</p>
                                <p className="text-sm text-gray-500">Select your preferred language</p>
                            </div>
                        </div>
                        <select value={language} onChange={(e) => setLanguage(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-red-500/50">
                            <option value="en">English (US)</option>
                            <option value="en-gb">English (UK)</option>
                            <option value="es">Spanish</option>
                            <option value="fr">French</option>
                            <option value="de">German</option>
                        </select>
                    </div>
                </motion.div>

                {/* Appearance */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-6">
                    <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Appearance</h2>
                    <div className="p-6 rounded-2xl" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5">
                                <Palette size={20} className="text-gray-400" />
                            </div>
                            <div className="flex-1">
                                <p className="text-white font-medium">Theme</p>
                                <p className="text-sm text-gray-500">Choose your color theme</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                            {["light", "dark", "system"].map((t) => (
                                <button
                                    key={t}
                                    onClick={() => setTheme(t)}
                                    className={`p-3 rounded-xl text-sm font-medium capitalize transition-all ${theme === t ? 'bg-red-500 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
                                >
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Accessibility */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                    <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Accessibility</h2>
                    <div className="p-6 rounded-2xl" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5">
                                <Eye size={20} className="text-gray-400" />
                            </div>
                            <div className="flex-1">
                                <p className="text-white font-medium">Font Size</p>
                                <p className="text-sm text-gray-500">Adjust text size for readability</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                            {["small", "medium", "large"].map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setFontSize(size)}
                                    className={`p-3 rounded-xl font-medium capitalize transition-all ${fontSize === size ? 'bg-red-500 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
                                    style={{ fontSize: size === "small" ? "12px" : size === "large" ? "16px" : "14px" }}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <p className="text-center text-gray-500 text-sm mt-6">Changes are saved automatically</p>
            </div>
        </div>
    )
}
