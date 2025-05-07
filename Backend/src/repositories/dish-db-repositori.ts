
import { ObjectId } from 'mongodb';
import { DishModel } from '../Models/DishModel';
import { dishCollection } from './db';



export const DishesRepositori = {

    async findDishById(_id: ObjectId): Promise<DishModel[]>{
        let dish = await dishCollection.find({_id} ).toArray();
        return dish;
    },

    async getDishesCategori (category: string, startIndex: number, limit: number): Promise<{ Dish: DishModel[]; total: number }> {
        const filter = category === 'All category' ? {} : { category };
        
        const Dish =await dishCollection.find(filter ).skip(startIndex).limit(limit).toArray();
        const total = await dishCollection.countDocuments(filter);
        
        return { Dish, total };
        
    },
    
    async createDish (newDish: DishModel): Promise<DishModel[]> {
        

        await dishCollection.insertOne(newDish);
        return [newDish];
    },
    async updateDish (_id: ObjectId, updatedDish: Partial<DishModel>): Promise<DishModel | null> {
        const dish = await dishCollection.findOne({_id });
        if (!dish) return null;
        const { _id: dishId, ...rest } = dish;
        const merged = { _id: dishId, ...rest, ...updatedDish };
        await dishCollection.updateOne({ _id }, { $set: merged });
        return merged;
    },
    async deleteDish (_id: ObjectId):Promise<DishModel | null>{   
        const result = await dishCollection.findOneAndDelete(
            { _id }
            
        );
        return result;
    }
}