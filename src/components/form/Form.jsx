import React, { useState } from "react";
import List from "../list/List";
import "./style.css";

function Form() {
  // 만들어진 input 정보의 객체들을 넣어주기 위해 배열을 만들어줍니다.
  // 작성한 todo의 모음들
  const [todos, setTodos] = useState([]);
  //배열의 구조 분해, inputs의 초기 title값과 body값은 ""
  const [inputs, setInputs] = useState({
    id: 0,
    title: "",
    body: "",
    isDone: false,
  });

  //inputs 객체의 title, body라는 속성명을 title, body라는 변수명으로 받을 것이다.
  const { title, body, id, isDone } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;

    //이부분 이해가 잘안감. 구조 분해라고 아는데...
    setInputs({
      //inputs 객체의 요소들을 spread문법으로 하나씩 변환
      ...inputs,
      [name]: value,
    });
  };

  //클릭하면 todos배열에 현재 상태를 todo객체로 넣어준다.
  const handleClick = (e) => {
    e.preventDefault();
    // 현재 inputs, input값들을 todo객체로 생성
    const todo = {
      id: id,
      title,
      body,
      isDone,
    };
    // 만들어진 객체를 배열에 넣어준다.
    setTodos(todos.concat(todo));

    // 나머지 값들은 초기화 시키고 id값만 1증가시킨다.
    setInputs({
      title: "",
      body: "",
      isDone,
      id: inputs.id + 1,
    });
  };

  const handleRemove = (id) => {
    // filter를 이용해 삭제
    // filter를 이용해서 handleRemove로 받아온 id값과 일치한지 않은 todo값들만 반환.
    // 즉 일치한 id를 가진 todo값은 반환되지 않은거
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const handleDone = (id) => {
    // 데이터의 불변성을 지켜주기 위해 스프레드 문법으로 얕은 복사
    // 값이 바뀌어도 같은 메모리 주소만 참조하기 때문에 복사를 통해서 메모리주소를 바꿔줘야한다.
    let dupArr = [...todos];
    let dupArr2 = [...todos];

    // false로 바꿀 값을 뺀 나머지 데이터들을 dupArr에 저장.
    dupArr.filter((dupArrTodo) => dupArrTodo.id !== id);

    // 바꿀 값을 filter와 id를 이용해 구한 후, map으로 값을 원래 값을 뒤집어준다.
    dupArr2
      .filter((dupArr2Todo) => dupArr2Todo.id === id)
      .map((x) => (x.isDone = !x.isDone));

    // 스프레드 연산자로 다시 합쳐준다.
    setTodos(dupArr, ...dupArr2);
  };

  return (
    <div>
      <div className="add-form">
        <input
          onChange={onChange}
          type="text"
          name="title"
          className="title"
          value={title}
          placeholder="제목"
          required
        />
        <br />
        <input
          onChange={onChange}
          type="text"
          name="body"
          className="body"
          value={body}
          placeholder="내용"
          required
        />
        <button onClick={handleClick}>ADD</button>
      </div>

      <List todos={todos} handleRemove={handleRemove} handleDone={handleDone} />
    </div>
  );
}

export default Form;
