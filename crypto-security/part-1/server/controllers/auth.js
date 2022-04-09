const bcrypt = require("bcryptjs");
const users = [];

module.exports = {
  login: (req, res) => {
    console.log("Logging In User");
    console.log(req.body);
    const { username, password } = req.body;
    let userFound = false;
    for (let i = 0; i < users.length; i++) {
      console.log(users[i]);
      if (
        users[i].username === username &&
        bcrypt.compareSync(password, users[i].password)
      ) {
        userFound = true;
        const user = { ...users[i], password: null };
        res.status(200).send(user);
      }
    }
    if (userFound === false) res.status(400).send("User not found.");
  },
  register: (req, res) => {
    console.log("Registering User");
    console.log(req.body);
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    users.push({ ...req.body, password: hash });
    res.status(200).send(req.body);
  },
};
