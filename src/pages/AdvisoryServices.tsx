"use client"

import { motion } from "framer-motion"

export default function AdvisoryServices() {
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
            FDI Advisory Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto"
          >
            Maximize Value from Your Oracle Fusion Data Intelligence Investment.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-background dark:bg-dark-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* FDI Advisory Services */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-text dark:text-dark-text">FDI Advisory Services</h2>
            <ul className="space-y-3 text-text-secondary dark:text-dark-text-secondary list-disc pl-5">
              <li>
                Helps align your analytics goals with Oracle’s roadmap by defining short-term wins and long-term strategies
                across Finance, SCM, and HCM.
              </li>
              <li>
                Provides accurate effort estimation including scope, resources, timelines, data sources, KPIs, and integration
                complexity.
              </li>
              <li>
                Offers role-based training for business users, developers, and analysts to effectively utilize and manage
                Oracle FDI.
              </li>
              <li>
                Covers end-to-end project planning from initial gap analysis to legacy data migration and final deployment
                strategy.
              </li>
              <li>
                Advises on selecting and customizing FDI accelerators for rapid KPI and dashboard deployment using Oracle
                Cloud Marketplace solutions.
              </li>
            </ul>
          </div>

          {/* IDL Advisory Services */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-text dark:text-dark-text">IDL Advisory Services</h2>
            <ul className="space-y-3 text-text-secondary dark:text-dark-text-secondary list-disc pl-5">
              <li>
                Enables seamless ingestion, organization, and transformation of both structured and unstructured large-scale
                data.
              </li>
              <li>
                Supports building unified data lakes integrated with Oracle Autonomous Data Warehouse, Analytics Cloud,
                MySQL HeatWave, and AI Services.
              </li>
              <li>
                Delivers AI-powered analytics through prebuilt machine learning pipelines and AutoML features.
              </li>
              <li>
                Allows orchestration of data workflows across hybrid and multi-cloud environments with embedded governance and
                security.
              </li>
              <li>
                Acts as a core component of Oracle’s Data Intelligence Platform, managing the complete data lifecycle from
                ingestion to insight.
              </li>
            </ul>
          </div>

          {/* Agents AI Advisory Services */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-text dark:text-dark-text">Agents AI Advisory Services</h2>
            <ul className="space-y-3 text-text-secondary dark:text-dark-text-secondary list-disc pl-5">
              <li>
                Identifies and prioritizes automation use cases across key business areas like HR, Finance, Procurement, and
                Customer Experience.
              </li>
              <li>
                Provides guidance to customize existing Fusion AI agents or develop new ones tailored to specific workflows and
                user interactions.
              </li>
              <li>
                Enables direct integration of AI agents into Oracle Fusion workflows, including orchestration across
                interconnected modules.
              </li>
              <li>
                Ensures security and governance through compliance with Oracle IAM and best practices for agent behavior and
                data access.
              </li>
              <li>
                Supports full agent lifecycle—from pilot rollout to monitoring, feedback loops, and continuous retraining for
                improvement.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}


