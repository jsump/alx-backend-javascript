const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
    it('must return the sum of two numbers, rounded to the next whole number' , () => {
        assert.strictEqual(calculateNumber(3.6, 3.1), 7);
        assert.strictEqual(calculateNumber(2.9, 4.6), 8);
        assert.strictEqual(calculateNumber(5.6, -2.1), 4);
        assert.strictEqual(calculateNumber(6, 1.1), 7);
        assert.strictEqual(calculateNumber(-2.5, 3.1), 1);
        assert.strictEqual(calculateNumber(-3.3, -8.4), -11);
        assert.strictEqual(calculateNumber(5.8, -5.5), 1);
        assert.strictEqual(calculateNumber(0, 0), 0);
    });
});