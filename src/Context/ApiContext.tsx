import React from "react";

export const ApiContext = React.createContext({
  accessToken: "",
  athleteId: "",
  setAccessToken: (newAccessToken: string) => {},
  setAthleteId: (newAthleteId: string) => {}
});
