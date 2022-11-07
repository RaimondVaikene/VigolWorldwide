const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
('sk_test_51LzMVwAltI4C59k1pzE8u6F5dcNITD4G03ouKtkxcj1KOQ6sp9S6UuUdklfgqu5UJ2pRHbiivVWBN60RgAj0H5ru002TspQK9t')

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true}));
app.use(express.json());

// Api routes
app.get("/", (request, response) => response.status(200).send
('hello world'))

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log('Payment request received for this amount >>>', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://127.0.0.1:5001/vigol-a20be/us-central1/api