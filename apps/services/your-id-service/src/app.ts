import express from 'express';
import cors from 'cors';

import userRouter from './routes/userRoutes'

// Express app creation
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use('/user', userRouter);

export { app };
