const express = require("express");
const router = express.Router();
const Job = require("../../models/Job");
const fileUpload = require("express-fileupload");
router.use(fileUpload());
const { v4: uuidv4 } = require("uuid");

router.get("/", async (req, res) => {
  const { search, page } = req.query;
  const limit = 30;
  const allJobs = await Job.find({ typeOfWork: "Job" })
    .skip((page - 1) * limit)
    .limit(limit)
    .sort({ datePosted: -1 });
  try {
    res.status(200).json(allJobs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

// router.get("/:id", async (req, res) => {
//   const job = await Job.findById(req.params.id);
//   try {
//     res.status(200).json(job);
//   } catch (error) {
//     res.status(404).json({ message: "Job not found" });
//   }
// });

router.post("/", async (req, res) => {
  try {
    let newJob = new Job(JSON.parse(req.body.data));
    await newJob.save();
    // if (req.files.logo === null) {
    //   console.log(newJob);
    // } else {
    //   let logo = req.files.logo;
    //   if (
    //     (logo.mimetype == ("image/jpeg" || "image/png")) &
    //     (logo.size < 1000000)
    //   ) {
    //     logo.mimetype == "image/jpeg"
    //       ? (logo.name = `${uuidv4()}.jpg`)
    //       : `${uuidv4()}.png`;
    //     logo.mv(`assets/uploads/${logo.name}`, (err) => {
    //       if (err) {
    //         res.status(500).json({ message: "Cannot upload image" });
    //       }
    //     });
    //     newJob.logoPath = `${__dirname}/assets/uploads/${logo.name}`;
    //   }
    // }
    res.status(201).json(newJob);
  } catch (error) {
    res.json({ message: "Error creating job" });
  }
});

module.exports = router;
