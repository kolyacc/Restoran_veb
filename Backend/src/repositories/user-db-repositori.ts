import { ObjectId } from "mongodb";
import { userCollection } from "./db";
import { UserDbType } from "./userDbType";
import { get } from "http";



export const userReposytory = {
    
    async createUser(newUser: UserDbType):Promise<UserDbType> {
        const result = await userCollection.insertOne(newUser);
        return newUser;
    },
    async findUserById(id: ObjectId): Promise<UserDbType | null> {
        const user = await userCollection.findOne({ _id :id });
        if (!user) return null;
        return user;
    },
    async findUserByLoginOrEmail(loginOrEmail: string) {
            const user = await userCollection.findOne({ $or: [{ username: loginOrEmail }, { email: loginOrEmail }] });
            
            return user;
    },
}