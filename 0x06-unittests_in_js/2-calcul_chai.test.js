// Rewrite the test suite, using expect from Chai
// Tips:
// Remember that test coverage is always difficult to maintain. Using an easier
// style for your tests will help you
// The easier your tests are to read and understand, the more other engineers
// will be able to fix them when they are modifying your code

const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
    describe('type == "SUM"', function() {
        it('should return the sum of two numbers', function() {
            expect(calculateNumber('SUM', 1.4, 3.5)).to.equal(5);
        });
    
        it('should return the sum of two numbers', function() {
            expect(calculateNumber('SUM', 1.5, 3.5)).to.equal(6);
        });
    
        it('should return the sum of two numbers', function() {
            expect(calculateNumber('SUM', 1.4, 3.4)).to.equal(4);
        });
    
        it('should return the sum of two numbers', function() {
            expect(calculateNumber('SUM', 1.4, 3.6)).to.equal(5);
        });
    
        it('should return the sum of two numbers', function() {
            expect(calculateNumber('SUM', -1.4, 3.2)).to.equal(2);
        });
    
        it('should return the sum of two numbers', function() {
            expect(calculateNumber('SUM', -1.4, -3.2)).to.equal(-4);
        });
    
        it('should return the sum of two numbers', function() {
            expect(calculateNumber('SUM', 1.4, -3.5)).to.equal(-2);
        });
    });

    describe('type == "SUBTRACT"', function() {
        it('should return the subtraction of two numbers', function() {
            expect(calculateNumber('SUBTRACT', 1.4, 3.5)).to.equal(-3);
        });
    
        it("should return the subtraction of two numbers", function() {
            expect(calculateNumber('SUBTRACT', 1.5, 2.4)).to.equal(0);
        });
    
        it("should return the subtraction of two numbers", function() {
            expect(calculateNumber('SUBTRACT', 3.4, 2.4)).to.equal(1);
        });
    
        it("should return the subtraction of two numbers", function() {
            expect(calculateNumber('SUBTRACT', -1.4, -3.6)).to.equal(3);
        });
    
        it("should return the subtraction of two numbers", function() {
            expect(calculateNumber('SUBTRACT', -1.4, 3.2)).to.equal(-4);
        });
    
        it("should return the subtraction of two numbers", function() {
            expect(calculateNumber('SUBTRACT', 1.4, -3.5)).to.equal(4);
        });
    });

    describe('type == "DIVIDE"', function() {
        it('should return the division of two numbers', function() {
            expect(calculateNumber('DIVIDE', 1.4, 3.5)).to.equal(0.25);
        });
    
        it('should return the division of two numbers', function() {
            expect(calculateNumber('DIVIDE', 1.5, 2.4)).to.equal(1);
        });
    
        it('should return the division of two numbers', function() {
            expect(calculateNumber('DIVIDE', 3.4, 2.4)).to.equal(1.5);
        });
    
        it('should return the division of two numbers', function() {
            expect(calculateNumber('DIVIDE', -1.4, -3.6)).to.equal(0.25);
        });
    
        it('should return the division of two numbers', function() {
            expect(calculateNumber('DIVIDE', -1.4, 3.2)).to.equal(-0.3333333333333333);
        });
    
        it('should return the division of two numbers', function() {
            expect(calculateNumber('DIVIDE', 1.4, -3.5)).to.equal(-0.3333333333333333);
        });
    
        it('should return the division of two numbers', function() {
            expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
        });
    
        it('should return the division of two numbers', function() {
            expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error');
        });
    
        it('should return the division of two numbers', function() {
            expect(calculateNumber('DIVIDE', -1.4, 0)).to.equal('Error');
        });
    
        it('should return the division of two numbers', function() {
            expect(calculateNumber('DIVIDE', 1.4, 0.1)).to.equal('Error');
        });
    
        it('should return the division of two numbers', function() {
            expect(calculateNumber('DIVIDE', 0, -0.1)).to.equal('Error');
        });
    
        it('should return the division of two numbers', function() {
            expect(calculateNumber('DIVIDE', 0, 0.1)).to.equal('Error');
        });
    
        it('should return the division of two numbers', function() {
            expect(calculateNumber('DIVIDE', 0.1, 0)).to.equal('Error');
        });
    
        it('should return the division of two numbers', function() {
            expect(calculateNumber('DIVIDE', -0.1, 0)).to.equal('Error');
        });
    
        it('should return the division of two numbers', function() {
            expect(calculateNumber('DIVIDE', 0, 0.5)).to.equal(0);
        });
    });
});