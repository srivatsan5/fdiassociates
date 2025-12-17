"use client"

import { motion } from "framer-motion"
import { useParams, useNavigate } from "react-router-dom"
import { Download, ArrowLeft, MapPin, Clock, Briefcase, User } from "lucide-react"
import { useRef } from "react"

interface JobData {
    title: string
    location: string
    department: string
    reportsTo: string
    type?: string
    duration?: string
    summary: string
    responsibilities: string[]
    skills: string[]
    niceToHave: string[]
    whyJoin: string[]
    applyLink: string
}

const jobsData: Record<string, JobData> = {
    "oracle-analytics-epm-presales": {
        title: "Oracle Analytics and EPM Presales Engineer",
        location: "Onsite/Remote/Hybrid",
        department: "Sales Engineering / Solution Consulting",
        reportsTo: "Senior Consultant of Presales / VP of Solutions",
        type: "Full-Time",
        summary:
            "We are seeking a highly skilled and customer-focused Oracle Analytics and EPM Presales Engineer to support our sales and solutioning efforts. The ideal candidate will have deep expertise in Oracle's Analytics Cloud (OAC), Fusion Analytics Warehouse (FAW), and Enterprise Performance Management (EPM) suite—including Planning, Profitability & Cost Management, and Narrative Reporting. This role involves working closely with sales teams, product managers, and prospective customers to articulate solution value, design winning architectures, and demonstrate product capabilities tailored to customer business needs.",
        responsibilities: [
            "Partner with sales executives to understand customer requirements and deliver compelling Oracle Analytics and EPM solution presentations and demos.",
            "Lead discovery workshops, fit-gap analysis, and solutioning for OAC, FAW, and EPM Cloud (Planning, Financial Consolidation, PCM, etc.).",
            "Develop architecture diagrams, PoCs, and responses for RFPs/RFIs showcasing Oracle Cloud value proposition.",
            "Map customer pain points to Oracle analytics and performance management capabilities using design thinking and storytelling techniques.",
            "Stay current with Oracle product roadmap, new features, and industry trends to provide credible advisory to prospects.",
            "Support opportunity scoping, sizing, pricing, and licensing discussions in collaboration with Oracle and internal sales teams.",
            "Create re-usable assets such as demo environments, value proposition decks, and solution templates to accelerate deal cycles.",
            "Work with delivery teams to ensure feasibility and smooth handoff from presales to implementation.",
        ],
        skills: [
            "5+ years of experience in presales, solution engineering, or consulting for Oracle Analytics or EPM products.",
            "Deep hands-on knowledge of Oracle Analytics Cloud (OAC), Fusion Analytics Warehouse (FAW), and Oracle EPM Cloud modules.",
            "Strong understanding of KPIs, financial planning cycles, driver-based modeling, data integrations, and enterprise reporting.",
            "Ability to create dashboards, mock-ups, or visualizations in Oracle tools to illustrate business value.",
            "Familiarity with data modeling, ETL/ELT concepts, and integration with ERP/SCM/HCM cloud applications.",
            "Exceptional communication, presentation, and client-facing skills.",
            "Bachelor's or Master's in Information Systems, Finance, Engineering, or related field.",
            "Oracle certifications in OAC, EPM Cloud, or FAW preferred.",
        ],
        niceToHave: [
            "Experience with AI/ML augmentation in analytics or predictive planning.",
            "Knowledge of competing platforms (e.g., SAP Analytics Cloud, Anaplan, Power BI) to highlight Oracle's differentiators.",
            "Exposure to industry-specific analytics use cases (e.g., healthcare, manufacturing, retail).",
        ],
        whyJoin: [
            "Be part of a fast-paced, high-impact team shaping enterprise digital transformation.",
            "Work with cutting-edge Oracle Cloud technologies across business functions.",
            "Opportunity to engage directly with Oracle product teams, customers, and strategic partners.",
        ],
        applyLink: "https://docs.google.com/forms/d/e/1FAIpQLSfChSFtqgn9fs69QVJJZtvbCza0fJwayAQFUfoB_3DLjK0NzQ/viewform?usp=header",
    },
    "oracle-analytics-epm-presales-intern": {
        title: "Analytics and AI Intern",
        location: "Onsite / Remote / Hybrid",
        department: "Data & AI / Analytics Center of Excellence",
        duration: "10–12 weeks / Summer Internship / Semester-long",
        reportsTo: "Analytics & AI Lead / Data Science Manager",
        type: "Internship",
        summary:
            "We are seeking a motivated and curious Analytics and AI Intern to join our Data & AI team. As an intern, you will gain hands-on experience working on real-world data problems, exploring AI/ML techniques, and building analytics solutions that drive business impact. You will work closely with data scientists, analysts, and business stakeholders to extract insights, build models, and contribute to AI-powered innovations across domains like Finance, Supply Chain, HR, and Customer Intelligence.",
        responsibilities: [
            "Support data preparation, cleansing, and exploratory data analysis on large structured and unstructured datasets.",
            "Build dashboards, reports, and visualizations using tools like Power BI, Oracle Analytics Cloud, or Tableau.",
            "Apply machine learning algorithms for predictive modeling, clustering, and classification use cases.",
            "Assist in developing and testing AI-powered business use cases (e.g., customer churn prediction, forecasting, anomaly detection).",
            "Collaborate with cross-functional teams to understand business goals and translate them into data-driven solutions.",
            "Document processes, results, and present findings to internal stakeholders.",
            "Contribute to the development of accelerators, reusable code, or prototype applications.",
        ],
        skills: [
            "Currently pursuing a Bachelor's or Master's degree in Data Science, Computer Science, Information Systems, Business Analytics, or a related field.",
            "Proficiency in Python or R for data analysis and machine learning.",
            "Familiarity with SQL and data manipulation techniques.",
            "Exposure to AI/ML libraries such as scikit-learn, pandas, TensorFlow, or similar.",
            "Basic understanding of statistics, modeling techniques, and business KPIs.",
            "Strong problem-solving skills, attention to detail, and eagerness to learn.",
            "Excellent communication and teamwork abilities.",
        ],
        niceToHave: [
            "Experience with cloud platforms (e.g., Oracle Cloud, AWS, Azure, or GCP).",
            "Knowledge of Oracle Analytics Cloud (OAC), Fusion Analytics Warehouse (FAW), or any BI platform.",
            "Familiarity with GenAI or NLP frameworks such as LangChain, OpenAI, Hugging Face, etc.",
        ],
        whyJoin: [
            "Mentorship from industry experts in AI and enterprise analytics.",
            "Real-world experience solving business problems using data and AI.",
            "Exposure to enterprise tools and technologies.",
            "Networking opportunities and potential path to a full-time role.",
        ],
        applyLink: "https://docs.google.com/forms/d/e/1FAIpQLSdpxomiSWNwqC-AK7IvugC6YTCbSmEfq0rZVGw19omab2zB_g/viewform?usp=dialog",
    },
    "oracle-ai-apex-junior-consultant": {
        title: "Oracle AI and APEX Junior Consultant",
        location: "Onsite / Remote / Hybrid",
        department: "Enterprise Apps / Data Integration & AI Platform Support",
        reportsTo: "Senior Consultant / AI Platform Lead",
        type: "Full-Time",
        summary:
            "ElevateAI delivers AI-driven CX capabilities (transcription, summarization, analytics) that need to integrate with a company's backend systems — databases, CRM/ERP, dashboards, enterprise applications. A Junior Consultant bridging enterprise data stores (e.g. relational DBs), internal tools, and ElevateAI's APIs helps clients deploy AI-enabled CX solutions without disrupting their existing infrastructure.",
        responsibilities: [
            "Work on integrating ElevateAI's cloud/API-based generative-AI & transcription features with clients' enterprise data systems (e.g. relational databases, legacy systems, CRM/ERP).",
            "Develop or maintain internal or client-facing applications — potentially using low-code/enterprise-app frameworks such as Oracle APEX (or similar) — to provide dashboards, reporting UI, or custom workflows on top of AI-derived data (transcripts, summaries, call metadata, analytics).",
            "Design and implement data pipelines or integration layers: ingest data (e.g. from call logs, CRM, recordings), transform/normalize, store in databases, and expose via APIs or APEX-based UI for consumption by business users.",
            "Ensure proper data schema design, database performance, data integrity, and compliance (especially for sensitive contact-center / customer data).",
            "Collaborate with AI/data teams to map AI outputs (summaries, topics, sentiment, metadata) into structured database records / tables, enabling further analytics, reporting, or BI.",
            "Provide support for deployments, configuration, and maintenance of integrated solutions. Troubleshoot issues, debug integration, ensure stability and scalability for real-world usage.",
            "Work with cross-functional teams (backend, data, AI/ML, product) to deliver end-to-end solutions for clients deploying ElevateAI features.",
            "Document integrations, data flows, and provide training or hand-off documentation for clients or internal teams if required.",
        ],
        skills: [
            "Undergraduate degree in Computer Science / Information Systems / Engineering or related.",
            "Basic-to-intermediate knowledge of relational databases (SQL), database design/schema modelling.",
            "Familiarity with enterprise-app frameworks or low-code solutions (like Oracle APEX) — or willingness to learn quickly.",
            "Understanding of RESTful APIs, web-services, JSON — ability to integrate external cloud APIs (ElevateAI) with internal applications.",
            "Basic programming/scripting capability (backend or full-stack), ability to write clean, maintainable code.",
            "Good analytical and problem-solving skills; comfort working across data, backend, and application layers.",
            "Strong communication — ability to understand client requirements and translate them into technical integrations.",
            "Willingness to learn about AI/ML, cloud-native applications, and data compliance/security considerations.",
        ],
        niceToHave: [
            "Prior exposure to enterprise systems (CRM/ERP), contact-center software, or CX-focused applications.",
            "Experience with cloud infrastructure (AWS/GCP/Azure), deployment pipelines, version control.",
            "Basic frontend knowledge (HTML/CSS/JS) — useful for customizing dashboards/UI in APEX or equivalent.",
            "Understanding of data flow from raw interactions → AI processing → structured data → analytics/reporting.",
        ],
        whyJoin: [
            "Hands-on experience integrating cutting-edge AI platform (cloud-based generative AI + speech-to-text) with real-world enterprise systems.",
            "Exposure to full-cycle enterprise app delivery: data ingestion, database design, API integration, UI/dashboard building.",
            "Ability to contribute to transforming contact-center/CX workflows — moving from legacy systems to AI-powered, data-driven operations.",
            "Great learning ground for bridging backend, data, and AI — allowing career growth in data engineering, AI-infrastructure, or full-stack enterprise consulting.",
        ],
        applyLink: "https://docs.google.com/forms/d/e/1FAIpQLSfChSFtqgn9fs69QVJJZtvbCza0fJwayAQFUfoB_3DLjK0NzQ/viewform?usp=header",
    },
    "data-ai-analyst-trainee": {
        title: "Data and AI Analyst Trainee",
        location: "Onsite / Remote / Hybrid",
        department: "Data & AI / Contact Center Insights",
        reportsTo: "Senior Data Analyst / AI Lead",
        type: "Full-Time / Trainee",
        summary:
            "Because ElevateAI turns raw conversations (voice/chat) into structured intelligence — transcripts, summaries, sentiment scores, interaction metadata — there's a need for analysts to process, validate, and analyze this data; support ML model evaluation; generate insights/reports; and help clients or internal teams make sense of AI-derived outputs.",
        responsibilities: [
            "Assist in preprocessing, cleaning, and structuring data obtained from contact-center interactions: transcripts, call metadata, logs, chat/text data.",
            "Work with AI engineers/data scientists to label, annotate, or validate data (e.g. sentiment labels, intent tags, call outcome metadata), support dataset preparation.",
            "Perform exploratory data analysis (EDA) on processed interaction data — derive metrics, patterns, and surface key insights (e.g. sentiment trends, common call topics, agent performance metrics, resolution types, customer satisfaction indicators).",
            "Build or help generate reports and dashboards (internal or for clients) that summarize interaction analytics: call volume trends, sentiment over time, common issues/topics raised, average handle times, etc.",
            "Monitor AI model outputs (transcriptions, summaries, sentiment/intent detection) for quality, consistency, errors; flag anomalies; work with AI/ML team to refine or suggest improvements.",
            "Help maintain data pipelines or workflows to ingest interaction data → process via ElevateAI → store structured outputs → analytics dashboards or reports.",
            "Document data workflows, maintain data dictionaries/metadata, ensure data governance, compliance, privacy (especially for customer data), and assist in audit/tracking as needed.",
            "Support cross-functional collaboration — coordinate with product, AI/ML, client-success or support teams to deliver insights or analytics used for improving CX, agent coaching, or business decisions.",
        ],
        skills: [
            "Bachelor's degree in Computer Science, Data Science, Statistics, Mathematics, Engineering, or related; or strong academic background with interest in data / AI.",
            "Basic knowledge of data manipulation: SQL, CSV/JSON data handling, data cleaning.",
            "Familiarity or willingness to learn data analysis tools / programming (e.g. Python + pandas, or any data-analysis environment).",
            "Good analytical thinking, attention to detail, ability to work with messy/real-world data (text transcripts, logs, metadata).",
            "Comfortable interpreting AI/ML outputs (transcripts, sentiment, tags) and evaluating quality or anomalies.",
            "Communication skills — ability to document findings, explain insights to non-technical stakeholders, contribute to reports.",
        ],
        niceToHave: [
            "Some exposure to natural language processing (NLP), text analytics, or AI workflows.",
            "Familiarity with BI tools or dashboarding frameworks (even basic) for visualization.",
            "Awareness of privacy / compliance / data governance issues (because dealing with customer interactions, possibly sensitive data).",
            "Interest in customer experience (CX), contact center domain — understanding of metrics like call length, resolution, customer satisfaction, sentiment, etc.",
        ],
        whyJoin: [
            "Real-world experience working with AI-driven contact-center data — transforming raw voice/chat data into actionable insights.",
            "Exposure to the full data-to-AI lifecycle: ingestion → processing → AI-model output → analysis → reporting → client/decision-making.",
            "Opportunity to build skills in data analysis, NLP/AI, data pipelines, and analytics — a strong grounding for future roles in data science, machine learning, or product analytics.",
            "Work that directly impacts customer experience, agent coaching, enterprise operations — giving visibility into how AI helps business decisions and human outcomes.",
        ],
        applyLink: "https://docs.google.com/forms/d/e/1FAIpQLSfChSFtqgn9fs69QVJJZtvbCza0fJwayAQFUfoB_3DLjK0NzQ/viewform?usp=header",
    },
}

