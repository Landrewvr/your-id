import { type NextFunction, type Request, type Response } from 'express';

export const mockAuthorization = (requiredRoles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
      const user = (req as any).user;

      if (!user) {
        return res.status(401).json({ message: 'Unauthorized: No user authenticated' });
      }

      const hasRole = requiredRoles.some((role) => user.roles.includes(role));
      if (!hasRole) {
        return res.status(403).json({ message: 'Forbidden: Insufficient permissions' });
      }

      next();
    };
};
