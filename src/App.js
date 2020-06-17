import React from "react";
import { Route } from "react-router";
import Authenticate from "./common/Authenticate";
import Navigation from "./common/Navigation";
import Profile from "./profile/Profile";
import Activities from "./activities/Activities";
import Activity from "./activity/Activity";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <div className="left-panel">
        <Navigation />
      </div>
      <div className="right-panel">
        <Route path="/authenticate">
          <Authenticate />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/activity/:id">
          <Activity />
        </Route>
        <Route path="/" exact={true}>
          <Activities />
        </Route>
      </div>
    </div>
  );
}

export default App;
