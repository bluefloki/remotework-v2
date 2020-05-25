import React, { useContext, useState, useEffect } from "react";
import { AdminNavbar } from "./AdminNavbar";
import { GlobalContext } from "../../context/GlobalState";
import InfiniteScroll from "react-infinite-scroll-component";
import { JobTable } from "./JobTable";

export const AdminJobs = ({ work }) => {
  let {
    jobs,
    getJobs,
    resetJobs,
    incrementPage,
    hasMore,
    setSearchValue,
    getAdminJobs,
  } = useContext(GlobalContext);

  const [search, setSearch] = useState("");
  const [triggerSearch, setTriggerSearch] = useState("");

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => resetJobs();
  }, [triggerSearch]);

  return (
    <div>
      <AdminNavbar />
      <div className="container text-centered">
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
              setSearchValue(search.trim());
              setTriggerSearch(search);
            }}
          >
            Go
          </button>
        </div>
        <table>
          <tr>
            <th>ID</th>
            <th>Employer</th>
            <th>Title</th>
            <th>Date</th>
            <th>X</th>
          </tr>
          {jobs.map((job) => (
            <JobTable job={job} key={job.id} />
          ))}
        </table>
      </div>
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
