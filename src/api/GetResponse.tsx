import axios from "axios";
import { IResponse } from "../Types/IResponse";

export const GetResponse = async (
  accessToken: string,
  url: string
): Promise<IResponse> => {
  const config = {
    headers: {
      Authorization: "Bearer " + accessToken
    }
  };

  return await axios
    .get(`https://www.strava.com/api/v3${url}`, config)
    .then(function(response) {
      const resp: IResponse = {
        error: undefined,
        data: response.data
      };

      return resp;
    })
    .catch(function(error) {
      const resp: IResponse = {
        error: String(error),
        data: undefined
      };

      return resp;
    });
};
