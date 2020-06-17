import React from "react";
import Helpers from "../utils/Helpers";
import axios from "axios";

class Authenticate extends React.Component {
  componentDidMount() {
    const tokenCode = Helpers.GetParameterByName("code");

    axios
      .post(
        `https://www.strava.com/oauth/token?client_id=${process.env.REACT_APP_STRAVA_CLIENT_ID}&client_secret=${process.env.REACT_APP_STRAVA_SECRET}&code=${tokenCode}&grant_type=authorization_code`
      )
      .then(function (response) {
        document.cookie = `strava_access_token_expires_at=${response.data.expires_at}`;
        document.cookie = `strava_access_token=${response.data.access_token}`;
        document.cookie = `strava_refresh_token=${response.data.refresh_token}`;

        window.location.href = `/`;
      })
      .catch(function (error) {
        window.location.href = `/?authentication_error=true`;
      });
  }

  render() {
    return (
      <div>
        <p>Authenticating...</p>
      </div>
    );
  }
}

export default Authenticate;
