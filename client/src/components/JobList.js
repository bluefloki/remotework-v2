import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { JobCard } from "./JobCard";

const JOBS_QUERY = gql`
  query JobsQuery {
    jobs {
      _id
      title
      companyName
      category
      location
      applyAt
      datePosted
    }
  }
`;

export const JobList = () => {
  const { loading, error, data } = useQuery(JOBS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <>
      {data.jobs.map((job) => (
        <JobCard key={job._id} job={job} />
      ))}
    </>
  );
};
