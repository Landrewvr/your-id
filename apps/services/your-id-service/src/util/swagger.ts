import { Express, Request, Response } from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { version } from '../../package.json';

const options: swaggerJsdoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: 'Your id Docs',
            version,
            description: `API documentation for the Your-ID application. Note: FOR TESTING PURPOSES use 'mock-token' as authorize value.`
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                }
            }
        },
        security: [
            {
                bearerAuth: []
            }
        ]
    },
    apis: ['./src/routes/*.ts', './src/models/*.ts']
};

const swaggerSpec = swaggerJsdoc(options);

const swaggerDocs = (app: Express, port: string) => {
    // Swagger page
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    
    // Docs in JSON format
    app.get('docs.json', (req: Request, res: Response) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec)
    });

    console.log('[Server]:', `Docs available at http://localhost:${port}/docs`);
};

export default swaggerDocs;
