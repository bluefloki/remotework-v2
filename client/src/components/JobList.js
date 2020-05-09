import React, { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import axios from "axios";
import { JobCard } from "./JobCard";

export const JobList = () => {
  const [data, setData] = useState([]);

  //Used instead of component did mount
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/api/v1/jobs");
      setData(res.data);
    };
    fetchData();
  }, []);
  return (
    <div className="job-list">
      <Navbar />
      <h1 className="text-centered color-primary">Jobs</h1>
      {data.map((job) => (
        <JobCard key={job._id} job={job} />
      ))}
    </div>
  );
};
