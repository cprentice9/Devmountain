const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get("/", logger, (req, res) => {
//   res.render("index", { text: "World" });
// });

app.use(express.static("public"));

const userRouter = require("./routes/users");

app.use("/users", userRouter);

app.listen(3000);
