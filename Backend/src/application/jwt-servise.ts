import { ObjectId } from 'bson';
import jwt from 'jsonwebtoken';
import { UserDbType } from '../repositories/userDbType';
import { settings } from '../settings/setings';
import { TokenDBRepository } from '../repositories/token-db-repositori';
import { userReposytory } from '../repositories/user-db-repositori';


export const jwtServisec = {
    async createJWT(user: UserDbType) {
        const token =  await{
            accessToken: jwt.sign({ userId:user._id ,name: user.userData.username, role:user.userData.role }, settings.JWT_SECRET, {expiresIn: '10m'},),
            refreshToken: jwt.sign({ userId:user._id  ,name: user.userData.username, role:user.userData.role }, settings.JWT_REFRESH_SECRET, {expiresIn: '30d'},)
        }
        return token;
        
    },
    async refreshToken(refreshToken: string) {
        try {
            const result: any = jwt.verify(refreshToken, settings.JWT_REFRESH_SECRET);
            const userId = result.userId;
            const user = await userReposytory.findUserById(userId);
            if (!user) return null;
            const newTokens = await this.createJWT(user);
            await TokenDBRepository.saveRefreshToken(userId, newTokens.refreshToken);
            return newTokens;
        } catch (error) {
            return null;
        }
    },
    async getUserIdByToken(token: string) {
        try {
            const result: any = jwt.verify(token, settings.JWT_SECRET);
            return result.userId;
        } catch (error) {
            return null;
        }
    },
    
    async logout(refreshToken: string) {
        const token = await TokenDBRepository.deletRefreshToken(refreshToken);
        
    },
    async saveRefreshToken(userId: ObjectId, RefreshToken: string) {
        return await TokenDBRepository.saveRefreshToken(userId, RefreshToken);
    }

}
