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
            href="mailto: contact@workremote.com"
            style={{ textDecoration: "none" }}
          >
            <span className="color-primary">contact@workremote.com</span>
          </a>
        </h3>
      </div>
    </div>
  );
};
