const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = require("chai");

const app = require("./api.js");

chai.use(chaiHttp);

describe("Index page", () => {
    // Test correct status code and result
    it("must return the correct status code and result", (done) => {
        chai.request(app)
            .get('/')
            .end((error, response) => {
                expect(response).to.have.status(200);
                expect(response.text).to.equal("Welcome to the payment system");
                done();
            });
    });
});
