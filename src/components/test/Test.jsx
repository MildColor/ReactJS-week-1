import React, { useState } from "react";

const Test = () => {
  const [inputs, setInputs] = useState({
    title: "",
    body: "",
  });

  const { title, body } = inputs;

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setInputs({ ...inputs, [name]: value });
    console.log(inputs);
  };

  return (
    <div>
      <input
        type="text"
        name="title"
        value={title}
        onChange={onChangeHandler}
      />
      <input type="text" name="body" value={body} onChange={onChangeHandler} />
      <button>Press</button>
    </div>
  );
};

export default Test;
