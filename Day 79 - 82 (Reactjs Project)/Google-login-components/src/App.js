import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container p-4">
          <Route path="/" exact component={Login} />
          <Route path="/sign-up" exact component={Signup} />
          <Route path="/home" exact component={Signup} />
        </div>
      </Router>
    );
  }
}

export default App;
