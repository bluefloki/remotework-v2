const express = require("express");
const router = express.Router();
const Job = require("../../models").Job;
const fileUpload = require("express-fileupload");
router.use(fileUpload());
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const Op = require("sequelize").Op;
const Jimp = require("jimp");
const fs = require("fs");

//GET ALL THE JOBS
router.get("/", async (req, res) => {
  const { search, page } = req.query;
  const limit = 10;
  console.log(req.query);
  const getSearchOptions = () => {
    let options = {
      typeOfWork: "Job",
    };
    if (search != "")
      options = {
        typeOfWork: "Job",
        [Op.or]: [
          { title: { [Op.like]: [`%${search}%`] } },
          { employerName: { [Op.like]: [`%${search}%`] } },
          { tags: { [Op.like]: [`%${search}%`] } },
          { location: { [Op.like]: [`%${search}%`] } },
        ],
      };
    return options;
  };
  try {
    const allJobs = await Job.findAll({
      where: getSearchOptions(),
      offset: (page - 1) * limit,
      limit,
      order: [["createdAt", "DESC"]],
    });
    res.status(200).json(allJobs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

//SAVE JOB/GIG
router.post("/", async (req, res) => {
  try {
    let newJob = Job.build(JSON.parse(req.body.data));
    //Logo Upload
    if (req.files != null) {
      let logo = req.files.logo;
      if (logo.size < 10000000 && logo.mimetype.startsWith("image")) {
        if (logo.mimetype.includes("jpeg")) {
          logo.name = `${uuidv4()}.jpg`;
        } else if (logo.mimetype.includes("png")) {
          logo.name = `${uuidv4()}.png`;
        }
        const tempPath = path.resolve(__dirname, "temp", logo.name);
        logo.mv(tempPath, (err) => {
          if (err) console.log(err);
          console.log("temp file uploaded");
        });
        //Compress the image and store in the real path
        Jimp.read(tempPath)
          .then((img) => {
            return img
              .resize(150, Jimp.AUTO)
              .quality(80)
              .write(
                path.resolve(
                  __dirname,
                  "../../",
                  "client/src/assets/uploads",
                  logo.name
                )
              );
          })
          .catch((err) => console.log(err));
        console.log("image compressed");
        fs.unlink(tempPath, (err) => console.log(err));
        newJob.logoPath = logo.name;
      }
    }
    await newJob.save();
    console.log("The job has been saved");
    res.status(201).json(newJob);
  } catch (error) {
    res.json({ message: "Error creating job" });
  }
});

module.exports = router;
