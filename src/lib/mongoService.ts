// MongoDB Service for FDI Associates Chat
// Connects to backend API with localStorage fallback

// Backend API URL - Update this after deploying to Render
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';

// Check if API is configured (not localhost in production)
const isAPIConfigured = () => {
    return API_BASE_URL && !API_BASE_URL.includes('localhost');
};

// Types
export interface ChatMessage {
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date | string;
}

export interface ConversationDocument {
    _id?: string;
    id: string;
    title: string;
    messages: ChatMessage[];
    createdAt: string;
    updatedAt?: string;
    deviceId?: string;
}

// Generate a unique device ID for this browser
const getDeviceId = (): string => {
    let deviceId = localStorage.getItem('fdi-device-id');
    if (!deviceId) {
        deviceId = `device_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        localStorage.setItem('fdi-device-id', deviceId);
    }
    return deviceId;
};

// API request helper
const apiRequest = async (
    endpoint: string,
    options: RequestInit = {}
): Promise<unknown> => {
    const url = `${API_BASE_URL}${endpoint}`;

    const response = await fetch(url, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers,
        },
    });

    if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error:', errorText);
        throw new Error(`API Error: ${response.status}`);
    }

    return response.json();
};

// localStorage fallback helpers
const STORAGE_KEY = 'fdi-conversations';

const saveToLocalStorage = (conversations: ConversationDocument[]): void => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(conversations));
    } catch (e) {
        console.warn('localStorage save failed:', e);
    }
};

const loadFromLocalStorage = (): ConversationDocument[] => {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    } catch (e) {
        console.warn('localStorage load failed:', e);
        return [];
    }
};

// ============================================
// PUBLIC API
// ============================================

/**
 * Save or update a conversation
 */
export const saveConversation = async (conversation: ConversationDocument): Promise<boolean> => {
    const updatedConversation = {
        ...conversation,
        updatedAt: new Date().toISOString(),
        deviceId: getDeviceId(),
    };

    // Always save to localStorage as cache
    const localConversations = loadFromLocalStorage();
    const existingIndex = localConversations.findIndex(c => c.id === conversation.id);

    if (existingIndex >= 0) {
        localConversations[existingIndex] = updatedConversation;
    } else {
        localConversations.unshift(updatedConversation);
    }
    saveToLocalStorage(localConversations);

    // Try to save to backend API
    try {
        await apiRequest('/api/conversations', {
            method: 'POST',
            body: JSON.stringify(updatedConversation),
        });
        return true;
    } catch (error) {
        console.warn('API save failed, using localStorage:', error);
        return false;
    }
};

/**
 * Get all conversations (for chat history)
 */
export const getConversations = async (): Promise<ConversationDocument[]> => {
    // Try to get from backend API
    try {
        const result = await apiRequest('/api/conversations') as {
            success: boolean;
            data: ConversationDocument[]
        };

        if (result.success && result.data && result.data.length > 0) {
            // Update localStorage cache
            saveToLocalStorage(result.data);
            return result.data;
        }
    } catch (error) {
        console.warn('API fetch failed, using localStorage:', error);
    }

    // Fallback to localStorage
    return loadFromLocalStorage();
};

/**
 * Get a specific conversation by ID
 */
export const getConversation = async (id: string): Promise<ConversationDocument | null> => {
    try {
        const result = await apiRequest(`/api/conversations/${id}`) as {
            success: boolean;
            data: ConversationDocument | null;
        };

        if (result.success && result.data) {
            return result.data;
        }
    } catch (error) {
        console.warn('API fetch failed, using localStorage:', error);
    }

    // Fallback to localStorage
    const conversations = loadFromLocalStorage();
    return conversations.find(c => c.id === id) || null;
};

/**
 * Delete a specific conversation
 */
export const deleteConversation = async (id: string): Promise<boolean> => {
    // Always update localStorage
    const conversations = loadFromLocalStorage();
    const filtered = conversations.filter(c => c.id !== id);
    saveToLocalStorage(filtered);

    // Try to delete from backend
    try {
        await apiRequest(`/api/conversations/${id}`, {
            method: 'DELETE',
        });
        return true;
    } catch (error) {
        console.warn('API delete failed:', error);
        return false;
    }
};

/**
 * Clear all conversations
 */
export const clearAllConversations = async (): Promise<boolean> => {
    // Clear localStorage
    localStorage.removeItem(STORAGE_KEY);

    // Try to clear from backend
    try {
        await apiRequest(`/api/conversations/device/${getDeviceId()}`, {
            method: 'DELETE',
        });
        return true;
    } catch (error) {
        console.warn('API clear failed:', error);
        return false;
    }
};

/**
 * Migrate localStorage data to backend (one-time migration)
 */
export const migrateLocalStorageToMongo = async (): Promise<boolean> => {
    const localConversations = loadFromLocalStorage();
    if (localConversations.length === 0) {
        console.log('No local data to migrate');
        return true;
    }

    // Check if migration already happened
    const migrationKey = 'fdi-mongo-migration-done';
    if (localStorage.getItem(migrationKey)) {
        console.log('Migration already completed');
        return true;
    }

    console.log(`Migrating ${localConversations.length} conversations to backend...`);

    try {
        // Add deviceId to all conversations
        const conversationsWithDevice = localConversations.map(conv => ({
            ...conv,
            deviceId: getDeviceId(),
            updatedAt: conv.updatedAt || conv.createdAt,
        }));

        await apiRequest('/api/conversations/bulk', {
            method: 'POST',
            body: JSON.stringify({ conversations: conversationsWithDevice }),
        });

        // Mark migration as complete
        localStorage.setItem(migrationKey, new Date().toISOString());
        console.log('Migration completed successfully!');
        return true;
    } catch (error) {
        console.error('Migration failed:', error);
        return false;
    }
};

/**
 * Check if backend API is accessible
 */
export const checkMongoConnection = async (): Promise<boolean> => {
    try {
        const result = await apiRequest('/api/health') as {
            status: string;
            database: string
        };

        const connected = result.status === 'ok' && result.database === 'connected';
        console.log(connected ? 'Backend API connected!' : 'Backend API issues');
        return connected;
    } catch (error) {
        console.error('Backend connection failed:', error);
        return false;
    }
};

/**
 * Get the current API base URL (for debugging)
 */
export const getAPIBaseURL = (): string => {
    return API_BASE_URL;
};
