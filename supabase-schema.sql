-- Supabase Database Schema for FDI Associates
-- Run this in Supabase SQL Editor (Database > SQL Editor)

-- Create conversations table
CREATE TABLE IF NOT EXISTS conversations (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    messages JSONB DEFAULT '[]'::jsonb,
    device_id TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index on device_id for faster queries
CREATE INDEX IF NOT EXISTS idx_conversations_device_id ON conversations(device_id);

-- Create index on updated_at for ordering
CREATE INDEX IF NOT EXISTS idx_conversations_updated_at ON conversations(updated_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE conversations ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations (for anonymous users with publishable key)
-- This allows anyone with the publishable key to perform operations
CREATE POLICY "Allow all operations" ON conversations
    FOR ALL
    USING (true)
    WITH CHECK (true);

-- Contact form submissions table (optional)
CREATE TABLE IF NOT EXISTS contact_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    company TEXT,
    message TEXT,
    service TEXT,
    status TEXT DEFAULT 'new',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS for contact submissions
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow inserts for contact form
CREATE POLICY "Allow insert for contact" ON contact_submissions
    FOR INSERT
    WITH CHECK (true);
