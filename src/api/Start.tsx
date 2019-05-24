import axios from "axios";

export function getAthlete() {
  const athleteId: string = "5640776";

  const axiosConfig = {
    baseURL: 'https://www.strava.com/api/v3/',
    headers: {
      'Authorization': "Bearer #{c61530e19d6af578efc45c3882ff74c026158ee2}"
    }
  };

  axios.get("/athletes/" + athleteId, axiosConfig)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    })
}

