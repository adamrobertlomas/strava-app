import React from "react";
import "./Activity.scss";
import { withRouter } from "react-router-dom";
import Api from "../utils/Api";
import Format from "../utils/Format";

class Activity extends React.Component {
  constructor(props) {
    super(props);

    this.state = { activity: "" };
  }

  async componentDidMount() {
    let response = await Api.GetActivity(this.props.match.params.id);

    if (response.success === true) {
      this.setState({
        activity: response.json,
      });
    }
  }

  render() {
    return (
      <div className="activity">
        <h2>{this.state.activity.name}</h2>
        <ul>
          <li>Total distance: {Format.FormatAsKm(this.state.activity.distance)}</li>
          <li>Date & time: {Format.FormatDateTime(this.state.activity.start_date)}</li>
          <li>Elapsed time: {Format.FormatElapsedTime(this.state.activity.elapsed_time)}</li>
        </ul>
      </div>
    );
  }
}

export default withRouter(Activity);
