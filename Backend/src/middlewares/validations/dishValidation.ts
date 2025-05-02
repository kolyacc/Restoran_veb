import { body } from "express-validator";



export const DishValidation = [
        body('title').isLength({min:3,max:15}).withMessage('Title is required'),
        body('category').isLength({min:3,max:15}).withMessage('Category is required'),
        body('description').isLength({min:3,max:200}).withMessage('Description is required'),
        body('price').isNumeric().withMessage('Price is required'),
        body('dishImg').isLength({min:3,max:100}).withMessage('Dish image is required'),
    ];