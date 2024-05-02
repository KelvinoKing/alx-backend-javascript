// Inside the same describe, create 2 tests:
// The first test will call sendPaymentRequestToAPI with 100, and 20:
// Verify that the console is logging the string The total is: 120
// Verify that the console is only called once
// The second test will call sendPaymentRequestToAPI with 10, and 10:
// Verify that the console is logging the string The total is: 20
// Verify that the console is only called once
// You should use only one spy to complete this exercise
// You should use a beforeEach and a afterEach hooks to complete this exercise

const sendPaymentRequestToAPI = require('./5-payment');
const Utils = require('./utils');
const sinon = require('sinon');
const { expect } = require('chai');


describe('sendPaymentRequestToAPI', () => {
    let testSpyStud;

    beforeEach(() => {
        if (!testSpyStud) {
            testSpyStud = sinon.spy(console, 'log');
        }
    });

    afterEach(() => {
        testSpyStud.resetHistory();
    });

    it('should log the correct message with 100 and 20', () => {
        sendPaymentRequestToAPI(100, 20);
        expect(testSpyStud.calledOnce).to.be.true;
        expect(testSpyStud.calledWith('The total is: 120')).to.be.true;
    });

    it('should log the correct message with 10 and 10', () => {
        sendPaymentRequestToAPI(10, 10);
        expect(testSpyStud.calledOnce).to.be.true;
        expect(testSpyStud.calledWith('The total is: 20')).to.be.true;
    });
});
