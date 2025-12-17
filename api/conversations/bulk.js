// API: Bulk Operations
// POST /api/conversations/bulk - Import multiple conversations
// DELETE /api/conversations/clear - Clear all conversations for a device

const { connectToDatabase } = require('../_lib/mongodb');

module.exports = async (req, res) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        const { db } = await connectToDatabase();
        const collection = db.collection('conversations');

        // POST - Bulk import conversations
        if (req.method === 'POST') {
            const { conversations } = req.body;

            if (!Array.isArray(conversations) || conversations.length === 0) {
                return res.status(400).json({ error: 'Invalid conversations array' });
            }

            const conversationsWithTimestamp = conversations.map(conv => ({
                ...conv,
                updatedAt: new Date().toISOString()
            }));

            const result = await collection.insertMany(conversationsWithTimestamp, { ordered: false });

            return res.status(200).json({
                success: true,
                message: `Imported ${result.insertedCount} conversations`
            });
        }

        // DELETE - Clear all conversations for a device
        if (req.method === 'DELETE') {
            const { deviceId } = req.query;

            if (!deviceId) {
                return res.status(400).json({ error: 'Device ID is required' });
            }

            const result = await collection.deleteMany({ deviceId });

            return res.status(200).json({
                success: true,
                message: `Deleted ${result.deletedCount} conversations`
            });
        }

        return res.status(405).json({ error: 'Method not allowed' });

    } catch (error) {
        console.error('Bulk API error:', error);
        res.status(500).json({ error: error.message });
    }
};
