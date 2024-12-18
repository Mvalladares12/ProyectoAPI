import * as winston from 'winston';
import { LoggingWinston} from '@google-cloud/logging-winston';
import { env } from 'process';

/*const l = pino({
  name: process.env.APP_ID,
  level: process.env.LOG_LEVEL,
});*/

const loggingWinston= new LoggingWinston();
const getTransport=(env: string)=>{
  const transport: winston.transport[]=[
    new winston.transports.Console({
    silent: process.argv.indexOf('--silent')>=0
  })
]
if (env==='production') transport.push(loggingWinston);
return transport;
}

export const logger = winston.createLogger({
  levels: winston.config.syslog.levels,
  transports: getTransport(process.env.NODE_ENV!)
});

export default logger;