/**
 * This file contains a function that sends payment request o an API
 * @param {number} totalAmount - Total amount for pyament
 * @param {number} totalshipping - total shipping cost
 * @returns {number} The result of the operation
 */
const Utils = require("./utils");

function sendPaymentRequestToApi(totalAmount, totalshipping) {
    const result = Utils.calculateNumber("SUM", totalAmount, totalshipping);
    console.log(`The total is: ${result}`);
}
module.exports = sendPaymentRequestToApi;