import React, { useContext, useEffect } from "react";
import { Navbar } from "./Navbar";
import { JobCard } from "./JobCard";
import { GlobalContext } from "../context/GlobalState";

export const JobPage = (props) => {
  const { job, getSingleJob } = useContext(GlobalContext);
  const { id } = props.match.params;

  useEffect(() => {
    getSingleJob(id);
  }, []);

  console.log(job);
  return (
    <div>
      <Navbar />
    </div>
  );
};
