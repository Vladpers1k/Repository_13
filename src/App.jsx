import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Button from "./components/Button";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = () => {
    alert(`Введено текст: ${inputValue}`);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>React</h1>
      <Button text="Натисніть мене" onClick={handleButtonClick} />
    </div>
  );
}

export default App;
