const mongoose = require("mongoose");

const JobSchema = mongoose.Schema({
  employerName: {
    type: String,
    required: true,
  },
  logoPath: String,
  title: {
    type: String,
    required: true,
  },
  typeOfWork: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  location: String,
  description: {
    type: String,
    required: true,
  },
  applyAt: {
    type: String,
    required: true,
  },
  tags: [{ title: String }],
  datePosted: {
    type: Date,
    default: Date.now,
  },
  // datePostedString: {
  //   type: String,
  //   required: true,
  // },
});

module.exports = mongoose.model("Job", JobSchema);
