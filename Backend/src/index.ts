
 import { run } from 'node:test'
import {app} from './app'
import { connectDbMongoose, runDb } from './repositories/db'

const port = 3001

const startApp = async () => {
  await runDb()
  await connectDbMongoose()
  app.listen(port, () => {
    
    console.log(`Example app listening on port ${port}`)
  })
}
startApp()