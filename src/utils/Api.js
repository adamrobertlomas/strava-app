import axios from "axios";

const Api = {
  get: function () {
    const config = {
      headers: { Authorization: "Bearer bbed97e1577d30e9a3f4d5a02529b5723e16292a" },
    };

    axios
      .get("https://www.strava.com/api/v3/athlete", config)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};

export default Api;
