import { IAthlete } from "../Types/IAthlete";
import { GetResponse } from "./GetResponse";

export const GetAthlete = async (accessToken: string): Promise<IAthlete> => {
  const url = "/athlete";
  const response = await GetResponse(accessToken, url);
  let athlete: IAthlete = {
    id: -1,
    username: "",
    firstname: "",
    lastname: ""
  };

  if (response.data) {
    athlete = {
      id: response.data.id,
      username: response.data.username,
      firstname: response.data.firstname,
      lastname: response.data.lastname
    };
  } else {
    console.log(response.error);
  }

  return athlete;
};
