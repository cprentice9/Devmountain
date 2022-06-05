require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { seed, getResponses, createResponse } = require("./db.js");

app.use(express.json());
app.use(cors());

// DEV
app.get("/seed", seed);
app.get("/responses", getResponses);
app.post("/responses", createResponse);

// // COUNTRIES
// app.get("/countries", getCountries);

// CITIES
// app.post("/cities", createCity);
// app.get("/cities", getCities);
// app.delete("/cities/:id", deleteCity);

app.listen(process.env.SERVER_PORT, () =>
  console.log(`up on ${process.env.SERVER_PORT}`)
);
