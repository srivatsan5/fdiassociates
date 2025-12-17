"use client"

import { motion } from "framer-motion"
import { useAuth } from "../context/AuthContext"
import { User, Mail, Calendar, Shield, Settings, Bell, CreditCard, LogOut, ChevronRight } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"

export default function Profile() {
    const { user, logout } = useAuth()
    const navigate = useNavigate()

    const handleLogout = async () => {
        await logout()
        navigate("/login")
    }

    const profileSections = [
        {
            title: "Account",
            items: [
                { icon: User, label: "Personal Information", description: "Name, email, and profile photo", link: "/settings/personal-info" },
                { icon: Shield, label: "Security", description: "Password and authentication", link: "/settings/security" },
                { icon: Bell, label: "Notifications", description: "Email and push notifications", link: "/settings/notifications" },
            ]
        },
        {
            title: "Subscription",
            items: [
                { icon: CreditCard, label: "Billing & Plans", description: "Manage your subscription", link: "/settings/billing" },
                { icon: Calendar, label: "Scheduled Demos", description: "View upcoming demos", link: "/demo" },
            ]
        },
        {
            title: "Support",
            items: [
                { icon: Settings, label: "Preferences", description: "Language and accessibility", link: "/settings/preferences" },
                { icon: Mail, label: "Contact Support", description: "Get help from our team", link: "/contact" },
            ]
        }
    ]

    return (
        <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-gray-900 via-slate-900 to-black">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Profile Header */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
                    <div className="relative inline-block mb-6">
                        {user?.photoURL ? (
                            <img src={user.photoURL} alt={user.displayName || "Profile"} className="w-24 h-24 rounded-full border-4 border-red-500/20" referrerPolicy="no-referrer" />
                        ) : (
                            <div className="w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold text-white" style={{ background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)' }}>
                                {user?.displayName?.[0] || user?.email?.[0] || "U"}
                            </div>
                        )}
                        <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-4 border-gray-900" />
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-2">Welcome, {user?.displayName || "User"}!</h1>
                    <p className="text-gray-400">{user?.email}</p>
                    <p className="text-sm text-gray-500 mt-2">Member since {user?.metadata?.creationTime ? new Date(user.metadata.creationTime).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : 'Recently'}</p>
                </motion.div>

                {/* Quick Stats */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    {[
                        { label: "Demos Scheduled", value: "0" },
                        { label: "Consultations", value: "0" },
                        { label: "Support Tickets", value: "0" },
                        { label: "Account Status", value: "Active" },
                    ].map((stat, i) => (
                        <div key={i} className="p-4 rounded-2xl text-center" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                            <p className="text-2xl font-bold text-white">{stat.value}</p>
                            <p className="text-xs text-gray-500">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Profile Sections */}
                {profileSections.map((section, sectionIndex) => (
                    <motion.div key={section.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + sectionIndex * 0.1 }} className="mb-8">
                        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4 px-1">{section.title}</h2>
                        <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                            {section.items.map((item, itemIndex) => (
                                <Link key={item.label} to={item.link} className={`flex items-center justify-between p-4 hover:bg-white/5 transition-colors ${itemIndex > 0 ? 'border-t border-white/5' : ''}`}>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5">
                                            <item.icon size={20} className="text-gray-400" />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium">{item.label}</p>
                                            <p className="text-sm text-gray-500">{item.description}</p>
                                        </div>
                                    </div>
                                    <ChevronRight size={18} className="text-gray-500" />
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                ))}

                {/* Logout Button */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-8">
                    <button onClick={handleLogout} className="w-full flex items-center justify-center gap-2 p-4 rounded-2xl text-red-400 font-medium hover:bg-red-500/10 transition-colors" style={{ background: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                        <LogOut size={18} />
                        Sign Out
                    </button>
                </motion.div>

                {/* Back to Home */}
                <div className="text-center mt-6">
                    <Link to="/" className="text-gray-500 hover:text-white text-sm transition-colors">← Back to Dashboard</Link>
                </div>
            </div>
        </div>
    )
}
