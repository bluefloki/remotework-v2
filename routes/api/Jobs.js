const express = require("express");
const router = express.Router();
const Jobs = require("../../models/Job");

router.get("/", async (req, res) => {
  const allJobs = await Jobs.find().sort({ datePosted: -1 });
  try {
    res.status(200).json(allJobs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/:id", async (req, res) => {
  const job = await Jobs.findById(req.params.id);
  try {
    res.status(200).json(job);
  } catch (error) {
    res.status(404).json({ message: "Job not found" });
  }
});

module.exports = router;
