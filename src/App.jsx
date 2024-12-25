import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import StatefulCounter from "./components/StatefulCounter";
import StatelessDisplay from "./components/StatelessDisplay";
import ClassCounter from "./components/ClassCounter";
import "./App.css";

function App() {
  return (
    <div>
      <h1>React Components Example</h1>
      <StatefulCounter />
      <StatelessDisplay message="This is a stateless component!" />
      <ClassCounter />
    </div>
  );
}

export default App;
