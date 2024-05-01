const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber function', () => {
	test('must correctly add two rounded numbers', () => {
		const result = calculateNumber('SUM', 6.7, 4.6);
		expect(result).toBe(11);
	});

	test('must correctly subtract two rounded numbers', () => {
                const result = calculateNumber('SUBTRACT', 5, 2);
                expect(result).toBe(7);
        });

	test('must correctly divide two rounded numbers', () => {
                const result = calculateNumber('DIVIDE', 6, 3);
                expect(result).toBe(2);
        });

	test('must return "Error" when dividing by zero', () => {
                const result = calculateNumber('DIVIDE', 4, 0);
                expect(result).toBe('Error');
        });
});
