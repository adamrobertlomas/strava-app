import React from "react";

function AthleteInfo(props: any) {
  return (
    <div className="athlete-info">
      <ul>
        <li>
          <span>Username: </span>
          {props.athlete.username}
        </li>
        <li>
          <span>ID: </span>
          {props.athlete.id}
        </li>
        <li>
          <span>Firstname: </span>
          {props.athlete.firstname}
        </li>
        <li>
          <span>Surname: </span>
          {props.athlete.lastname}
        </li>
      </ul>
    </div>
  );
}

export default AthleteInfo;
