import nodemailer from 'nodemailer';
import { settings } from '../settings/setings';



export const EmailClient = {
    
    async sendEmail(email: string, subject: string, message: string)  {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            secure: false, 
            auth: {
                user: settings.Email,
                pass: settings.Password, 
            },
        }); 
        let info = transporter.sendMail({
            from: `Delizioso Restoran <${settings.Email}>`,
            to: email,
            subject: subject,
            html: message,
        });
        return info
    }
    
}
