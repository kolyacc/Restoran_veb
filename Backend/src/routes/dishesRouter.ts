import express, {Request, Response} from 'express'
import { DishesRepositori } from '../repositories/Dish-repositori';
import { body, validationResult } from 'express-validator';
import { inputValidationDish } from '../middlewares/input-validation-middleware';
import { DishValidation } from '../middlewares/validations/dishValidation';


export const getDishesRouter= () => {

    const  router= express.Router()

    

    router.get('/', (req: Request,res: Response) => {
        var filteredDishes = DishesRepositori.getDishesCategori('All category');
        res.json({
            data: filteredDishes
            
        });
    });
    router.get('/:id', (req: Request, res: Response) => {
        const { id } = req.params;
        const dish = DishesRepositori.findDishById(parseInt(id));
        if (!dish) {
            res.status(404).json({ message: 'Dish not found' });
        }
        res.json(dish);
    });

    router.get('/:category', (req: Request, res: Response) => {
        
        const { category } = req.params;
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 6;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        var filteredDishes = DishesRepositori.getDishesCategori(category);
        
        const paginatedDishes = filteredDishes.slice(startIndex, endIndex);
        res.json({
            data: paginatedDishes,
            total: filteredDishes.length
        });
        
    });

    router.post('/createDish', 
        DishValidation,
        inputValidationDish,
        (req: Request, res: Response) => {
        
        var newDish = DishesRepositori.createDish(req.body);
        
        res.status(201).json(newDish);
    });

    router.put('/:id', 
        DishValidation,
        inputValidationDish,
        (req: Request, res: Response) => {
        
        
        const { id } = req.params;
        const updatedDish = DishesRepositori.updateDish(parseInt(id), req.body);
        if (!updatedDish) {
            res.status(404).json({ message: 'Dish not found' });
        }
        res.json(updatedDish);
    });

    router.delete('/:id', (req: Request, res: Response) => {
        const { id } = req.params;
        const deletedDish = DishesRepositori.deleteDish(parseInt(id));
        if (!deletedDish) {
            res.status(404).json({ message: 'Dish not found' });
        }
        res.json(deletedDish);
    });
    return router
}