const mongoose = require("mongoose");

const JobSchema = mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  companyLogoName: String,
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
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
  datePostedString: {
    type: String,
    required: true,
  },
});

JobSchema.index({ title: "text" });

module.exports = mongoose.model("Job", JobSchema);
