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
        className="card"
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
        <div>
          <p>
            <Moment format="DD MMM YYYY">{datePosted}</Moment>
          </p>
        </div>
        <div>
          <p>{employerName}</p>
          <p>{title}</p>
          <p>{location}</p>
        </div>
        <div>
          {tags.map((tag) => (
            <p key={tag._id}>{tag.title}</p>
          ))}
        </div>
      </div>
      {showDetails()}
    </div>
  );
};
