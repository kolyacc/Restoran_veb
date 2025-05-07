import { ObjectId } from "mongodb";

export type UserDbType = {
    _id: ObjectId;
    username: string;
    email: string;
    passwordHash: string;
    passwordSalt: string;
    createdAt: Date;
};