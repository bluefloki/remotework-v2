import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { useAuth } from "../../context/Auth";

export const Login = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setAuthTokens } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { username, password };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post("/api/v1/admin/login", user, config);
    if (res.data) {
      setAuthTokens(res.data);
      setLoggedIn(true);
    }
  };

  //Function to redirect to admin main page
  const redirectAdmin = () => {
    if (isLoggedIn) {
      return <Redirect to="/" />;
    }
  };

  return (
    <div className="text-centered">
      <h1 className="color-primary">AdminPanel</h1>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="btn btn-primary"
            type="submit"
            style={{ fontSize: "1.2rem", cursor: "pointer" }}
          >
            Log In
          </button>
          {redirectAdmin()}
        </form>
      </div>
    </div>
  );
};
