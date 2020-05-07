import React from "react";
import Api from "../utils/Api";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = { profileJson: "" };

    this.handleClick = this.handleClick.bind(this);
  }

  // componentDidMount() {}

  handleClick() {
    const response = Api.Get();

    if (response.success === true) {
      this.setState({
        profileJson: response.json,
      });
    }
  }

  render() {
    return (
      <div className="profile">
        <p>{this.state.profileJson}</p>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default Profile;
