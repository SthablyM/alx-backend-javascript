const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('should return 4 when inputs are 1.4 and 2.5', function () {
    assert.strictEqual(calculateNumber(1.4, 2.5), 4);
  });

  it('should return 0 when inputs are 0.1 and 0.3', function () {
    assert.strictEqual(calculateNumber(0.1, 0.3), 0);
  });

  it('should return -2 when inputs are -1.4 and -0.6', function () {
    assert.strictEqual(calculateNumber(-1.4, -0.6), -2);
  });

  it('should handle large numbers correctly', function () {
    assert.strictEqual(calculateNumber(1000.4, 2000.6), 3001);
  });

  it('should return 1 when inputs are 0.4 and 0.5', function () {
    assert.strictEqual(calculateNumber(0.4, 0.5), 1);
  });

  it('should return the sum of rounded integers', function () {
    assert.strictEqual(calculateNumber(5, 6.7), 12);
  });
});
