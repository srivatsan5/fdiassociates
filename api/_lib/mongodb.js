// Vercel Serverless Function - MongoDB Connection Helper
const { MongoClient } = require('mongodb');

let cachedClient = null;
let cachedDb = null;

async function connectToDatabase() {
    if (cachedDb) {
        return { client: cachedClient, db: cachedDb };
    }

    const uri = process.env.MONGODB_URI || process.env.MONGODB_URL;

    if (!uri) {
        throw new Error('MONGODB_URI environment variable is not set');
    }

    // Connection options to fix SSL/TLS issues
    const options = {
        // SSL/TLS settings
        tls: true,
        tlsInsecure: true, // Allow self-signed certs (helps with some environments)

        // Connection settings
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 30000,
        connectTimeoutMS: 30000,
        socketTimeoutMS: 45000,

        // Required for Atlas
        retryWrites: true,
        w: 'majority'
    };

    const client = new MongoClient(uri, options);
    await client.connect();

    const db = client.db(process.env.MONGODB_DATABASE || 'fdi_associates');

    cachedClient = client;
    cachedDb = db;

    return { client, db };
}

module.exports = { connectToDatabase };
