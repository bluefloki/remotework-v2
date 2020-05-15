import React, { createContext, useReducer } from "react";
import axios from "axios";
import AppReducer from "./AppReducer";

const initialState = {
  //gigs
  jobs: [],
  error: null,
  loading: true,
};

//Create Context
export const GlobalContext = createContext(initialState);

//Create Global Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions to get and post stuff
  async function getJobs() {
    try {
      const res = window.location.href.includes("jobs")
        ? await axios.get("/api/v1/jobs")
        : await axios.get("/api/v1/gigs");
      dispatch({
        type: "GET_JOBS",
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: "JOBS_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  function resetJobs() {
    dispatch({
      type: "RESET_JOBS",
    });
  }

  async function addJob(job) {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    try {
      const res = await axios.post("/api/v1/jobs", job, config);
      dispatch({
        type: "ADD_JOB",
        payload: job.data,
      });
    } catch (err) {
      dispatch({
        type: "JOB_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        jobs: state.jobs,
        loading: state.loading,
        error: state.error,
        getJobs,
        addJob,
        resetJobs,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
