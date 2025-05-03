import { Dishes } from '../data/Dish';
import { DishModel } from '../Models/DishModel';



export const DishesRepositori = {

    async findDishById(id: number): Promise<DishModel[]>{
        let dish = Dishes.find(dish => dish.id === id);
        return dish ? [dish] : [];
    },

    getDishesCategori (category: string):Promise<DishModel[]>{
        
        let filteredDishes: typeof Dishes = [];
        if (category === 'All category') {
                filteredDishes = Dishes;
        } else {
                filteredDishes = Dishes.filter(dish => dish.category === category);
        }
        return Promise.resolve(filteredDishes);
    },
    async createDish (newDish: CreateDishModel): Promise<DishModel[]> {
        const dish = {
            id: Dishes.length + 1,
            title: newDish.title,
            category: newDish.category,
            description: newDish.description,
            price: newDish.price,
            dishImg: newDish.dishImg
        };
        Dishes.push(dish);
        return [dish];
    },
    async updateDish (id: number, updatedDish: Partial<CreateDishModel>): Promise<DishModel | null> {
        const dishIndex = Dishes.findIndex(dish => dish.id === id);
        if (dishIndex !== -1) {
            const updated = { ...Dishes[dishIndex], ...updatedDish };
            Dishes[dishIndex] = updated;
            return updated;
        }
        return null;
    },
    async deleteDish (id: number):Promise<DishModel | null>{   
        const dishIndex = Dishes.findIndex(dish => dish.id === id);
        if (dishIndex !== -1) {
            const deletedDish = Dishes[dishIndex];
            Dishes.splice(dishIndex, 1);
            return deletedDish;
        }
        return null;
    }
}