import React from "react";
import { getAthlete } from "../api/getAthlete";
import { IAthlete } from "../types/IAthlete";

interface ISummaryProps {
  error: string;
  athlete?: IAthlete;
}

class Summary extends React.Component<{}, ISummaryProps> {
  constructor(props: any) {
    super(props);

    this.state = {
      error: "",
      athlete: undefined
    };
  }

  async componentDidMount() {
    const response = await getAthlete("5640776");

    this.setState({
      error: response.error,
      athlete: response.athlete
    });
  }

  render() {
    return (
      <>
        {this.state.athlete ? (
          <div>
            <ul>
              <li>{this.state.athlete.username}</li>
              <li>{this.state.athlete.id}</li>
              <li>{this.state.athlete.firstname}</li>
              <li>{this.state.athlete.lastname}</li>
            </ul>
          </div>
        ) : (
          <div>{this.state.error}</div>
        )}
      </>
    );
  }
}

export default Summary;
