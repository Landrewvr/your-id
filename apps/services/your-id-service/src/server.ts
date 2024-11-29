import 'dotenv/config'
import mongoose from 'mongoose';
import http from 'node:http';
import { app } from './app';
import swaggerDocs from './util/swagger';

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
    console.log('[Server]:','Connecting to database...');
    mongoose.set('strictQuery', false);

    mongoose.connect(DB_URI)
        .then((db) => {
            console.log('[Server]:', `Connected to ${db.connection.name} database on ${db.connection.host}:${db.connection.port}`);
        })
        .catch((error: any) => {
            console.error('[Server]:', 'Database connection error:', error);
        });

    // Server start with http
    console.log('[Server]:', 'Creating server...');
    const server = http.createServer(app);

    // Server Start
    server.listen(PORT, () => {
        console.log('[Server]:', `Server is running on localhost:${PORT}`);
        swaggerDocs(app, PORT ?? '');
    })
}

main();
