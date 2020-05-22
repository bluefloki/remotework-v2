import React from "react";
import "./App.css";
import { MainPage } from "./components/MainPage";
import { JobList } from "./components/JobList";
import { PostJob } from "./components/PostJob";
import { ContactPage } from "./components/ContactPage";
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
          render={(props) => <JobList work="Jobs" defLogo="🏢" {...props} />}
        />
        <Route
          exact
          path="/gigs"
          render={(props) => <JobList work="Gigs" defLogo="🤵" {...props} />}
        />
        <Route exact path="/postjob" component={PostJob} />
        <Route exact path="/contact" component={ContactPage} />
      </Router>
    </GlobalProvider>
  );
}

export default App;
