import React from "react";
import "./style.css";

function Todo({ todo, handleRemove, handleDone, handleModal }) {
  //받은 todo의 false값을 바꿔주기 위해
  let confirmText = "";
  if (todo.isDone === false) {
    confirmText = "완료";
  } else if (todo.isDone === true) {
    confirmText = "취소";
  }

  return (
    <div className="todo-container">
      <h2 className="h2-container">{todo.title}</h2>
      <div>{todo.body}</div>
      <div className="btn-box">
        <button onClick={() => handleRemove(todo.id)}>삭제하기</button>
        <button onClick={() => handleDone(todo.id)}>{confirmText}</button>
        <button onClick={() => handleModal(todo)}>수정하기</button>
      </div>
    </div>
  );
}

export default Todo;
