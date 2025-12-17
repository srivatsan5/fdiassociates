"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Bell, Mail, MessageSquare, Calendar, Megaphone } from "lucide-react"
import { Link } from "react-router-dom"

interface NotificationSetting {
    id: string
    icon: any
    title: string
    description: string
    enabled: boolean
}

export default function Notifications() {
    const [settings, setSettings] = useState<NotificationSetting[]>([
        { id: "email", icon: Mail, title: "Email Notifications", description: "Receive updates via email", enabled: true },
        { id: "demo", icon: Calendar, title: "Demo Reminders", description: "Get reminded before scheduled demos", enabled: true },
        { id: "newsletter", icon: Megaphone, title: "Newsletter", description: "Monthly insights and updates", enabled: false },
        { id: "marketing", icon: MessageSquare, title: "Marketing", description: "Product news and special offers", enabled: false },
    ])

    const toggleSetting = (id: string) => {
        setSettings(prev => prev.map(s => s.id === id ? { ...s, enabled: !s.enabled } : s))
    }

    return (
        <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-gray-900 via-slate-900 to-black">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                    <Link to="/profile" className="p-2 rounded-xl hover:bg-white/5 transition-colors">
                        <ArrowLeft size={20} className="text-gray-400" />
                    </Link>
                    <h1 className="text-2xl font-bold text-white">Notifications</h1>
                </div>

                {/* Notification Status */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="p-6 rounded-2xl mb-6 flex items-center gap-4" style={{ background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                    <Bell size={24} className="text-blue-400" />
                    <div>
                        <p className="text-white font-medium">Manage your notifications</p>
                        <p className="text-sm text-gray-400">Choose what updates you want to receive</p>
                    </div>
                </motion.div>

                {/* Settings List */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="rounded-2xl overflow-hidden" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    {settings.map((setting, index) => (
                        <div key={setting.id} className={`flex items-center justify-between p-5 ${index > 0 ? 'border-t border-white/5' : ''}`}>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5">
                                    <setting.icon size={20} className="text-gray-400" />
                                </div>
                                <div>
                                    <p className="text-white font-medium">{setting.title}</p>
                                    <p className="text-sm text-gray-500">{setting.description}</p>
                                </div>
                            </div>
                            <button onClick={() => toggleSetting(setting.id)} className={`w-12 h-7 rounded-full p-1 transition-colors ${setting.enabled ? 'bg-red-500' : 'bg-gray-600'}`}>
                                <div className={`w-5 h-5 rounded-full bg-white transition-transform ${setting.enabled ? 'translate-x-5' : 'translate-x-0'}`} />
                            </button>
                        </div>
                    ))}
                </motion.div>

                {/* Save Note */}
                <p className="text-center text-gray-500 text-sm mt-6">Changes are saved automatically</p>
            </div>
        </div>
    )
}
