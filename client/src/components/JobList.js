import React, { useContext, useEffect } from "react";
import { Navbar } from "./Navbar";
import { JobCard } from "./JobCard";
import { GlobalContext } from "../context/GlobalState";

export const JobList = () => {
  const { jobs, getJobs } = useContext(GlobalContext);
  console.log(jobs);

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="job-list">
      <Navbar />
      <h1 className="text-centered color-primary">Jobs</h1>
      {jobs.map((job) => (
        <JobCard key={job._id} job={job} />
      ))}
    </div>
  );
};
