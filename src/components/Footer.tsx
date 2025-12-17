"use client"

import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Linkedin, Twitter, Facebook, Mail, MapPin, Phone, ArrowRight, Sparkles } from "lucide-react"

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const quickLinks = [
        { name: "Home", path: "/" },
        { name: "Why Us", path: "/why-us" },
        { name: "Services", path: "/services" },
        { name: "Accelerators", path: "/accelerators" },
        { name: "Resources", path: "/resources" },
        { name: "Careers", path: "/careers" },
    ]

    const socialLinks = [
        { icon: Linkedin, href: "https://www.linkedin.com/company/fdi-associates/posts/?feedView=all", label: "LinkedIn", color: "#0077B5" },
        { icon: Twitter, href: "#", label: "Twitter", color: "#1DA1F2" },
        { icon: Facebook, href: "#", label: "Facebook", color: "#1877F2" },
    ]

    return (
        <footer className="relative bg-[#020617] border-t border-white/5 pt-16 pb-8 overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-accent-red/5 to-transparent blur-3xl pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-6 sm:col-span-2 lg:col-span-1">
                        <Link to="/" className="flex items-center gap-3 group">
                            <motion.img
                                src="/LOGO.png"
                                alt="FDI Associates"
                                className="w-12 h-12 rounded-xl shadow-lg object-cover"
                                whileHover={{ scale: 1.05, rotate: 3 }}
                            />
                            <div className="flex flex-col">
                                <span className="text-xl font-bold text-white">FDI Associates</span>
                                <span className="text-xs text-gray-500 font-medium">A DataPulse Fusion Company</span>
                            </div>
                        </Link>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Empowering businesses with cutting-edge Oracle FDI solutions. We transform data into actionable insights.
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/social w-11 h-11 rounded-xl flex items-center justify-center text-gray-400 transition-all duration-300 relative overflow-hidden glass-card"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    aria-label={social.label}
                                >
                                    <span className="absolute inset-0 opacity-0 group-hover/social:opacity-100 transition-opacity duration-300" style={{ background: social.color }} />
                                    <social.icon size={18} className="relative z-10 group-hover/social:text-white transition-colors" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group py-1"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-accent-red transition-colors" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400 text-sm">
                                <MapPin className="w-5 h-5 text-accent-red flex-shrink-0 mt-0.5" />
                                <span>Global Operations<br />24/7 Support Available</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Phone className="w-5 h-5 text-accent-red flex-shrink-0" />
                                <a href="tel:7605848820" className="hover:text-white transition-colors">760-584-8820</a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Mail className="w-5 h-5 text-accent-red flex-shrink-0" />
                                <a href="mailto:info@fdiassociates.com" className="hover:text-white transition-colors">info@fdiassociates.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <h3 className="text-white font-bold text-lg mb-6">Newsletter</h3>
                        <p className="text-gray-400 mb-4 text-sm">
                            Subscribe for the latest updates and insights.
                        </p>
                        <form className="space-y-3">
                            <div className="relative group">
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent-red/20 to-accent-blue/20 opacity-0 group-focus-within:opacity-100 blur-xl transition-opacity duration-300" />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="relative w-full rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-red/50 transition-all glass-card"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 rounded-lg text-white transition-all duration-300 hover:scale-105"
                                    style={{ background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)' }}
                                    aria-label="Subscribe"
                                >
                                    <ArrowRight size={16} />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} FDI Associates. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
