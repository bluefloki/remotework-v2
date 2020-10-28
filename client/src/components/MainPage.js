import React from "react";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";
const imgUrl = require("../assets/hero.jpg");

export const MainPage = () => {
  return (
    <div style={styles.main}>
      <Navbar />
      <div style={styles.headings}>
        <h1 style={{ fontSize: "2.2em" }}>
          Welcome to an unpublished site for Remote Jobs 🔥
        </h1>
        <div>
          <Link to="/jobs" className="btn btn-primary" style={styles.button}>
            Browse Jobs
          </Link>
          <Link to="/gigs" className="btn btn-primary" style={styles.button}>
            Browse Gigs
          </Link>
        </div>
      </div>
    </div>
  );
};

let styles = {
  main: {
    height: "100vh",
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${imgUrl}) no-repeat center center`,
    backgroundSize: "cover",
  },
  headings: {
    textAlign: "center",
    position: "relative",
    top: "22vh",
  },
  button: {
    margin: "0 10px",
  },
};
