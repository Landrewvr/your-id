import 'dotenv/config'
import mongoose from 'mongoose';
import http from 'node:http';
import { app } from './app';

// Pulling enviroment constants from .env file
const {
    PORT,
    MONGO_INITDB_ROOT_USERNAME,
    MONGO_INITDB_ROOT_PASSWORD,
    MONGO_INITDB_DATABASE,
    AUTH_SOURCE
} = process.env;

const main = () => {
    const DB_URI = `mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@localhost:27017/${MONGO_INITDB_DATABASE}?authSource=${AUTH_SOURCE}`;

    // Mongoose connection creation
    console.log('[server] Connecting to database...')
    mongoose.set('strictQuery', false);
    mongoose.connect(DB_URI)
        .then((db) => {
            console.log(`[server] Connected to ${db.connection.name} database on ${db.connection.host}:${db.connection.port}`);
        })
        .catch((error: any) => {
            console.error('[server] Database connection error:', error);
        });

    // Server start with http
    console.log('[server] Creating server...')
    const server = http.createServer(app);

    // Server Start
    server.listen(PORT, () => {
        console.log(`[server] Server is running on localhost:${PORT}`)
    })
}

main();
