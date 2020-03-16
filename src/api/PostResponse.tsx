import axios from "axios";
import { IResponse } from "../Types/IResponse";

export const PostResponse = async (
  config: {},
  url: string
): Promise<IResponse> => {
  return axios
    .post(`https://www.strava.com${url}`, config)
    .then(response => {
      const resp: IResponse = {
        error: undefined,
        data: response.data
      };
      return resp;
    })
    .catch(error => {
      const resp: IResponse = {
        error: String(error),
        data: undefined
      };

      return resp;
    });
};
