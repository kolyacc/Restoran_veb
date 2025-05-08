import nodemailer from 'nodemailer';
import { settings } from '../settings/setings';
import { UserDbType } from '../repositories/userDbType';
import { EmailClient } from '../clients/email-clients';



export const emailManager = {
    
    async sendPaswordRecoveryMassage(user:UserDbType)  {
        
        EmailClient.sendEmail(user.email, 'Password Recovery','lol')
    },
    async sendCreateUserMassage(user:UserDbType)  {
        const message = `<h1>Welcome to Delizioso Restoran</h1>
        <p>Dear ${user.username},</p>
        <p>Thank you for registering with us! We are thrilled to have you as a part of our community.</p>
        <p>Best regards,</p>
        <p>The Delizioso Restoran Team</p>
        <a href="http://localhost:5173?${user._id}">Visit our website</a>`
        
        EmailClient.sendEmail(user.email, 'Welcome to Delizioso Restoran', message)
    }
    
}
