import React from "react";
import "./Activity.css";

function Activity(props) {
  return (
    <div className="activity">
      <div className="head">
        <h3>{props.activity.name}</h3>
        <span className="type">{props.activity.type}</span>
      </div>
      <ul>
        <li>Total distance: {displayAsKm(props.activity.distance)}</li>
        <li>Date & time: {formatDateTime(props.activity.start_date)}</li>
        <li>Elapsed time: {props.activity.elapsed_time}</li>
      </ul>
    </div>
  );
}

function displayAsKm(metres) {
  const km = metres / 1000;
  return km.toFixed(1) + " km";
}

function formatDateTime(datetime) {
  const date = new Date(datetime);
  return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
}

export default Activity;
