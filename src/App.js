import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const number = 1;

  return (
    <div className="App">
      <p>안녕하세요! 리액트 반입니다 :)</p>
      {/* JSX 내에서 코드 주석은 이렇게 씁니다 :) */}
      {/* 삼항 연산자를 사용했어요 */}
      <p>
        {number > 10 ? number + "은 10보다 크다" : number + "은 10보다 작다"}
      </p>
    </div>
  );
}

export default App;
