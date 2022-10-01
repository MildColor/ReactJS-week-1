import React from "react";
import "./style.css";

function Todo({ todo, handleRemove, handleDone, btnText }) {
  //받은 todo의 false값을 바꿔주기 위해

  // const [finish, setFinish] = useState(isDone);

  return (
    <div className="todo-container">
      <h2>{todo.title}</h2>
      <div>{todo.body}</div>
      <button onClick={() => handleRemove(todo.id)}>삭제하기</button>
      <button onClick={() => handleDone(todo.id)}>{btnText}</button>
    </div>
  );
}

export default Todo;
