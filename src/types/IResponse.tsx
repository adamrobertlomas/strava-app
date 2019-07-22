import { IAthlete } from "./IAthlete";

export interface IResponse {
  error: string;
  athlete?: IAthlete;
}
