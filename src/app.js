import express from "express";
import logger from './logger.js'

const app = express()

app.get('/', (req, res) => {
    logger.debug('Se hizo consulta GET /')
    res.json({ status: 'success' })
})

app.listen(8080, () => {
    logger.error('Server Up!')
    logger.warning('Server Up!')
    logger.info('Server Up!')
    logger.http('Server Up!')
    logger.debug('Server Up!')
})