// src/App.js

import React from "react";

function App() {
  return <GrandFather />;
}

function GrandFather() {
  return <Mother />;
}

function Mother() {
  const name = "홍부인";
  return <Child motherName={name} />; // 💡"props로 name을 전달했다."
}

function Child(props) {
  console.log(props); // 이게 바로 props다.
  return <div>연결 성공</div>;
}

export default App;
