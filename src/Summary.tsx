import React from "react";
import axios from "axios";

class Summary extends React.Component<{}, { summary: any }> {
  constructor(props: any) {
    super(props);

    this.state = {
      summary: ''
    };
  }

  componentDidMount() {

    const athleteId: string = "";

    const axiosConfig = {
      baseURL: 'https://www.strava.com/api/v3/',
      // headers: {
      //   'Authorization': "Bearer #{}"
      // }
    };

    let result: any = "";

    axios.get("/athletes/" + athleteId + "?access_token=", axiosConfig)
      .then(function (response) {

        result = response.data;

      })
      .catch(function (error) {
        result = error;
      })


      alert(result);
      this.setState({ summary: result });
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
