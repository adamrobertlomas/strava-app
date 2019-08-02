import { GetAthlete } from "../Api/GetAthlete";
import { IAthlete } from "../Types/IAthlete";
import AthleteInfo from "./AthleteInfo";
import React from "react";

interface IAthleteSummaryProps {
  accessToken: string;
}

interface IAthleteSummaryState {
  error: string;
  athlete?: IAthlete;
}

class AthleteSummary extends React.Component<
  IAthleteSummaryProps,
  IAthleteSummaryState
> {
  constructor(props: any) {
    super(props);

    this.state = {
      error: "",
      athlete: undefined
    };
  }

  async componentDidUpdate(prevProps: IAthleteSummaryProps) {
    if (prevProps.accessToken !== this.props.accessToken) {
      const response = await GetAthlete(this.props.accessToken);

      this.setState({
        error: response.error,
        athlete: response.athlete
      });
    }
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

export default AthleteSummary;
