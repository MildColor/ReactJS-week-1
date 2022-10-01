import React, { useState } from "react";
import "./style.css";

function Todo({ todo, handleRemove, handleDone }) {
  //받은 todo의 false값을 바꿔주기 위해
  let text = "";
  if (todo.isDone === false) {
    text = "완료";
  } else if (todo.isDone === true) {
    text = "취소";
  }
  return (
    <div className="todo-container">
      <h2 className="h2-container">{todo.title}</h2>
      <div>{todo.body}</div>
      <div className="btn-box">
        <button onClick={() => handleRemove(todo.id)}>삭제하기</button>
        <button onClick={() => handleDone(todo.id)}>{text}</button>
      </div>
    </div>
  );
}

export default Todo;
