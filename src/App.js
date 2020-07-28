import React from "react";

const element1 = (
  <h1 className="title">
    <a href="https://google.com">google</a>
  </h1>
);

function App() {
  const style = { color: "blue" };

  return (
    <p style={style}>
      {element1}
      <a href="https://yandex.by">yandex</a>
    </p>
  );
}

export default App;
