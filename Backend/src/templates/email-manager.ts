import nodemailer from 'nodemailer';
import { settings } from '../settings/setings';
import { UserDbType } from '../repositories/userDbType';
import { EmailClient } from '../clients/email-clients';



export const emailManager = {
    
    async sendPaswordRecoveryMassage(user:UserDbType)  {
        
        EmailClient.sendEmail(user.userData.email, 'Password Recovery','lol')
    },
    async sendCreateUserMassage(user:UserDbType)  {
        const message = `<h1>Welcome to Delizioso Restoran</h1>
        <p>Dear ${user.userData.username},</p>
        <p>Thank you for registering with us! We are thrilled to have you as a part of our community.</p>
        <p>Best regards,</p>
        <p>The Delizioso Restoran Team</p>
        <a href="http://${settings.API_URL}/Auth/activate/${user.emailVerification.confirmationCode}">Visit our website</a>`
        
        EmailClient.sendEmail(user.userData.email, 'Welcome to Delizioso Restoran', message)
    },
    async sendPasswordRecoveryEmail(user:UserDbType, recoveryCode: string) { {
        const message = `<h1>Password Recovery</h1>
        <p>Dear ${user.userData.username},</p>
        <p>We received a request to reset your password. Please click the link below to reset it:</p>
        <a href="http://${settings.API_URL}/${recoveryCode}">Reset Password</a>
        <p>If you did not request this, please ignore this email.</p>
        <p>Best regards,</p>
        <p>The Delizioso Restoran Team</p>`
        
        EmailClient.sendEmail(user.userData.email, 'Password Recovery', message)
    }}

    
}
