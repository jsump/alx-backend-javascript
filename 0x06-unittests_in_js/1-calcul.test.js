const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
	describe('SUM', () => {
		it('must correctly add two rounded numbers', () => {
			const result = calculateNumber('SUM', 6.7, 4.6);
			assert.strictEqual(result, 12);
		});
	});

	describe('SUBTRACT', () => {
		it('must correctly subtract two rounded numbers', () => {
			const result = calculateNumber('SUBTRACT', 5, 2);
                	assert.strictEqual(result, 3);
        	});
	});

	describe('DIVIDE', () => {
		it('must correctly divide two rounded numbers', () => {
                	const result = calculateNumber('DIVIDE', 6, 3);
                	assert.strictEqual(result, 2);
        	});
		it('must return "Error" when dividing by zero', () => {
                	const result = calculateNumber('DIVIDE', 4, 0);
                	assert.strictEqual(result, 'Error');
        	});
	});
});
