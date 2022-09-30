import React from "react";

function Square({ users }) {
  const squareStyle = {
    width: "100px",
    height: "100px",
    border: "1px solid green",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={squareStyle}>
      {users.age}살-{users.name}
    </div>
  );
}

const App = () => {
  const style = {
    padding: "100px",
    display: "flex",
    gap: "12px",
  };

  const users = [
    { id: 1, age: 30, name: "송중기" },
    { id: 2, age: 24, name: "송강" },
    { id: 3, age: 21, name: "김유정" },
    { id: 4, age: 29, name: "구교환" },
  ];

  return (
    <div style={style}>
      {users.map((users) => {
        if (users.age >= 25) {
          return <Square key={users.id} users={users} />;
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default App;
