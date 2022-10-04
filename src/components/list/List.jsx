import React from "react";
import "./style.css";
import Todo from "../todo/Todo";

//todos 객체배열을 상위 컴포넌트(Form)으로부터 받아옴
function List({
  todos,
  handleRemove,
  handleDone,
  setModalOpen,
  handleModal,
  openModal,
}) {
  return (
    <div className="list-container">
      <h2>Working...!</h2>
      <div className="list-wrapper">
        {todos.map((todo) => {
          if (todo.isDone === false) {
            return (
              <Todo
                todo={todo}
                handleRemove={handleRemove}
                handleDone={handleDone}
                key={todo.id}
                handleModal={handleModal}
                setModalOpen={setModalOpen}
                openModal={openModal}
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
                todo={todo}
                setModalOpen={setModalOpen}
                handleRemove={handleRemove}
                handleDone={handleDone}
                handleModal={handleModal}
                openModal={openModal}
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
