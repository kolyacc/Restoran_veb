import { NextFunction, Request, Response } from 'express';

import { jwtServisec } from '../application/jwt-servise';
import { authServisec } from '../services/auth-servisec';


export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.headers.authorization) {
        res.status(401).json({ message: 'Authorization header is missing' });
        return 
    }
    const token = req.headers.authorization.split(' ')[1];
    
    const userId = await jwtServisec.getUserIdByToken(token);
    
    if (userId) {
        req.user =await authServisec.findUserbyId(userId);
        return next();
    }
    res.status(401).json({ message: 'Invalid token' });
    
    
}
export const authAdminMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.headers.authorization) {
        res.status(401).json({ message: 'Authorization header is missing' });
        return 
    }
    const token = req.headers.authorization.split(' ')[1];
    
    const userId = await jwtServisec.getUserIdByToken(token);
    
    if (userId) {
        const user = await authServisec.findUserbyId(userId);
        if (user?.userData.role === 'admin') {
            return next();
        }
        res.status(403).json({ message: 'Forbidden: Admins only' });
        return;
    }
    res.status(401).json({ message: 'Invalid token' });
}