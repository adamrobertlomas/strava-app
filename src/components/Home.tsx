import AthleteSummary from "./AthleteSummary";
import Login from "./Login";
import React from "react";
import axios from "axios";

const clientId: any = process.env.REACT_APP_CLIENT_ID;
const clientSecret: any = process.env.REACT_APP_CLIENT_SECRET;

interface IHomeState {
  accessToken: string;
}

class Home extends React.Component<{}, IHomeState> {
  constructor(props: any) {
    super(props);

    this.state = {
      accessToken: "default"
    };
  }

  componentDidMount() {
    this.getToken();
  }

  getToken = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const paramsCode = urlParams.get("code");

    axios
      .post("https://www.strava.com/oauth/token", {
        client_id: clientId,
        client_secret: clientSecret,
        code: paramsCode,
        grant_type: "authorization_code"
      })
      .then(response => {
        console.log(`Axios: ${response.data.access_token}`);
        return response.data.access_token;
      })
      .then(token => {
        this.setState({
          accessToken: token
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <>
        <Login />
        <AthleteSummary accessToken={this.state.accessToken} />
      </>
    );
  }
}

export default Home;
