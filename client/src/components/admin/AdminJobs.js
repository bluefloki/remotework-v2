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
