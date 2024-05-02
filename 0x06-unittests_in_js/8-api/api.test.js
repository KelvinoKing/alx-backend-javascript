// Create one suite for the index page:
// Correct status code?
// Correct result?
// Other?

const request = require('request');
const { expect } = require('chai');
const app = require('./api');

describe('GET /', () => {
  it('returns the correct status code', (done) => {
    request.get('http://localhost:7865', (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
