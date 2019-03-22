import req from 'supertest';

import server from './server';

test('[GET] /_healthcheck', async () => {
  const res = await req(server).get('/_healthcheck');
  expect(typeof res.body.uptime).toBe('number');
});
