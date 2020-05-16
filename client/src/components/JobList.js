import React, { useContext, useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { JobCard } from "./JobCard";
import { GlobalContext } from "../context/GlobalState";
import InfiniteScroll from "react-infinite-scroll-component";

export const JobList = ({ work, defLogo }) => {
  let { jobs, getJobs, resetJobs, incrementPage, hasMore } = useContext(
    GlobalContext
  );

  console.log(hasMore);

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => resetJobs();
  }, []);

  return (
    <div className="job-list">
      <Navbar />
      <h1 className="text-centered color-primary">{work}</h1>
      <InfiniteScroll
        dataLength={jobs.length}
        next={incrementPage}
        hasMore={hasMore}
        loader={
          <h4 className="text-centered" style={{ marginBottom: 40 }}>
            Loading...
          </h4>
        }
        endMessage={<p style={{ marginBottom: 50 }}></p>}
      >
        {jobs.map((job) => (
          <JobCard key={job._id} job={job} defLogo={defLogo} />
        ))}
      </InfiniteScroll>
    </div>
  );
};
