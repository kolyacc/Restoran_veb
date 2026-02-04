import { ObjectId } from "mongodb";
import { userCollection } from "./db";
import { UserDbType } from "./userDbType";
import { get } from "http";
const UserModel = require('../Models/user-model');

export const userReposytory = {
    
    async createUser(newUser: UserDbType):Promise<UserDbType> {
        
        const result = await UserModel.insertOne(newUser);
        return newUser;
    },
    async findUserById(id: ObjectId): Promise<UserDbType | null> {
        const user = await UserModel.findOne({ _id :id });
        if (!user) return null;
        return user;
    },
    async findUserByLoginOrEmail(loginOrEmail: string):Promise<UserDbType | null> {
            const user = await UserModel.findOne({
                $or: [
                { "userData.username": loginOrEmail },
                { "userData.email": loginOrEmail }
                ]
            });
            
            if (!user) return null;
            return user;
    },
    async findUserByConfirmationCode(confirmationCode: string): Promise<UserDbType | null> {
        const user = await UserModel.findOne({
            "emailVerification.confirmationCode": confirmationCode,
        });
        if (!user) return null;
        return user;
    },
    async updateConfirmation(user: UserDbType) {
        const result = await UserModel.updateOne(
            { _id: user._id },
            {
                $set: {
                    "emailVerification.isConfirmed": true,
                    "emailVerification.confirmationCode": null,
                    "emailVerification.expirationDate": null,
                },
            }
        );
        return result.matchedCount === 1;
    }
    ,
    async setPasswordRecovery(userId: ObjectId, recoveryCode: string, expirationDate: Date): Promise<boolean> {
        const result = await UserModel.updateOne(
            { _id: userId },
            {
                $set: {
                    "passwordRecovery.recoveryCode": recoveryCode,
                    "passwordRecovery.expirationDate": expirationDate,
                },
            }
        );
        return result.matchedCount === 1;
    },
    async updatePassword(userId: ObjectId, newPasswordHash: string): Promise<boolean> {
        const result = await UserModel.updateOne(
            { _id: userId },
            {
                $set: {
                    "userData.passwordHash": newPasswordHash,
                },
            }
        );
        return result.matchedCount === 1;
    },
    async clearPasswordRecovery(userId: ObjectId): Promise<boolean> {
        const result = await UserModel.updateOne(
            { _id: userId },
            {
                $set: {
                    "passwordRecovery.recoveryCode": null,
                    "passwordRecovery.expirationDate": null,
                },
            }
        );
        return result.matchedCount === 1;
    }
    ,
    async findUserByRecoveryCode(recoveryCode: string): Promise<UserDbType | null> {
        const user = await UserModel.findOne({
            "passwordRecovery.recoveryCode": recoveryCode,
        });
        if (!user) return null;
        return user;
    },
    async deleteUserById(id: ObjectId): Promise<boolean> {
        const result = await UserModel.deleteOne({ _id: id });
        return result.deletedCount === 1;}
}