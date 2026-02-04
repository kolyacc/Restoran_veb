
import bcrypt from 'bcrypt';
import { ObjectId } from 'mongodb';
import { v4 as uuidv4 } from 'uuid';
import { add } from 'date-fns/add';
import { UserDbType } from '../repositories/userDbType';
import { userReposytory } from '../repositories/user-db-repositori';
import { userCollection } from '../repositories/db';
import { emailManager } from '../templates/email-manager';
import { isBefore } from 'date-fns';
import { jwtServisec } from '../application/jwt-servise';
import { TokenDBRepository } from '../repositories/token-db-repositori';


export const authServisec = {
    async createUser(login: string, email: string, password: string) {
        
        const passwordHash = await this._generateHash(password, 3);
        
        const existingUser = await userReposytory.findUserByLoginOrEmail(login);
        if (existingUser) return null;
        const existingEmail = await userReposytory.findUserByLoginOrEmail(email);
        if (existingEmail) return null;

        const newUser :UserDbType = {
            _id: new ObjectId(),
            userData:{
                username: login,
                email,
                passwordHash,
                role: 'user',
                createdAt: new Date(),
            },
            emailVerification: {
                confirmationCode: uuidv4(),
                expirationDate: add(new Date(), { 
                    hours: 1 
                }),
                isConfirmed: false,
            }
        } 
        try {
            await emailManager.sendCreateUserMassage(newUser);
        }catch{
            await userReposytory.deleteUserById(newUser._id);
            
            return null;
        }
        const user =await userReposytory.createUser(newUser);

        const token = await jwtServisec.createJWT(newUser);
        await jwtServisec.saveRefreshToken(newUser._id, (await token).refreshToken);
        
        return {user: user.userData.username , ...token};
    },
    
    
    async findUserbyId(id: ObjectId) {
        const user = await userReposytory.findUserById(id);
        if (!user) return null;
        return user;
    },
    async checkConfirmationCode(confirmationCode: string) {
        const user = await userReposytory.findUserByConfirmationCode(confirmationCode);
        
        if (!user) return false;

        if (
            user.emailVerification.confirmationCode !== confirmationCode ||
            isBefore(user.emailVerification.expirationDate, new Date())
        ) {
            return false;
        }
        await userReposytory.updateConfirmation(user);
        return true;
    },
    async sendPasswordRecoveryEmail(email: string) {
        const user = await userReposytory.findUserByLoginOrEmail(email);
        if (!user) return false;

        const recoveryCode = uuidv4();
        const expirationDate = add(new Date(), { hours: 1 });

        await userReposytory.setPasswordRecovery(user._id, recoveryCode, expirationDate);

        try {
            await emailManager.sendPasswordRecoveryEmail(user, recoveryCode);
            return true;
        } catch {
            return false;
        }
    },

    async resetPassword(recoveryCode: string, newPassword: string) {
        const user = await userReposytory.findUserByRecoveryCode(recoveryCode);
        if (!user) return false;

        if (
            !user.passwordRecovery ||
            user.passwordRecovery.recoveryCode !== recoveryCode ||
            isBefore(user.passwordRecovery.expirationDate, new Date())
        ) {
            return false;
        }

        const passwordHash = await this._generateHash(newPassword, 3);

        await userReposytory.updatePassword(user._id, passwordHash);
        await userReposytory.clearPasswordRecovery(user._id);

        return true;
    },
    async checkCredentials(loginOrEmail: string, password: string) {
        const user = await userReposytory.findUserByLoginOrEmail(loginOrEmail);
        
        if (!user) return false;
        if (user.emailVerification.isConfirmed === false) return false;
        const passwordHash = bcrypt.compareSync(password, user.userData.passwordHash);
        
        if (!passwordHash) return false;
        return user;
    }, 
    async _generateHash(password: string, salt: number) {
        return await bcrypt.hash(password, salt);
    }
}


