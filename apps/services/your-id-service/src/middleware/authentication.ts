import type { NextFunction, Response } from 'express';
import { IAuthenticatedRequest } from '../interfaces/authenticatedRequest';

export const mockAuthentication = (req: IAuthenticatedRequest, res: Response, next: NextFunction) => {
    const token = req.headers['authorization'];

    // For mock purposes only.
    if (token === 'Bearer mock-token') {

      req.user = {
        id: '67420a7f1b4e3a04fb7ebcbe',
        username: 'mockUser',
        roles: ['user','admin']
      };

      next();
    } else {
      res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
};
