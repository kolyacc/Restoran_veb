import express from 'express'
import cors from 'cors'
import { getDishesRouter } from './routes/dishesRouter'
import { countsRequest, requestCount } from './middlewares/countsRequest';
import { UserRouter } from './routes/user-router';
import { aythRouter } from './routes/auth-router';
import { feadbeckRouter } from './routes/feedbeck-router';
import { emailRouter } from './routes/email-router';

export const app = express()


app.use(express.json());
app.use(cors({ origin: ['http://localhost:5173'] }))
app.use(countsRequest);

app.use('/Dishes', getDishesRouter())
app.use('/User', UserRouter())
app.use('/Auth', aythRouter())
app.use('/Feedback', feadbeckRouter())
app.use('/Email', emailRouter())




app.get('/requestCount', (req: express.Request, res: express.Response) => {
    res.json({ "Count request": requestCount });
})


