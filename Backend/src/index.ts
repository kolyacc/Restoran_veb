import express, {Request, Response} from 'express'
import { Dishes } from './data/Dish.js'
const app = express()
const port = 3000

app.get('/', (req:Request, res:Response) => {
  let helloMssenge = 'Hello World!!!'
  res.send(helloMssenge)
})
app.get('/lol', (req:Request, res:Response) => {
  res.json(Dishes)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})