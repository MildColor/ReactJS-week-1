import React from "react";

// 구조 분해 할당 문법을 사용하면 이렇게도 할 수 있어요.
function Child({ name = "기본이름" }) {
  return <div>내 이름은 {name} 입니다. </div>;
}

export default Child;
