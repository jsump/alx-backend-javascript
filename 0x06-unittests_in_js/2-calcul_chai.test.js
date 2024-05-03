(async () => {
	const { expect } = await import('chai');
	const calculateNumber = require('./2-calcul_chai.js');


	describe('calculateNumber', () => {
		describe('SUM', () => {
			it('must correctly add two rounded numbers', () => {
				const result = calculateNumber('SUM', 6.7, 4.6);
				expect(result).to.equal(12);
			});
		});

		describe('SUBTRACT', () => {
			it('must correctly subtract two rounded numbers', () => {
				const result = calculateNumber('SUBTRACT', 5, 2);
				expect(result).to.equal(3);
			});
		});

		describe('DIVIDE', () => {
			it('must correctly divide two rounded numbers', () => {
				const result = calculateNumber('DIVIDE', 6, 3);
				expect(result).to.equal(2);
			});
			it('must return "Error" when dividing by zero', () => {
				const result = calculateNumber('DIVIDE', 4, 0);
				expect(result).to.equal('Error');
			});
		});
	});
})();
