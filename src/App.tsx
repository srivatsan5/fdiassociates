"use client"

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Services from "./pages/Services"
import ImplementationServices from "./pages/ImplementationServices"
import ManagedServices from "./pages/ManagedServices"
import AdvisoryServices from "./pages/AdvisoryServices"
import Accelerators from "./pages/Accelerators"
import WhyUs from "./pages/WhyUs"
import Careers from "./pages/Careers"
import JobDescription from "./pages/JobDescription"
import Contact from "./pages/Contact"
import Consultation from "./pages/Consultation"
import Demo from "./pages/Demo"
import Connect from "./pages/Connect"
import GeneralInquiry from "./pages/GeneralInquiry"
import JoinCommunity from "./pages/JoinCommunity"
import Resources from "./pages/Resources"
import ScrollToTopButton from "./components/ScrollToTop"
import ChatBot from "./components/ChatBot"
import ScrollProgress from "./components/ScrollProgress"
import StickyCTA from "./components/StickyCTA"
import BottomSheet from "./components/BottomSheet"

function ScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [pathname])

    return null
}

function AppContent() {
    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== "undefined") {
            const stored = localStorage.getItem("darkMode")
            if (stored !== null) return stored === "true"
            return true
        }
        return true
    })

    const toggleTheme = () => setIsDark((prev) => !prev)

    useEffect(() => {
        localStorage.setItem("darkMode", String(isDark))
        if (isDark) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [isDark])

    return (
        <>
            <ScrollToTop />
            <div className={`min-h-screen flex flex-col ${isDark ? "dark" : ""}`}>
                <ScrollProgress />
                <Header isDark={isDark} toggleTheme={toggleTheme} />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/implementation-services" element={<ImplementationServices />} />
                        <Route path="/managed-services" element={<ManagedServices />} />
                        <Route path="/advisory-services" element={<AdvisoryServices />} />
                        <Route path="/accelerators" element={<Accelerators />} />
                        <Route path="/why-us" element={<WhyUs />} />
                        <Route path="/careers" element={<Careers />} />
                        <Route path="/careers/:jobId" element={<JobDescription />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/consultation" element={<Consultation />} />
                        <Route path="/demo" element={<Demo />} />
                        <Route path="/connect" element={<Connect />} />
                        <Route path="/general-inquiry" element={<GeneralInquiry />} />
                        <Route path="/join-community" element={<JoinCommunity />} />
                        <Route path="/resources" element={<Resources />} />
                    </Routes>
                </main>
                <Footer />
                <ScrollToTopButton />
                <StickyCTA />
                <BottomSheet />
                <ChatBot />
            </div>
        </>
    )
}

function App() {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    )
}

export default App
