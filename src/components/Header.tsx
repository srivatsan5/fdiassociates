"use client"

import { useState, useEffect } from "react"
import { NavLink, Link, useLocation } from "react-router-dom"
import { Menu, X, Sun, Moon, ArrowRight, Home, Briefcase, Users, Zap, Phone, Rocket } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface HeaderProps {
    isDark?: boolean
    toggleTheme?: () => void
}

export default function Header({ isDark = true, toggleTheme }: HeaderProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
        return () => {
            document.body.style.overflow = ""
        }
    }, [isOpen])

    useEffect(() => {
        setIsOpen(false)
    }, [location.pathname])

    const navLinks = [
        { name: "Services", path: "/services", icon: Briefcase },
        { name: "Why Us", path: "/why-us", icon: Users },
        { name: "Accelerators", path: "/accelerators", icon: Zap },
        { name: "Careers", path: "/careers", icon: Rocket },
        { name: "Contact", path: "/contact", icon: Phone },
    ]

    return (
        <header
            className={`fixed top-0 left-0 right-0 transition-all duration-300 ${scrolled ? "py-2" : "py-3 sm:py-4"}`}
            style={{
                zIndex: 999999999,
                background: scrolled ? "rgba(2, 6, 23, 0.95)" : "transparent",
                backdropFilter: scrolled ? "blur(16px)" : "none",
                borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.05)" : "1px solid transparent",
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-[999999999]">
                <div className="flex justify-between items-center h-12 sm:h-14 relative z-[999999999]">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 sm:gap-3 group relative" style={{ cursor: "pointer", zIndex: 999999999 }}>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <img src="/LOGO.png" alt="FDI Associates" className="h-8 sm:h-10 w-auto" />
                        </motion.div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-1 relative z-[999999999]">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${isActive ? "text-white bg-white/10" : "text-gray-400 hover:text-white hover:bg-white/5"
                                    }`
                                }
                                style={{ cursor: "pointer", zIndex: 999999999 }}
                            >
                                {link.name}
                            </NavLink>
                        ))}

                        <div className="w-px h-6 bg-white/10 mx-3" />

                        {/* Theme Toggle */}
                        {toggleTheme && (
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full text-gray-400 hover:text-white transition-colors"
                                style={{ cursor: "pointer" }}
                            >
                                {isDark ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                        )}

                        {/* CTA Button */}
                        <Link to="/demo" className="ml-4 relative z-[999999999] group overflow-hidden rounded-full" style={{ cursor: "pointer" }}>
                            <div className="px-6 py-2.5 bg-gradient-to-r from-red-600 to-red-700 text-white text-sm font-semibold rounded-full shadow-[0_4px_20px_-4px_rgba(220,38,38,0.5)] hover:shadow-[0_8px_30px_-4px_rgba(220,38,38,0.6)] transition-all duration-300 flex items-center gap-2">
                                <span>Get Demo</span>
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                        </Link>
                    </nav>

                    {/* Mobile Menu Button - Larger touch target */}
                    <button
                        className="lg:hidden p-3 -mr-2 text-gray-300 hover:text-white relative z-[999999999] active:scale-95 transition-transform"
                        onClick={() => setIsOpen(!isOpen)}
                        style={{ cursor: "pointer" }}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        {isOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay - Enhanced for better UX */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-[#020617] lg:hidden overflow-y-auto"
                        style={{
                            background: "linear-gradient(180deg, #020617 0%, #0f172a 100%)",
                            zIndex: 999999998,
                        }}
                    >
                        {/* Close button area at top */}
                        <div className="flex justify-between items-center px-4 py-3 border-b border-white/5">
                            <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                                <img src="/LOGO.png" alt="FDI Associates" className="h-8 w-auto" />
                            </Link>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-3 text-gray-400 hover:text-white"
                                aria-label="Close menu"
                            >
                                <X size={26} />
                            </button>
                        </div>

                        {/* Navigation Links - Large touch targets */}
                        <div className="flex flex-col px-4 py-6 space-y-2">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <NavLink
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={({ isActive }) =>
                                            `flex items-center gap-4 p-4 rounded-2xl text-lg font-medium transition-all active:scale-[0.98] ${isActive
                                                ? "bg-gradient-to-r from-red-600/20 to-orange-500/10 text-white border border-red-500/30"
                                                : "text-gray-300 hover:bg-white/5 active:bg-white/10"
                                            }`
                                        }
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                                            <link.icon size={20} className="text-gray-400" />
                                        </div>
                                        <span className="flex-1">{link.name}</span>
                                        <ArrowRight size={18} className="text-gray-600" />
                                    </NavLink>
                                </motion.div>
                            ))}
                        </div>

                        {/* Bottom CTA Section */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/5 bg-[#020617]/95 backdrop-blur-sm">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <Link
                                    to="/demo"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-lg rounded-2xl shadow-lg shadow-red-500/20 flex items-center justify-center gap-3 active:scale-[0.98] transition-transform"
                                >
                                    Get Demo
                                    <ArrowRight size={22} />
                                </Link>
                            </motion.div>

                            {/* Theme toggle in mobile */}
                            {toggleTheme && (
                                <button
                                    onClick={toggleTheme}
                                    className="w-full mt-3 py-3 rounded-xl bg-white/5 text-gray-400 flex items-center justify-center gap-2 text-sm"
                                >
                                    {isDark ? <Sun size={18} /> : <Moon size={18} />}
                                    <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
                                </button>
                            )}
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    )
}
