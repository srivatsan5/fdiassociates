"use client"

import { motion } from "framer-motion"
import { ArrowLeft, CreditCard, Check, Crown, Zap, Star } from "lucide-react"
import { Link } from "react-router-dom"

export default function Billing() {
    const plans = [
        { name: "Free", price: "$0", period: "/month", features: ["Basic FDI insights", "1 scheduled demo", "Email support"], current: true },
        { name: "Professional", price: "$99", period: "/month", features: ["Advanced analytics", "Unlimited demos", "Priority support", "Custom reports"], current: false, popular: true },
        { name: "Enterprise", price: "Custom", period: "", features: ["Full suite access", "Dedicated manager", "24/7 support", "Custom integrations", "SLA guarantee"], current: false },
    ]

    return (
        <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-gray-900 via-slate-900 to-black">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                    <Link to="/profile" className="p-2 rounded-xl hover:bg-white/5 transition-colors">
                        <ArrowLeft size={20} className="text-gray-400" />
                    </Link>
                    <h1 className="text-2xl font-bold text-white">Billing & Plans</h1>
                </div>

                {/* Current Plan */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="p-6 rounded-2xl mb-8" style={{ background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)' }}>
                                <Crown size={24} className="text-white" />
                            </div>
                            <div>
                                <p className="text-white font-semibold">Free Plan</p>
                                <p className="text-sm text-gray-400">Your current subscription</p>
                            </div>
                        </div>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400">Active</span>
                    </div>
                </motion.div>

                {/* Plans */}
                <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Available Plans</h2>
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + index * 0.1 }}
                            className={`p-6 rounded-2xl relative ${plan.popular ? 'ring-2 ring-red-500' : ''}`}
                            style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)' }}
                        >
                            {plan.popular && (
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium bg-red-500 text-white flex items-center gap-1">
                                    <Star size={12} /> Popular
                                </span>
                            )}
                            <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                            <div className="mb-4">
                                <span className="text-3xl font-bold text-white">{plan.price}</span>
                                <span className="text-gray-500">{plan.period}</span>
                            </div>
                            <ul className="space-y-2 mb-6">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-400">
                                        <Check size={16} className="text-green-400" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button
                                className={`w-full py-2.5 rounded-xl font-medium transition-all ${plan.current ? 'bg-gray-600 text-gray-300 cursor-default' : 'text-white hover:opacity-90'}`}
                                style={!plan.current ? { background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)' } : {}}
                                disabled={plan.current}
                            >
                                {plan.current ? "Current Plan" : plan.name === "Enterprise" ? "Contact Sales" : "Upgrade"}
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Payment Methods */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                    <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Payment Methods</h2>
                    <div className="p-6 rounded-2xl flex items-center justify-between" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                        <div className="flex items-center gap-4">
                            <CreditCard size={24} className="text-gray-400" />
                            <p className="text-gray-400">No payment method added</p>
                        </div>
                        <button className="px-4 py-2 rounded-xl text-sm font-medium text-white" style={{ background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)' }}>
                            Add Card
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
