require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { seed, getResponses, createResponse } = require("./controller.js");

app.use(express.json());
app.use(cors());

app.get("/seed", seed);
app.get("/responses", getResponses);
app.post("/responses", createResponse);

app.listen(process.env.SERVER_PORT, () =>
  console.log(`up on ${process.env.SERVER_PORT}`)
);
