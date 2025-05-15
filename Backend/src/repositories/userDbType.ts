import { ObjectId } from "mongodb";

export type UserDbType = {
    _id: ObjectId;
    userData: userData;
    emailVerification: emailVerificationData;
    passwordRecovery?: {
        recoveryCode: string;
        expirationDate: Date;
    };
};
export type userData={
    username: string;
    email: string;
    passwordHash: string;
    passwordSalt: string;
    createdAt: Date;
}
export type emailVerificationData = {
    confirmationCode: string;
    expirationDate: Date;
    isConfirmed: boolean;
}