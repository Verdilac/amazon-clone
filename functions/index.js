const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51HQ6jdC9pVLhdZ1ngc6dI5Of1tW3TTIVbFsf0Siw4ZBZ3mhFr6w473IM5QEy42cXCYx4TW6CHfOzX9u8Q2Sk131x00cXo8sk8M");

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
//http://localhost:5001/clone-b9929/us-central1/api