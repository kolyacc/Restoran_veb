import express from 'express'
import cors from 'cors'
import { getDishesRouter } from './routes/dishesRouter'
import { countsRequest, requestCount } from './middlewares/countsRequest';
import { authRouter } from './routes/auth-router';
import { userRouter } from './routes/user-router';
import { feadbeckRouter } from './routes/feedbeck-router';
import { emailRouter } from './routes/email-router';
import { settings } from './settings/setings';
import coocyparser from 'cookie-parser';
export const app = express()


app.use(express.json());
app.use(cors({ origin: [settings.CLIENT_URL] }))
app.use(countsRequest);
app.use(coocyparser());

app.use('/Dishes', getDishesRouter())
app.use('/User', userRouter())
app.use('/Auth', authRouter())
app.use('/Feedback', feadbeckRouter())
app.use('/Email', emailRouter())




app.get('/requestCount', (req: express.Request, res: express.Response) => {
    res.json({ "Count request": requestCount });
})


