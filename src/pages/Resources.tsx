"use client"

import { motion } from "framer-motion"
import { FileText, Video, Download, ArrowRight, BookOpen, Lightbulb, BarChart3, Clock } from "lucide-react"
import { Link } from "react-router-dom"

export default function Resources() {
    const categories = [
        { id: "all", label: "All" },
        { id: "whitepapers", label: "Whitepapers" },
        { id: "guides", label: "Guides" },
        { id: "webinars", label: "Webinars" },
        { id: "case-studies", label: "Case Studies" },
    ]

    const resources = [
        {
            id: 1,
            type: "whitepaper",
            title: "The Complete Guide to Oracle FDI Implementation",
            description: "Learn best practices for implementing Oracle Fusion Data Intelligence with zero implementation cost.",
            icon: FileText,
            readTime: "15 min read",
            downloadCount: "2.4k downloads",
            featured: true,
        },
        {
            id: 2,
            type: "guide",
            title: "5 Steps to Maximize Your Oracle Analytics ROI",
            description: "Discover proven strategies to get the most value from your Oracle investment.",
            icon: Lightbulb,
            readTime: "8 min read",
            downloadCount: "1.8k downloads",
        },
        {
            id: 3,
            type: "webinar",
            title: "Live Demo: Oracle Fusion Analytics in Action",
            description: "Watch our experts demonstrate real-time analytics capabilities and KPI dashboards.",
            icon: Video,
            readTime: "45 min watch",
            downloadCount: "3.2k views",
        },
        {
            id: 4,
            type: "case-study",
            title: "How Fortune 500 Retailer Cut Analytics Time by 40%",
            description: "See how we helped a global retail chain transform their data analytics pipeline.",
            icon: BarChart3,
            readTime: "12 min read",
            downloadCount: "1.2k downloads",
        },
        {
            id: 5,
            type: "guide",
            title: "Oracle Cloud Migration Checklist",
            description: "Everything you need to know before migrating to Oracle Cloud Infrastructure.",
            icon: BookOpen,
            readTime: "10 min read",
            downloadCount: "2.1k downloads",
        },
        {
            id: 6,
            type: "whitepaper",
            title: "Future of Enterprise Analytics: AI & Oracle",
            description: "Explore how AI is transforming enterprise analytics with Oracle's latest innovations.",
            icon: Lightbulb,
            readTime: "20 min read",
            downloadCount: "1.5k downloads",
        },
    ]

    return (
        <div className="pt-20 overflow-hidden">
            {/* Hero */}
            <section className="relative py-20 sm:py-28 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1a] via-[#0f172a] to-[#0a1628]" />
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-red-500/5 rounded-full blur-[120px]" />
                    <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px]" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: 48 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-6 rounded-full"
                        />
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Resource <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Hub</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto">
                            Explore our collection of whitepapers, guides, and webinars to accelerate your Oracle journey.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Resources Grid */}
            <section className="py-16 sm:py-24 bg-[#0a0f1a]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-2 justify-center mb-12">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                className="px-4 py-2 rounded-full text-sm font-medium transition-all bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-white hover:border-slate-600"
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* Featured Resource */}
                    {resources.filter(r => r.featured).map((resource) => (
                        <motion.div
                            key={resource.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-red-500/10 to-orange-500/5 border border-red-500/20 relative overflow-hidden"
                        >
                            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30">
                                <span className="text-xs font-medium text-red-400">Featured</span>
                            </div>
                            <div className="flex flex-col lg:flex-row gap-6 items-start">
                                <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                                    <resource.icon size={28} className="text-red-400" />
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-2xl font-bold text-white mb-3">{resource.title}</h3>
                                    <p className="text-slate-400 mb-4">{resource.description}</p>
                                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                                        <span className="flex items-center gap-1">
                                            <Clock size={14} />
                                            {resource.readTime}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Download size={14} />
                                            {resource.downloadCount}
                                        </span>
                                    </div>
                                </div>
                                <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors shrink-0">
                                    Download Now
                                    <Download size={18} />
                                </button>
                            </div>
                        </motion.div>
                    ))}

                    {/* Resources Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {resources.filter(r => !r.featured).map((resource, index) => (
                            <motion.div
                                key={resource.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group p-6 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-950/80 border border-slate-800/50 hover:border-slate-700/50 transition-all"
                            >
                                <div className="w-12 h-12 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center mb-4 group-hover:border-red-500/30 transition-colors">
                                    <resource.icon size={22} className="text-slate-400 group-hover:text-red-400 transition-colors" />
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-red-400 transition-colors">
                                    {resource.title}
                                </h3>
                                <p className="text-slate-500 text-sm mb-4 line-clamp-2">{resource.description}</p>
                                <div className="flex items-center justify-between text-xs text-slate-600">
                                    <span className="flex items-center gap-1">
                                        <Clock size={12} />
                                        {resource.readTime}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Download size={12} />
                                        {resource.downloadCount}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-16 sm:py-24 bg-[#020611]">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-950/80 border border-slate-800/50"
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                            Get Weekly Oracle Insights
                        </h2>
                        <p className="text-slate-400 mb-8">
                            Join 5,000+ professionals receiving our exclusive tips, guides, and industry updates.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-grow px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-red-500/50"
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors flex items-center justify-center gap-2"
                            >
                                Subscribe
                                <ArrowRight size={18} />
                            </button>
                        </form>
                        <p className="text-xs text-slate-600 mt-4">
                            No spam. Unsubscribe anytime.
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
