import React, { useState } from "react";
import "./style.css";

function Modal({ todo, handleRemove, handleDone, saveMod }) {
  const [modifyInputs, setModifyInputs] = useState({
    title: todo.title,
    body: todo.body,
    id: todo.id,
    isDone: todo.isDone,
  });

  // const [modifyTodo, setModifyTodo] = useState();

  const { title, body, id } = modifyInputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setModifyInputs({ ...modifyInputs, [name]: value });
  };

  return (
    <div className="Modal-container">
      <header>Modify Page</header>
      <input name="title" type="text" onChange={onChange} value={title} />
      <input name="body" type="text" onChange={onChange} value={body} />
      <button onClick={() => saveMod(modifyInputs, id)}>완료</button>
      <button>취소</button>
    </div>
  );
}

export default Modal;
