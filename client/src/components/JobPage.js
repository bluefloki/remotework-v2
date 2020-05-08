import React from "react";
import { Navbar } from "./Navbar";
import { JobList } from "./JobList";

export const JobPage = () => {
  return (
    <div className="jobs-page">
      <Navbar />
      <h1 className="text-centered color-primary">Jobs</h1>
      <JobList />
    </div>
  );
};
