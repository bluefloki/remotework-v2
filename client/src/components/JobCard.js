import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const JobCard = ({
  job: { _id, companyName, title, category, location, applyAt, datePosted },
}) => {
  return (
    <div className="container" style={{ margin: "20px 0" }}>
      <Link
        to={`/jobs/${_id}`}
        className="card"
        style={{ textDecoration: "none" }}
      >
        <div>
          <p>LOGO</p>
          <p>{datePosted}</p>
        </div>
        <div>
          <p>{title}</p>
          <p>{companyName}</p>
          <p>{location}</p>
        </div>
        <div>
          <p>Tags</p>
        </div>
      </Link>
    </div>
  );
};
