import React from "react";
import { Route } from "react-router";
import Authenticate from "./components/Authenticate";
import Header from "./components/Header";
// import Profile from "./components/Profile";
import Activities from "./components/Activities";

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/authenticate">
        <Authenticate />
      </Route>
      <Route path="/" exact={true}>
        {/* <Profile /> */}
        <Activities />
      </Route>
    </div>
  );
}

export default App;
