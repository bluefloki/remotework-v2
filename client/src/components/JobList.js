import React, { useContext, useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { JobCard } from "./JobCard";
import { GlobalContext } from "../context/GlobalState";
import InfiniteScroll from "react-infinite-scroll-component";

export const JobList = ({ work, defLogo }) => {
  let {
    jobs,
    getJobs,
    resetJobs,
    incrementPage,
    hasMore,
    searchValue,
    setSearchValue,
  } = useContext(GlobalContext);

  const [search, setSearch] = useState("");

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => resetJobs();
  }, [searchValue]);

  return (
    <div className="job-list">
      <Navbar />
      <h1 className="text-centered color-primary">{work}</h1>
      <div className="text-centered">
        <input
          type="text"
          name="search"
          placeholder={`Search ${work}...`}
          style={styles.searchBar}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="btn btn-primary"
          style={styles.button}
          onClick={() => {
            setSearchValue(search);
            console.log(searchValue);
          }}
        >
          Go
        </button>
      </div>

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

const styles = {
  searchBar: {
    width: "25%",
    padding: "7px",
    margin: "0 0 10px 0",
  },
  button: {
    padding: "7px 15px",
    borderRadius: 0,
    margin: 0,
  },
};
