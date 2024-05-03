const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("./api.js");

// Configure chai
chai.use(chaiHttp);
const expect = chai.expect;

describe("API", () => {
    describe("GET /", () => {
        // Test correct status code
        it("must return the correct status code(OK: 200)", (done) => {
            chai.request(app)
                .get("/")
                .end((error, res) => {
                    expect(res).to.have.status(200);
                    done();
                });
        });

        // Test correct result
        it("must return the correct result", (done) => {
            chai.request(app)
                .get("/")
                .end((error, res) => {
                    expect(res.text).to.equal("Welcome to the payment system");
                    done();
                });
        });

        // Test Other
        it("Other: must only have one route and if not then 404 error)", (done) => {
            chai.request(app)
                .get("/invalid-route")
                .end((error, res) => {
                    expect(res).to.have.status(404);
                    done();
                });
        });
    });
});
