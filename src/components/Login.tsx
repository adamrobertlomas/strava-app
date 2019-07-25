import React from "react";

interface ISummaryProps {
  error: string;
}

class Login extends React.Component<{}, ISummaryProps> {
  constructor(props: any) {
    super(props);

    this.state = {
      error: ""
    };
  }

  render() {
    return (
      <>
        <p>Login in to Strava</p>
        <button>Login</button>
      </>
    );
  }
}

export default Login;
