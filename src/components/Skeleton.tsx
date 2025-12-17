"use client"

interface SkeletonProps {
    className?: string
    variant?: "text" | "circular" | "rectangular" | "card"
}

// Simple class name merger
const cn = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(" ")

export function Skeleton({ className, variant = "rectangular" }: SkeletonProps) {
    const baseClasses = "animate-pulse bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-[length:200%_100%]"

    const variantClasses = {
        text: "h-4 rounded",
        circular: "rounded-full",
        rectangular: "rounded-lg",
        card: "rounded-2xl",
    }

    return (
        <div
            className={cn(baseClasses, variantClasses[variant], className)}
            style={{
                animation: "shimmer 1.5s ease-in-out infinite",
            }}
        />
    )
}

// Pre-built skeleton components for common use cases
export function SkeletonImage({ className }: { className?: string }) {
    return (
        <div className={cn("relative overflow-hidden rounded-xl", className)}>
            <Skeleton variant="rectangular" className="w-full h-full min-h-[200px]" />
            <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-10 h-10 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
            </div>
        </div>
    )
}

export function SkeletonCard({ className }: { className?: string }) {
    return (
        <div className={cn("p-6 rounded-2xl bg-[#0f172a] border border-[#1e293b]", className)}>
            <Skeleton variant="circular" className="w-12 h-12 mb-4" />
            <Skeleton variant="text" className="w-3/4 mb-3" />
            <Skeleton variant="text" className="w-full mb-2" />
            <Skeleton variant="text" className="w-5/6" />
        </div>
    )
}

export function SkeletonTestimonial({ className }: { className?: string }) {
    return (
        <div className={cn("p-8 rounded-2xl bg-[#0f172a]/50 border border-[#1e293b]", className)}>
            <div className="flex items-center gap-4 mb-6">
                <Skeleton variant="circular" className="w-14 h-14" />
                <div className="flex-1">
                    <Skeleton variant="text" className="w-32 mb-2" />
                    <Skeleton variant="text" className="w-24" />
                </div>
            </div>
            <Skeleton variant="text" className="w-full mb-2" />
            <Skeleton variant="text" className="w-full mb-2" />
            <Skeleton variant="text" className="w-3/4" />
        </div>
    )
}

export default Skeleton
