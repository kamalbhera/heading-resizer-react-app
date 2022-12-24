import logo from './logo.svg';
import './App.css';
import React from "react";
import { useState } from "react";

export default function App() {
  var myStyle = {
    fontSize: ""
  };
  var [textInput, setInput] = useState(myStyle);
  var [ip, setIp] = useState("");

  function convertToH1() {
    if (ip !== "") {
      myStyle = { fontSize: "32px" };
      setInput(myStyle);
    }
  }
  function convertToH2() {
    if (ip !== "") {
      myStyle = { fontSize: "24px" };
      setInput(myStyle);
    }
  }
  function convertToH3() {
    if (ip !== "") {
      myStyle = { fontSize: "18px" };
      setInput(myStyle);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Heading <code>Resizer</code> React.
        </p>
        <input
          id="text-input"
          className='text-input'
          placeholder="Enter text here"
          onChange={(e) => setIp(e.target.value)}
        />
        <br />
        <div className='heading'>
          <button onClick={() => convertToH1()}>h1</button>
          <button onClick={() => convertToH2()}>h2</button>
          <button onClick={() => convertToH3()}>h3</button>
        </div>
        <div className='result' style={textInput}>{ip}</div>
      </header>

    </div>
  );
}
