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
          Welcome to Pakistan's only site for Remote Jobs 🔥
        </h1>
        <div>
          <button className="btn btn-primary" style={styles.button}>
            <Link to="/jobs" className="link">
              Browse Jobs
            </Link>
          </button>
          <button className="btn btn-primary" style={styles.button}>
            <Link to="/gigs" className="link">
              Browse Gigs
            </Link>
          </button>
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
