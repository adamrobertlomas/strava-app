import React from "react";
import { Route } from "react-router";
import Authenticate from "./components/Authenticate";
import Header from "./components/Header";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/authenticate">
        <Authenticate />
      </Route>
      <Route path="/" exact={true}>
        <Profile />
      </Route>
    </div>
  );
}

export default App;
