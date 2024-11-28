const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const assert = require('assert');

describe('sendPaymentRequestToApi', function () {
  it('should call Utils.calculateNumber with correct arguments', function () {
    // Create a spy for Utils.calculateNumber
    const spy = sinon.spy(Utils, 'calculateNumber');

    // Call the function to test
    sendPaymentRequestToApi(100, 20);

    // Validate that Utils.calculateNumber was called with the correct arguments
    assert(spy.calledOnce);
    assert(spy.calledWith('SUM', 100, 20));

    // Restore the original function
    spy.restore();
  });
});
