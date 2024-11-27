import dotenv from 'dotenv';
import mongoose from 'mongoose';
import http from 'node:http';
import { app } from './app';

// Initialize doteng to load env variables
console.log('[server] Getting server settings...');
dotenv.config();

// Pulling enviroment constants from .env file
const appPort = process.env.DEV_APP_PORT || '';
const dbUrl = process.env.DATABASE_URL || '';

// Mongoose connection creation
console.log('[server] Connecting to database...')
mongoose.set('strictQuery', false);
mongoose.connect(dbUrl)
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
server.listen(appPort, () => {
    console.log(`[server] Server is running on localhost:${appPort}`)
})
