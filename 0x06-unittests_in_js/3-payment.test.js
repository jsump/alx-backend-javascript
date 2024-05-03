/**
 * This is the test file for 3-payment.js
 * It tests whether the operations are correct
 */
const sinon = require("sinon");
const Utils = require("./utils");
const sendPaymentRequestToApi = require("./3-payment.js");

describe("sendPaymentRequestToApi", () => {
    it("must call Utils.calculateNumber with the correct args", () => {
        const calculateNumberSpy = sinon.spy(Utils, "calculateNumber");
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledWithExactly(calculateNumberSpy, "SUM", 100, 20);
        calculateNumberSpy.restore();
    });
});