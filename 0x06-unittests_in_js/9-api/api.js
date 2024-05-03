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

    if (isNaN(id)) {
        res.status(400).json({ error: "Invalid cart ID. Must be a number." });
    } else {
        res.json(`Payment methods for cart ${id}`);
    }
});

// Listen and log
app.listen(7865, () => {
    console.log("API available on localhost port 7865");
});

// Error
app.use((req, res) => {
    res.status(404).send("404");
});

module.exports = app;
