const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
    describe('sum of two positive numbers', () => {
        it('must return the sum of two positive numbers, rounded to the next whole number', () => {
            assert.strictEqual(calculateNumber(3.6, 3.1), 7);
            assert.strictEqual(calculateNumber(2.9, 4.6), 8);
            assert.strictEqual(calculateNumber(6, 1.1), 7);
            assert.strictEqual(calculateNumber(5.6, -2.1), 4);
            assert.strictEqual(calculateNumber(2, 4), 6);
            assert.strictEqual(calculateNumber(1, 2), 3);
        });
    });
    
    describe('sum of a negative number and a positive number', () => {
        it('must return the sum of a negative and a positive numbers, rounded to the next whole number', () => {
            assert.strictEqual(calculateNumber(-2.5, 3.1), 1);
            assert.strictEqual(calculateNumber(-3.3, 8.4), 5);
            assert.strictEqual(calculateNumber(5.8, -5.5), 1);
            assert.strictEqual(calculateNumber(0, 0), 0);
            assert.strictEqual(calculateNumber(2, -3), -1);
        });
    });

    describe('sum of two negative numbers', () => {
        it('must return the sum of two negative numbers, rounded to the next whole number', () => {
            assert.strictEqual(calculateNumber(-2, -3), -5);
            assert.strictEqual(calculateNumber(-1.5, -8.4), -9);
            assert.strictEqual(calculateNumber(-5., -2.3), -7);
            assert.strictEqual(calculateNumber(-1, -4), -5);
            assert.strictEqual(calculateNumber(-12, -3), -15);
        });
    });
});
