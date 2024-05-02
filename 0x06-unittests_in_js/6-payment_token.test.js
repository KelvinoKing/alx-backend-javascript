// write a test suite named getPaymentTokenFromAPI
// You should use the done callback to execute this test

const getPaymentTokenFromAPI = require('./6-payment_token');
const sinon = require('sinon');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', () => {
    it('should return a resolved promise with the object {data: "Successful response from the API"}', (done) => {
        const success = true;
        getPaymentTokenFromAPI(success).then((response) => {
            expect(response).to.eql({ data: 'Successful response from the API' });
            done();
        });
    });
});
