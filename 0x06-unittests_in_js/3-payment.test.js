// Create a new file named 3-payment.test.js and add a new suite named
// sendPaymentRequestToApi:
// By using sinon.spy, make sure the math used for sendPaymentRequestToApi(100, 20)
// is the same as Utils.calculateNumber('SUM', 100, 20) (validate the usage of the Utils function)

const assert = require('assert');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
    it('should call Utils.calculateNumber', function() {
        const spy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 20);
        assert(spy.calledOnceWithExactly('SUM', 100, 20));
        spy.restore();
    });
});
