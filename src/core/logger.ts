import winston from 'winston';

const logger = winston.createLogger({
  levels: winston.config.syslog.levels,
  format: winston.format.combine(
    winston.format.label({ label: 'server' }),
    winston.format.simple(),
    winston.format.timestamp(),
    winston.format.printf(({ level, message, label, timestamp }) => {
      return `[${label}:${level}] ${message} (${timestamp})`;
    })
  ),
  transports: [new winston.transports.Console()],
});

export default logger;
