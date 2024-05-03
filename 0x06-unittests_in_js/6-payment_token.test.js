/**
 * This is the test file for 6-payment_token.js
 * It tests whether the promise is resolved or not
 */
const { expect } = require("chai");
const getPaymentTokenFromAPI = require("./6-payment_token");

describe("getPaymentTokenFromApi", () => {
    it("must return a resolved promise with correct data when success is proved true", (done) => {
        getPaymentTokenFromAPI(true)
            .then((response) => {
                expect(response).to.equal({ data: "Successful response from the API" });
                done();
            })
            .catch((error) => {
                done(error);
            });
    });
});