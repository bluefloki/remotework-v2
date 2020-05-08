import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { MainPage } from "./components/MainPage";
import { JobPage } from "./components/JobPage";
import { GigList } from "./components/GigList";
import { PostJob } from "./components/PostJob";
import { Route, BrowserRouter as Router } from "react-router-dom";

const client = new ApolloClient({
  uri: "http://localhost:5050/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/jobs" component={JobPage} />
        <Route exact path="/gigs" component={GigList} />
        <Route exact path="/postjob" component={PostJob} />
      </Router>
    </ApolloProvider>
  );
}

export default App;
