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
    const self = this;
    const athleteId: any = process.env.REACT_APP_ATHLETE_ID;
    const accessToken: any = process.env.REACT_APP_ACCESS_TOKEN;

    axios
      .get(
        "https://www.strava.com/api/v3/athletes/" +
          athleteId +
          "?access_token=" +
          accessToken
      )
      .then(function(response) {
        const json: string = JSON.stringify(response);
        self.setState({ summary: json });
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
