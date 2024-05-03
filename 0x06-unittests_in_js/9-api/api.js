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

//Endpoing for cart
app.get("/cart/:id(\\d+)", (req, res) => {
    const id = req.params.id;

    res.json({
        id,
        paymentMethods: ["method1", "method2", "method3"],
    });
});

// Listen and log
app.listen(7865, () => {
    console.log("API available on localhost port 7865");
});

module.exports = app;