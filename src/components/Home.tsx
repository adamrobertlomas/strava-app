import AthleteSummary from "./AthleteSummary";
import Login from "./Login";
import React from "react";
import { PostResponse } from "../Api/PostResponse";

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

  getToken = async () => {
    const url = "/oauth/token";
    const urlParams = new URLSearchParams(window.location.search);
    const paramsCode = urlParams.get("code");
    const config = {
      client_id: clientId,
      client_secret: clientSecret,
      code: paramsCode,
      grant_type: "authorization_code"
    };

    const response = await PostResponse(config, url);

    if (response.data) {
      this.setState({
        accessToken: response.data.access_token
      });
    } else {
      console.log(response.error);
    }
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
