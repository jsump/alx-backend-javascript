const supertest = require("supertest");
const app = require("./api.js");


describe("API", () => {
    describe("GET /", () => {
        // Test correct status code
        it(" must return the correct status code(OK: 200)", (done) => {
            supertest(app)
                .get("/")
                .expect(200)
                .end((error, res) => {
                    if (error)
                        return done(error);
                    done();
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
    
    describe("Cart Page", () => {
        //Test correct status code when id is a number
        it("must return correct status code when id is number", async () => {
            const response = await supertest(app).get("/cart/123");
            expect(response.statusCode).to.equal(200);
        });

        // Test for correct status code when id is npt a number
        it("must return correct status code when id is not a number", async () => {
            const response = await supertest(app).get("/cart/abc");
            expect(response.statusCode).to.equal(404);
        });
    })

});
