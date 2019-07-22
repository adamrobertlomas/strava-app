import React from "react";
import Summary from "./components/Summary";

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
