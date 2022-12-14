import React, { useState } from "react";
import List from "../list/List";
import "./style.css";
import Modal from "../modal/Modal";

function Form() {
  // 만들어진 input 정보의 객체들을 넣어주기 위해 배열을 만들어줍니다.
  // 작성한 todo의 모음들
  const [todos, setTodos] = useState([]);
  // inputs는 객체이고 아래와 같이 초기값을 설정해줌
  const [inputs, setInputs] = useState({
    id: 0,
    title: "",
    body: "",
    isDone: false,
  });

  // 모달창 노출 여부 state
  const [openModal, setModalOpen] = useState(false);
  const [modalTodo, setModalTodo] = useState();

  //객체의 구조분해 할당을 한다.
  //inputs 객체의 키 목록을 다음과 같은 변수들로 할당.
  const { title, body, id, isDone } = inputs;

  //input값들에 변화가 일어나면 감지
  const onChange = (e) => {
    // 감지된 input의 value값과 name값을 구조분해할당으로 아래와 같은 이름의 변수로 지정
    const { value, name } = e.target;

    setInputs({
      ...inputs, // 값을 수정할 객체를 넣어주고
      [name]: value, // 바꿀 property key값과 value값을 넣어준다.
    });
  };

  //클릭하면 todos배열에 현재 상태를 todo객체로 넣어준다.
  const handleClick = (e) => {
    e.preventDefault();
    // 현재 inputs의 값들로 todo객체를 생성
    const todo = {
      id: id,
      title,
      body,
      isDone,
    };
    // 만들어진 객체를 배열에 넣어준 후 새배열을 반환
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

    // 스프레드 연산자로 배열을 다시 합쳐준다.
    setTodos(dupArr, ...dupArr2);

    //이렇게 할 필요없이 filter, map 메소드를 이용하면 새로운 배열을 반환
  };

  const handleModal = (todo) => {
    setModalOpen(true);
    setModalTodo(todo);
  };

  const saveMod = (modifyInputs, id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
    modifyInputs.id = Math.floor(Math.random() * 1000);
    setTodos(todos.concat(modifyInputs));
    setModalOpen(false);

    // 왜 먼저 삭제하고 modifyInputs를 추가하면 안되었던것인가?
    // 반대로 난수를 id로 주고, modifyInputs를 배열에 추가한후 삭제는 되는것인가?
    // 불변성 문제라기엔 filter메소드가 새로운 배열을 반환하기 때문에 아닌것 같고...
    //
  };
  const cancelModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div className="add-form">
        <input
          onChange={onChange}
          type="text"
          name="title"
          className="form-input title"
          value={title}
          placeholder="제목"
          required
        />
        <br />
        <input
          onChange={onChange}
          type="text"
          name="body"
          className="form-input body"
          value={body}
          placeholder="내용"
          required
        />
        <button className="form-btn" onClick={handleClick}>
          ADD
        </button>
      </div>

      {openModal && (
        <Modal
          todo={modalTodo}
          saveMod={saveMod}
          cancelModal={cancelModal}
        ></Modal>
      )}

      <List
        todos={todos}
        handleRemove={handleRemove}
        handleDone={handleDone}
        setModalOpen={setModalOpen}
        handleModal={handleModal}
        openModal={openModal}
      />
    </div>
  );
}

export default Form;
