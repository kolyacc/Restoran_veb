
import bcrypt from 'bcrypt';
import { ObjectId } from 'mongodb';
import { UserDbType } from '../repositories/userDbType';
import { userReposytory } from '../repositories/user-db-repositori';
import { userCollection } from '../repositories/db';


export const userServisec = {
    async createUser(login: string, email: string, password: string) {
        const passwordSalt= await bcrypt.genSalt(10);
        const passwordHash = await this._generateHash(password, passwordSalt);
        const newUser :UserDbType = {
            _id: new ObjectId(),
            username: login,
            email,
            passwordHash,
            passwordSalt,
            createdAt: new Date(),
        }
        return await userReposytory.createUser(newUser);
    },
    async findUserbyId(id: ObjectId) {
        const user = await userReposytory.findUserById(id);
        if (!user) return null;
        return user;
    },


    async checkCredentials(loginOrEmail: string, password: string) {
        const user = await userReposytory.findUserByLoginOrEmail(loginOrEmail);
        if (!user) return false;
        const passwordHash = await this._generateHash(password,user.passwordSalt);
        if (user.passwordHash !== passwordHash) return false;
        return user;
    }, 
    async _generateHash(password: string, salt: string) {
        return await bcrypt.hash(password, salt);
    }
}