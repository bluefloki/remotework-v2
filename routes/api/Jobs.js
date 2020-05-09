const express = require("express");
const router = express.Router();
const Job = require("../../models/Job");

router.get("/", async (req, res) => {
  //Where typeOfWork is Job
  const allJobs = await Job.find().sort({ datePosted: -1 });
  try {
    res.status(200).json(allJobs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/:id", async (req, res) => {
  const job = await Job.findById(req.params.id);
  try {
    res.status(200).json(job);
  } catch (error) {
    res.status(404).json({ message: "Job not found" });
  }
});

router.post("/", (req, res) => {
  const newJob = new Job(req.body);
  console.log(newJob);
  try {
    res.status(201).json(newJob);
  } catch (error) {
    res.json({ message: "Error creating job" });
  }
});

module.exports = router;
