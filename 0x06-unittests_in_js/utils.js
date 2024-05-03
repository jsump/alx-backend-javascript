/**
 * This file contins utility functions for calculations
 * @module Utils
 * 
 * 
 * Perform arithmetic operations for 2 numbers
 * @param {string} type - 'SUM', "DIVIDE', OR 'SUBTRACT
 * @param {number} a - first number
 * @param {number} b - second numner
 * @returns {number|string} REsult of operation and 'Errror' for divion of 0
 */
 
const Utils = {
    calculateNumber: (type, a, b) => {
        const roundedA = Math.round(a);
        const roundedB = Math.round(b);

        if (type === "SUM") {
            return roundedA + roundedB;
        } else if (type === "SUBTRACT") {
            return roundedA - roundedB;
        } else if (type === "DIVIDE") {
            if (roundedB === 0) {
                return "Error";
            } else {
                return roundedA / roundedB;
            }
        }
    }
};
module.exports = Utils;