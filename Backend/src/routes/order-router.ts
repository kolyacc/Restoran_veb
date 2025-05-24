import express, {Request, Response} from 'express'
import { DishesRepositori } from '../repositories/dish-db-repositori';
import { DishesServisec } from '../services/dish-servisec';
import { inputValidationDish } from '../middlewares/input-validation-middleware';
import { DishValidation } from '../middlewares/validations/dishValidation';
import multer from 'multer';


const { ObjectId } = require('mongodb');
export const getOrderRouter= () => {

    const  router= express.Router()

    router.post('/orderDish',
        async (req: Request, res: Response) => {

        });
    router.post('/orderTable',
        async (req: Request, res: Response) => {
            
        });
    return router
}