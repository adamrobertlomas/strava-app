import React from "react";
import Summary from "./Components/Summary";

const App: React.FC = () => {
  return (
    <>
      <div>Strava Summary</div>
      <nav />
      <main>
        <Summary />
      </main>
      <footer />
    </>
  );
};

export default App;
