import React, { useState } from "react";
import Moment from "react-moment";

export const JobTable = ({ job: { id, employerName, title, createdAt } }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{employerName}</td>
      <td>{title}</td>
      <td>
        <p>
          <Moment format="DD MMM YYYY">{createdAt}</Moment>
        </p>
      </td>
      <td>
        <button className="btn btn-danger">X</button>
      </td>
    </tr>
  );
};
