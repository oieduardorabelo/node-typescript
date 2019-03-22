import express from 'express';

export default {
  index: (_req: express.Request, res: express.Response) => {
    res.send('review#index');
  },
  show: (_req: express.Request, res: express.Response) => {
    res.send('review#show');
  },
};
