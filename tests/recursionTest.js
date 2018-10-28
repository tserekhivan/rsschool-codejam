const assert = require('assert');
const recursion = require('../src/recursion.js');

describe('Recursion', () => {
  it('1', () => {
    const tree = {
      value: 100,
      left: {
        value: 90,
        left: {
          value: 70,
        },
        right: {
          value: 99,
        },
      },
      right: {
        value: 120,
        left: {
          value: 110,
        },
        right: {
          value: 130,
        },
      },
    };
    const array = recursion(tree);
    assert.deepEqual(array, [[100], [90, 120], [70, 99, 110, 130]]);
  });

  it('2', () => {
    const tree = {
      value: 100,
      left: {
        value: 90,
        left: {
          value: 70,
        },
        right: {
          value: 99,
        },
      },
      right: {
        value: 120,
        left: {
          value: 110,
          left: {
            value: 300,
          },
          right: {
            value: 500,
          },
        },
        right: {
          value: 130,
          left: {
            value: 400,
          },
          right: {
            value: 700,
          },
        },
      },
    };
    const array = recursion(tree);
    assert.deepEqual(array, [[100], [90, 120], [70, 99, 110, 130], [300, 500, 400, 700]]);
  });
});
