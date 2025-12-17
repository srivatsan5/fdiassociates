// FDI Associates Backend API Server
// Handles MongoDB operations for chat conversations

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 3001;

// MongoDB Connection - Accept both MONGODB_URI and MONGODB_URL
const MONGODB_URI = process.env.MONGODB_URI || process.env.MONGODB_URL;
const DATABASE_NAME = process.env.MONGODB_DATABASE || 'fdi_associates';

let db = null;
let client = null;

// Connect to MongoDB
async function connectDB() {
    if (!MONGODB_URI) {
        console.error('❌ MONGODB_URI or MONGODB_URL environment variable is not set!');
        console.error('Please set MONGODB_URI in your environment variables.');
        return false;
    }

    try {
        console.log('🔄 Connecting to MongoDB...');
        console.log('📍 URI starts with:', MONGODB_URI.substring(0, 20) + '...');

        // MongoDB connection options for better compatibility with Render
        const options = {
            tls: true,
            tlsAllowInvalidCertificates: false,
            retryWrites: true,
            w: 'majority',
            maxPoolSize: 10,
            serverSelectionTimeoutMS: 30000,
            connectTimeoutMS: 30000,
        };

        client = new MongoClient(MONGODB_URI, options);
        await client.connect();
        db = client.db(DATABASE_NAME);
        console.log('✅ Connected to MongoDB Atlas!');
        console.log(`📦 Database: ${DATABASE_NAME}`);
        return true;
    } catch (error) {
        console.error('❌ MongoDB connection error:', error.message);
        console.error('Full error:', error);
        return false;
    }
}

// CORS Configuration
const allowedOrigins = process.env.ALLOWED_ORIGINS
    ? process.env.ALLOWED_ORIGINS.split(',').map(origin => origin.trim())
    : ['http://localhost:5173', 'http://localhost:3000'];

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);

        if (allowedOrigins.some(allowed => origin.startsWith(allowed) || allowed === '*')) {
            callback(null, true);
        } else {
            console.log('Blocked by CORS:', origin);
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}));

app.use(express.json({ limit: '10mb' }));

// Health Check Endpoint
app.get('/', (req, res) => {
    res.json({
        status: 'ok',
        service: 'FDI Associates API',
        timestamp: new Date().toISOString(),
        database: db ? 'connected' : 'disconnected'
    });
});

app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        database: db ? 'connected' : 'disconnected'
    });
});

// ============================================
// CONVERSATIONS API
// ============================================

// Get all conversations
app.get('/api/conversations', async (req, res) => {
    try {
        if (!db) {
            return res.status(503).json({ error: 'Database not connected' });
        }

        const conversations = await db.collection('conversations')
            .find({})
            .sort({ createdAt: -1 })
            .limit(100)
            .toArray();

        res.json({ success: true, data: conversations });
    } catch (error) {
        console.error('Error fetching conversations:', error);
        res.status(500).json({ error: 'Failed to fetch conversations' });
    }
});

// Get single conversation by ID
app.get('/api/conversations/:id', async (req, res) => {
    try {
        if (!db) {
            return res.status(503).json({ error: 'Database not connected' });
        }

        const conversation = await db.collection('conversations')
            .findOne({ id: req.params.id });

        if (!conversation) {
            return res.status(404).json({ error: 'Conversation not found' });
        }

        res.json({ success: true, data: conversation });
    } catch (error) {
        console.error('Error fetching conversation:', error);
        res.status(500).json({ error: 'Failed to fetch conversation' });
    }
});

// Save/Update conversation
app.post('/api/conversations', async (req, res) => {
    try {
        if (!db) {
            return res.status(503).json({ error: 'Database not connected' });
        }

        const conversation = {
            ...req.body,
            updatedAt: new Date().toISOString()
        };

        // Upsert: update if exists, insert if not
        const result = await db.collection('conversations').updateOne(
            { id: conversation.id },
            { $set: conversation },
            { upsert: true }
        );

        res.json({
            success: true,
            message: result.upsertedCount > 0 ? 'Created' : 'Updated',
            data: conversation
        });
    } catch (error) {
        console.error('Error saving conversation:', error);
        res.status(500).json({ error: 'Failed to save conversation' });
    }
});

// Delete conversation
app.delete('/api/conversations/:id', async (req, res) => {
    try {
        if (!db) {
            return res.status(503).json({ error: 'Database not connected' });
        }

        const result = await db.collection('conversations').deleteOne({
            id: req.params.id
        });

        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'Conversation not found' });
        }

        res.json({ success: true, message: 'Deleted successfully' });
    } catch (error) {
        console.error('Error deleting conversation:', error);
        res.status(500).json({ error: 'Failed to delete conversation' });
    }
});

// Clear all conversations for a device
app.delete('/api/conversations/device/:deviceId', async (req, res) => {
    try {
        if (!db) {
            return res.status(503).json({ error: 'Database not connected' });
        }

        const result = await db.collection('conversations').deleteMany({
            deviceId: req.params.deviceId
        });

        res.json({
            success: true,
            message: `Deleted ${result.deletedCount} conversations`
        });
    } catch (error) {
        console.error('Error clearing conversations:', error);
        res.status(500).json({ error: 'Failed to clear conversations' });
    }
});

// Bulk import conversations (for migration)
app.post('/api/conversations/bulk', async (req, res) => {
    try {
        if (!db) {
            return res.status(503).json({ error: 'Database not connected' });
        }

        const { conversations } = req.body;

        if (!Array.isArray(conversations) || conversations.length === 0) {
            return res.status(400).json({ error: 'Invalid conversations array' });
        }

        // Add timestamps to all conversations
        const conversationsWithTimestamp = conversations.map(conv => ({
            ...conv,
            updatedAt: new Date().toISOString()
        }));

        const result = await db.collection('conversations').insertMany(
            conversationsWithTimestamp,
            { ordered: false } // Continue on errors
        );

        res.json({
            success: true,
            message: `Imported ${result.insertedCount} conversations`
        });
    } catch (error) {
        console.error('Error bulk importing:', error);
        res.status(500).json({ error: 'Failed to import conversations' });
    }
});

// ============================================
// CONTACT FORMS API (Bonus!)
// ============================================

// Save contact form submission
app.post('/api/contact', async (req, res) => {
    try {
        if (!db) {
            return res.status(503).json({ error: 'Database not connected' });
        }

        const submission = {
            ...req.body,
            createdAt: new Date().toISOString(),
            status: 'new'
        };

        await db.collection('contact_submissions').insertOne(submission);

        res.json({ success: true, message: 'Form submitted successfully' });
    } catch (error) {
        console.error('Error saving contact form:', error);
        res.status(500).json({ error: 'Failed to submit form' });
    }
});

// ============================================
// START SERVER
// ============================================

async function startServer() {
    const connected = await connectDB();

    if (!connected) {
        console.warn('⚠️ Starting server without database connection');
        console.warn('⚠️ Some features may not work');
    }

    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
        console.log(`📍 Local: http://localhost:${PORT}`);
    });
}

// Handle graceful shutdown
process.on('SIGINT', async () => {
    console.log('\n🛑 Shutting down...');
    if (client) {
        await client.close();
        console.log('📦 MongoDB connection closed');
    }
    process.exit(0);
});

startServer();
