/**
 * This file cretes an instance that listens to a port
 */
const express = require("express");
const bodyParser = require("body-parser");

// create an instance of express
const app = express();

//Middleware to parse JSON request body
app.use(bodyParser.json());

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


// Endpoint to get available payments
app.get("/available_payments", (req, res) => {
    res.json({
        payment_methods: {
            credit_cards: true,
            paypal: false
        }
    });
});

// Endpoint to welcome user
app.post("/login", (req, res) => {
    const userName = req.body.userName;
    res.send(`Welcome ${userName}`);
});


module.exports = app;

// Listen and log
if (require.main === module) {
    app.listen(7865, () => {
        console.log("API available on localhost port 7865");
    });
}
