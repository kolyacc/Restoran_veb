import { body, check } from "express-validator";



export const DishValidation = [
        body('title').isLength({min:3,max:15}).withMessage('Title is required'),
        body('category').isLength({min:3,max:15}).withMessage('Category is required'),
        body('description').isLength({min:3,max:200}).withMessage('Description is required'),
        body('price').isNumeric().withMessage('Price is required'),
        check('dishImg').custom((value, { req }) => {
        if (!req.file) {
            throw new Error('Dish image is required');
        }
        // Можеш додати перевірку типу:
        const fileTypes = ['image/jpeg', 'image/png'];
        if (!fileTypes.includes(req.file.mimetype)) {
            throw new Error('Invalid image type (only JPEG/PNG allowed)');
        }
        return true;
    }),
    ];