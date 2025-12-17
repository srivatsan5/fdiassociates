import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

/**
 * Firebase configuration values are pulled from environment variables.
 * Make sure to define the following in your `.env.local` file:
 *
 * NEXT_PUBLIC_FIREBASE_API_KEY=...
 * NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
 * NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
 * NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
 * NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
 * NEXT_PUBLIC_FIREBASE_APP_ID=...
 */
const firebaseConfig = {
  apiKey: "AIzaSyC0gGX2CTU2BsOPp4_4EkS3Zv1hlenFxgE",
  authDomain: "fdiassociates.firebaseapp.com",
  projectId: "fdiassociates",
  storageBucket: "fdiassociates.firebasestorage.app",
  messagingSenderId: "389572955700",
  appId: "1:389572955700:web:ec444ca81a348d5abf4461",
  measurementId: "G-GQ0D9GG24L"
};

if (Object.values(firebaseConfig).some((value) => !value)) {
  console.warn("Firebase configuration is incomplete. Check your environment variables.")
}

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

export const db = getFirestore(app)

