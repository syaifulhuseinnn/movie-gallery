import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../pages/home";
import MovieSingle from "../pages/movie";
import "../styles/_base.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/movie/:id">
          <MovieSingle />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
