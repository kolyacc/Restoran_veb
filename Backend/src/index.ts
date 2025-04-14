import express, {Request, Response} from 'express'
import { Dishes } from './data/Dish'
import cors from 'cors'

const app = express()
app.use(cors({ origin: 'http://localhost:5173' }))

const port = 3001

app.get('/', (req:Request, res:Response) => {
  let helloMssenge = 'Hello World!!!!!!'
  res.send(helloMssenge)
})
app.get('/Dishes', (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 6;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const paginatedDishes = Dishes.slice(startIndex, endIndex);

  res.json({
    data: paginatedDishes,
    total: Dishes.length
  });
});

app.get('/Dishes/:category', (req: Request, res: Response) => {
  const { category } = req.params;
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 6;

  const filteredDishes = Dishes.filter(dish => dish.category === category);
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const paginatedDishes = filteredDishes.slice(startIndex, endIndex);

  res.json({
    data: paginatedDishes,
    total: filteredDishes.length
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})