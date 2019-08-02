import { GetAthlete } from "../Api/GetAthlete";
import { IAthlete } from "../Types/IAthlete";
import AthleteInfo from "./AthleteInfo";
import React from "react";

interface IAthleteSummaryProps {
  accessToken: string;
}

interface IAthleteSummaryState {
  error?: string;
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
      const athlete = await GetAthlete(this.props.accessToken);
      let errorMessage = undefined;

      if (athlete === undefined) {
        this.setState({
          error:
            "Sorry, there was an error getting the athlete. Please check the console for more information.",
          athlete: undefined
        });
      }

      this.setState({
        error: errorMessage,
        athlete: athlete
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
