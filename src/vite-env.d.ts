/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_OPENROUTER_API_KEY: string
    readonly VITE_FIREBASE_API_KEY: string
    readonly VITE_FIREBASE_AUTH_DOMAIN: string
    readonly VITE_FIREBASE_PROJECT_ID: string
    readonly VITE_FIREBASE_STORAGE_BUCKET: string
    readonly VITE_FIREBASE_MESSAGING_SENDER_ID: string
    readonly VITE_FIREBASE_APP_ID: string
    // MongoDB Atlas Data API
    readonly VITE_MONGODB_DATA_API_URL: string
    readonly VITE_MONGODB_DATA_API_KEY: string
    readonly VITE_MONGODB_DATABASE: string
    readonly VITE_MONGODB_COLLECTION: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
