const request = require('supertest');
const server = require('../../index');
const mockFlights = require('../mocks').flights

test(`GET /flights`, async () => {
  const response = await request(server).get(`/flights${mockFlights.query}`);
  expect(response.status).toEqual(200);
  expect(response.text).not.toBeUndefined();
});