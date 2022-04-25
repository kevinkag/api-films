import express from 'express'
import bodyParser from 'body-parser'
import apiRouter from './routes/api.js'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/api', apiRouter)


export default app