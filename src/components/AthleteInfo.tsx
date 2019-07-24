import React from "react";
import { IAthlete } from "../Types/IAthlete";

interface IAthleteInfo {
  athlete: IAthlete;
}

class AthleteInfo extends React.Component<IAthleteInfo> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="athlete-info">
        <ul>
          <li>
            <span>Username: </span>
            {this.props.athlete.username}
          </li>
          <li>
            <span>ID: </span>
            {this.props.athlete.id}
          </li>
          <li>
            <span>Firstname: </span>
            {this.props.athlete.firstname}
          </li>
          <li>
            <span>Surname: </span>
            {this.props.athlete.lastname}
          </li>
        </ul>
      </div>
    );
  }
}

export default AthleteInfo;
