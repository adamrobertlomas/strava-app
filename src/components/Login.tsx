import React from "react";

class Login extends React.Component {
  render() {
    const clientId = "35636";
    const redirectUrl = "http://localhost:3000/";
    const authorizeUrl = `http://www.strava.com/oauth/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUrl}&approval_prompt=force&scope=read`;

    const handleSuccess = async (accessToken: any) => {
      console.log("Successfully authorized");
      console.log("accessToken: " + accessToken);
    };

    return (
      <>
        <a href={authorizeUrl}>Connect</a>
      </>
    );
  }
}

export default Login;
