// API: Conversations CRUD
// GET /api/conversations - Get all conversations
// POST /api/conversations - Create/Update conversation

const { connectToDatabase } = require('./_lib/mongodb');

module.exports = async (req, res) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        const { db } = await connectToDatabase();
        const collection = db.collection('conversations');

        // GET - Fetch all conversations
        if (req.method === 'GET') {
            const conversations = await collection
                .find({})
                .sort({ createdAt: -1 })
                .limit(100)
                .toArray();

            return res.status(200).json({ success: true, data: conversations });
        }

        // POST - Create or update conversation
        if (req.method === 'POST') {
            const conversation = {
                ...req.body,
                updatedAt: new Date().toISOString()
            };

            const result = await collection.updateOne(
                { id: conversation.id },
                { $set: conversation },
                { upsert: true }
            );

            return res.status(200).json({
                success: true,
                message: result.upsertedCount > 0 ? 'Created' : 'Updated',
                data: conversation
            });
        }

        return res.status(405).json({ error: 'Method not allowed' });

    } catch (error) {
        console.error('Conversations API error:', error);
        res.status(500).json({ error: error.message });
    }
};
