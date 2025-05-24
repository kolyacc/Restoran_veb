import express, {Request, Response} from 'express'
import { DishesRepositori } from '../repositories/dish-db-repositori';
import { DishesServisec } from '../services/dish-servisec';
import { inputValidationDish } from '../middlewares/input-validation-middleware';
import { DishValidation } from '../middlewares/validations/dishValidation';
import multer from 'multer';

const upload = multer({ storage: multer.memoryStorage() });
interface RequestWithFile extends Request {
        file?: Express.Multer.File;
    }
    
const { ObjectId } = require('mongodb');
export const getDishesRouter= () => {

    const  router= express.Router()

    

    router.get('/', async (req: Request,res: Response) => {
        const filteredDishes = await DishesServisec.getDishesCategoriServise('All category');
        res.json({
            data: filteredDishes
            
        });
    });

    router.get('/:id', async (req: Request, res: Response) => {
        const { id } = req.params;
        
        const dish = await DishesServisec.findDishByIdServise(new ObjectId(id));
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
        const endIndex = limit;
        
        
        var filteredDishes =  await DishesRepositori.getDishesCategori(category,startIndex, endIndex);
        
        
        res.json({
            data: filteredDishes.Dish,
            total: filteredDishes.total,
        });
        
    });

    // Define a type for requests with a file property
    

    router.post('/createDish', 
        upload.single('dishImg'),
        DishValidation,
        inputValidationDish,
        async (req: RequestWithFile, res: Response) => {
        if (!req.file) {
            res.status(400).json({ message: 'No file uploaded' });
        }else
        {
        var newDish =await DishesServisec.createDishServise(req.body, req.file);
        
        res.status(201).json(newDish);}
    });
    
    router.put('/:id', 
        DishValidation,
        inputValidationDish,
        async (req: Request, res: Response) => {
        
        
        const { id } = req.params;
        const updatedDish =await DishesServisec.updateDishServise(new ObjectId(id), req.body);
        if (!updatedDish) {
            res.status(404).json({ message: 'Dish not found' });
        }
        res.json(updatedDish);
    });

    router.delete('/:id', async(req: Request, res: Response) => {
        const { id } = req.params;
        const deletedDish = await DishesServisec.deleteDishServise(new ObjectId(id));
        if (!deletedDish) {
            res.status(404).json({ message: 'Dish not found' });
        }
        res.json(deletedDish);
    });
    return router
}