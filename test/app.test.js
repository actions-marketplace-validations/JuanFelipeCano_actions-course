const request = require('supertest');
const app = require('../src/app.js');

describe('GET /', () => {
  it('Should return HTML', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('GitHub Actions');
  });
});
