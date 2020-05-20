import React, { useState, useReducer, useEffect, useContext } from "react";
import { Navbar } from "./Navbar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { GlobalContext } from "../context/GlobalState";
import sanitizeHtml from "sanitize-html";
import { Redirect } from "react-router-dom";

export const PostJob = () => {
  //Use context to send the data
  const { addJob, resetJobs } = useContext(GlobalContext);

  //set Redirect State
  const [redirect, setRedirect] = useState(false);
  const renderRedirect = () => {
    if (redirect)
      return <Redirect to={`/${userInput.typeOfWork.toLowerCase()}s`} />;
  };

  //Set editor HTML
  const [editorHtml, setEditorHtml] = useState("");
  function handleHtml(html) {
    setEditorHtml(html);
  }

  //Sanitize HTML
  const description = sanitizeHtml(editorHtml, {
    allowedTags: ["h1", "h2", "h3", "p", "strong", "em", "u", "ol", "ul", "li"],
    allowedAttributes: [],
  });

  //Get the values of the inputs
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      employerName: "",
      typeOfWork: "Job",
      title: "",
      category: "Software",
      location: "",
      tags: "",
    }
  );

  //Handle Change
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserInput({ [name]: value });
  };

  let logoPathName;
  //Handle File Upload
  const [logo, setLogo] = useState("");
  const handleFile = (e) => {
    setLogo(e.target.files[0]);
  };

  //Create the object for POST
  const handleSubmit = (e) => {
    e.preventDefault();
    // let { tags } = userInput;
    // tags = tags.split(",", 4);
    // tags = tags.map((tag) => {
    //   tag = tag.trim();
    //   return { title: tag };
    // });
    const newJob = {
      ...userInput,
      // tags,
      description,
    };
    let formData = new FormData();
    formData.append("data", JSON.stringify(newJob));
    formData.append("logo", logo);
    addJob(formData);
    alert(`${userInput.typeOfWork} Posted`);
    setRedirect(true);
  };

  return (
    <div style={{ maxWidth: "100vw", marginBottom: 100 }}>
      <Navbar />
      <div className="container">
        <form className="text-centered" onSubmit={handleSubmit} id="main-form">
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
              <label htmlFor="logo">Logo(Max 1 MB)</label>
              <input type="file" name="logo" onChange={handleFile} />
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
              <label htmlFor="title">
                Title <span className="color-danger">*</span>
              </label>
              <input type="text" name="title" onChange={handleChange} />
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
              style={{ fontSize: "1.2rem", cursor: "pointer" }}
            >
              Post 👉
            </button>
          </div>
        </form>
      </div>
      {renderRedirect()}
    </div>
  );
};

const styles = {
  subHeading: {
    textAlign: "center",
  },
};
