import winston from "winston";

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console({ 
            level: 'silly',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.colorize(),
                winston.format.simple(),
            )
        }),
        new winston.transports.File({
            filename: './logs/serverlogs.log',
            level: 'silly',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.simple(),
            )
        })
    ]
})

export default logger