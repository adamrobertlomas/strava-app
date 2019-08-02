import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

class Login extends React.Component {
  render() {
    return (
      <Router>
        <nav />
        <main>
          <Route exact path="/" render={props => <Home {...props} />} />
        </main>
        <footer />
      </Router>
    );
  }
}

export default Login;
