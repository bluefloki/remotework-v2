const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { JSON_SECRET_KEY } = require("./middleware/config");
const Job = require("../../models").Job;
const path = require("path");
const fs = require("fs");

let admin = {
  username: "_eflatminor",
  password: "_Spaceisawesome123",
};

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username == admin.username && password == admin.password) {
    const accessToken = jwt.sign({ username: admin.username }, JSON_SECRET_KEY);
    res.json({ accessToken });
  } else {
    res.sendStatus(401);
  }
});

//DELETE JOBS/GIGS
router.delete("/jobs/:id", authenticateToken, async (req, res) => {
  try {
    const job = await Job.findOne({ where: { id: req.params.id } });
    const delPath = path.resolve(
      __dirname,
      "../../",
      "client/src/assets/uploads",
      job.logoPath
    );
    fs.unlink(delPath, (err) => console.log(err));
    await Job.destroy({ where: { id: req.params.id } });
    console.log("Job/Gig deleted");
  } catch (error) {
    console.log(error);
  }
});

//CHECK AUTHENTICATED
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // The code before && means if it exists
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, JSON_SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

module.exports = router;
