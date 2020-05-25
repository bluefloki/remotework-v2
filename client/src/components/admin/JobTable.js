import React, { useState, useContext } from "react";
import Moment from "react-moment";
import { GlobalContext } from "../../context/GlobalState";

export const JobTable = ({ job: { id, employerName, title, createdAt } }) => {
  const { deleteJob } = useContext(GlobalContext);
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
        <button className="btn btn-danger" onClick={() => deleteJob(id)}>
          X
        </button>
      </td>
    </tr>
  );
};
