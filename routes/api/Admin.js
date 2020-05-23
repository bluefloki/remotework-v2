const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { JSON_SECRET_KEY } = require("./middleware/config");

let admin = {
  username: "_eflatminor",
  password: "c2b8b26974fe037c7abbe7fb59f4468c18babdd1f7b07a858931efb2c8ee6289",
};

router.get("/", (req, res) => {
  res.send("admin");
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username == admin.username && password == admin.password) {
    const accessToken = jwt.sign({ username: admin.username }, JSON_SECRET_KEY);
    res.json({ accessToken });
  } else {
    res.sendStatus(401);
  }
});

//Route to delete a Gig or Job

module.exports = router;
