import React from "react";
import "./style.css";
import Todo from "../todo/Todo";

//todos 객체배열을 상위 컴포넌트(Form)으로부터 받아옴
function List({ todos, handleRemove, handleDone }) {
  return (
    <div className="list-container">
      <h2>Working...!</h2>
      <div className="list-wrapper">
        {todos.map((todo) => {
          if (todo.isDone === false) {
            return (
              <Todo
                todos={todos}
                todo={todo}
                handleRemove={handleRemove}
                handleDone={handleDone}
                key={todo.id}
              ></Todo>
            );
          } else {
            return null;
          }
        })}
      </div>

      <h2>Done...!</h2>
      <div className="list-wrapper">
        {todos.map((todo) => {
          if (todo.isDone === true) {
            return (
              <Todo
                todos={todos}
                todo={todo}
                handleRemove={handleRemove}
                handleDone={handleDone}
                key={todo.id}
              ></Todo>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default List;
