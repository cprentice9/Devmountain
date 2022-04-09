const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = [
    "Gee, you're a smart cookie!",
    "Cool shirt!",
    "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
});

app.get("/api/fortune", (req, res) => {
  console.log("Hello");
  const fortune = [
    "A beautiful, smart, and loving person will be coming into your life.",
    "A dubious friend may be an enemy in camouflage.",
    "A faithful friend is a strong defense.",
    "A feather in the hand is better than a bird in the air.",
    "A fresh start will put you on your way.",
    "A friend asks only for your time not your money.",
    "A friend is a present you give yourself.",
    "A gambler not only will lose what he has, but also will lose what he doesn't have.",
    "A golden egg of opportunity falls into your lap this month.",
    "A good friendship is often more important than a passionate romance.",
  ];

  let randomIndex = Math.floor(Math.random() * fortune.length);
  let randomFortune = fortune[randomIndex];

  res.status(200).send(randomFortune);
});

const PORT = 4000;
const offers = [
  "greeting card",
  "wagon",
  "computer",
  "table",
  "chair",
  "milk",
  "sailboat",
  "conditioner",
  "rusty nail",
  "desk",
];

// const { getHouses, deleteHouse, createHouse, updateHouse } = require("");

app.use(cors());
app.use(express.json());

app.get("/api/offers", (req, res) => res.status(200).send(offers));
app.delete("/api/offers/:id", (req, res) => {
  const id = req.params.id;
  offers.splice(id, 1);
  res.sendStatus(204);
});
app.post("/api/offers", (req, res) => {
  offers.push("World");
  res.sendStatus(201);
});
app.put("/api/offers/:id", () => {});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
