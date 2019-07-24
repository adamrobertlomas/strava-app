import axios from "axios";
import { IAthlete } from "../Types/IAthlete";
import { IResponse } from "../Types/IResponse";

const athleteId: any = process.env.REACT_APP_ATHLETE_ID;
const accessToken: any = process.env.REACT_APP_ACCESS_TOKEN;

export const getAthlete = async (): Promise<IResponse> => {
  let config = {
    headers: {
      Authorization: "Bearer " + accessToken
    }
  };

  return await axios
    .get(`https://www.strava.com/api/v3/athletes/${athleteId}/stats`, config)
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
        error: String(error),
        athlete: undefined
      };

      return resp;
    });
};
