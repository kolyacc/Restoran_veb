import express from 'express'
import cors from 'cors'
import { getDishesRouter } from './routes/dishesRouter'
import { countsRequest, requestCount } from './middlewares/countsRequest';

export const app = express()


app.use(express.json());
app.use(cors({ origin: ['http://localhost:5173'] }))
app.use(countsRequest);

app.use('/Dishes', getDishesRouter())

app.get('/requestCount', (req: express.Request, res: express.Response) => {
    res.json({ "Count request": requestCount });
})



 

