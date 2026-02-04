import express, { Request, Response } from 'express';

import { EmailClient } from '../clients/email-clients';


export const emailRouter=() => {
    const router = express.Router()
    router.post('/send', async (req: Request, res: Response) => {
        const email= await EmailClient.sendEmail(req.body.email, req.body.subject, req.body.message)
        res.status(200).json({ message: "Email sent successfully" });
    });
    return router;

}