import React, { useState } from "react";
import Moment from "react-moment";

export const JobCard = ({
  job: {
    employerName,
    title,
    category,
    location,
    applyAt,
    createdAt,
    tags,
    description,
    logoPath,
  },
  defLogo,
}) => {
  const [details, toggleDetails] = useState(false);

  //Function for showing apply
  const applyLink = () => {
    if (applyAt.includes("@"))
      return (
        <h3 className="text-centered">
          Apply at:{" "}
          <a
            className="color-danger"
            href={`mailto: ${applyAt}`}
            style={{ textDecoration: "none" }}
          >
            {applyAt}
          </a>
        </h3>
      );
    return (
      <div className="text-centered">
        <a href={applyAt} className="btn btn-danger" target="_blank">
          Apply Now
        </a>
      </div>
    );
  };

  //Function to toggle details
  const showDetails = () => {
    if (details) {
      return (
        <div className="job-details" style={{ transition: "all 0.7s ease" }}>
          <div dangerouslySetInnerHTML={{ __html: description }}></div>
          {applyLink()}
        </div>
      );
    }
  };

  //Function to show logo
  const showLogo = () => {
    if (logoPath != null) {
      return (
        <img
          src={require(`../assets/uploads/${logoPath}`)}
          alt=""
          className="card-img"
        />
      );
    }
    return (
      <p className="defLogo" style={{ fontSize: 30, margin: 0 }}>
        {defLogo}
      </p>
    );
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
          {showLogo()}
          <p>
            <Moment format="DD MMM YYYY">{createdAt}</Moment>
          </p>
        </div>
        <div style={{ fontSize: "1.1em" }}>
          <p>{employerName}</p>
          <p style={{ fontWeight: "550" }}>{title}</p>
          <p>{location}</p>
        </div>
        <div>{tags}</div>
      </div>
      {showDetails()}
    </div>
  );
};

const styles = {};
