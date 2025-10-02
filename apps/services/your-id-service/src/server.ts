import 'dotenv/config'
import http from 'node:http';
import { app } from './app';
import { connectDataBase } from './db';
import swaggerDocs from './util/swagger';

const main = () => {

    console.log('[Server]:','Connecting to database...');
    // Mongoose connection creation
    connectDataBase();

    // Server start with http
    console.log('[Server]:', 'Creating server...');
    const server = http.createServer(app);
    const port = process.env.PORT ?? '3000';
    
    // Server Start
    server.listen(port, () => {
        console.log('[Server]:', `Server is running on localhost:${port}`);
        swaggerDocs(app, port);
    })
}

main();
