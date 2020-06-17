import axios from "axios";
import Helpers from "./Helpers";

const apiUri = "https://www.strava.com/api/v3";

const Api = {
  GetProfile: async function () {
    return await get(`${apiUri}/athlete`);
  },
  GetActivities: async function () {
    return await get(`${apiUri}/athlete/activities`);
  },
  GetActivity: async function (activityId) {
    return await get(`${apiUri}/activities/${activityId}`);
  },
};

const get = async (uri) => {
  checkToken();
  const accessToken = Helpers.GetCookie("strava_access_token");

  const config = {
    headers: { Authorization: `Bearer ${accessToken}` },
  };

  let result;

  await axios
    .get(uri, config)
    .then(function (response) {
      result = {
        success: true,
        json: response.data,
      };
    })
    .catch(function (error) {
      result = {
        success: false,
        json: error,
      };
    });

  return result;
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
