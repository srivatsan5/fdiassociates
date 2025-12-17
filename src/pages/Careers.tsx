"use client"

import { motion } from "framer-motion"
import { Briefcase, MapPin, Clock, Users, Rocket, Globe, GraduationCap, ArrowRight, Sparkles } from "lucide-react"
import { Link } from "react-router-dom"

interface Job {
  title: string
  department: string
  location: string
  type: string
  reportsTo?: string
  duration?: string
  description: string
  jobId: string
  applyLink: string
}

// Premium Job Card Component
function PremiumJobCard({ job, index }: { job: Job; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="group relative"
    >
      {/* Card */}
      <div className="relative p-6 sm:p-8 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
        style={{
          background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.5) 0%, rgba(15, 23, 42, 0.7) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
        }}
      >
        {/* Hover glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-red via-orange-500 to-accent-blue" />
          <div className="absolute inset-0 bg-gradient-to-br from-accent-red/5 via-transparent to-accent-blue/5" />
        </div>

        <div className="relative z-10">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(239, 68, 68, 0.05) 100%)',
                    border: '1px solid rgba(239, 68, 68, 0.2)',
                  }}
                >
                  <Briefcase size={22} className="text-accent-red" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold text-accent-red"
                  style={{
                    background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(239, 68, 68, 0.05) 100%)',
                    border: '1px solid rgba(239, 68, 68, 0.2)',
                  }}
                >
                  {job.type}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-accent-red transition-all">
                {job.title}
              </h3>
              <p className="text-gray-500 text-sm">{job.department}</p>
            </div>

            <a
              href={job.applyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 shrink-0"
              style={{
                background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                boxShadow: '0 4px 15px -3px rgba(239, 68, 68, 0.4)',
              }}
            >
              Apply Now
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Description */}
          <p className="text-gray-400 mb-6 leading-relaxed">{job.description}</p>

          {/* Meta info */}
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin size={16} className="text-accent-red" />
              <span>{job.location}</span>
            </div>
            {job.duration && (
              <div className="flex items-center gap-2 text-gray-400">
                <Clock size={16} className="text-accent-blue" />
                <span>{job.duration}</span>
              </div>
            )}
            {job.reportsTo && (
              <div className="flex items-center gap-2 text-gray-400">
                <Users size={16} className="text-green-400" />
                <span>Reports to: {job.reportsTo}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Careers() {
  const jobs: Job[] = [
    {
      title: "Oracle Analytics and EPM Presales Engineer",
      department: "Sales Engineering / Solution Consulting",
      location: "Onsite/Remote/Hybrid",
      type: "Full-Time",
      reportsTo: "Senior Consultant of Presales / VP of Solutions",
      description:
        "Build the future of Oracle Fusion & AI-driven analytics — join the experts powering data intelligence across the globe.",
      jobId: "oracle-analytics-epm-presales",
      applyLink: "https://docs.google.com/forms/d/e/1FAIpQLSfChSFtqgn9fs69QVJJZtvbCza0fJwayAQFUfoB_3DLjK0NzQ/viewform?usp=header",
    },
    {
      title: "Oracle Analytics and EPM Presales Engineer (Intern)",
      department: "Data & AI / Analytics Center of Excellence",
      location: "Onsite / Remote / Hybrid",
      type: "Internship",
      duration: "10–12 weeks / Summer Internship",
      reportsTo: "Analytics & AI Lead / Data Science Manager",
      description:
        "Build the future of Oracle Fusion & AI-driven analytics — join the experts powering data intelligence across the globe.",
      jobId: "oracle-analytics-epm-presales-intern",
      applyLink: "https://docs.google.com/forms/d/e/1FAIpQLSdpxomiSWNwqC-AK7IvugC6YTCbSmEfq0rZVGw19omab2zB_g/viewform?usp=dialog",
    },
    {
      title: "Oracle AI and APEX Junior Consultant",
      department: "Enterprise Apps / Data Integration & AI Platform Support",
      location: "Onsite / Remote / Hybrid",
      type: "Full-Time",
      reportsTo: "Senior Consultant / AI Platform Lead",
      description:
        "Bridge enterprise data systems with AI-driven CX capabilities — integrate ElevateAI's cloud APIs with databases, CRM/ERP, and build dashboards using Oracle APEX.",
      jobId: "oracle-ai-apex-junior-consultant",
      applyLink: "https://docs.google.com/forms/d/e/1FAIpQLSfChSFtqgn9fs69QVJJZtvbCza0fJwayAQFUfoB_3DLjK0NzQ/viewform?usp=header",
    },
    {
      title: "Data and AI Analyst Trainee",
      department: "Data & AI / Contact Center Insights",
      location: "Onsite / Remote / Hybrid",
      type: "Trainee",
      reportsTo: "Senior Data Analyst / AI Lead",
      description:
        "Transform raw conversations into actionable insights — analyze AI-derived data from contact centers, build reports, and help clients make sense of CX intelligence.",
      jobId: "data-ai-analyst-trainee",
      applyLink: "https://docs.google.com/forms/d/e/1FAIpQLSfChSFtqgn9fs69QVJJZtvbCza0fJwayAQFUfoB_3DLjK0NzQ/viewform?usp=header",
    },
  ]

  const benefits = [
    { icon: GraduationCap, title: "Continuous Learning", desc: "Access to Oracle certifications, training programs, and cutting-edge technology exposure" },
    { icon: Users, title: "Collaborative Culture", desc: "Work alongside industry experts and Oracle ACE associates in a supportive environment" },
    { icon: Globe, title: "Global Impact", desc: "Help Fortune 500 companies and global enterprises transform their business intelligence" },
    { icon: Rocket, title: "Career Growth", desc: "Clear advancement paths with mentorship from senior consultants and leadership" },
  ]

  return (
    <div className="pt-20 overflow-hidden">
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a1e] via-[#0f172a] to-[#0a1628]" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-accent-red/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-blue/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <Sparkles size={16} className="text-accent-red" />
            <span className="text-sm font-medium text-gray-300">We're Hiring</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white"
          >
            Join Our <span className="gradient-text">Team</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-8"
          >
            Build your career with industry-leading Oracle FDI experts and shape the future of enterprise analytics
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span>{jobs.length} Open Positions</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent-blue" />
              <span>Remote Friendly</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent-red" />
              <span>Global Team</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 sm:py-28 bg-[#020617]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-accent-red to-orange-500 mx-auto mb-6 rounded-full"
            />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Explore our current openings and find the perfect role for your skills
            </p>
          </motion.div>

          <div className="space-y-6">
            {jobs.map((job, index) => (
              <PremiumJobCard key={job.jobId} job={job} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 sm:py-28 bg-[#0a0f1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-accent-blue to-cyan-400 mx-auto mb-6 rounded-full"
            />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Why Work With Us?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Be part of a team that's shaping the future of Oracle Fusion Data Intelligence
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group p-6 rounded-2xl text-center cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.6) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                }}
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 100%)',
                    border: '1px solid rgba(59, 130, 246, 0.2)',
                  }}
                >
                  <benefit.icon size={24} className="text-accent-blue" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-[#020617] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-accent-red/10 to-accent-blue/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Don't See the Right Role?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                boxShadow: '0 4px 15px -3px rgba(59, 130, 246, 0.4)',
              }}
            >
              Get in Touch
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
