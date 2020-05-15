import React, { useState } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { JobDetails } from "./JobDetails";

export const JobCard = ({
  job: {
    _id,
    employerName,
    title,
    category,
    location,
    applyAt,
    datePosted,
    tags,
    logoPath,
    description,
  },
  defLogo,
}) => {
  const [details, toggleDetails] = useState(false);

  //Function to toggle details
  const showDetails = () => {
    if (details) {
      return (
        <div className="job-details">
          <div dangerouslySetInnerHTML={{ __html: description }}></div>
          <div className="text-centered">
            <a href={applyAt} className="btn btn-danger">
              Apply Now
            </a>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="container">
      <div
        className="card card-grid"
        onClick={() => toggleDetails(!details)}
        style={
          details
            ? {
                marginBottom: 0,
                borderRadius: "5px 5px 0 0",
                borderBottom: "1px solid #888",
              }
            : {}
        }
      >
        <div style={{ textAlign: "center" }}>
          <p className="defLogo" style={{ fontSize: 30, margin: 0 }}>
            {defLogo}
          </p>
          <p>
            <Moment format="DD MMM YYYY">{datePosted}</Moment>
          </p>
        </div>
        <div style={{ fontSize: "1.1em" }}>
          <p>{employerName}</p>
          <p style={{ fontWeight: "550" }}>{title}</p>
          <p>{location}</p>
        </div>
        <div>
          {tags.map((tag) => (
            <p key={tag._id} className="tag">
              {tag.title}
            </p>
          ))}
        </div>
      </div>
      {showDetails()}
    </div>
  );
};

const styles = {};
