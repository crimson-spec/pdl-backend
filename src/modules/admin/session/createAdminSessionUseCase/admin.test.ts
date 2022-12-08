import request from 'supertest';
import { app } from '@shared/infra/http/server';

test('', async () => {
  const res = (await request(app).post('/sessions')).body({
    username: 'matheus',
    password: 'matheus',
  });
});
