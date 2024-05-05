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

//Endpoint for cart
app.get("/cart/:id(\\d+)", (req, res) => {
    const id = req.params.id;

    if (isNaN(id)) {
        res.status(404).json({ error: "Invalid cart ID. Must be a number." });
    } else {
        res.send(`Payment methods for cart ${id}`);
    }
});

module.exports = app;

// Listen and log
if (require.main === module) {
    app.listen(7865, () => {
        console.log("API available on localhost port 7865");
    });
}
