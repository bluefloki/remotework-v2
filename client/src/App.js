import React from "react";
import "./App.css";
import { MainPage } from "./components/MainPage";
import { JobList } from "./components/JobList";
import { GigList } from "./components/GigList";
import { PostJob } from "./components/PostJob";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Route exact path="/" component={MainPage} />
        <Route
          exact
          path="/jobs"
          render={(props) => <JobList work="Jobs" {...props} />}
        />
        <Route
          exact
          path="/gigs"
          render={(props) => <JobList work="Gigs" {...props} />}
        />
        <Route exact path="/postjob" component={PostJob} />
      </Router>
    </GlobalProvider>
  );
}

export default App;
