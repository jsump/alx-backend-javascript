/**
 * This is the test file for 3-payment.js
 * It tests whether the operations are correct
 */
const sinon = require("sinon");
const Utils = require("./utils");
const sendPaymentRequestToApi = require("./5-payment.js");

describe("sendPaymentRequestToApi", () => {
    it("must call Utils.calculateNumber stub with the correct args", () => {
        // Stub Utils.calculateNumber to aleays return 120
        const calculateNumberSpy = sinon.stub(Utils, "calculateNumber").returns(120);
        // Spy on console log to verify the output
        const consoleLogSpy = sinon.spy(console, "log");

        // call the fucntion
        sendPaymentRequestToApi(100, 20);

        // Verify that Utils.calculateNumber is called with correct args
        sinon.assert.calledWithExactly(calculateNumberSpy, "SUM", 100, 20);
        // //correct message
        sinon.assert.calledWithExactly(consoleLogSpy, "The total is: 120");

        // Restore stub and spy
        calculateNumberSpy.restore();
        consoleLogSpy.restore();
    });

    it("must call Utils.calculateNumber stub with the correct args", () => {
        // Stub Utils.calculateNumber to aleays return 20
        const calculateNumberSpy = sinon.stub(Utils, "calculateNumber").returns(20);
        // Spy on console log to verify the output
        const consoleLogSpy = sinon.spy(console, "log");

        // call the fucntion
        sendPaymentRequestToApi(10, 10);

        // Verify that Utils.calculateNumber is called with correct args
        sinon.assert.calledWithExactly(calculateNumberSpy, "SUM", 10, 10);
        // //correct message
        sinon.assert.calledWithExactly(consoleLogSpy, "The total is: 20");

        // Restore stub and spy
        calculateNumberSpy.restore();
        consoleLogSpy.restore();
    });
});
