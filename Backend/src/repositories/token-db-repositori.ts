import { ObjectId } from "mongodb";

const TokenModel = require('../Models/token-model');

export const TokenDBRepository = {
    async deletRefreshToken(token: string) {
        return await TokenModel.deleteOne({ refreshToken: token });
    },
    async findRefreshToken(token: string) {
        const tokenData = await TokenModel.findOne({ refreshToken: token });
        
        if (!tokenData) { return null; }
        return tokenData;
    },   
    async saveRefreshToken(_id:ObjectId,refreshToken: string) {
        const tokenData = await TokenModel.findOne({ userId: _id });
        if (tokenData) {
            
            await TokenModel.deleteOne({ userId: _id });
        }
        const token = await TokenModel.create({userId: _id, refreshToken: refreshToken});
        return token;
    }


}