import React from "react";
import "./Activity.scss";
import { Link } from "react-router-dom";
import Format from "../utils/Format";

function Activity(props) {
  return (
    <div className="activity">
      <div className="head">
        <h3>
          <Link to={"/activity/" + props.activity.id}>{props.activity.name}</Link>
        </h3>
        <span className="type">{props.activity.type}</span>
      </div>
      <ul>
        <li>Total distance: {Format.FormatAsKm(props.activity.distance)}</li>
        <li>Date & time: {Format.FormatDateTime(props.activity.start_date)}</li>
        <li>Elapsed time: {Format.FormatElapsedTime(props.activity.elapsed_time)}</li>
      </ul>
    </div>
  );
}

export default Activity;
