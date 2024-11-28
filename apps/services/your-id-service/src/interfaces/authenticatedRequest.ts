import type { Request } from 'express';

export interface IAuthenticatedRequest extends Request {
    user?: {
        id: string;
        username: string;
        roles: string[];
    };
}