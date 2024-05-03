const request = require('request')
const chai = require('chai');
const { expect } = require("chai");

const app = require("./api.js");


describe("API", () => {
    describe("GET /", () => {
        // Test correct status code
        it(" must return the correct status code(OK: 200)", (done) => {
            expectdone();
                });
        });

        // Test correct result
        it("must return the correct result", (done) => {
            supertest(app)
                .get("/")
                .expect("Welcome to the payment system")
                .end((error, res) => {
                    if (error)
                        return done(error);
                    done();
                });
        });

        // Test Other
        it("Other: must only have one route and if not then 404 error)", (done) => {
            supertest(app)
                .get("/invalid-route")
                .expect(404)
                .end((error, res) => {
                    if (error)
                        return done(error);
                    done();
                });
        });
    });

});
