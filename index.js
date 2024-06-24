import express from 'express'
import dotenv from 'dotenv'
import axios from 'axios'
import { bootstrap } from './src/index.router.js'
const app = express()
dotenv.config()
const port = 6000

bootstrap(app,express)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))