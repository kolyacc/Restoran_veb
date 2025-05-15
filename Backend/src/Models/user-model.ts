import {Schema, model} from 'mongoose';
import { UserDbType , userData, emailVerificationData} from '../repositories/userDbType';



const userDataSchema = new Schema<userData>({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    passwordSalt: { type: String, required: true },
    createdAt: { type: Date, required: true },
});

const emailVerificationSchema = new Schema<emailVerificationData>({
    confirmationCode: { type: String,},
    expirationDate: { type: Date, },
    isConfirmed: { type: Boolean, default: false },
});

const userSchema = new Schema<UserDbType>({
    userData: { type: userDataSchema, required: true },
    emailVerification: { type: emailVerificationSchema, required: true },
    passwordRecovery: {
        recoveryCode: { type: String},
        expirationDate: { type: Date },
    },
});

module.exports = model('User', userSchema);