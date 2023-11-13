import { format, createLogger, transports } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file'


const { combine, timestamp, label, printf } = format;
const CATEGORY = "DrawApi"


const customFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
})

const errorTransport = new DailyRotateFile({
    filename: "logs/drawapi-error-%DATE%.log",
    datePattern: "YYYY-MM-DD",
    level:"error",
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d'
  })

  const allTransport = new DailyRotateFile({
    filename: "logs/drawapi-all-%DATE%.log",
    datePattern: "YYYY-MM-DD",
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d'
  })



export const logger = createLogger({
//   level: 'info',
  format: combine(label({ label: CATEGORY }), timestamp({format:"MMM-DD-YYYY HH:mm:ss"}), customFormat), 
  transports: [
    errorTransport,
    allTransport,
    new transports.Console(),
  ]
})
