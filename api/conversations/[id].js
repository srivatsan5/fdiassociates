// API: Single Conversation Operations
// GET /api/conversations/[id] - Get specific conversation
// DELETE /api/conversations/[id] - Delete conversation

const { connectToDatabase } = require('../_lib/mongodb');

module.exports = async (req, res) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    const { id } = req.query;

    if (!id) {
        return res.status(400).json({ error: 'Conversation ID is required' });
    }

    try {
        const { db } = await connectToDatabase();
        const collection = db.collection('conversations');

        // GET - Fetch single conversation
        if (req.method === 'GET') {
            const conversation = await collection.findOne({ id });

            if (!conversation) {
                return res.status(404).json({ error: 'Conversation not found' });
            }

            return res.status(200).json({ success: true, data: conversation });
        }

        // DELETE - Delete conversation
        if (req.method === 'DELETE') {
            const result = await collection.deleteOne({ id });

            if (result.deletedCount === 0) {
                return res.status(404).json({ error: 'Conversation not found' });
            }

            return res.status(200).json({ success: true, message: 'Deleted successfully' });
        }

        return res.status(405).json({ error: 'Method not allowed' });

    } catch (error) {
        console.error('Conversation API error:', error);
        res.status(500).json({ error: error.message });
    }
};
