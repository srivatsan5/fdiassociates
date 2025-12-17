"use client"

import { motion } from "framer-motion"

export default function ImplementationServices() {
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
            FDI Implementation Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto"
          >
            Transform your business with strategic planning, data insights, AI enablement, and secure integrations.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-background dark:bg-dark-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-text dark:text-dark-text">
              FDI Implementation Services
            </h2>
            <ul className="space-y-3 text-text-secondary dark:text-dark-text-secondary list-disc pl-5">
              <li>
                Helps assess the current Oracle Fusion setup, identify gaps, and align with key business KPIs.
              </li>
              <li>
                Enables configuration of data models and KPIs across core areas like Finance, Supply Chain, HR, and Customer Experience.
              </li>
              <li>
                Integrates prebuilt dashboards and machine learning models to deliver predictive and actionable insights.
              </li>
              <li>
                Supports secure, cross-functional data integration and extensibility with external systems.
              </li>
              <li>
                Accelerates business value realization by embedding intelligence directly into enterprise processes.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-text dark:text-dark-text">
              AIDP Implementation Services
            </h2>
            <ul className="space-y-3 text-text-secondary dark:text-dark-text-secondary list-disc pl-5">
              <li>
                Supports seamless ingestion, transformation, and organization of large-scale structured and unstructured data.
              </li>
              <li>
                Enables unified data lake creation with deep integration across Oracle services like ADW, Analytics Cloud, MySQL HeatWave, and AI Services.
              </li>
              <li>
                Empowers users with AI-driven analytics through prebuilt machine learning pipelines and AutoML tools.
              </li>
              <li>
                Facilitates secure data orchestration across hybrid and multi-cloud environments with built-in governance features.
              </li>
              <li>
                Provides scalable, end-to-end lifecycle management from data ingestion to business insight within a single platform.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-text dark:text-dark-text">
              AI Agents Implementation Services
            </h2>
            <ul className="space-y-3 text-text-secondary dark:text-dark-text-secondary list-disc pl-5">
              <li>
                Provides strategic planning and tailored roadmaps to align Oracle Fusion Data Intelligence (FDI) and AI Agent initiatives with business goals.
              </li>
              <li>
                Offers accurate effort estimation, project scoping, and resource planning for FDI implementation, enhancement, and automation projects.
              </li>
              <li>
                Delivers role-based training to empower users, developers, and analysts with the skills to manage and extend FDI and AI agent capabilities.
              </li>
              <li>
                Guides customization and deployment of Fusion AI agents for automating processes across HR, Finance, Procurement, and CX.
              </li>
              <li>
                Ensures secure, compliant agent integration and lifecycle governance through workflow design, monitoring, and retraining strategies.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}


