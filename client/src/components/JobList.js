import React from "react";
import { Navbar } from "./Navbar";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { JobCard } from "./JobCard";

const JOBS_QUERY = gql`
  query JobsQuery {
    jobs {
      _id
      companyName
      category
      location
      applyAt
      datePosted
    }
  }
`;

export const JobList = () => {
  //function that fires gql
  const { loading, error, data } = useQuery(JOBS_QUERY);
  if (loading) {
    return (
      <>
        <Navbar />
        <h1 className="text-centered color-primary">Jobs</h1>
        <p>Loading...</p>
      </>
    );
  }
  if (error) {
    return (
      <>
        <Navbar />
        <h1 className="text-centered color-primary">Jobs</h1>
        <p>There is an error</p>
      </>
    );
  }
  console.log(data);
};
