const assert = require('assert');

describe('Skipped Tests Example Suite', function () {
  
  it('should run this test and pass', function () {
    assert.strictEqual(1 + 1, 2);
  });

  it.skip('should skip this test and not run', function () {
    // This test will be skipped
    assert.strictEqual(1 + 2, 3);
  });

  it('should also run this test and pass', function () {
    assert.strictEqual(2 + 2, 4);
  });

  describe.skip('Skipped Nested Suite', function () {
    it('should skip this nested test', function () {
      assert.strictEqual(3 + 3, 6);
    });
  });

  describe('Conditional Skipped Suite', function () {
    before(function () {
      const shouldSkip = true;
      if (shouldSkip) {
        this.skip();
      }
    });

    it('should skip this test based on a condition', function () {
      assert.strictEqual(4 + 4, 8);
    });

    it('should also skip this test based on a condition', function () {
      assert.strictEqual(5 + 5, 10);
    });
  });
});
