// import [패키지명] from [경로] 이 형식으로 불러와요.
import React from "react";
// js 파일 뿐 아니라 이미지도 가능가능!
import logo from "./logo.svg";
// css? 가능!
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
