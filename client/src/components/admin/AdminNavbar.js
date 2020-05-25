import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/Auth";

export const AdminNavbar = () => {
  const { setAuthTokens } = useAuth();

  const logOut = () => {
    setAuthTokens("");
    localStorage.removeItem("tokens");
  };
  return (
    <nav className="navbar">
      <div className="navbar-brand">AdminPanel</div>
      <div className="navbar-menu">
        <Link to="/admin/jobs" className="navbar-link navbar-item">
          Jobs
        </Link>
        <Link to="/admin/gigs" className="navbar-link navbar-item">
          Gigs
        </Link>
        <Link to="/admin/postjob" className="btn btn-primary navbar-item">
          Post Job/Gig
        </Link>
        <div className="navbar-item">
          <button className="btn btn-danger" onClick={logOut}>
            Log Out
          </button>
        </div>
      </div>
    </nav>
  );
};
