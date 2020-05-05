import React from "react";
import Api from "../utils/Api";

function Profile(props) {
  function handleClick(e) {
    console.log("handle click");
    Api.get();
  }

  return (
    <div className="profile">
      <p>profile</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default Profile;
