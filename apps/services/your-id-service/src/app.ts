import express from 'express';
import cors from 'cors';

import userRouter from './routes/userRoutes'
import { mockAuthentication } from './middleware/authentication';

// Express app creation
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(mockAuthentication);

// Routes
app.use('/user', userRouter);

export { app };
