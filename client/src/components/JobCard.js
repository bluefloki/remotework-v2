import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

export const JobCard = ({
  job: {
    _id,
    companyName,
    title,
    category,
    location,
    applyAt,
    datePosted,
    tags,
  },
}) => {
  return (
    <div className="container" style={{ margin: "20px 0" }}>
      <Link
        to={`/jobs/${_id}`}
        className="card"
        style={{ textDecoration: "none" }}
        target="_blank"
      >
        <div>
          <p>LOGO</p>
          <p>
            <Moment format="DD MMM YYYY">{datePosted}</Moment>
          </p>
        </div>
        <div>
          <p>{title}</p>
          <p>{companyName}</p>
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
