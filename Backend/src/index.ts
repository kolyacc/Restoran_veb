
 import { run } from 'node:test'
import {app} from './app'
import { connectDb, runDb } from './repositories/db'

const port = 3001

const startApp = async () => {
  await runDb()
  await connectDb()
  app.listen(port, () => {
    
    console.log(`Example app listening on port ${port}`)
  })
}
startApp()