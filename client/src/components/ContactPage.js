import React from "react";
import { Navbar } from "./Navbar";

export const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container text-centered">
        <h1 className="text-centered color-primary">Contact Us</h1>
        <h3>
          For complaints, queries, and suggestions, contact us at{" "}
          <a
            href="mailto: remotework.pk@gmail.com"
            style={{ textDecoration: "none" }}
          >
            <span className="color-primary">remotework.pk@gmail.com</span>
          </a>
        </h3>
      </div>
    </div>
  );
};
