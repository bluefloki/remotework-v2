const express = require("express");
const router = express.Router();
const Gig = require("../../models").Job;

router.get("/", async (req, res) => {
  const { search, page } = req.query;
  const limit = 10;
  try {
    const allGigs = await Gig.findAll({
      where: {
        typeOfWork: "Gig",
      },
      offset: (page - 1) * limit,
      limit,
    });
    res.status(200).json(allGigs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
