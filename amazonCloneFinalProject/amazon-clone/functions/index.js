const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Ljb6gGN8c40SfHzJo0cVo8msXoGG0lldOhw7giMVisWL0bsmbGOcsQ1hsmIbSLcvWqbsaWEmYxdF0VVOd9a2Jgc00Fd9rzSoB"
);
