import React from "react";
import Api from "../utils/Api";
import "./Profile.css";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = { profile: "" };
  }

  async componentDidMount() {
    let response = await Api.GetProfile();

    if (response.success === true) {
      this.setState({
        profile: response.json,
      });
    }
  }

  render() {
    return (
      <div className="profile">
        <img src={this.state.profile.profile} alt={this.state.profile.firstname} />
        <p>
          {this.state.profile.firstname} {this.state.profile.lastname}
          <br />
          {this.state.profile.city}
          <br />
          {this.state.profile.state}
          <br />
          {this.state.profile.country}
        </p>
      </div>
    );
  }
}

export default Profile;
