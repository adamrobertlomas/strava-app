import React from "react";
import Api from "../utils/Api";
import Activity from "./Activity";

class Activities extends React.Component {
  constructor(props) {
    super(props);

    this.state = { activityList: [] };
  }

  async componentDidMount() {
    let response = await Api.GetActivities();
    if (response.success === true) {
      this.setState({
        activityList: response.json,
      });
    }
  }

  render() {
    return (
      <div className="activities">
        <h2>Activities</h2>
        {this.state.activityList.map((activity) => (
          <Activity activity={activity} key={activity.id} />
        ))}
      </div>
    );
  }
}

export default Activities;
