import { getAthlete } from "../Api/GetAthlete";
import { IAthlete } from "../Types/IAthlete";
import AthleteInfo from "./AthleteInfo";
import React from "react";

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
    const response = await getAthlete();

    this.setState({
      error: response.error,
      athlete: response.athlete
    });
  }

  render() {
    return (
      <>
        {this.state.athlete ? (
          <AthleteInfo athlete={this.state.athlete} />
        ) : (
          <div>{this.state.error}</div>
        )}
      </>
    );
  }
}

export default Summary;
