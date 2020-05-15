const express = require("express");
const router = express.Router();
const Gig = require("../../models/Job");

router.get("/", async (req, res) => {
  //Where typeOfWork is Job
  const allGigs = await Gig.find({ typeOfWork: "Gig" });
  try {
    res.status(200).json(allGigs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
