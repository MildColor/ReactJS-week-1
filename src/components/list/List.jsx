import React from "react";
import "./style.css";
import Todo from "../todo/Todo";

function List() {
  return (
    <div className="list-container">
      <h2>Working</h2>
      <div className="list-wrapper">
        <Todo></Todo>
      </div>
      <h2>Done!</h2>
      <div className="list-wrapper">
        <Todo></Todo>
      </div>
    </div>
  );
}

export default List;