export default function JobDescription() {
    const { jobId } = useParams<{ jobId: string }>()
    const navigate = useNavigate()
    const contentRef = useRef<HTMLDivElement>(null)

    const job = jobId ? jobsData[jobId] : null

    if (!job) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background dark:bg-dark-background">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-text dark:text-dark-text mb-4">Job Not Found</h1>
                    <button
                        onClick={() => navigate("/careers")}
                        className="px-6 py-3 bg-accent-red text-white rounded-lg hover:bg-accent-red/90 transition-colors"
                    >
                        Back to Careers
                    </button>
                </div>
            </div>
        )
    }

    const handleDownloadPDF = async () => {
        // Dynamic import to reduce initial bundle size
        const { jsPDF } = await import("jspdf")

        const doc = new jsPDF()
        const pageWidth = doc.internal.pageSize.getWidth()
        const margin = 20
        const maxWidth = pageWidth - 2 * margin
        let yPosition = 20

        // Helper function to add text with word wrap
        const addText = (text: string, fontSize: number, isBold: boolean = false, color: number[] = [0, 0, 0]) => {
            doc.setFontSize(fontSize)
            doc.setFont("helvetica", isBold ? "bold" : "normal")
            doc.setTextColor(color[0], color[1], color[2])
            const lines = doc.splitTextToSize(text, maxWidth)

            lines.forEach((line: string) => {
                if (yPosition > 270) {
                    doc.addPage()
                    yPosition = 20
                }
                doc.text(line, margin, yPosition)
                yPosition += fontSize * 0.5
            })
            yPosition += 5
        }

        // Add content
        addText(job.title, 18, true, [220, 38, 38])
        yPosition += 5

        // Job details
        doc.setFontSize(10)
        doc.setFont("helvetica", "normal")
        doc.setTextColor(100, 100, 100)

        const details = [
            `Location: ${job.location}`,
            `Department: ${job.department}`,
            `Reports To: ${job.reportsTo}`,
        ]
        if (job.type) details.push(`Type: ${job.type}`)
        if (job.duration) details.push(`Duration: ${job.duration}`)

        details.forEach(detail => {
            doc.text(detail, margin, yPosition)
            yPosition += 6
        })
        yPosition += 10

        // Job Summary
        addText("Job Summary:", 14, true)
        addText(job.summary, 10)
        yPosition += 5

        // Key Responsibilities
        addText("Key Responsibilities:", 14, true)
        job.responsibilities.forEach((resp, index) => {
            addText(`• ${resp}`, 10)
        })
        yPosition += 5

        // Required Skills
        addText("Required Skills & Qualifications:", 14, true)
        job.skills.forEach((skill, index) => {
            addText(`• ${skill}`, 10)
        })
        yPosition += 5

        // Nice to Have
        if (job.niceToHave.length > 0) {
            addText("Nice to Have:", 14, true)
            job.niceToHave.forEach((item, index) => {
                addText(`• ${item}`, 10)
            })
            yPosition += 5
        }

        // Why Join Us
        addText("Why Join Us:", 14, true)
        job.whyJoin.forEach((reason, index) => {
            addText(`• ${reason}`, 10)
        })

        // Save the PDF
        doc.save(`${job.title.replace(/\s+/g, '_')}_Job_Description.pdf`)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-accent-red/5 to-accent-blue/5 dark:from-accent-red/10 dark:to-accent-blue/10">
            {/* Header Section */}
            <section className="py-12 bg-surface dark:bg-dark-surface border-b border-border dark:border-dark-border">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <button
                        onClick={() => navigate("/careers")}
                        className="flex items-center gap-2 text-accent-red hover:text-accent-red/80 transition-colors mb-6 group"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-semibold">Back to Careers</span>
                    </button>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-text dark:text-dark-text mb-6 leading-tight">
                            {job.title}
                        </h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div className="flex items-center gap-3 text-text-secondary dark:text-dark-text-secondary">
                                <MapPin size={20} className="text-accent-red flex-shrink-0" />
                                <span>{job.location}</span>
                            </div>
                            <div className="flex items-center gap-3 text-text-secondary dark:text-dark-text-secondary">
                                <Briefcase size={20} className="text-accent-red flex-shrink-0" />
                                <span>{job.department}</span>
                            </div>
                            {job.type && (
                                <div className="flex items-center gap-3 text-text-secondary dark:text-dark-text-secondary">
                                    <Clock size={20} className="text-accent-red flex-shrink-0" />
                                    <span>{job.type}</span>
                                </div>
                            )}
                            <div className="flex items-center gap-3 text-text-secondary dark:text-dark-text-secondary">
                                <User size={20} className="text-accent-red flex-shrink-0" />
                                <span>Reports to: {job.reportsTo}</span>
                            </div>
                            {job.duration && (
                                <div className="flex items-center gap-3 text-text-secondary dark:text-dark-text-secondary">
                                    <Clock size={20} className="text-accent-red flex-shrink-0" />
                                    <span>Duration: {job.duration}</span>
                                </div>
                            )}
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={handleDownloadPDF}
                                className="flex items-center gap-2 px-6 py-3 bg-surface dark:bg-dark-surface text-text dark:text-dark-text font-semibold rounded-lg hover:bg-surface-hover dark:hover:bg-dark-surface-hover transition-all duration-300 border border-border dark:border-dark-border shadow-md hover:shadow-lg"
                            >
                                <Download size={20} />
                                Download as PDF
                            </button>
                            <a
                                href={job.applyLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3 bg-gradient-to-r from-accent-red to-accent-red/90 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-accent-red/30 transition-all duration-300"
                            >
                                Apply Now
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16" ref={contentRef}>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-12"
                    >
                        {/* Job Summary */}
                        <div className="glass-card p-8">
                            <h2 className="text-2xl font-bold text-text dark:text-dark-text mb-4 flex items-center gap-3">
                                <span className="w-1 h-8 bg-gradient-to-b from-accent-red to-accent-blue rounded-full"></span>
                                Job Summary
                            </h2>
                            <p className="text-text-secondary dark:text-dark-text-secondary leading-relaxed text-lg">
                                {job.summary}
                            </p>
                        </div>

                        {/* Key Responsibilities */}
                        <div className="glass-card p-8">
                            <h2 className="text-2xl font-bold text-text dark:text-dark-text mb-6 flex items-center gap-3">
                                <span className="w-1 h-8 bg-gradient-to-b from-accent-red to-accent-blue rounded-full"></span>
                                Key Responsibilities
                            </h2>
                            <ul className="space-y-4">
                                {job.responsibilities.map((resp, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                                        className="flex gap-4 text-text-secondary dark:text-dark-text-secondary"
                                    >
                                        <span className="text-accent-red font-bold text-xl flex-shrink-0 mt-1">•</span>
                                        <span className="leading-relaxed">{resp}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {/* Required Skills */}
                        <div className="glass-card p-8">
                            <h2 className="text-2xl font-bold text-text dark:text-dark-text mb-6 flex items-center gap-3">
                                <span className="w-1 h-8 bg-gradient-to-b from-accent-red to-accent-blue rounded-full"></span>
                                Required Skills & Qualifications
                            </h2>
                            <ul className="space-y-4">
                                {job.skills.map((skill, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                                        className="flex gap-4 text-text-secondary dark:text-dark-text-secondary"
                                    >
                                        <span className="text-accent-blue font-bold text-xl flex-shrink-0 mt-1">•</span>
                                        <span className="leading-relaxed">{skill}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {/* Nice to Have */}
                        {job.niceToHave.length > 0 && (
                            <div className="glass-card p-8">
                                <h2 className="text-2xl font-bold text-text dark:text-dark-text mb-6 flex items-center gap-3">
                                    <span className="w-1 h-8 bg-gradient-to-b from-accent-red to-accent-blue rounded-full"></span>
                                    Nice to Have
                                </h2>
                                <ul className="space-y-4">
                                    {job.niceToHave.map((item, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                                            className="flex gap-4 text-text-secondary dark:text-dark-text-secondary"
                                        >
                                            <span className="text-accent-red font-bold text-xl flex-shrink-0 mt-1">•</span>
                                            <span className="leading-relaxed">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Why Join Us */}
                        <div className="glass-card p-8 bg-gradient-to-br from-accent-red/5 to-accent-blue/5 dark:from-accent-red/10 dark:to-accent-blue/10">
                            <h2 className="text-2xl font-bold text-text dark:text-dark-text mb-6 flex items-center gap-3">
                                <span className="w-1 h-8 bg-gradient-to-b from-accent-red to-accent-blue rounded-full"></span>
                                Why Join Us
                            </h2>
                            <ul className="space-y-4">
                                {job.whyJoin.map((reason, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                                        className="flex gap-4 text-text-secondary dark:text-dark-text-secondary"
                                    >
                                        <span className="text-accent-blue font-bold text-xl flex-shrink-0 mt-1">•</span>
                                        <span className="leading-relaxed font-medium">{reason}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {/* Bottom CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="glass-card p-8 text-center"
                        >
                            <h3 className="text-2xl font-bold text-text dark:text-dark-text mb-4">
                                Ready to Join Our Team?
                            </h3>
                            <p className="text-text-secondary dark:text-dark-text-secondary mb-6 max-w-2xl mx-auto">
                                Take the next step in your career and become part of our innovative team shaping the future of Oracle Fusion Data Intelligence.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <button
                                    onClick={handleDownloadPDF}
                                    className="flex items-center gap-2 px-6 py-3 bg-surface dark:bg-dark-surface text-text dark:text-dark-text font-semibold rounded-lg hover:bg-surface-hover dark:hover:bg-dark-surface-hover transition-all duration-300 border border-border dark:border-dark-border"
                                >
                                    <Download size={20} />
                                    Download Job Description
                                </button>
                                <a
                                    href={job.applyLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-3 bg-gradient-to-r from-accent-red to-accent-red/90 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-accent-red/30 transition-all duration-300"
                                >
                                    Apply Now
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
