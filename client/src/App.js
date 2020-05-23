import React from "react";
import "./App.css";
import { MainPage } from "./components/MainPage";
import { JobList } from "./components/JobList";
import { PostJob } from "./components/PostJob";
import { ContactPage } from "./components/ContactPage";
import { Admin } from "./components/admin/Admin.js";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import { AuthProvider } from "./context/Auth";
import PrivateRoute from "./components/admin/PrivateRoute";

function App() {
  return (
    <GlobalProvider>
      <AuthProvider>
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
          <PrivateRoute path="/admin" component={Admin} />
        </Router>
      </AuthProvider>
    </GlobalProvider>
  );
}

export default App;
