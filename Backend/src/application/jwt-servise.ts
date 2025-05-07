import { ObjectId } from 'bson';
import jwt from 'jsonwebtoken';
import { UserDbType } from '../repositories/userDbType';
import { settings } from '../settings/setings';


export const jwtServisec = {
    async createJWT(user: UserDbType){
        const token = jwt.sign({ userId: user._id }, settings.JWT_SECRET, {expiresIn: '1h'},)
        return token;
        
    },
    async getUserIdByToken(token: string) {
        try {
            const result: any = jwt.verify(token, settings.JWT_SECRET);
            return ObjectId.createFromHexString(result.userId);
        } catch (error) {
            return null;
        }
    },
        

}
