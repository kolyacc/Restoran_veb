import express, {Request, Response} from 'express'
import { userServisec } from '../services/user-servisec';
import { jwtServisec } from '../application/jwt-servise';



export const aythRouter= () => {

    const  router= express.Router()

    router.post('/login', 
        async (req: Request, res: Response) => {
            const checkResalt =await userServisec.checkCredentials(req.body.loginOrEmail, req.body.password);
            if(checkResalt){
                const token = await jwtServisec.createJWT(checkResalt);
                res.status(200).json({ token });
            }
            else
                res.status(401).json('{ checkResalt }');
        });
    return router;
}