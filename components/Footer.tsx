"use client"

import Link from "next/link"
import { Mail, Phone } from "lucide-react"
import { motion } from "framer-motion"
import NewsletterForm from "./NewsletterForm"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

// Scroll to top when route changes
const useScrollToTop = () => {
  const pathname = usePathname()
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [pathname])
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Product: [
      { label: "Services", href: "/services" },
      { label: "Accelerators", href: "/accelerators" },
      { label: "Why Us", href: "/why-us" },
    ],
    Company: [
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
      { label: "About", href: "/" },
    ],
  }

  // Use the scroll to top hook
  useScrollToTop()

  // Handle click on footer links
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only handle internal links
    if (href.startsWith('/')) {
      e.preventDefault()
      // Scroll to top first
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      // Then navigate
      setTimeout(() => {
        window.location.href = href
      }, 100) // Small delay to allow scroll to start
    }
  }

  return (
    <footer className="relative bg-background dark:bg-background border-t border-border/50 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/3 to-blue-500/3 dark:via-cyan-500/2 dark:to-blue-500/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-border/50"
        >
          <div className="max-w-2xl">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Stay <span className="gradient-text">Updated</span>
            </h3>
            <p className="text-muted-foreground mb-6 sm:mb-8 text-base sm:text-lg">
              Get the latest insights and updates about Oracle FDI directly to your inbox.
            </p>
            <NewsletterForm />
          </div>
        </motion.div>

        {/* Footer Content */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="col-span-2 sm:col-span-1"
          >
            <h4 className="font-bold text-foreground mb-3 sm:mb-4 text-base sm:text-lg">FDI Associates</h4>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Trusted Oracle FDI experts delivering solutions across Fusion ERP, SCM, HCM, and CX.
            </p>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <h5 className="font-semibold text-foreground mb-4 sm:mb-6 text-sm sm:text-base">{category}</h5>
              <ul className="space-y-2 sm:space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-xs sm:text-sm text-muted-foreground hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 inline-block hover:translate-x-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="col-span-2 sm:col-span-1"
          >
            <h5 className="font-semibold text-foreground mb-4 sm:mb-6 text-sm sm:text-base">Contact</h5>
            <div className="space-y-3 sm:space-y-4">
              <a
                href="mailto:info@fdiassociates.com"
                className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 flex items-center justify-center transition-transform"
                >
                  <Mail size={14} className="sm:w-4 sm:h-4 text-cyan-600 dark:text-cyan-400" />
                </motion.div>
                <span className="break-all">info@fdiassociates.com</span>
              </a>
              <a
                href="tel:7605848820"
                className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 flex items-center justify-center transition-transform"
                >
                  <Phone size={14} className="sm:w-4 sm:h-4 text-cyan-600 dark:text-cyan-400" />
                </motion.div>
                7605848820
              </a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-border/50 pt-8 text-center text-sm text-muted-foreground"
        >
          <p>© {currentYear} FDI Associates. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
