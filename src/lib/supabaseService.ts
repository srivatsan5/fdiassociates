// Supabase Service for FDI Associates
// Handles all database operations for conversations

import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Supabase Configuration
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Create Supabase client
let supabase: SupabaseClient | null = null;

const getSupabaseClient = (): SupabaseClient | null => {
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
        console.warn('Supabase not configured. Using localStorage fallback.');
        return null;
    }

    if (!supabase) {
        supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    }
    return supabase;
};

// Check if Supabase is configured
export const isSupabaseConfigured = (): boolean => {
    return !!(SUPABASE_URL && SUPABASE_ANON_KEY);
};

// Types
export interface Message {
    role: 'user' | 'assistant';
    content: string;
    timestamp: string;
}

export interface ConversationDocument {
    id: string;
    title: string;
    messages: Message[];
    createdAt: string;
    updatedAt: string;
    deviceId: string;
}

// Device ID for anonymous user tracking
const getDeviceId = (): string => {
    let deviceId = localStorage.getItem('fdi_device_id');
    if (!deviceId) {
        deviceId = 'device_' + Math.random().toString(36).substring(2, 15);
        localStorage.setItem('fdi_device_id', deviceId);
    }
    return deviceId;
};

// LocalStorage fallback functions
const STORAGE_KEY = 'fdi_conversations';

const loadFromLocalStorage = (): ConversationDocument[] => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch {
        return [];
    }
};

const saveToLocalStorage = (conversations: ConversationDocument[]): void => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(conversations));
    } catch (error) {
        console.error('Failed to save to localStorage:', error);
    }
};

// ============================================
// CONVERSATION OPERATIONS
// ============================================

// Save or update a conversation
export const saveConversation = async (conversation: ConversationDocument): Promise<boolean> => {
    const deviceId = getDeviceId();
    const updatedConversation = {
        ...conversation,
        updatedAt: new Date().toISOString(),
        deviceId,
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

    // Try to save to Supabase
    const client = getSupabaseClient();
    if (client) {
        try {
            const { error } = await client
                .from('conversations')
                .upsert({
                    id: conversation.id,
                    title: conversation.title,
                    messages: conversation.messages,
                    created_at: conversation.createdAt,
                    updated_at: updatedConversation.updatedAt,
                    device_id: deviceId,
                }, { onConflict: 'id' });

            if (error) {
                console.warn('Supabase save failed:', error.message);
                return false;
            }
            return true;
        } catch (error) {
            console.warn('Supabase save error:', error);
            return false;
        }
    }

    return true; // localStorage save succeeded
};

// Get all conversations
export const getConversations = async (): Promise<ConversationDocument[]> => {
    const deviceId = getDeviceId();
    const client = getSupabaseClient();

    if (client) {
        try {
            const { data, error } = await client
                .from('conversations')
                .select('*')
                .eq('device_id', deviceId)
                .order('updated_at', { ascending: false });

            if (error) {
                console.warn('Supabase fetch failed:', error.message);
                return loadFromLocalStorage();
            }

            // Transform from database format to app format
            const conversations: ConversationDocument[] = (data || []).map(row => ({
                id: row.id,
                title: row.title,
                messages: row.messages || [],
                createdAt: row.created_at,
                updatedAt: row.updated_at,
                deviceId: row.device_id,
            }));

            // Update localStorage cache
            saveToLocalStorage(conversations);
            return conversations;
        } catch (error) {
            console.warn('Supabase fetch error:', error);
            return loadFromLocalStorage();
        }
    }

    return loadFromLocalStorage();
};

// Delete a conversation
export const deleteConversation = async (conversationId: string): Promise<boolean> => {
    // Remove from localStorage
    const localConversations = loadFromLocalStorage();
    const filtered = localConversations.filter(c => c.id !== conversationId);
    saveToLocalStorage(filtered);

    // Try to delete from Supabase
    const client = getSupabaseClient();
    if (client) {
        try {
            const { error } = await client
                .from('conversations')
                .delete()
                .eq('id', conversationId);

            if (error) {
                console.warn('Supabase delete failed:', error.message);
                return false;
            }
            return true;
        } catch (error) {
            console.warn('Supabase delete error:', error);
            return false;
        }
    }

    return true;
};

// Clear all conversations for current device
export const clearAllConversations = async (): Promise<boolean> => {
    const deviceId = getDeviceId();

    // Clear localStorage
    saveToLocalStorage([]);

    // Try to clear from Supabase
    const client = getSupabaseClient();
    if (client) {
        try {
            const { error } = await client
                .from('conversations')
                .delete()
                .eq('device_id', deviceId);

            if (error) {
                console.warn('Supabase clear failed:', error.message);
                return false;
            }
            return true;
        } catch (error) {
            console.warn('Supabase clear error:', error);
            return false;
        }
    }

    return true;
};

// Check database connection
export const checkDatabaseConnection = async (): Promise<boolean> => {
    const client = getSupabaseClient();
    if (!client) {
        return false;
    }

    try {
        const { error } = await client.from('conversations').select('id').limit(1);
        return !error;
    } catch {
        return false;
    }
};

// Migrate localStorage to Supabase
export const migrateLocalStorageToSupabase = async (): Promise<number> => {
    const client = getSupabaseClient();
    if (!client) {
        return 0;
    }

    const localConversations = loadFromLocalStorage();
    if (localConversations.length === 0) {
        return 0;
    }

    let migrated = 0;
    for (const conv of localConversations) {
        try {
            const { error } = await client
                .from('conversations')
                .upsert({
                    id: conv.id,
                    title: conv.title,
                    messages: conv.messages,
                    created_at: conv.createdAt,
                    updated_at: conv.updatedAt,
                    device_id: conv.deviceId || getDeviceId(),
                }, { onConflict: 'id' });

            if (!error) {
                migrated++;
            }
        } catch (error) {
            console.warn('Migration error for conversation:', conv.id, error);
        }
    }

    return migrated;
};
