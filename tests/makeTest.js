const assert = require('assert');
const make = require('../src/make.js');

const sum = (a, b) => a + b;
const multiplication = (a, b) => a * b;
const division = (a, b) => a / b;
const minus = (a, b) => a - b;

describe('Make', () => {
  it('Sum', () => {
    assert.equal(make(15)(34, 21, 666)(41)(sum), 777);
  });

  it('Multiplication', () => {
    assert.equal(make(1)(2, 3, 4)(5)(multiplication), 120);
  });

  it('Division', () => {
    assert.equal(make(100, 5)(4)(5)(division), 1);
  });

  it('Minus', () => {
    assert.equal(make(100, 5)(4)(5)(minus), 86);
  });
});
