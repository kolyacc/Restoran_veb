import { Dishes } from '../data/Dish';



export const DishesRepositori = {

    findDishById: (id: number) => {
        const dish = Dishes.find(dish => dish.id === id);
        return dish;
    },

    getDishesCategori: (category: string) => {
        
        let filteredDishes: typeof Dishes = [];
        if (category === 'All category') {
                filteredDishes = Dishes;
        } else {
                filteredDishes = Dishes.filter(dish => dish.category === category);
        }
        return filteredDishes;
    },
    createDish: (newDish: CreateDishModel) => {
        const dish = {
            id: Dishes.length + 1,
            title: newDish.title,
            category: newDish.category,
            description: newDish.description,
            price: newDish.price,
            dishImg: newDish.dishImg
        };
        Dishes.push(dish);
        return dish;
    },
    updateDish: (id: number, updatedDish: Partial<CreateDishModel>) => {
        const dishIndex = Dishes.findIndex(dish => dish.id === id);
        if (dishIndex !== -1) {
            const updated = { ...Dishes[dishIndex], ...updatedDish };
            Dishes[dishIndex] = updated;
            return updated;
        }
        return null;
    },
    deleteDish: (id: number) => {   
        const dishIndex = Dishes.findIndex(dish => dish.id === id);
        if (dishIndex !== -1) {
            const deletedDish = Dishes[dishIndex];
            Dishes.splice(dishIndex, 1);
            return deletedDish;
        }
        return null;
    }
}