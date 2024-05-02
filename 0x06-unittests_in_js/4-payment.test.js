// Stub the function Utils.calculateNumber to always return the same number 10
// Verify that the stub is being called with type = SUM, a = 100, and b = 20
// Add a spy to verify that console.log is logging the correct message The total is: 10

const assert = require('assert');
const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
    it('should call Utils.calculateNumber and console.log', function() {
        const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
        const consoleSpy = sinon.spy(console, 'log');

        sendPaymentRequestToApi(100, 20);

        expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
        expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;

        calculateNumberStub.restore();
        consoleSpy.restore();
    });
});
