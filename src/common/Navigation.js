import React from "react";
import "./Navigation.scss";
import { Link } from "react-router-dom";
import Button from "./Button";

function Navigation(props) {
  function authenticate() {
    window.location.replace(
      `http://www.strava.com/oauth/authorize?client_id=${process.env.REACT_APP_STRAVA_CLIENT_ID}&response_type=code&redirect_uri=http://localhost:3000/authenticate&approval_prompt=force&scope=read,activity:read`
    );
  }

  return (
    <div className="navigation">
      <div className="navigation-top">
        <p>Strava API</p>
        <Button onClick={authenticate} text="Authenticate" />
      </div>
      <ul className="navigation-menu">
        <li>
          <Link to="/">> Home</Link>
        </li>
        <li>
          <Link to="/profile">> Profile</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
