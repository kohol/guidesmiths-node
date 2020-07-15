// import mars from './mars.js';
const mars = require('./mars')

test('adds 1 + 2 to equal 3', () => {
  expect(mars(1, 2)).toBe(3);
});