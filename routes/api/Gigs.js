const express = require("express");
const router = express.Router();
const Gig = require("../../models").Job;
const Op = require("sequelize").Op;

router.get("/", async (req, res) => {
  const { search, page } = req.query;
  const limit = 30;
  const getSearchOptions = () => {
    let options = {
      typeOfWork: "Gig",
    };
    if (search != "")
      options = {
        typeOfWork: "Gig",
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
    const allGigs = await Gig.findAll({
      where: getSearchOptions(),
      offset: (page - 1) * limit,
      limit,
      order: [["createdAt", "DESC"]],
    });
    res.status(200).json(allGigs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
