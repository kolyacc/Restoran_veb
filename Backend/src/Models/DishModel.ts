import { ObjectId } from 'mongodb';
export type DishModel = {
    _id: ObjectId;
    title: string;
    category: string;
    description: string;
    price: number;
    dishImg: string;
}