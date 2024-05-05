const request = require('request')
const chai = require('chai');
const { expect } = require("chai");

const app = require("./api.js");


describe("API", () => {
    describe("GET /", () => {
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

        // Test Other
        it("Other: must only have one route and if not then 404 error)", (done) => {
            request.get('http://localhost:7865/undefined-route', (error, response, body) => {
                expect(response.statusCode).to.equal(404);
                done();
            });
        });
    });

    describe("Cart Page", () => {
        //Test correct status code when id is a number
        it("must return correct status code when id is number", (done) => {
            request.get('http://localhost:7865/cart/123', (error, response, body) => {
                expect(response.statusCode).to.equal(200);
                expect(body).to.equal("Payment methods for cart 123");
                done();
            });
        });

        // Test for correct status code when id is npt a number
        it("must return correct status code when id is not a number", (done) => {
            request.get('http://localhost:7865/cart/abc', (error, response, body) => {
                expect(response.statusCode).to.equal(404);
                done();
            });
        })
    });

    describe('Login endpoing', () => {
        it("must return a welcome message withthe username", (done) => {
            request.post('http://localhost:7865/login', { json: { userName: "John" } }, (error, response, body) => {
                expect(response.statusCode).to.equal(200);
                expect(response.body).to.equal("Welcome John");
                done();
            });

        });
    });
    
    describe('Get available payment methods', () => {
        it("must return an object with available payment methods", (done) => {
            request.get('http://localhost:7865/available_payments', (error, response, body) => {
                expect(response.statusCode).to.equal(200);
                expect(JSON.parse(body)).to.eql({
                    payment_methods: {
                        credit_cards: true,
                        paypal: false
                    }
                });
                done();
            });
        });
    });
});
