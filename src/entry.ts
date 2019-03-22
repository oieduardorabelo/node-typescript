import logger from './core/logger';
import secrets from './core/secrets';
import server from './server';

async function main() {
  await server.listen({ port: secrets.PORT, host: secrets.HOST });
  logger.info(`Running at http://${secrets.HOST}:${secrets.PORT}`);
}

process.on('unhandledRejection', (err) => {
  if (err) {
    logger.error(err);
  }
  process.exit(1);
});

main();
