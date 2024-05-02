// You can assume a and b are always number
// Tests should be around the “rounded” part
// Tips:
// For the sake of the example, this test suite is slightly extreme and probably not needed
// However, remember that your tests should not only verify what a function is supposed to do,
// but also the edge cases
// Requirements:
// You have to use assert
// You should be able to run the test suite using npm test 0-calcul.test.js
// Every test should pass without any warning

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
    it('should return 4', function() {
        assert.strictEqual(calculateNumber(1.4, 3.5), 5);
    });
    it('should return 6', function() {
        assert.strictEqual(calculateNumber(1.5, 3.5), 6);
    });
    it('should return 6', function() {
        assert.strictEqual(calculateNumber(1.6, 3.5), 6);
    });
    it('should return 4', function() {
        assert.strictEqual(calculateNumber(1.4, 3.4), 4);
    });
    it('should return 5', function() {
        assert.strictEqual(calculateNumber(1.5, 3.4), 5);
    });
    it('should return 5', function() {
        assert.strictEqual(calculateNumber(1.6, 3.4), 5);
    });
    it('should return 5', function() {
        assert.strictEqual(calculateNumber(1.4, 3.6), 5);
    });
    it('should return 6', function() {
        assert.strictEqual(calculateNumber(1.5, 3.6), 6);
    });
    it('should return 6', function() {
        assert.strictEqual(calculateNumber(1.6, 3.6), 6);
    });
});
