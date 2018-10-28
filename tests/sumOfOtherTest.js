const assert = require('assert');
const sumOfOther = require('../src/sumOfOther.js');

describe('Sum of Other', () => {
  it('1', () => {
    assert.deepEqual(sumOfOther([2, 3, 4, 1]), [8, 7, 6, 9]);
  });

  it('2', () => {
    assert.deepEqual(sumOfOther([0, 1, -1, 2, -2]), [0, -1, 1, -2, 2]);
  });
});
