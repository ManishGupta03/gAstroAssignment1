const request = require('supertest');
const mongoose = require('mongoose');
const express = require('express');
const User = require('../Models/userModel');
require('dotenv').config();
const createClientQueue = require('../Queue/queueManager');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
jest.mock('../Queue/queueManager', () => ({ __esModule: true, default: { add: jest.fn(), },}));

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true, useUnifiedTopology: true });
});
afterAll(async () => { await mongoose.disconnect();});

describe('API Endpoints', () => {
  it('should enqueue a request', async () => {
    const response = await request(app)
      .post('/enqueue')
      .send({ request: { task: 'test task' } });
    expect(response.status).toBe(200);
    expect(response.text).toBe('Request enqueued');
  });

  it('should handle errors in enqueue route', async () => {
    createClientQueue.add.mockImplementation(() => { throw new Error('Bull error'); });
    const response = await request(app)
      .post('/enqueue')
      .send({ request: { task: 'test task' } });
    expect(response.status).toBe(500);
    expect(response.text).toBe('Error enqueuing request');
  });



  it('should register a new user', async () => {
    const res = await request(app)
        .post('/auth/register')
        .send({
            name: 'Test User',
            email: 'testuser@example.com',
            password: 'password123'
        });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
});

it('should login an existing user', async () => {
    const res = await request(app)
        .post('/auth/login')
        .send({
            email: 'testuser@example.com',
            password: 'password123'
        });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
});
});