import axios from "axios";
import { IAthlete } from "../types/IAthlete";
import { IResponse } from "../types/IResponse";

// const athleteId: any = process.env.REACT_APP_ATHLETE_ID;
const accessToken: any = process.env.REACT_APP_ACCESS_TOKEN;

export const getAthlete = async (athleteId: string): Promise<IResponse> => {
  return await axios
    .get(
      "https://www.strava.com/api/v3/athletes/" +
        athleteId +
        "?access_token=" +
        accessToken
    )
    .then(function(response) {
      const athlete: IAthlete = {
        id: response.data.id,
        username: response.data.username,
        firstname: response.data.firstname,
        lastname: response.data.lastname
      };

      const resp: IResponse = {
        error: "",
        athlete: athlete
      };

      return resp;
    })
    .catch(function(error) {
      const resp: IResponse = {
        error: error, // "Sorry, an error has occured.",
        athlete: undefined
      };

      return resp;
    });
};
