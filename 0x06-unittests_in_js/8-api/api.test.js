const request = require('request')
const chai = require('chai');
const { expect } = require("chai");

const app = require("./api.js");

describe("Index page", () => {
    // Test correct status code
    it("must return the correct status code(OK: 200)", (done) => {
        request.get('http://localhost:7865', (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    // Test correct result
    it("must return the correct result", (done) => {
        request.get('http://localhost:7865', (error, response, body) => {
            expect(body).to.equal("Welcome to the payment system");
            done();
        });
    });
});

