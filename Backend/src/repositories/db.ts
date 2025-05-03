import {MongoClient} from 'mongodb';
import { DishModel } from '../Models/DishModel';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017';

const client = new MongoClient(MONGODB_URI);
const db =client.db("RestoranWeb");
export const dishCollection = db.collection<DishModel>("Dishes");
export async function runDb() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        await client.db('RestoranWeb').command({ ping: 1 });
        console.log('Pinged your deployment. You successfully connected to MongoDB!');
    } catch  (error){
        console.error('Error connecting to MongoDB:', error);
        await client.close();
    } 
}