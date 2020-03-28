import React, { useState, useEffect } from "react";
import { useBoolean } from "./utils/hooks";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const greeding = "Hellö guys, It is Harun Reşit Heybet";
  const [text, setText] = useState(undefined);
  const isHidden = useBoolean(true);
  useEffect(() => {
    setText(greeding);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {!isHidden.value && <p>{text}</p>}
        <p
          className="App-link"
          onClick={() => {
            isHidden.toggle();
          }}
          style={{ cursor: "pointer" }}
        >
          Click Me
        </p>
      </header>
    </div>
  );
}

export default App;
