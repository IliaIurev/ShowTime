const request = require('supertest');
const app = require('../server');  // Импорт вашего приложени
it('responds with Hello, World!', async () => {
const response = await request(app).get('/'); // Просто вызываем app, чтобы получить запрос
expect(response.statusCode).toBe(200);
expect(response.text).toBe('Hello, World!\n');
});
