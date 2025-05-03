
import { DishModel } from '../Models/DishModel';
import { dishCollection } from './db';



export const DishesRepositori = {

    async findDishById(id: number): Promise<DishModel[]>{
        let dish = await dishCollection.find({id} ).toArray();
        return dish;
    },

    async getDishesCategori (category: string): Promise<DishModel[]>{
        
        let filteredDishes: DishModel[] = [];
        if (category === 'All category') {
                filteredDishes = await dishCollection.find().toArray();
        } else {
                filteredDishes = await dishCollection.find({category} ).toArray();
        }
        return filteredDishes;
    },
    async createDish (newDish: CreateDishModel): Promise<DishModel[]> {
        const dish = {
            id: (await dishCollection.countDocuments()) + 1,
            title: newDish.title,
            category: newDish.category,
            description: newDish.description,
            price: newDish.price,
            dishImg: newDish.dishImg
        };
        await dishCollection.insertOne(dish);
        return [dish];
    },
    async updateDish (id: number, updatedDish: Partial<CreateDishModel>): Promise<DishModel | null> {
        const dish = await dishCollection.findOne({ id });
        if (!dish) return null;
        const { _id, ...rest } = dish;
        const merged = { ...rest, ...updatedDish };
        await dishCollection.updateOne(
            { id },
            { $set: merged }
        );

        return merged as DishModel;
    },
    async deleteDish (id: number):Promise<DishModel | null>{   
        const result = await dishCollection.findOneAndDelete(
            { id },
            { projection: { _id: 0 } }
        );
        return result;
    }
}