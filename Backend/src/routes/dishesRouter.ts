import express, {Request, Response} from 'express'

//import { DishesRepositori } from '../repositories/dish-in-memory-repositori';

import { DishesRepositori } from '../repositories/dish-db-repositori';

import { body, validationResult } from 'express-validator';
import { inputValidationDish } from '../middlewares/input-validation-middleware';
import { DishValidation } from '../middlewares/validations/dishValidation';


export const getDishesRouter= () => {

    const  router= express.Router()

    

    router.get('/', async (req: Request,res: Response) => {
        const filteredDishes = await DishesRepositori.getDishesCategori('All category');
        res.json({
            data: filteredDishes
            
        });
    });

    router.get('/:id', async (req: Request, res: Response) => {
        const { id } = req.params;
        const dish = await DishesRepositori.findDishById(parseInt(id));
        if (!dish) {
            res.status(404).json({ message: 'Dish not found' });
        }
        res.json(dish);
    });

    router.get('/category/:category', async(req: Request, res: Response) => {
        
        const { category } = req.params;
        
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 6;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        var filteredDishes =  await DishesRepositori.getDishesCategori(category);
        
        const paginatedDishes = filteredDishes.slice(startIndex, endIndex);
        res.json({
            data: paginatedDishes,
            total: filteredDishes.length
        });
        
    });

    router.post('/createDish', 
        DishValidation,
        inputValidationDish,
        async (req: Request, res: Response) => {
        
        var newDish =await DishesRepositori.createDish(req.body);
        
        res.status(201).json(newDish);
    });

    router.put('/:id', 
        DishValidation,
        inputValidationDish,
        async (req: Request, res: Response) => {
        
        
        const { id } = req.params;
        const updatedDish =await DishesRepositori.updateDish(parseInt(id), req.body);
        if (!updatedDish) {
            res.status(404).json({ message: 'Dish not found' });
        }
        res.json(updatedDish);
    });

    router.delete('/:id', async(req: Request, res: Response) => {
        const { id } = req.params;
        const deletedDish = await DishesRepositori.deleteDish(parseInt(id));
        if (!deletedDish) {
            res.status(404).json({ message: 'Dish not found' });
        }
        res.json(deletedDish);
    });
    return router
}