import React, { useState } from "react";
import List from "../list/List";
import "./style.css";

function Form() {
  const [inputs, setInputs] = useState({ title: "", body: "" });

  const { title, body } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleClick = () => {
    const newItem = {
      text: this.state.text,
      id: Date.now(),
    };

    setInputs({
      title: "",
      body: "",
    });
  };

  console.log(title, body);

  return (
    <div className="add-form">
      <label htmlFor="">제목</label>
      <input
        onChange={onChange}
        required
        type="text"
        name="title"
        className="title"
        value={title}
      />
      <label htmlFor="">내용</label>
      <input
        onChange={onChange}
        required
        type="text"
        name="body"
        className="body"
        value={body}
      />
      <button onClick={handleClick}>추가하기</button>
    </div>
  );
}

export default Form;
