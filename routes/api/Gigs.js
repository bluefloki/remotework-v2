const express = require("express");
const router = express.Router();
const Gig = require("../../models/Job");

router.get("/", async (req, res) => {
  const { search, page } = req.query;
  const limit = 30;
  const allGigs = await Gig.find({ typeOfWork: "Gig" })
    .skip((page - 1) * limit)
    .limit(limit)
    .sort({ datePosted: -1 });
  try {
    res.status(200).json(allGigs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
