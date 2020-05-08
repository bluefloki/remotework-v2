import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">RemoteWork</div>
      <div className="navbar-menu">
        <Link to="/" className="navbar-link navbar-item">
          Home
        </Link>
        <Link to="/jobs" className="navbar-link navbar-item">
          Jobs
        </Link>
        <Link to="/gigs" className="navbar-link navbar-item">
          Gigs
        </Link>
        <button className="btn btn-primary navbar-item">
          <Link to="/postjob" className="link">
            Post Job/Gig
          </Link>
        </button>
      </div>
    </nav>
  );
};
