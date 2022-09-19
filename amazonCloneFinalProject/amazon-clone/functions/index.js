const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")(
  "sk_test_51Ljb6gGN8c40SfHzJo0cVo8msXoGG0lldOhw7giMVisWL0bsmbGOcsQ1hsmIbSLcvWqbsaWEmYxdF0VVOd9a2Jgc00Fd9rzSoB"
);

// api

// config
const app = express();

// middleware
app.use(cors({ origin: true }));
app.use(express.json());

// api routes
app.get("/", (request, response) => response.status(200).send("Hello World"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received for the amount of >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// listen command
exports.api = functions.https.onRequest(app);

// firebase test end point http://localhost:5001/clone-8ace2/us-central1/api
