import express, {Request, Response} from 'express'
import { userServisec } from '../services/user-servisec';
import { jwtServisec } from '../application/jwt-servise';



export const UserRouter= () => {

    const  router= express.Router()

    router.post('/', 
        async (req: Request, res: Response) => {
            const user =await userServisec.createUser(req.body.login, req.body.email, req.body.password);
            res.status(200).json({ user });
            
        });
    return router;
}