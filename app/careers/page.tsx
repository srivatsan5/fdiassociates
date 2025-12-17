"use client"

import { motion } from "framer-motion"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"

export default function Page() {

  const jobs = [
    {
      title: "Oracle Analytics and EPM Presales Engineer",
      department: "Sales Engineering / Solution Consulting",
      location: "Onsite/Remote/Hybrid",
      type: "Full-Time",
      reportsTo: "Senior Consultant of Presales / VP of Solutions",
      description:
        "Build the future of Oracle Fusion & AI-driven analytics — join the experts powering data intelligence across the globe.",
      jobDescriptionLink: "https://assets.zyrosite.com/AzGX23zJroF2laRd/job-description-mv0JV0o2QySzNNr8.pdf",
      applyLink: "https://docs.google.com/forms/d/e/1FAIpQLSfChSFtqgn9fs69QVJJZtvbCza0fJwayAQFUfoB_3DLjK0NzQ/viewform?usp=header",
    },
    {
      title: "Oracle Analytics and EPM Presales Engineer (Intern)",
      department: "Data & AI / Analytics Center of Excellence",
      location: "Onsite / Remote / Hybrid",
      type: "Internship",
      duration: "10–12 weeks / Summer Internship / Semester-long",
      reportsTo: "Analytics & AI Lead / Data Science Manager",
      description:
        "Build the future of Oracle Fusion & AI-driven analytics — join the experts powering data intelligence across the globe.",
      jobDescriptionLink: "https://assets.zyrosite.com/AzGX23zJroF2laRd/internship-jd-A85VnBNOvxiBaNnJ.pdf",
      applyLink: "https://docs.google.com/forms/d/e/1FAIpQLSdpxomiSWNwqC-AK7IvugC6YTCbSmEfq0rZVGw19omab2zB_g/viewform?usp=dialog",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-24 md:py-32 bg-card border-b border-border/80">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-4 sm:mb-6"
            >
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 border border-border rounded-full text-xs sm:text-sm font-semibold text-muted-foreground bg-background">
                Open Positions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="section-title mb-4 sm:mb-6"
            >
              Build the future of Oracle Fusion & <span className="gradient-text">AI-driven analytics</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4"
            >
              Join the experts powering data intelligence across the globe. We're looking for talented professionals to help us drive innovation in Oracle Fusion and analytics solutions.
            </motion.p>
          </div>
        </section>

        {/* Studio Visuals */}
        <section className="relative py-14 sm:py-20 bg-background">
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-6 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="lg:col-span-2 space-y-4"
              >
                <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Studios</span>
                <h3 className="text-2xl sm:text-3xl font-semibold text-foreground">
                  Immersive <span className="gradient-text">FDI Experience Labs</span>
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Hybrid pods combine design thinking rooms, live data walls, and AI copilots so teams can prototype solutions in days,
                  not months.
                </p>
              </motion.div>
              <div className="lg:col-span-3 grid grid-cols-2 gap-4">
                {["/placeholder.jpg", "/placeholder-user.jpg", "/Hero_image.png", "/placeholder-logo.png"].map((visual, idx) => (
                  <motion.div
                    key={visual}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className={`glass-card overflow-hidden rounded-2xl border border-white/20 shadow-xl shadow-cyan-500/10 ${
                      idx % 2 === 0 ? "mt-6" : ""
                    }`}
                  >
                    <div className="relative h-36 sm:h-44">
                      <Image src={visual} alt="Studio visual" fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
                      <p className="absolute bottom-3 left-4 text-xs text-white/80">
                        {idx % 2 === 0 ? "Data Wall" : "Team Pod"}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section className="relative py-16 sm:py-24 md:py-32 bg-background dark:bg-background overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="mb-8 sm:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Open Roles</h2>
              <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />
            </motion.div>

            <div className="space-y-6">
              {jobs.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="glass-card p-6 sm:p-8 hover:shadow-xl hover:shadow-cyan-500/20 dark:hover:shadow-cyan-500/10 transition-all duration-500 hover:border-cyan-500/50 dark:hover:border-cyan-400/30 group"
                >
                  <div className="mb-4 sm:mb-6">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:gradient-text transition-all duration-500">
                        {job.title}
                      </h3>
                      <span className="px-2 sm:px-3 py-1 bg-cyan-500/20 text-purple-600 dark:text-cyan-400 text-xs font-semibold rounded-full w-fit">
                        {job.type}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">{job.department}</p>
                  </div>

                  <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">{job.description}</p>

                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 text-xs sm:text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-500 rounded-full flex-shrink-0" />
                      <strong>Location:</strong> <span className="break-words">{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full flex-shrink-0" />
                      <strong>Department:</strong> <span className="break-words">{job.department}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-500 rounded-full flex-shrink-0" />
                      <strong>Reports To:</strong> <span className="break-words">{job.reportsTo}</span>
                    </div>
                    {job.duration && (
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-500 rounded-full flex-shrink-0" />
                        <strong>Duration:</strong> <span className="break-words">{job.duration}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-border">
                    <a
                      href={job.jobDescriptionLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 bg-slate-100 dark:bg-slate-800 text-foreground font-semibold rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 text-center text-sm sm:text-base"
                    >
                      Job Description
                    </a>
                    <a
                      href={job.applyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-primary text-center font-semibold text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3"
                    >
                      Apply
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="relative py-16 sm:py-24 md:py-32 bg-gradient-to-b from-background via-cyan-500/5 to-background dark:via-cyan-500/2 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="section-title mb-3 sm:mb-4">Why Join FDI Associates?</h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                Be part of a team that's shaping the future of Oracle Fusion Data Intelligence
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  title: "Continuous Learning",
                  desc: "Grow your skills with cutting-edge Oracle technologies and industry best practices",
                  icon: "🎓",
                },
                {
                  title: "Collaborative Culture",
                  desc: "Work with talented professionals in a supportive, inclusive environment",
                  icon: "🤝",
                },
                {
                  title: "Global Impact",
                  desc: "Help enterprise clients transform their business with innovative solutions",
                  icon: "🌍",
                },
                {
                  title: "Career Growth",
                  desc: "Clear career progression and opportunities to lead projects and teams",
                  icon: "📈",
                },
                {
                  title: "Flexible Work",
                  desc: "Remote and hybrid options to maintain work-life balance",
                  icon: "💼",
                },
                {
                  title: "Expert Community",
                  desc: "Access to industry experts and thought leaders in Oracle ecosystem",
                  icon: "👥",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="glass-card p-6 sm:p-8 text-center hover:shadow-lg hover:shadow-cyan-500/20 dark:hover:shadow-cyan-500/10 transition-all duration-500 group"
                >
                  <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{item.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 sm:py-24 md:py-32 bg-gradient-to-r from-cyan-500/10 via-blue-600/10 to-purple-600/10 dark:from-cyan-500/5 dark:via-blue-600/5 dark:to-purple-600/5 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <h2 className="section-title mb-4 sm:mb-6">Ready to Make an Impact?</h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Don't see the right position? We're always looking for talented individuals. Reach out to us!
              </p>
              <a href="/contact" className="btn-primary inline-block text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3">
                Get in Touch
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
