import React, { useState } from "react";
import "./style.css";

function Modal({ todo, handleRemove, handleDone, saveMod }) {
  const [modifyInputs, setModifyInputs] = useState({
    modTitle: todo.title,
    modBody: todo.body,
    id: todo.id,
    isDone: todo.isDone,
  });

  // const [modifyTodo, setModifyTodo] = useState();

  const { modTitle, modBody, modId, modIsDone } = modifyInputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setModifyInputs({ ...modifyInputs, [name]: value });
  };

  return (
    <div className="Modal-container">
      <header>Modify Page</header>
      <input name="modTitle" type="text" onChange={onChange} value={modTitle} />
      <input name="modBody" type="text" onChange={onChange} value={modBody} />
      <button onClick={() => saveMod(modifyInputs)}>완료</button>
      <button>취소</button>
    </div>
  );
}

export default Modal;
