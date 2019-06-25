import React from "react";
import axios from "axios";

class Summary extends React.Component<{}, { summary: any }> {
  constructor(props: any) {
    super(props);

    this.state = {
      summary: ""
    };
  }

  componentDidMount() {
    const athleteId: string = "";
    const accessToken: string = "";

    axios
      .get(
        "https://www.strava.com/api/v3/athletes/" +
          athleteId +
          "?access_token=" +
          accessToken
      )
      .then(function(response) {
        console.log(response);
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <h1>Athlete Summary</h1>
        <div>{this.state.summary}</div>
      </>
    );
  }
}

export default Summary;
