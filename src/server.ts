import express from 'express';

import bookRoutes from './domains/book/routes';
import reviewRoutes from './domains/review/routes';

const server = express();

server.use('/books', bookRoutes);
server.use('/reviews', reviewRoutes);

server.use('/_healthcheck', (_req, res) => {
  res.status(200).json({ uptime: process.uptime() });
});

export default server;
