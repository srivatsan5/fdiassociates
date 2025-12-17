"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface PageTransitionProps {
    children: ReactNode
}

const pageVariants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    enter: {
        opacity: 1,
        y: 0,
    },
    exit: {
        opacity: 0,
        y: -20,
    },
}

const pageTransition = {
    type: "tween",
    ease: [0.22, 1, 0.36, 1],
    duration: 0.4,
}

export default function PageTransition({ children }: PageTransitionProps) {
    return (
        <motion.div
            initial="initial"
            animate="enter"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
        >
            {children}
        </motion.div>
    )
}

// Fade variant for subtle transitions
export const fadeVariants = {
    initial: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
}

// Slide up variant for sections
export const slideUpVariants = {
    initial: { opacity: 0, y: 40 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
}

// Scale variant for cards
export const scaleVariants = {
    initial: { opacity: 0, scale: 0.95 },
    enter: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
}
