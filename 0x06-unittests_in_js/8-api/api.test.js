const { request } = require("express");
const app = require("./api.js");

describe("API", () => {
    describe("GET /", () => {
        it(" must return the correct status code(OK: 200)", (done) => {
            request(app)
                .get("/")
                .expect(200)
                .end((error, res) => {
                    if (error)
                        return done(error);
                    done();
                });
        });

        it("must return the correct result", (done) => {
            request(app)
                .get("/")
                .expect("Welcome to the payment system")
                .end((error, res) => {
                    if (error)
                        return done(error);
                    done();
                });
        });

        it("Other: must only have one route and if not then 404 error)", (done) => {
            request(app)
                .get("/invalid-route")
                .expect("404")
                .end((error, res) => {
                    if (error)
                        return done(error);
                    done();
                });
        });
    });

});
