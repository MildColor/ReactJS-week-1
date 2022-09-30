// import [패키지명] from [경로] 이 형식으로 불러와요.
import React from "react";
const cat_name = "perl";
function App() {
  // JSX에서 js값을 가져오려면 중괄호를 쓴다.
  return <div>hello {cat_name}!</div>;
}

export default App;
