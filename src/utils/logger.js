import winston from "winston";

export const logger = winston.createLogger({
    transports: [
        new winston.transports.Console({ level: 'http' }),
        new winston.transports.File({
            filename: './errors.log',
            level: 'debug'
        })
    ]
})