import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => (
  <Router>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} exact />
    </Switch>
  </Router>
);

export default App;
