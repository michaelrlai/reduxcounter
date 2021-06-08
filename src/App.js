import React from "react";
import Value from "./components/Value";
import Controls from "./components/Controls";

function App() {
  return (
    <div className="container">
      <h1>Redux Counter</h1>
      <Value />
      <Controls />
    </div>
  );
}

export default App;
