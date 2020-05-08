import React, { useState, useReducer } from "react";
import { Navbar } from "./Navbar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const PostJob = () => {
  //Set editor HTML
  const [editorHtml, setEditorHtml] = useState("");
  function handleHtml(html) {
    setEditorHtml(html);
  }

  //Get Logo
  const [logo, setLogo] = useState(null);
  const handleFile = (e) => {
    console.log(e.target.files[0]);
    setLogo(e.target.files);
    console.log(logo);
  };

  //Get the values of the inputs
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      employerName: "",
      typeOfWork: "Job",
      jobTitle: "",
      category: "Software",
      location: "",
      tags: [],
    }
  );

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserInput({ [name]: value });
  };

  //Create the object for POST
  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      employerName,
      typeOfWork,
      jobTitle,
      category,
      location,
      tags,
    } = userInput;
    const newJob = {
      employerName,
      //Logo
      typeOfWork,
      jobTitle,
      category,
      location,
      tags,
      description: editorHtml,
    };
    console.log(newJob);
    //Add job with context here
  };

  return (
    <div style={{ maxWidth: "100vw", marginBottom: 100 }}>
      <Navbar />
      <div className="container">
        <form className="text-centered" onSubmit={handleSubmit}>
          <div>
            <h2 className="text-centered">Employer 🏢/🤵</h2>
            <div className="field">
              <label htmlFor="employerName">
                Employer Name
                <span className="color-danger"> * </span>
              </label>
              <input
                type="text"
                name="employerName"
                required
                value={userInput.employerName}
                onChange={handleChange}
              />
            </div>
            <div className="field" style={{ paddingBottom: 20 }}>
              <label htmlFor="employerLogo">Logo(Max 1 MB)</label>
              <input type="file" name="employerLogo" onChange={handleFile} />
            </div>
          </div>
          <hr />
          <div>
            <h2 className="text-centered">Job/Gig 💻</h2>
            <div className="field">
              <label htmlFor="typeOfWork">
                Type of Work <span className="color-danger">*</span>
              </label>
              <select
                name="typeOfWork"
                onChange={handleChange}
                value={userInput.typeOfWork}
              >
                <option value="Job">Job</option>
                <option value="Gig">Gig</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="jobTitle">
                Title <span className="color-danger">*</span>
              </label>
              <input type="text" name="jobTitle" onChange={handleChange} />
            </div>
            <div className="field">
              <label htmlFor="category">
                Category <span className="color-danger">*</span>
              </label>
              <select
                name="category"
                onChange={handleChange}
                value={userInput.category}
              >
                <option value="Software">Software</option>
                <option value="Marketing">Marketing</option>
                <option value="Virtual Assistance">Virtual Assistance</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="location">Location</label>
              <input type="text" name="location" onChange={handleChange} />
            </div>
            <div className="field">
              <label htmlFor="tags">Tags (comma separated & upto 4)</label>
              <input type="text" name="tags" onChange={handleChange} />
            </div>
            <div className="field">
              <label htmlFor="applyAt">
                Apply At (Email or URL) <span className="color-danger">*</span>
              </label>
              <input
                type="text"
                name="applyAt"
                required
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label htmlFor="description">
                Description <span className="color-danger">*</span>
              </label>
              <input type="text" name="description" hidden />
            </div>
            <div style={{ height: 350, marginBottom: 40, marginTop: 20 }}>
              <ReactQuill
                style={{
                  width: "60%",
                  margin: "auto",
                  height: "95%",
                }}
                theme="snow"
                onChange={handleHtml}
                value={editorHtml}
              />
            </div>
            <button
              className="btn btn-primary"
              type="submit"
              style={{ fontSize: "1.2rem" }}
            >
              Post 👉
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const styles = {
  subHeading: {
    textAlign: "center",
  },
};
