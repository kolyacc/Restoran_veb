
import express, { Request, Response } from 'express';
import { authMiddleware } from '../middlewares/auth-middleware';


export const feadbeckRouter= () => {

    const  router= express.Router()

    router.post('/', 
        authMiddleware,
        async (req: Request, res: Response) => {
            
            res.status(200).json({ message: 'Feedback received', user: req.user!._id });
            
        });
    return router;
}