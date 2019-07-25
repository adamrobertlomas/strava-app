import React from "react";
import AthleteSummary from "./Components/AthleteSummary";
import Login from "./Components/Login";

const App: React.FC = () => {
  return (
    <>
      <div>Strava Summary</div>
      <nav />
      <main>
        <Login />
        <AthleteSummary />
      </main>
      <footer />
    </>
  );
};

export default App;
