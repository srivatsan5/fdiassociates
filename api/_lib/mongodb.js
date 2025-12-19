// Vercel Serverless Function - MongoDB Connection Helper
const { MongoClient, ServerApiVersion } = require('mongodb');

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

    // Use MongoDB recommended connection options for Atlas
    const options = {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        },
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 30000,
        connectTimeoutMS: 30000,
    };

    const client = new MongoClient(uri, options);

    try {
        await client.connect();
        // Verify connection with ping
        await client.db("admin").command({ ping: 1 });
        console.log("Successfully connected to MongoDB!");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        throw error;
    }

    const db = client.db(process.env.MONGODB_DATABASE || 'fdi_associates');

    cachedClient = client;
    cachedDb = db;

    return { client, db };
}

module.exports = { connectToDatabase };
