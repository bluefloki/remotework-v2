import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

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
  },
}) => {
  return (
    <div className="container">
      <Link
        to={`/jobs/${_id}`}
        className="card"
        style={{ textDecoration: "none" }}
        target="_blank"
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
      </Link>
    </div>
  );
};
