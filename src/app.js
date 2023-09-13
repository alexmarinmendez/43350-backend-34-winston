import express from "express";
import { logger } from './utils/logger.js'

const app = express()

app.get('/', (req, res) => {
    logger.debug('Se hizo consulta GET /')
    res.json({ status: 'success' })
})

app.listen(8080, () => console.log('Server Up!'))