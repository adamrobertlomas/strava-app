import axios from "axios";
import Helpers from "../utils/Helpers";

const Api = {
  Get: async function () {
    checkToken();
    const accessToken = Helpers.GetCookie("strava_access_token");

    const config = {
      headers: { Authorization: `Bearer ${accessToken}` },
    };

    await axios
      .get("https://www.strava.com/api/v3/athlete", config)
      .then(function (response) {
        const apiObject = {
          success: true,
          json: response,
        };

        console.log(apiObject);
        return apiObject;
      })
      .catch(function (error) {
        const apiObject = {
          success: false,
          json: error,
        };

        console.log(apiObject);
        return apiObject;
      });
  },
};

function checkToken() {
  const expiresAt = Helpers.GetCookie("strava_access_token_expires_at");
  const currentDateTime = Math.floor(Date.now() / 1000);

  if (expiresAt < currentDateTime) {
    refreshAccessToken();
  }
}

function refreshAccessToken() {
  const refreshToken = Helpers.GetCookie("strava_refresh_token");

  axios
    .post(
      `https://www.strava.com/api/v3/oauth/token?client_id=${process.env.REACT_APP_STRAVA_CLIENT_ID}&client_secret=${process.env.REACT_APP_STRAVA_SECRET}&grant_type=refresh_token&refresh_token=${refreshToken}`
    )
    .then(function (response) {
      document.cookie = `strava_access_token_expires_at=${response.data.expires_at}`;
      document.cookie = `strava_access_token=${response.data.access_token}`;
      document.cookie = `strava_refresh_token=${response.data.refresh_token}`;
    })
    .catch(function (error) {
      console.log("Failed to refresh strava token");
      console.log(error);
    });
}

export default Api;
