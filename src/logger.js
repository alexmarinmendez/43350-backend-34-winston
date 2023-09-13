import winston from "winston";

const colors = {
    debug: 'white',
    http: 'green',
    info: 'blue',
    warning: 'yellow',
    error: 'magenta',
    fatal: 'red'
}

winston.addColors(colors)

const logger = winston.createLogger({
    levels: {
        debug: 0,
        http: 1,
        info: 2,
        warning: 3,
        error: 4,
        fatal: 5
    },
    transports: [
        new winston.transports.Console({ 
            level: 'fatal',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.colorize(),
                winston.format.simple(),
            )
        }),
        new winston.transports.File({
            filename: './logs/serverlogs.log',
            level: 'fatal',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.simple(),
            )
        })
    ]
})

export default logger