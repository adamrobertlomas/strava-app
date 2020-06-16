import React from "react";
import "./Activity.scss";
import { withRouter } from "react-router-dom";
import Api from "../utils/Api";

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
        <p>{this.state.id}</p>
      </div>
    );
  }
}

export default withRouter(Activity);
