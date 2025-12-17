import "@testing-library/jest-dom"

// Mock IntersectionObserver for framer-motion
global.IntersectionObserver = class IntersectionObserver {
    root = null
    rootMargin = ""
    thresholds = []

    constructor(
        public callback: IntersectionObserverCallback,
        public options?: IntersectionObserverInit
    ) { }

    observe() {
        return null
    }

    unobserve() {
        return null
    }

    disconnect() {
        return null
    }

    takeRecords(): IntersectionObserverEntry[] {
        return []
    }
}

// Mock ResizeObserver for framer-motion
global.ResizeObserver = class ResizeObserver {
    constructor(public callback: ResizeObserverCallback) { }
    observe() {
        return null
    }
    unobserve() {
        return null
    }
    disconnect() {
        return null
    }
}
