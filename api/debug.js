// API: Debug endpoint to check MongoDB configuration
// GET /api/debug

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    const uri = process.env.MONGODB_URI || process.env.MONGODB_URL || '';

    // Parse the connection string (hide password)
    let debugInfo = {
        hasMongoUri: !!uri,
        uriLength: uri.length,
        startsWithMongodb: uri.startsWith('mongodb'),
        containsSrv: uri.includes('+srv'),
    };

    // Extract parts safely
    if (uri) {
        try {
            // Extract username (between :// and :)
            const afterProtocol = uri.split('://')[1] || '';
            const username = afterProtocol.split(':')[0] || 'NOT_FOUND';

            // Extract cluster (between @ and /)
            const afterAt = afterProtocol.split('@')[1] || '';
            const cluster = afterAt.split('/')[0] || 'NOT_FOUND';

            // Extract database (between / and ?)
            const afterCluster = afterAt.split('/')[1] || '';
            const database = afterCluster.split('?')[0] || 'NOT_SET';

            debugInfo.username = username;
            debugInfo.cluster = cluster;
            debugInfo.database = database || 'NOT_SET';
            debugInfo.passwordLength = (afterProtocol.split(':')[1] || '').split('@')[0].length;
        } catch (e) {
            debugInfo.parseError = e.message;
        }
    }

    res.status(200).json(debugInfo);
};
