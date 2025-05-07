
import { ObjectId } from 'mongodb';
import { DishModel } from '../Models/DishModel';
import { DishesRepositori } from '../repositories/dish-db-repositori';


export const DishesServisec = {

    async findDishByIdServise(id: ObjectId): Promise<DishModel[]>{
        return DishesRepositori.findDishById(id);
    },

    async getDishesCategoriServise (category: string): Promise<DishModel[]>{
        const result = await DishesRepositori.getDishesCategori(category, 0, 100);
        return result.Dish;
    },
    async createDishServise (newDish: CreateDishModel): Promise<DishModel[]> {
        const dish = {
                
                    title: newDish.title,
                    category: newDish.category,
                    description: newDish.description,
                    price: newDish.price,
                    dishImg: newDish.dishImg
                };
        
        return DishesRepositori.createDish(dish);
    },

    async updateDishServise (id: ObjectId, updatedDish: Partial<CreateDishModel>): Promise<DishModel | null> {
            
            return DishesRepositori.updateDish(id, updatedDish);
        },

    async deleteDishServise (id: ObjectId):Promise<DishModel | null>{   
        
        return DishesRepositori.deleteDish(id);
    }
}