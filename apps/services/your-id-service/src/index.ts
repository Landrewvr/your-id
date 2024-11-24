import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Initialize doteng to load env variables
dotenv.config();

// Express app creation
const app = express();

// Pulling enviroment constants from .env file
const appPort = process.env.DEV_APP_PORT || '';
const dbUrl = process.env.DATABASE_URL || '';

mongoose.set('strictQuery', false);
mongoose.connect(dbUrl)
.then((db) => {
    console.log(`Connected to ${db.connection.name} database on ${db.connection.host}:${db.connection.port}`);
})
.catch((error: any) => {
    console.log('Database connection error:', error);
});

// Middlewares
app.use(express.json());
app.use(cors());

// Routes

// const dummyUserRouter = require('./routes/dummyUser')
// app.use('/dummyUser', dummyUserRouter)

// Server Start
app.listen(appPort, () => {
    console.log(`Server is running on localhost:${appPort}`)
})

console.log('test test')