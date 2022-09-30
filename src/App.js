import React, { useState } from "react";

const App = () => {
  // 초기값을 0으로 둠
  const [value, setValue] = useState(0);

  // 함수가 실행되면 초기값에 + 1
  const plusHandler = (e) => {
    setValue(value + 1);
  };
  // 함수가 실행되면 초깃값에 -1
  const minusHandler = (e) => {
    setValue(value - 1);
  };

  console.log(value);

  return (
    <div>
      <div>{value}</div>
      {/* click시 plusHandler함수 실행 */}
      <button onClick={plusHandler}>+1</button>
      {/* click시 minusHandler함수 실행 */}
      <button onClick={minusHandler}>-1</button>
    </div>
  );
};

export default App;
