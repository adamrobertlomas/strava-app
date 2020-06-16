import React from "react";
import "./Activity.scss";
import { Link } from "react-router-dom";

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
        <li>Total distance: {displayAsKm(props.activity.distance)}</li>
        <li>Date & time: {formatDateTime(props.activity.start_date)}</li>
        <li>Elapsed time: {formatElapsedTime(props.activity.elapsed_time)}</li>
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

  const day = ("0" + date.getDate()).slice(-2);
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const hours = ("0" + date.getHours()).slice(-2);
  const minutes = ("0" + date.getMinutes()).slice(-2);

  return `${day}/${month}/${date.getFullYear()} ${hours}:${minutes}`;
}

function formatElapsedTime(elapsedTime) {
  var hours = ("0" + Math.floor(elapsedTime / 3600)).slice(-2);
  var minutes = ("0" + Math.floor((elapsedTime % 3600) / 60)).slice(-2);
  var seconds = ("0" + Math.floor((elapsedTime % 3600) % 60)).slice(-2);

  return `${hours}:${minutes}:${seconds}`;
}

export default Activity;
