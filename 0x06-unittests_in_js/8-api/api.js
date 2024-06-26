/**
 * This file cretes an instance that listens to a port
 */
const express = require("express");

// create an instance of express
const app = express();

// Return message from GRT route
app.get("/", (req, res) => {
    res.send("Welcome to the payment system");
});


module.exports = app;

// Listen and log
if (require.main === module) {
    app.listen(7865, () => {
        console.log("API available on localhost port 7865");
    });
}