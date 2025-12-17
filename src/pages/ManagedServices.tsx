"use client"

import { motion } from "framer-motion"

export default function ManagedServices() {
  return (
    <div>
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-accent-red/10 to-accent-blue/10 dark:from-accent-red/5 dark:to-accent-blue/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="section-title mb-4"
          >
            FDI Managed Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto"
          >
            Stay ahead with continuous innovation, maintenance, and optimization for your Fusion Data Intelligence
            landscape.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-background dark:bg-dark-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Proactive Monitoring & Maintenance */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-text dark:text-dark-text">
              Proactive Monitoring &amp; Maintenance
            </h2>
            <ul className="space-y-3 text-text-secondary dark:text-dark-text-secondary list-disc pl-5">
              <li>Health checks for data pipelines, refresh jobs, and model health.</li>
              <li>Error resolution and performance tuning.</li>
            </ul>
          </div>

          {/* Enhancement & Support */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-text dark:text-dark-text">Enhancement &amp; Support</h2>
            <ul className="space-y-3 text-text-secondary dark:text-dark-text-secondary list-disc pl-5">
              <li>Quarterly KPI/metric updates.</li>
              <li>Business user training &amp; enablement.</li>
              <li>Personalized dashboards and report creation.</li>
            </ul>
          </div>

          {/* AI Model Tuning & Governance */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-text dark:text-dark-text">AI Model Tuning &amp; Governance</h2>
            <ul className="space-y-3 text-text-secondary dark:text-dark-text-secondary list-disc pl-5">
              <li>Drift detection in AI insights.</li>
              <li>Retraining and performance calibration.</li>
              <li>Governance of AI output with business oversight.</li>
            </ul>
          </div>

          {/* Fusion Quarterly Patch Validation */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-text dark:text-dark-text">
              Fusion Quarterly Patch Validation
            </h2>
            <ul className="space-y-3 text-text-secondary dark:text-dark-text-secondary list-disc pl-5">
              <li>Post-patch regression testing.</li>
              <li>Revalidation of KPIs and dashboards after Oracle updates.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}


