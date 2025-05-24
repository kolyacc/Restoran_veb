
import { ObjectId } from 'mongodb';
import { DishModel } from '../Models/DishModel';
import { DishesRepositori } from '../repositories/dish-db-repositori';
import path from 'path';
import fs from 'fs';
import fsp from 'fs/promises';
import { settings } from '../settings/setings';


export const DishesServisec = {

    async findDishByIdServise(id: ObjectId): Promise<DishModel[]>{
        return DishesRepositori.findDishById(id);
    },

    async getDishesCategoriServise (category: string): Promise<DishModel[]>{
        const result = await DishesRepositori.getDishesCategori(category, 0, 100);
        return result.Dish;
    },
    async createDishServise (newDish: CreateDishModel, image:Express.Multer.File): Promise<DishModel[]> {

        const fileName = `${Date.now()}_${image.originalname}`;

        // 2. Шлях куди зберегти файл
        const savePath = path.join(__dirname, '..',  'data', 'img', fileName);

        // 3. Записуємо файл на диск
        await fsp.writeFile(savePath, image.buffer);

        // 4. Створюємо URL до зображення
        const imageUrl = `http://${settings.API_URL}/data/img/${fileName}`
        const dish = {
                    _id: new ObjectId(),
                    title: newDish.title,
                    category: newDish.category,
                    description: newDish.description,
                    price: newDish.price,
                    dishImg: imageUrl
                };
        
        return DishesRepositori.createDish(dish);
    },

    async updateDishServise (id: ObjectId, updatedDish: Partial<CreateDishModel>): Promise<DishModel | null> {
            
            return DishesRepositori.updateDish(id, updatedDish);
        },

    async deleteDishServise (id: ObjectId):Promise<DishModel | null>{   
        const dishArr = await DishesRepositori.findDishById(id);
        if (!dishArr || dishArr.length === 0) return null;

        // Видаляємо фото
        const dishImgUrl = dishArr[0].dishImg;
        const fileName = dishImgUrl ? path.basename(dishImgUrl) : null;
        const filePath = fileName ? path.join(__dirname, '..', 'data', 'img', fileName) : null;
        if (filePath && fs.existsSync(filePath)) {
            await fsp.unlink(filePath); // або fs.unlinkSync(filePath)
        }

        return DishesRepositori.deleteDish(id);
    }
}