import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Button from "./Button";

function Header(props) {
  function authenticate() {
    window.location.replace(
      `http://www.strava.com/oauth/authorize?client_id=${process.env.REACT_APP_STRAVA_CLIENT_ID}&response_type=code&redirect_uri=http://localhost:3000/authenticate&approval_prompt=force&scope=read,activity:read`
    );
  }

  return (
    <header className="app-header">
      <div className="app-header-top">
        <span>Header</span>
        <Button onClick={authenticate} text="Authenticate" />
      </div>
      <ul className="app-header-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
