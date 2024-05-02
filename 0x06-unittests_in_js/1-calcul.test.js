// You can assume a and b are always number
// Usage of describe will help you to organize your test cases

const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
    it('should return 5', function() {
        assert.strictEqual(calculateNumber('SUM', 1.4, 3.5), 5);
    });
    it('should return 6', function() {
        assert.strictEqual(calculateNumber('SUM', 1.5, 3.5), 6);
    });
    it('should return 6', function() {
        assert.strictEqual(calculateNumber('SUM', 1.6, 3.5), 6);
    });
    it('should return 4', function() {
        assert.strictEqual(calculateNumber('SUM', 1.4, 3.4), 4);
    });
    it('should return 5', function() {
        assert.strictEqual(calculateNumber('SUM', 1.5, 3.4), 5);
    });
    it('should return 5', function() {
        assert.strictEqual(calculateNumber('SUM', 1.6, 3.4), 5);
    });
    it('should return 5', function() {
        assert.strictEqual(calculateNumber('SUM', 1.4, 3.6), 5);
    });
    it('should return 6', function() {
        assert.strictEqual(calculateNumber('SUM', 1.5, 3.6), 6);
    });
    it('should return 6', function() {
        assert.strictEqual(calculateNumber('SUM', 1.6, 3.6), 6);
    });
    it('should return -3', function() {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 3.5), -3);
    });
    it('should return -2', function() {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.5), -2);
    });
    it('should return -2', function() {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.6, 3.5), -2);
    });
    it('should return -2', function() {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 3.4), -2);
    });
    it('should return -1', function() {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.4), -1);
    });
    it('should return -1', function() {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.6, 3.4), -1);
    });
    it('should return 0.25', function() {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 3.5), 0.25);
    });
    it('should return 0.5', function() {
        assert.strictEqual(calculateNumber('DIVIDE', 1.5, 3.5), 0.5);
    });
    it('should return 0.5', function() {
        assert.strictEqual(calculateNumber('DIVIDE', 1.6, 3.5), 0.5);
    });
    it('should return Error', function() {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.4), 'Error');
    });
    it('should return Error', function() {
        assert.strictEqual(calculateNumber('DIVIDE', 1.5, 0.4), 'Error');
    });
    it('should return -0.5', function() {
        assert.strictEqual(calculateNumber('DIVIDE', -1.6, 4.1), -0.5);
    });
    it('should return Error', function() {
        assert.strictEqual(calculateNumber('DIVIDE', -1.6, 0), 'Error');
    });
    it('should return Error', function() {
        assert.strictEqual(calculateNumber('DIVIDE', 0, 0), 'Error');
    });
    it('should return 0', function() {
        assert.strictEqual(calculateNumber('DIVIDE', 0, 1), 0);
    });
    it('should return 0.5', function() {
        assert.strictEqual(calculateNumber('DIVIDE', -1.6, -4.3), 0.5);
    });
});
