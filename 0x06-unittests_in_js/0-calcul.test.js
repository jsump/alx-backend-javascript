const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
    describe('Test suite for first number rounded', () => {
        it('must return the sum of 3.6 and 3.1, rounded to the next whole number', () => {
            assert.strictEqual(calculateNumber(3.6, 3.1), 7);
        });

        it('must return the sum of 2.9 and 4.6, rounded to the next whole number', () => {
            assert.strictEqual(calculateNumber(2.9, 4.6), 8);
        });
        it('must return the sum of 6 and 1.1, rounded to the next whole number', () => {
            assert.strictEqual(calculateNumber(6, 1.1), 7);
        });
        it('must return the sum of 5.6 and -2.1, rounded to the next whole number', () => {
            assert.strictEqual(calculateNumber(5.6, -2.1), 4);
        });
        it('must return the sum of 2 and 4, rounded to the next whole number', () => {
            assert.strictEqual(calculateNumber(2, 4), 6);
        });
    });
    describe('Test suite for second number rounded', () => {
        it('must return the sum of 1 and 2, rounded to the next whole number', () => {
            assert.strictEqual(calculateNumber(1, 2), 3);
        });
        it('must return the sum of -2.5, 3.1, rounded to the next whole number', () => {
            assert.strictEqual(calculateNumber(-2.5, 3.1), 1);
        });
        it('must return the sum of -3.3 and 8.4, rounded to the next whole number', () => {
            assert.strictEqual(calculateNumber(-3.3, 8.4), 5);
        });
        it('must return the sum of 5.8 and -5.5, rounded to the next whole number', () => {
            assert.strictEqual(calculateNumber(5.8, -5.5), 1);
        });
        it('must return the sum of 0 and 0, rounded to the next whole number', () => {
            assert.strictEqual(calculateNumber(0, 0), 0);
        });
    });
    describe('Test suite for both numbers rounded', () => {
        it('must return the sum of 2 and -3, rounded to the next whole number', () => {
            assert.strictEqual(calculateNumber(2, -3), -1);
        });
        it('must return the sum of -2 and -3, rounded to the next whole number', () => {
            assert.strictEqual(calculateNumber(-2, -3), -5);
        });
        it('must return the sum of -1.5 and -8.4, rounded to the next whole number', () => {
            assert.strictEqual(calculateNumber(-1.5, -8.4), -9);
        });
        it('must return the sum of -5 and -2, rounded to the next whole number', () => {
            assert.strictEqual(calculateNumber(-5, -2.3), -7);
        });
        it('must return the sum of -1 and -4, rounded to the next whole number', () => {
            assert.strictEqual(calculateNumber(-1, -4), -5);
        });
    });
});