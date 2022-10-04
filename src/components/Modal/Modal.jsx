import React, { useState } from "react";
import "./style.css";

function Modal({ todo, saveMod, cancelModal }) {
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
    <div className="modal-container">
      <header className="modal-header">Edit Page</header>
      <hr />
      <input
        className="modal-input"
        name="title"
        type="text"
        onChange={onChange}
        value={title}
      />
      <input
        className="modal-input"
        name="body"
        type="text"
        onChange={onChange}
        value={body}
      />
      <div className="btn-box">
        <button className="modal-btn" onClick={() => saveMod(modifyInputs, id)}>
          완료
        </button>
        <button className="modal-btn" onClick={cancelModal}>
          취소
        </button>
      </div>
    </div>
  );
}

export default Modal;
